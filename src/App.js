import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar'
import Feeds from './Components/HomePage/Feeds'
import LogIn from './Components/Auth/LogIn'
import LogOut from './Components/Auth/LogOut'
import Register from './Components/Auth/Register'
import PostDetails from './Components/Posts/PostDetails'
import CreateNewPost from './Components/Posts/CreateNewPost'
import Firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqGbuqhLFY8vETEI0vIvsIuTlu-b-ss3E",
  authDomain: "sample-project-63d7a.firebaseapp.com",
  databaseURL: "https://sample-project-63d7a.firebaseio.com",
  projectId: "sample-project-63d7a",
  storageBucket: "sample-project-63d7a.appspot.com",
  messagingSenderId: "366181844068",
  appId: "1:366181844068:web:e88e4c997325415eaf8b71",
  measurementId: "G-DTFXDW9NBV"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

const db = Firebase.firestore();
db.collection('posts').get()
  .then(resp => {
    console.log('resp is: ');
    console.log(resp);
    console.log('resp.docs is: ' + resp.docs);
    console.log(resp.docs);
    console.log('resp.docs[0].data()');
    console.log(resp.docs[0].data());
  })
  .catch(err => {
    console.log(err);
  });


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path="/" component={Feeds}></Route>
            <Route exact path="/create" component={CreateNewPost}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={LogIn}></Route>
            <Route exact path="/logout" component={LogOut}></Route>
            <Route exact path="/post/:id" component={PostDetails}></Route>
          </Switch>       
        </div>
      </div>
    </Router>
  );
}

export default App;
