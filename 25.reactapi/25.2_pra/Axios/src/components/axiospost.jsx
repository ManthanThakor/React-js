// Axiospost.jsx

import axios from 'axios';
import React, { useState } from 'react';

const Axiospost = () => {
  const data  = { fname: "", lastName: "" };
  const [inputData, setInputData] = useState(data);

  const handleData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputData);
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="axios-post">
      <label>First Name:</label>
      <input type="text" name="fname" value={inputData.fname} onChange={handleData} />
      <label>Last Name:</label>
      <input type="text" name="lastName" value={inputData.lastName} onChange={handleData} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Axiospost;
