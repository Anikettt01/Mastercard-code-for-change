import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";
import {Link}  from 'react-router-dom'
const AdminDashboard = () => {
  const data = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 59 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 81 },
    { month: "May", value: 56 },
    { month: "Jun", value: 55 },
    { month: "July", value: 70 },
    { month: "Aug", value: 59 },
    { month: "Sep", value: 100 },
    { month: "Oct", value: 69 },
    { month: "Nov", value: 34 },
    { month: "Dec", value: 23 },
  ];
  const data1 = [
    { month: "Jan", value: 90 },
    { month: "Feb", value: 49 },
    { month: "Mar", value: 100 },
    { month: "Apr", value: 60 },
    { month: "May", value: 49 },
    { month: "Jun", value: 55 },
  ];
  const data2 = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 49 },
    { month: "Mar", value: 67 },
    { month: "Apr", value: 73 },
    { month: "May", value: 85 },
    { month: "Jun", value: 90 },
  ];

  return (
    <div className="flex h-200vh">
      <aside className="flex flex-col w-64 p-4 space-y-4 bg-gray-200 position-fixed">
        <div className="flex items-center space-x-2">
          
          <span className="text-xl  font-bold"> Y4D Foundation</span>
        </div>
        <nav className="flex flex-col space-y-2 mt-10">
          <a  className="flex mt-5 items-center p-2 space-x-2 text-white bg-black rounded-lg">
            <span>Dashboard</span>
          </a>
          <a  className="flex mt-5 items-center p-2 space-x-2 text-white bg-black rounded-lg">
            <Link to="/tables">
            <span>Verify</span>
            </Link>
          </a>
          {/* <a href="#" className="flex items-center p-2 space-x-2 rounded hover:bg-gray-300">
            <span>Courses</span>
          </a>
          <a href="#" className="flex items-center p-2 space-x-2 rounded hover:bg-gray-300">
            <span>Community</span>
          </a>
          <a href="#" className="flex items-center p-2 space-x-2 rounded hover:bg-gray-300">
            <span>Calendar</span>
          </a> */}
        </nav>
      </aside>
      <main className="flex-1 p-6 space-y-6 bg-gray-100">
        <header className="flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="hhttps://www.y4d.ngo/assets/images/y4d/logo.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span className="absolute bottom-0 right-0 block w-2 h-2 bg-green-500 rounded-full" />
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Total Beneficiaries benefitted - 5000" />
          <Card title="Total Donors - 1300 " />
          <Card title=" Active Beneficiaries - 1500" />
          <Card title=" Total Amount Received - $100000 " />
        </section>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <ChartCard title="Number of New Beneficiaries Added per Month " data={data} />
          <ChartCard title="Number of New Donors Added per Month" data={data} />
          <ChartCard title="Total Donors count per month" data={data2} />
     
          <Card>
            <h3 className="text-lg font-bold mb-2">Today</h3>
            <p>23, August 2024</p>
            <button className="mt-4 px-4 py-2 bg-gray-300 rounded-lg">View all</button>
          </Card>
        </section>
      </main>
    </div>
  );
};

const Card = ({ title, children }) => (
  <div className="p-4 bg-white shadow-md rounded-lg">
    {title && <h3 className="text-sm font-medium">{title}</h3>}
    {children}
  </div>
);

const ChartCard = ({ title, data }) => (
  <Card>
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  </Card>
);
export default AdminDashboard;