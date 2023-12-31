import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component{

    constructor(props)
    {
        super(props)

        this.state={
                employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount()
    {
        EmployeeService.getEmployee().then((res)=>{
                this.setState({employees:res.data});
        });
    }


    addEmployee()
    {
        this.props.push('/add-employee');
    }


    render()
    {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div >
                    <Link to="/add-employee">
                    <button className='btn btn-primary' >Add Employee </button>
                    </Link>
                    
                </div>


                <div className='row'>
                    <table className='table table-striped, table-bordered'>
                            <thead>
                                <tr>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Employee Email Id</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>

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


export default ListEmployeeComponent
