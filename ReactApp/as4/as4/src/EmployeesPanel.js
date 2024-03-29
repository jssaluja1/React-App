import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EmployeesPanel extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get(this.dataSource).then((res) => {            
            this.setState({ employees: res.data });
        }).catch((err) => {
            console.log("error");
        });
    }

    
    componentWillUnmount() {

    }
    render() {
        return ( 
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title"><b>{this.props.title}</b></h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                        
                        
                        <tbody>
                            {this.state.employees.map((emp, index) => {
                                return (
                                    <tr>
                                        <td>{emp.FirstName} {emp.LastName}</td>
                                        <td>{emp.Position.PositionName}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        
                        
                        </table>
                    </div>
                <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                </div>
            </div>
        );
    }
}

export default EmployeesPanel;