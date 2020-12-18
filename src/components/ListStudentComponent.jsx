import React, { Component } from 'react'
import StudentService from '../service/StudentService'


export default class ListStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            student: []
        }
        this.addStudent = this.addStudent.bind(this);
    }  
    

    addStudent(){
        this.props.history.push('/add-student');  
    }

   

    componentDidMount(){
        StudentService.getStudent().then((res) => {
            this.setState({ student: res.data});
        });
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Student List</h2>
                <div className = "row">
                    <button className ="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id Student</th>
                                <th>Student FirstName</th>
                                <th>Student LastName</th>
                                <th>Student ClassRoom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.student.map(
                                    student =>
                                    <tr key = {student.stu_id}>
                                        <td>{student.stu_id}</td>
                                        <td>{student.stu_first_name}</td>
                                        <td>{student.stu_last_name}</td>
                                        <td>{student.class_room}</td>
                                        
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
