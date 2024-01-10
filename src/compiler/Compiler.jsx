import React, { useState } from 'react';

const Compiler = () => {
    const [output, setOutput] = useState('');
    const source_code = '#include <iostream>\nusing namespace std;\nint main() {\ncout << "Hello World!";\nreturn 0;\n}'; // C++ code
    const language_id = 54; // language ID for C++ (GCC 9.3.0) in Judge0
  
    fetch('https://judge0-ce.p.rapidapi.com/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'x-rapidapi-key': '35d8b6fb15msh75f3f2a9fb44c0cp16a9b7jsn95862c3dacbd' // replace with your Judge0 API key
      },
      body: JSON.stringify({
        source_code: source_code,
        language_id: language_id
      })
    })
    .then(response => response.json())
    .then(data => {
      // log the response data to the console
      console.log(data);
      setOutput(data.stdout);
    })
    .catch(err => console.error(err));
  console.log(output);

  return (
    <div>
      
      <p>{output}</p>
    </div>
  );
}

  

  export default Compiler;