import React, { Component } from 'react'
import EnrolmentService from '../service/EnrolmentService';

export default class CreateEnrolmentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            student_id : '',
            subject_id : ''
        }

        this.changeStudentHandler = this.changeStudentHandler.bind(this);
        this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
        
    
    }  
   
    cancel(){
        this.props.history.push('/enrolment');
    }
    
    saveEnrolment = (e) => {
        e.preventDefault();
        let requestEnrolment = {
            stu_id: this.state.student_id,
            subj_id: this.state.subject_id
        }
        // console.log('enrolment => ' + JSON.stringify());

        // let student = {student_id:this.state.student_id}
        // console.log('student => ' + JSON.stringify(this.state.student_id));

        // let subject = {subject_id:this.state.subject_id}
        // console.log('subject => ' + JSON.stringify(this.state.subject_id));
       
        
        EnrolmentService.createEnrolment(requestEnrolment).then(res =>{
            this.props.history.push('/enrolment');
        });
  
    }

    changeStudentHandler = (event) => {
        this.setState({student_id : event.target.value});
    }
    changeSubjectHandler = (event) => {
        this.setState({subject_id : event.target.value});
    }
   

    render() {
        return (
            <div>
               <div className = "container">
                   <div className ="row">
                       <h3 className="text-center">Add Subject</h3>
                       <div className="card-body">
                           <form>
                                <div className = "form-group">
                                   <label>ID Student:</label>
                                   <input placeholder="Id Student" name="stuId" className="form-control"
                                   value={this.state.student_id} onChange={this.changeStudentHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>ID SubJect:</label>
                                   <input placeholder="Id Subject" name="subjId" className="form-control"
                                   value={this.state.subject_id} onChange={this.changeSubjectHandler}/>
                               </div>
                               
                               <button className="btn btn-success" onClick={this.saveEnrolment}>Save Enrolment</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>cancle</button>
                           </form>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
