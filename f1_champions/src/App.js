import React, { Component } from 'react';
import MainNav from './components/Navbar';
import Home from './components/Home';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <MainNav />
                    <Route exact path='/' component={Home} />
                    <Route path='/ViewAll' component={ViewAll} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
