import React from 'react';
import {Route} from 'react-router-dom';

import logo from '../logo.png';
import signin from '../signin.png';
import './style.css';

class SignUp extends React.Component {

    state = {
        userdata :{
            firstname: '',
            lastname: '',
            email: '',
            password: ''
            },
        success : false,
        message : ''
        };

    handleSignUp = (signupdata) => {
        const signupdata = signupdata;
        console.log("\n this.state: "+this.state+"\n this.signupdata: "+this.signupdata );
        console.log("this.state.userdata: "+this.state.userdata);

        API.doSignUp(this.state.userdata)
            .then((status) => {
                if(status == 201){
                    this.props.history.push("/home");
                }
                else if (status == 401){
                    this.setState({
                        message : 'Signup failed. Please try again'
                    })
                }
            })
    };


    render() {
        return (
            <div className="App">
                <Route exact path="/" render={() => (
                    <div>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </header>
                        <p className="App-intro">
                            <span className="signinImage"> <img src={signin} alt="for Signin"/> </span>
                            <span>
                                <table>
                                    <tr>
                                        <thead>
                                        <th>Create an Account</th><br/><br/><br/>
                                        </thead>
                                    </tr>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="text" value={this.state.userdata.firstname} placeholder="FirstName"
                                                            onChange = {(event)=> {
                                                                this.setState({
                                                                    userdata : {
                                                                        ...this.state.userdata,
                                                                        firstname : event.target.value
                                                                    }
                                                                })
                                                            }} /><br/><br/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                  <input type="text" value={this.state.userdata.lastname} placeholder="LastName"
                                                         onChange= { (event) => {
                                                             this.setState({
                                                                 userdata : {
                                                                     ...this.state.userdata,
                                                                     lastname : event.target.value
                                                                 }
                                                             })

                                                         }} /><br /><br />
                                                             </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="email" value={this.state.userdata.email} placeholder="email"
                                                           onClick={ (event) => {
                                                               this.setState( {
                                                                   userdata : {
                                                                       ...this.state.userdata,
                                                                       email : event.target.value
                                                                   }
                                                               })
                                                           }} /><br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="password" value={this.state.userdata.password} placeholder="password"
                                                    onChange={ (event) => {
                                                        this.setState({
                                                            userdata : {
                                                                ...this.state.userdata,
                                                                password : event.target.password
                                                            }
                                                        })
                                                    } } /><br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" />I agree to <a href="#" >DropBox Terms</a>&nbsp;&nbsp;
                                                    <button className="loginsignup"
                                                            onClick={()=>{
                                                                this.handleSignUp(this.state)
                                                                 }} >Create an account
                                                    </button>
                                                    <br /><br />
                                                </td>
                                            </tr>
                                        </tbody>
                                </table>
                            </span>
                        </p>
                    </div>
                )}/>
                <Route exact path='/home' render{() => (
                    <div>
                        <Home />
                    </div>
                )}/>
                    </div>
                )}
}

export default SignUp;