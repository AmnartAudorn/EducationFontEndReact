import React, { Component } from 'react'
import EnrolmentService from '../service/EnrolmentService'

export default class ListEnrolmentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            enrolment: []
        }
        this.addEnrolment = this.addEnrolment.bind(this);
    }  
    componentDidMount(){
        //debugger;
        EnrolmentService.getEnrolment().then((res) => {
            this.setState({ enrolment: res.data});
        });
    }

    addEnrolment(){
        this.props.history.push('/add-enrolment');  
    }

    getEnrolmentByStudentId(subjId){
       
        let getEnrolment = {
            subj_id: subjId
        }
      
        
        EnrolmentService.getEnrolmentStudent(getEnrolment).then(res =>{
            this.props.history.push('/enrolmentStudent');
        });
  
    }
    getEnrolmentExcel(subjId){
       
        let getEnrolment = {
            subj_id: subjId
        }
        
        EnrolmentService.getEnrolmentExcel(getEnrolment).then(res =>{
            this.props.history.push('/enrolment');
        });
  
    }
   
    render() {
        return (
            <div>
                <h2 className="text-center">Enrolment List</h2>
                <div className = "row">
                    <button className ="btn btn-primary" onClick={this.addEnrolment}>Add Enrolment</button>
                </div>
                
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Subject ID</th>
                                <th>FirstName Teacher</th>
                                <th>LastName Teacher</th>
                                <th>Subject Name</th>
                                <th>Details Subject</th>
                                <th>Excel</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                this.state.enrolment.map(
                                    enrolment =>
                                    <tr key ={ enrolment.id }>
                                        <td>{enrolment.subject.subj_id}</td>
                                        <td>{enrolment.subject.teacher.tfirst_name}</td>
                                        <td>{enrolment.subject.teacher.tlast_name}</td>
                                        <td>{enrolment.subject.subj_name}</td>
                                        
                                        <td><button onClick={e => this.getEnrolmentByStudentId(enrolment.subject.subj_id)} className="btn btn-outline-success my-2 my-sm-0">View Enrolment</button></td>
                                        <td><button onClick={e => this.getEnrolmentExcel(enrolment.subject.subj_id)} className="btn btn-outline-success my-2 my-sm-0">Export to Excel</button></td>
                                    
                                    </tr>
                                   
                                    
                                )
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
