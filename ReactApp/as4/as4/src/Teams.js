/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: _Jasmeet Singh Saluja____ Student ID: _102579166__ Date: _4th JULY, 2018_
*
********************************************************************************/

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MainContainer from './MainContainer'

class Teams extends Component 
{

  constructor(props) {
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
      teams: []
    }
  }



  componentDidMount() {

    axios.get(this.dataSource).then((res) => {

      this.setState({ teams: res.data });

    }).catch((err) => {

      console.log("error");

    });

  }



  render() 
  {
    return (
      <MainContainer sidebar="Teams">
        <h1 className="page-header">Teams</h1>

        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>

                <th>Name</th>
                <th>Projects</th>
                <th>Employees</th>
                <th>Team Lead</th>

              </tr>
            </thead>

            <tbody>

              {this.state.teams.map((t, index) => {

                return (

                  <tr key={t._id}>
                    <td>{t.TeamName}</td>
                    <td>

                    {
                        t.Projects.map((pro, index) => {
                        return (
                          <li key={pro._id}>{pro.ProjectName}</li>
                        )

                      })
                    }
                    </td>
                    <td>{t.Employees.length}&nbsp;Employees</td>
                    <td>{t.TeamLead.FirstName}&nbsp;{t.TeamLead.LastName}</td>
                  </tr>

                )

              })}

            </tbody>
          </table>
        </div>

        <Link to="/" className="btn btn-primary form-control">Go Back To Overview</Link>
      </MainContainer>
    );
  } 
} 



export default Teams;