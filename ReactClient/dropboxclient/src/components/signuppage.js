import React from 'react';
import logo from '../logo.png';
import signin from '../signin.png';
import {Route} from 'react-router-dom';
import './style.css';

class SignUp extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    };

    handleSignUp = (userdata) => {

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
                                                    <input type="text" placeholder="FirstName"/><br/><br/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                  <input type="text" value={this.state.username} placeholder="LastName"
                                                         onChange={(event) => {
                                                             this.setState({
                                                                 lastname: event.target.value
                                                             })
                                                         }} /><br /><br />
                                                             </td>
                                                             </tr>
                                                             <tr>
                                                             <td>
                                                             <input type="text" placeholder="email"/><br /><br />
                                                             </td>
                                                             </tr>
                                                             <tr>
                                                             <td>
                                                             <input type="text" placeholder="password"/><br /><br />
                                                             </td>
                                                             </tr>
                                                             <tr>
                                                             <td>
                                                             <input type="checkbox" />I agree to <a href="#" >DropBox Terms</a>&nbsp;&nbsp; <button className="loginsignup" onClick={()=>{this.props.history.push("/signup") }} >Create an account</button> <br /><br />

                                                             </td>
                                                             </tr>
                                                             </tbody>
                                                             </table>
                                                             </span>
                                                             </p>
                                                             </div>
                                                             )}/>
                <Route exact path='/signup' render{() => (
                    <div>
                        <SignUp handleSignUp={this.handleSignUp}/>
                    </div>
                )}/>
                    </div>
                    )
                    }
                }

                export default SignUp;