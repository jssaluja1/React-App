import React, { Component } from 'react';
import MainContainer from './MainContainer.js'
import ProjectsPanel from './ProjectsPanel.js'
import TeamsPanel from './TeamsPanel.js'
import EmployeesPanel from './EmployeesPanel.js'

class Overview extends Component
 {
  render() 
  {
    
    return (
  
      
      <div>
        <MainContainer sidebar={this.props.title}>
        <h1 className="page-header">{this.props.title}</h1> 
        <div className="row"> 
          
          <div className="col-md-4"> 
            <ProjectsPanel title="Projects" dataSource="https://stormy-earth-26721.herokuapp.com/projects" />
          </div> 
          
          <div className="col-md-4"> 
            <TeamsPanel title="Teams" dataSource="https://stormy-earth-26721.herokuapp.com/teams" />
          </div> 
          
          <div className="col-md-4"> 
            <EmployeesPanel title="Employees" dataSource="https://stormy-earth-26721.herokuapp.com/employees" />
          </div> 
        </div> 
        </MainContainer>
      </div>
    );
  }
}

export default Overview;