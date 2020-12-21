import React, { Component } from 'react'
import SubjectService from '../service/SubjectService';

export default class CreateSubjectComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            subj_id : '',
            subj_name : '',
            subj_details : '',
            subj_credit : '',
            start_time : '',
            end_time : '',
            tid : ''

        }
        this.changesubjIdHandler = this.changesubjIdHandler.bind(this);
        this.changesubjNameHandler = this.changesubjNameHandler.bind(this);
        this.changesubjDetailsHandler = this.changesubjDetailsHandler.bind(this);
        this.changesubjCreditHandler = this.changesubjCreditHandler.bind(this);
        this.changestartTimeHandler = this.changestartTimeHandler.bind(this);
        this.changeendTimeHandler = this.changeendTimeHandler.bind(this);
        this.changetIdHandler = this.changetIdHandler.bind(this);
    
    }  
   
    cancel(){
        this.props.history.push('/subject');
    }
    saveSubject = (e) => {
        e.preventDefault();
        let subject = {subj_id:this.state.subj_id,subj_name:this.state.subj_name,subj_details:this.state.subj_details,subj_credit:this.state.subj_credit,start_time:this.state.start_time,end_time:this.state.end_time};
        console.log('subject => ' + JSON.stringify(subject));
       
       
        console.log('teacher => ' + JSON.stringify(this.state.tid));
        

        SubjectService.createSubject(subject,this.state.tid).then(res =>{
            this.props.history.push('/subject');
        });
  
    }
    changesubjIdHandler = (event) => {
        this.setState({subj_id : event.target.value});
    }
    changesubjNameHandler = (event) => {
        this.setState({subj_name : event.target.value});
    }
    changesubjDetailsHandler = (event) => {
        this.setState({subj_details : event.target.value});
    }
    changesubjCreditHandler = (event) => {
        this.setState({subj_credit : event.target.value});
    }
    changestartTimeHandler = (event) => {
        this.setState({ start_time: event.target.value});
    }
    changeendTimeHandler = (event) => {
        this.setState({ end_time: event.target.value});
    }
    changetIdHandler = (event) => {
        this.setState({ tid: event.target.value});
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
                                   <label>Id SubJect :</label>
                                   <input placeholder="Name" name="subjId" className="form-control"
                                   value={this.state.subjId} onChange={this.changesubjIdHandler}/>
                                </div>
                                <div className = "form-group">
                                   <label>SubJect Name:</label>
                                   <input placeholder="Name" name="subjName" className="form-control"
                                   value={this.state.subjName} onChange={this.changesubjNameHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>SubJect Details:</label>
                                   <input placeholder="Details" name="subjDetails" className="form-control"
                                   value={this.state.subjDetails} onChange={this.changesubjDetailsHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>Credit:</label>
                                   <input placeholder="Credit" name="subjCredit" className="form-control"
                                   value={this.state.subjCredit} onChange={this.changesubjCreditHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>Start Time:</label>
                                   <input placeholder="Start Time" name="startTime" type="time" className="form-control"
                                   value={this.state.startTime} onChange={this.changestartTimeHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>End Time:</label>
                                   <input placeholder="End Time" name="endTime" type="time" className="form-control"
                                   value={this.state.endTime} onChange={this.changeendTimeHandler}/>
                               </div>
                               <div className = "form-group">
                                   <label>Id Teacher:</label>
                                   <input placeholder="Id Teacher" name="tId" className="form-control"
                                   value={this.state.tId} onChange={this.changetIdHandler}/>
                               </div>

                               <button className="btn btn-success" onClick={this.saveSubject}>Save Subject</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>cancle</button>
                           </form>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
