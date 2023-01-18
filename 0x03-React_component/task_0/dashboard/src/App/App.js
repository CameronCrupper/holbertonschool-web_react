import logo from '../assets/holberton_logo.jpg';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import React from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.ctrlEvent = this.ctrlEvent.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.ctrlEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.ctrlEvent);
  }

  ctrlEvent(e) {
    let k = e.key;
    console.log("This is e: ", e)
    if (e.ctrlKey && k === 'h') {
      console.log("hello");
      alert('Logging you out');
      this.props.logOut();
    }
  }
  
  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];

    return (
      <React.Fragment>
        <Notifications listNotifications={this.props.listNotifications}/>
      <div className="App">
        <Header />
        <div className='App-body'>
          {this.props.isLoggedIn ? <CourseList listCourses={this.props.listCourses}/> : <Login />}
        </div>
        <Footer />
      </div>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { console.log('test')}
}


export default App;
