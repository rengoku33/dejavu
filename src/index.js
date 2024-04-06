import React from 'react';
import ReactDOM from 'react-dom/client';
import './indexs.scss';
import App from './App';
import { FirestoreProvider } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirestoreProvider>
      <App />
    </FirestoreProvider>
  </React.StrictMode>
);


