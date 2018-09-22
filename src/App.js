import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import FileUpload from './FileUpload';
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      user : null
    }
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result =>console.log(`${result.user.displayName}, ha iniciado sesión`))
    .catch( error => console.error(`Error: ${error.code}, ${error.message}`));
  }

  handleLogOut(){
    firebase.auth().signOut()
    .then(result => console.log(`${result}, ha salido`))
  }
  renderLoginButton(){
    if(this.state.user){
      return(
        <div>
          <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <h1>Hola {this.state.user.displayName}</h1>
          <code>{ this.state.user.email }</code> <br/>
          <FileUpload/>
          <button onClick={this.handleLogOut}>Salir</button>
        </div>
      )
    }else{
      return(
        <button onClick={this.handleAuth}>Google</button>
      )
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
      
        this.setState({user})
        console.log(user.photoURL)
      
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pseudogram</h1>
        </header>
        <div className="App-intro">
          {this.renderLoginButton()}
        </div>
      </div>
    );
  }
}