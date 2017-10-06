import React, {Component} from 'react';
import logo from './logo.png';
import signin from './signin.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <p className="App-intro">
                    <span className="signinImage"> <img src={signin}/> </span>
                    <span>
                <table>
                <tr>
                    <thead>
                    <th>Create an Account</th>
                    </thead>
                </tr>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="FirstName" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                              <input type="text" value="LastName" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                              <input type="text" value="email" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                              <input type="text" value="password" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                    </span>
                </p>
            </div>
    );
    }
    }

    export default App;
