import React from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

let user = [];



axios.get('http://localhost:8000/beneficiary')
  .then(response => {
    user = response.data; // Storing the JSON data into the array
    console.log(user);    // Logging the array to see the stored data
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

const Table = () => {
    const navigate = useNavigate();
  const handleVerify = (id) => {
    alert(`Verified item with id: ${id}`);
  };
  const handleClick = () => {
    navigate("/verified")
  }
  return (
    <div className="p-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="p-3 text-left text-gray-600">Name</th>
            <th className="p-3 text-left text-gray-600">Email</th>
            <th className="p-3 text-left text-gray-600">Adhaar</th>
            <th className="p-3 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">{item.adhaar}</td>
              <td className="p-3">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  onClick={handleClick}
                >
                  Verify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
