import React, { createContext, useEffect, useState, useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Initialize Firebase with your configuration
firebase.initializeApp({
    apiKey: "AIzaSyAfBz10pvDCuK8JuEHqcQ5mPV93F2RVWHc",    // usually abstract api key but firabase needs this key (not a secret key)
    authDomain: "thrift-shop---db.firebaseapp.com",
    projectId: "thrift-shop---db",
    storageBucket: "thrift-shop---db.appspot.com",
    messagingSenderId: "586625985500",
    appId: "1:586625985500:web:102e61fb916a3cdcea7d19"
});

// Create a Firestore instance
const firestore = firebase.firestore();

// Create a context for Firestore
const FirestoreContext = createContext();

// Create a Firestore provider
export const FirestoreProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore.collection('categories').get();
        const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

//   // Function to add data to Firestore
//   const addData = async newData => {
//     try {
//       await firestore.collection('yourCollection').add(newData);
//       setData(prevData => [...prevData, newData]);
//     } catch (error) {
//       console.error('Error adding data: ', error);
//     }
//   };

  // Value to be provided by the context
  const value = {
    data,
  };

  return <FirestoreContext.Provider value={value}>{children}</FirestoreContext.Provider>;
};

// Custom hook to consume Firestore context
export const useFirestore = () => {
  return useContext(FirestoreContext);
};
