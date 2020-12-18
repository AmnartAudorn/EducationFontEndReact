import React, { Component } from 'react'
import TeacherService from '../service/TeacherService'

export default class ListTeacherComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            teacher: []
        }
        this.addTeacher = this.addTeacher.bind(this);
    }  
    componentDidMount(){
        TeacherService.getTeacher().then((res) => {
            this.setState({ teacher: res.data});
        });
    }

    addTeacher(){
        this.props.history.push('/add-teacher');  
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Teacher List</h2>
                <div className = "row">
                    <button className ="btn btn-primary" onClick={this.addTeacher}>Add Teacher</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Teacher</th>
                                <th>Teacher FirstName</th>
                                <th>Teacher LastName</th>
                                <th>Teacher Branch</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.teacher.map(
                                    teacher =>
                                    <tr key = {teacher.tid}>
                                        <td>{teacher.tid}</td>
                                        <td>{teacher.tfirst_name}</td>
                                        <td>{teacher.tlast_name}</td>
                                        <td>{teacher.tbranch}</td>  
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
