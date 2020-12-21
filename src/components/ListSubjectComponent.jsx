import React, { Component } from 'react'
import SubjectService from '../service/SubjectService';



export default class ListSubjecComponent extends Component {

    
    constructor(props){
        super(props)

        this.state = {
            subjec: []
        }
        this.addSubjec = this.addSubjec.bind(this);
    }  
    componentDidMount(){
        SubjectService.getSubject().then((res) => {
            this.setState({ subjec: res.data});
        });
    }

    addSubjec(){
        this.props.history.push('/add-subject');  
    }

    

    render() {
        return (
            
            <div>
                <h2 className="text-center">Teacher List</h2>
                <div className = "row">
                    <button className ="btn btn-primary" onClick={this.addSubjec}>Tescher Add Subjec</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID Subjec</th>
                                <th>Subjec Name</th>
                                <th>Details</th>
                                <th>Credid</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Teacher Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                
                                this.state.subjec.map(
                                    subjec =>
                                    <tr key = {subjec.subj_id}>
                                        <td>{subjec.subj_id}</td>
                                        <td>{subjec.subj_name}</td>
                                        <td>{subjec.subj_details}</td>
                                        <td>{subjec.subj_credit}</td>
                                        <td>{subjec.start_time}</td>
                                        <td>{subjec.end_time}</td>
                                        <td>{subjec.teacher.tfirst_name}</td>
                                        
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
