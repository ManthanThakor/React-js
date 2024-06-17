// Axiospost.jsx

import axios from 'axios';
import React, { useState } from 'react';

const Axiospost = () => {
  const initialData = { fname: "", lastName: "" };
  const [inputData, setInputData] = useState(initialData);
  const [apiResponse, setApiResponse] = useState(null);

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
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setApiResponse({ error: "There was an error!" });
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(inputData);
    axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then((response) => {
        console.log(response);
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setApiResponse({ error: "There was an error!" });
      });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    console.log(inputData);
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
        setApiResponse({ message: "User deleted successfully" });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setApiResponse({ error: "There was an error!" });
      });
  };

  return (
    <div className="axios-post">
      <label>First Name:</label>
      <input type="text" name="fname" value={inputData.fname} onChange={handleData} />
      <label>Last Name:</label>
      <input type="text" name="lastName" value={inputData.lastName} onChange={handleData} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>

      {apiResponse && (
        <div className="api-response">
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Axiospost;
