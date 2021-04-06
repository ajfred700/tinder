import React, { Component } from "react";
//import {useState} from 'react'
import { storage } from "../firebase";
import firebase from 'firebase'
import TutorialDataService from "../services/tutorial.service";

  
export default class AddTutorial extends Component {

  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    

    this.state = {
      name: "",
      description: "",
      published: false,

      submitted: false,
      file: "",
      name: "",
      url: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),


    };
    
    
  }
 

  /* storage */
  

  onChangeTitle(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveTutorial() {
    const timestamp = Date.now();
    console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));

    let data = {
      timestamp: this.state.timestamp,
      name: this.state.name,
      description: this.state.description,
      published: false,
      url: this.state.url
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      name: "",
      description: "",
      published: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),

      submitted: false,
    });
  }

  handleChange(e) {
    alert("e: " + e.target.files[0]);
    alert("e: " + e.target.files[0].name);

    this.setState({
        file: e.target.files[0],
        name: e.target.files[0].name
      });
  }

  handleUpload(e) {
    let myname = this.state.name;
    alert("uploading..." + myname);
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${this.state.name}`).put(this.state.file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(this.state.name)
        .getDownloadURL()
        .then((url) => {
          //this.setFile(null);
          this.setState({url: url});
        });
    });
  }

  
  render() {
//    function App() {

    //const allInputs = {imgUrl: ''}
    //const [imageAsFile, setImageAsFile] = useState('')
    //const [imageAsUrl, setImageAsUrl] = useState(allInputs)
 
  
   


   // }
    return (

        
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div> 
            <div className="form-group">
             Aquí podras subir tus imagenes
            </div>
            <div className="form-group">
              <label htmlFor="title">Nombre </label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.name}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
     
     <div className="App">

      <form onSubmit={this.handleUpload}>
        <input type="file" onChange={this.handleChange} />
        <button >upload to firebase</button>
      </form>
      {this.state.url}
      <img src={this.state.url} alt="" />
    </div>
     
      </div>
    );
  }
}