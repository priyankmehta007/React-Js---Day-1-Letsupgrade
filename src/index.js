import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

class bike extends React.Component {
  render() {
    return <h2>Hi, I am a Bike!</h2>;
  }
}

class cycle extends React.Component {
  render() {
    return <h2>Hi, I am a cycle!</h2>;
  }
}


ReactDOM.render(<Car />, document.getElementById('root'));
ReactDOM.render(<bike />, document.getElementById('root'));
ReactDOM.render(<cycle />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
