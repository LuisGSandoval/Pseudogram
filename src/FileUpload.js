import React, { Component } from 'react';
import firebase from 'firebase';

export default class FileUpload extends Component{
  constructor(){
    super();
    this.state = {
      uploadValue : 0,
      picture : null,
      picName : ''
    }

    this.handleUpload = this.handleUpload.bind(this)
  } 
  
  handleUpload(event){
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot=>{
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue : percentage
      })
    },error =>{
      console.log(error)
    }, ()=>{

      task.snapshot.ref.getDownloadURL().then(url => {
        this.setState({
          picture :  url
        })
        
      })

    });
  }
  

  render(){
    return(
      <div>
        <progress value={this.state.uploadValue} max="100"></progress>
        <br/>

        <input type="file" onChange={this.handleUpload} />
        <br/>
        <img width="320" src={this.state.picture} alt={this.state.picName}/>
      </div>
    )
  }

}