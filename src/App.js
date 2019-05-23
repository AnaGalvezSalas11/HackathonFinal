import React, { Component } from 'react';
import Route from './components/Maps/Route';
import OwnLocation from './components/Maps/OwnLocation';
import './index.css';
import {companies} from './companies.json'
import Signin from './components/signin/Signin';
import CompanyProfile from './components/CompanyProfile';


class App extends Component {
  constructor(props) {
    super(props);
    this.getValue=this.getValue.bind(this);
    this.map=null;
    this.state = {
        image: 'normal.day',
        latitude: false,
        longitude: false,
        error: null,
        companies: companies
    }
  }
  getValue(info){
    console.log(info);
  }
    

    render() {
        return (
            <div id="App">
                <CompanyProfile/>
            </div>
        );
    }
}


export default App;


/*
                <OwnLocation
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="15"
                    image={this.state.image }
                    listCompany={this.state.companies}
                    update={this.getValue}
                />
                <Route 
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="10"
                    image={this.state.image }
                />
*/
