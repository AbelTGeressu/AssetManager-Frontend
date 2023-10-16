import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Assignments from './pages/Assignments';
import Assets from './pages/Assets';
import Contracts from './pages/Contracts';
import Employees from './pages/Employees';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Navigation from "./components/Navigation";



import './App.css';

class App extends Component {
  render() {
    return (
    
        <div className="App">
            
             

             {/* <Sidebar /> */}
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/assignments" element={<Assignments />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> 

        

        </Routes>

      
          
         {/*  <AssetDataTable /> 
              <ContractDataTable />
              <EmployeeDataTable />
              <Hello />  */}

    
        </div>
      
    );
  }
}

export default App;
/* 

<Router>
<Sidebar />
<Switch>
  <Route path='/overview' exact component={Overview} />
  <Route path='/reports' exact component={Reports} />
  <Route path='/reports/reports1' exact component={ReportsOne} />
  <Route path='/reports/reports2' exact component={ReportsTwo} />
  <Route path='/reports/reports3' exact component={ReportsThree} />
  <Route path='/team' exact component={Team} />
</Switch>
</Router>
);
} */