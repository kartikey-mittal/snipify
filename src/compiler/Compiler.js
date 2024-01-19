import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./Compiler.css";


export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
    };
  }
  input = (event) => {
 
    event.preventDefault();
  
    this.setState({ input: event.target.value });
    localStorage.setItem('input', event.target.value)
 
  };
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  language = (event) => {
   
    event.preventDefault();
   
    this.setState({ language_id: event.target.value });
    localStorage.setItem('language_Id',event.target.value)
   
  };

  submit = async (e) => {
    e.preventDefault();
  
    const outputText = document.getElementById("output");
    outputText.innerHTML = "Creating Submission ...\n";
  
    const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions", {
      method: "POST",
      headers: {
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        "x-rapidapi-key": "35d8b6fb15msh75f3f2a9fb44c0cp16a9b7jsn95862c3dacbd",
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        source_code: this.state.input,
        stdin: this.state.user_input,
        language_id: this.state.language_id,
      }),
    });
  
    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();
  
    const maxAttempts = 10; // Set a maximum number of attempts
    let attempts = 0;
  
    const checkSubmissionStatus = async () => {
      attempts++;
    
      if (attempts > maxAttempts) {
        outputText.innerHTML = "Max attempts reached. Unable to get results.";
        return;
      }
    
      const getSolution = await fetch(
        `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "35d8b6fb15msh75f3f2a9fb44c0cp16a9b7jsn95862c3dacbd",
            "content-type": "application/json",
          },
        }
      );
    
      const responseText = await getSolution.text();

      if (!responseText.trim()) {
        // If response is empty or contains only whitespace, handle it gracefully
        outputText.innerHTML = "Checking Submission Status\nstatus: No response from the server";
        setTimeout(checkSubmissionStatus, 1000); // Adjust the delay as needed
        return;
      }

    
      let jsonGetSolution;
      try {
        jsonGetSolution = JSON.parse(responseText);
      } catch (error) {
        // Handle JSON parsing error
        outputText.innerHTML = `Error parsing JSON response: ${error.message}`;
        return;
      }
    
      if (jsonGetSolution.status.description === "Accepted" || jsonGetSolution.stderr || jsonGetSolution.compile_output) {
        // Process the final result here
        if (jsonGetSolution.stdout) {
          const output = atob(jsonGetSolution.stdout);
          outputText.innerHTML = `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        } else if (jsonGetSolution.stderr) {
          const error = atob(jsonGetSolution.stderr);
          outputText.innerHTML = `\n Error :${error}`;
        } else {
          const compilation_error = atob(jsonGetSolution.compile_output);
          outputText.innerHTML = `\n Error :${compilation_error}`;
        }
      } else {
        // Continue checking after a delay
        outputText.innerHTML = `Checking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
        setTimeout(checkSubmissionStatus, 1000); // Adjust the delay as needed
      }
    };
    // Start checking submission status
    checkSubmissionStatus();
  };
  
  render() {
 
    return (
      <>
        <div className="row container-fluid">
          <div className="col-6 ml-4 " style={{marginTop:10}}>
            <label htmlFor="solution ">
              <span className="badge badge-info heading mt-2 "style={{borderRadius:10}}>
              <FontAwesomeIcon icon={faCode} className="fa fa-code fa-fw fa-lg" /> Code Here
              </span>
            </label>
            <textarea
              required
              name="solution"
              id="source"
              onChange={this.input}
              className=" source"
              value={this.state.input}
              style={{marginTop:"1vh"}}
            ></textarea>

            <button
              type="submit"
              className="btn btn-danger ml-2 mr-2 "
              onClick={this.submit}
              
            >
               <FontAwesomeIcon icon={faCog} className="my-cog-icon" /> Run
            </button>

            <label htmlFor="tags" className="mr-1" style={{display:"flex"}}>
              <b className="heading">Language:</b>
              <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-control form-inline mb-2 language"
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
            </label>
            
          </div>
          <div className="col-5">
            <div style={{marginTop:10}}>
              <span className="badge badge-info heading my-2 out"style={{borderRadius:10}}>
              <FontAwesomeIcon icon={faExclamation} className="fa-fw fa-md" /> Output
              </span>
              <textarea id="output"></textarea>
            </div>
          </div>
        </div>

        <div className="mt-2 ml-5" >
          <span className="badge badge-primary heading my-2" style={{borderRadius:10}}>
          <FontAwesomeIcon icon={faUser} className="fa-fw fa-md" /> User Input
          </span>
          <br />
          <textarea id="input" onChange={this.userInput} style={{width:"40%",height:"3vh",marginTop:"1vh"}}></textarea>
        </div>
      </>
    );
  }
}
