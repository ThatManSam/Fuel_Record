import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import AddRecord from './components/AddRecord'
import Records from './components/Records'
import axios from 'axios'

const serverPrefix = '/fuel_server'

class App extends Component {
  state = {
    records: [],
    displayAddLog: false,
    editMode: false
  }



  componentDidMount() {
    // Get all the records from the server and add to the state
    this.updateRecords()
  }

  callBackendAPI = async () => {
    // Fetch the records from the server
    const response = await fetch(serverPrefix + '/records')
    const body = await response.json()
    // Catching HTTP Errors
    if (response.status !== 200) {
      throw Error(body.message)
    }
    console.log("Response body from server:")
    console.log(body)
    return body
  }

  // Send a post request with the new record
  postRecord = async (rec, isAdding) => {
    await axios
      .post(serverPrefix + '/post', { add: isAdding, item: rec })
      .catch(err => console.log(err))
  }

  // Adds a new record to the list via the server
  addRecord = async (rec) => {
    // Debugging
    console.log("tried to add: ")
    console.log(rec)
    // Send the post request with the new record
    await this.postRecord(rec, true)
    // Ask for all the information back to update the list
    this.updateRecords()
    this.setState({ 
      displayAddLog: !this.state.displayAddLog,
      editMode: false
    })
  }

  // Remove a record from the list via the server
  removeRecord = async (rec) => {
    // Debugging
    console.log("tried to remove: ")
    console.log(rec)
    // Send the post request with the new record
    await this.postRecord(rec, false)
    // Ask for all the information back to update the list
    this.updateRecords()
  }

  updateRecords = () => {
    this.callBackendAPI()
      .then(res => this.setState({ records: res.records }))
      .catch(err => console.log(err))
    console.log(this.state.records)
  }

  // REACT Renders out the list of records
  render() {
    return (
      <Router>
        <Route exact path="/" render={props => (
          <div className="App">
            <Header
              onAddLog={() => this.setState({ displayAddLog: !this.state.displayAddLog })}
              showAddLog={this.state.displayAddLog}
              toggleEdit={() => this.setState({ editMode: !this.state.editMode })}
              edit={this.state.editMode}
            />
            {this.state.displayAddLog && <AddRecord addRecord={this.addRecord} />}
            <Records records={this.state.records} remove={this.removeRecord} edit={this.state.editMode} />
          </div>)} />
      </Router>
    )
  }
}

export default App
