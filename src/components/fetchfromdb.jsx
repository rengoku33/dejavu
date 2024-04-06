import React from "react";
import { useFirestore } from "../context/firebase";

const FetchfromDB = () => {
    const { data } = useFirestore();

    return (
      <div>
        <h2>Firestore Data</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {/* Render your data here */}
              {/* For example: */}
              <div>Name: {item.title}</div>

            </li>
          ))}
        </ul>
      </div>
    );
}

export default FetchfromDB;