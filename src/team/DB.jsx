import React from "react";
import Navbar from "../Navbar";

import { collection, getDocs, deleteDoc, } from 'firebase/firestore';
import { db } from '../Firebase';

const DB = () => {

  const handleDeleteSkilledDocuments = async () => {
    try {
      // Get all documents from the "Skilled" collection
      const skilledCollectionRef = collection(db, 'Skilled');
      const skilledDocs = await getDocs(skilledCollectionRef);

      // Delete each document in the collection
      skilledDocs.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log('Skilled documents deleted successfully');
    } catch (error) {
      console.error('Error deleting skilled documents:', error);
    }
  };

  const handleDeleteRequestsDocuments = async () => {
    try {
      // Get all documents from the "Requests" collection
      const requestsCollectionRef = collection(db, 'Requests');
      const requestsDocs = await getDocs(requestsCollectionRef);

      // Delete each document in the collection
      requestsDocs.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log('Requests documents deleted successfully');
      console.log('working');
    } catch (error) {
      console.error('Error deleting requests documents:', error);
    }
  };

  return (
    <div>
      <Navbar />
      

      <div>
        {/* Button to delete documents from "Skilled" collection */}
        <button onClick={handleDeleteSkilledDocuments}>
          Delete Skilled Documents
        </button>

        {/* Button to delete documents from "Requests" collection */}
        <button onClick={handleDeleteRequestsDocuments}>
          Delete Requests Documents
        </button>
      </div>
    </div>
  );
};

export default DB;
