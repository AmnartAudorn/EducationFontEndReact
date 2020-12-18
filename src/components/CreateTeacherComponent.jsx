import React, { Component } from 'react'
import TeacherService from '../service/TeacherService';

export default class CreateTeacherComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tid : '',
            tfirst_name : '',
            tlast_name : '',
            tbranch : ''
        }
        this.changetIdHandler = this.changetIdHandler.bind(this);
        this.changetFirstNameHandler = this.changetFirstNameHandler.bind(this);
        this.changetLastNameHandler = this.changetLastNameHandler.bind(this);
        this.changetBranchHandler = this.changetBranchHandler.bind(this);
    }  
   
    cancel(){
        this.props.history.push('/teacher');
    }
    saveTeacher = (e) => {
        e.preventDefault();
        let teacher = {tid:this.state.tid,tfirst_name:this.state.tfirst_name,tlast_name:this.state.tlast_name,tbranch:this.state.tbranch};
        console.log('teacher => ' + JSON.stringify(teacher));
        
        TeacherService.createTeacher(teacher).then(res =>{
            this.props.history.push('/teacher');
        });
  
    }
    changetIdHandler = (event) => {
        this.setState({tid : event.target.value});
    }
    
    changetFirstNameHandler = (event) => {
        this.setState({tfirst_name : event.target.value});
    }
    changetLastNameHandler = (event) => {
        this.setState({tlast_name : event.target.value});
    }
    changetBranchHandler = (event) => {
        this.setState({tbranch : event.target.value});
    }

    render() {
        return (
            <div>
               <div className = "container">
                   <div className ="row">
                       <h2 className="text-center">Add Teacher</h2>
                       <div className="card-body">
                           <form>
                                <div className = "form-group">
                                   <label>ID Teacher:</label>
                                   <input placeholder="Id Teacher" name="tId" className="form-control"
                                   value={this.state.tId} onChange={this.changetIdHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>First Name:</label>
                                   <input placeholder="First Name" name="tFirstName" className="form-control"
                                   value={this.state.tFirstName} onChange={this.changetFirstNameHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>Last Name:</label>
                                   <input placeholder="Last Name" name="tLastName" className="form-control"
                                   value={this.state.tLastName} onChange={this.changetLastNameHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>Branch:</label>
                                   <input placeholder="Class Name" name="tBranch" className="form-control"
                                   value={this.state.tBranch} onChange={this.changetBranchHandler}/>
                               </div>

                               <button className="btn btn-success" onClick={this.saveTeacher}>Save Teacher</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>cancle</button>
                           </form>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
