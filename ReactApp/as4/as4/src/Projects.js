import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer.js'

class Projects extends Component
 {
    constructor(props)
    {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = 
        {
            projects: []
        }
    }

    componentDidMount()
    {
        axios.get(this.dataSource).then((res) => 
        {            
            this.setState({ projects: res.data });
        }).catch((err) => 
        {
            console.log("error");
        });
    }

    componentWillUnmount() {

    }
    render() {
        return ( 
            <div>
            <MainContainer sidebar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1> 

            <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                            this.state.projects.map((pro, index) => {
                            let endDate = "";

                            if(pro.ProjectEndDate == null) endDate = "n/a";
                            else endDate = moment(pro.ProjectEndDate).utc().format('LL');

                            let startDate = moment(pro.ProjectStartDate).utc().format('LL');
                            
                            return (
                                <tr>
                                    <td>{pro.ProjectName}</td>
                                    <td>{pro.ProjectDescription}</td>
                                    <td>{startDate}</td>
                                    <td>{endDate}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                 
            </div>
            </MainContainer>
      </div>            
        );
    }
}

export default Projects;