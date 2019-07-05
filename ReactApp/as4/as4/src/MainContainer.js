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
import NavBar from './NavBar.js'
import SideBar from './SideBar.js'

class MainContainer extends Component
{
    render() 
    {
        return (
            <div>
                <NavBar title="WEB422 - Project Portal"/>
                <div className="container-fluid">
                <div className="row">
                
                <SideBar highlight={this.props.sidebar/* "highlight" property here  */}/>
                <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                {this.props.children/* reference to the "children" here*/}
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;