import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/mainContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
