
import React, { Component } from 'react'
import EnrolmentService from '../service/EnrolmentService'

class GetEnrolmentByStudentIdComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           enrolment:[]
        }
    }
    
    componentDidMount(){
        EnrolmentService.getEnrolmentStudent2().then((res) => {
            this.setState({ enrolment: res.data});
        });
    }
    

    getEnrolmentExcel(){
        this.props.history.push('/enrolmentStudent');  
    }

    render() {
        
        return (
            <div>
                <h2 className="text-center">Enrolment List</h2>
               
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id Student</th>
                                <th>First Student</th>
                                <th>Last Student</th>
                                <th>Class Room</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        {
                            this.state.enrolment.map(enrolment =>
                                <tr key={enrolment.id} >
                                    <td>{enrolment.student.stu_id}</td>
                                    <td>{enrolment.student.stu_first_name}</td>
                                    <td>{enrolment.student.stu_last_name}</td>
                                    <td>{enrolment.student.class_room}</td>
                                    
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
export default GetEnrolmentByStudentIdComponent