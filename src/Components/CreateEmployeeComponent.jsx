import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

import withRouter from '../withRouter'


class CreateEmployeeComponent extends Component{

    constructor(props)
    {
        super(props)
        this.state={
                firstName :'',
                lastName:'',
                emailId:''
        }

        // this.changelastNameHandler=this.changelastNameHandler.bind(this);
        // this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        // this.changeEmailHandler=this.changeEmailHandler.bind(this);

        // this.saveEmployee = this.saveEmployee.bind(this);
    }


    saveEmployee =(e)=>
    {
        
        e.preventDefault();

        let employee ={firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee =>' +JSON.stringify(employee));
    
    
        EmployeeService.createEmployee(employee).then(res =>{
           this.props.navigate('/employees');
        });
    }

    changeFirstNameHandler=(event)=>
    {
        this.setState({firstName: event.target.value});
    }

    changelastNameHandler=(event)=>
    {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }


    
    render()
    {
        return (
            <div>
                    <h1>Employee Form </h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='card col-md-6 offset-md-3'>
                                    <h3 className='text-center'>Add Employee</h3>
                                    <div className='card-body'>
                                        <form>
                                            <div className='form-group'>
                                                <label> First Name</label>
                                                <input placeholder='First name' name='firstName' className='form-control'
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                            </div>

                                            <div className='form-group'>
                                                <label> Last Name</label>
                                                <input placeholder='last name' name='lastName' className='form-control'
                                                value={this.state.lastName} onChange={this.changelastNameHandler}></input>
                                            </div>

                                            <div className='form-group'>
                                                <label> Email Id</label>
                                                <input placeholder='Email Address' name='emailId' className='form-control'
                                                value={this.state.emailId} onChange={this.changeEmailHandler}></input>
                                            </div>


                                            <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                            <Link to="/employees">
                                                 <button className='btn btn-danger' style={{margin:"10px"}} >Cancel </button>
                                            </Link>
                                            
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        )

    }

}



export default CreateEmployeeComponent