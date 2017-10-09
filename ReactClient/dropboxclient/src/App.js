import React, {Component} from 'react';
import SignUp from './components/signuppage';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <SignUp/>
            </BrowserRouter>
        );
    }
}

export default App;
