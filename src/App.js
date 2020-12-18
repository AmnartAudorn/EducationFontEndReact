import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ListTeacherComponent from './components/ListTeacherComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';
import CreateSubjectComponent from './components/CreateSujectComponent';
import ListSubjecComponent from './components/ListSubjectComponent';
import CreateEnrolmentComponent from './components/CreateEnrolment ';
import ListEnrolmentComponent from './components/ListEnrolmentComponent';
import GetEnrolmentByStudentIdComponent from './components/GetEnrolmentByStudentIdComponent';


function App() {
  return (
    
    <div>
      <Router>
      
        <Navbar />
         <div className="container">
            <center>
              <h1 style={{marginTop : "10px"}}>WellCome To Education</h1>
            </center>
            <Switch>
              <Route path = "/student" component = {ListStudentComponent} ></Route>
              <Route path = "/add-student" component = {CreateStudentComponent} ></Route>
              <Route path = "/teacher" component = {ListTeacherComponent} ></Route>
              <Route path = "/add-teacher" component = {CreateTeacherComponent} ></Route>
              <Route path = "/subject" component = {ListSubjecComponent} ></Route>
              <Route path = "/add-subject" component = {CreateSubjectComponent} ></Route>
              <Route path = "/enrolment" component = {ListEnrolmentComponent} ></Route>
              <Route path = "/add-enrolment" component = {CreateEnrolmentComponent} ></Route>
              <Route path = "/enrolmentStudent" component = {GetEnrolmentByStudentIdComponent} ></Route>
              
            </Switch>
            
          </div>
        
     
    </Router>
    </div>
  );
}

export default App;
