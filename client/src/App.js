import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './pages/LandingPage';
import UserForm from './components/BeneficiaryForm';
import  Cards from './components/Cards'
import ProjectPage from './pages/ProjectPage.jsx';
import Table from './components/Table.jsx';
import VerificationStatus from './components/VerificationStatus.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Verified from './pages/Verified.jsx';
function App() {
 
    return (
      <Router>
     {/* <Header/> */}
        <Routes>
        { <Route path="/login" element={<Login />} /> }
        { <Route path="/signup" element={<Signup />} /> }
        { <Route path="/" element={<Cards />} /> }
        { <Route path="/user" element={<  UserForm/>} /> }
        { <Route path="/projectpage" element={<  ProjectPage/>} /> }
        { <Route path="/tables" element={<Table />} /> }
        { <Route path="/verification" element={<  VerificationStatus/>} /> }
        { <Route path="/admin" element={<AdminDashboard />} /> }
        { <Route path="/verified" element={<Verified />} /> }


          {/* { <Route path="/dashboard" element={< Dashboard />} /> }
        <Route path="/charts" element={< Charts />} />
        <Route path="/test" element={< Test />} />
        <Route path="/volunteer" element={< DashboardV />} /> */}
          {/* <Route path="/" element={< Landingpage />} />
          <Route path="/login" element={< Login />} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/home" element={< Home/>} />
          <Route path="/crowdfund" element={< Crowdfunding/>} />
          <Route path="/pay" element={< Stripe />} />
          <Route path="/allcampaign" element={< CampaignList />} />
          <Route path="allcampaign/campaign/:id" element={<CampaignDetail/>}/> */}
        </Routes>
      
      </Router>
    );

}

export default App;
