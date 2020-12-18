import React, { Component } from 'react'
import StudentService from '../service/StudentService';

export default class CreateStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            stu_id : '',
            stu_first_name : '',
            stu_last_name : '',
            class_room : ''
        }
        this.changestuIdHandler = this.changestuIdHandler.bind(this);
        this.changestuFirstNameHandler = this.changestuFirstNameHandler.bind(this);
        this.changestuLastNameHandler = this.changestuLastNameHandler.bind(this);
        this.changeclassRoomHandler = this.changeclassRoomHandler.bind(this);
    }  
   
    cancel(){
        this.props.history.push('/student');
    }
    saveStudent = (e) => {
        e.preventDefault();
        let student = {stu_id:this.state.stu_id,stu_first_name:this.state.stu_first_name,stu_last_name:this.state.stu_last_name,class_room:this.state.class_room};
        console.log('student => ' + JSON.stringify(student));
        
        StudentService.createStudent(student).then(res =>{
            this.props.history.push('/student');
        });
  
    }

    changestuIdHandler = (event) => {
        this.setState({stu_id : event.target.value});
    }
    changestuFirstNameHandler = (event) => {
        this.setState({stu_first_name : event.target.value});
    }
    changestuLastNameHandler = (event) => {
        this.setState({stu_last_name : event.target.value});
    }
    changeclassRoomHandler = (event) => {
        this.setState({class_room : event.target.value});
    }

    render() {
        return (
            <div>
               <div className = "container">
                   <div className ="row">
                       <h3 className="text-center">Add Student</h3>
                       <div className="card-body">
                           <form>
                                <div className = "form-group">
                                   <label>Id Student:</label>
                                   <input placeholder="Id Student" name="stuId" className="form-control"
                                   value={this.state.stuId} onChange={this.changestuIdHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>First Name:</label>
                                   <input placeholder="First Name" name="stuFirstName" className="form-control"
                                   value={this.state.stuFirstName} onChange={this.changestuFirstNameHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>Last Name:</label>
                                   <input placeholder="Last Name" name="stuLastName" className="form-control"
                                   value={this.state.stuLastName} onChange={this.changestuLastNameHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>Class Room Student:</label>
                                   <input placeholder="Class Name" name="classRoom" className="form-control"
                                   value={this.state.classRoom} onChange={this.changeclassRoomHandler}/>
                               </div>

                               <button className="btn btn-success" onClick={this.saveStudent}>Save Student</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>cancle</button>
                           </form>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
