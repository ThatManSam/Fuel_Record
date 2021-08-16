import { Component } from 'react'
import './App.css'
import AddRecord from './components/AddRecord'
import Axios from 'axios'
import Records from './components/Records'

class App extends Component {
  state = {
    records: []
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err))
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  addRecord = (rec) => {
    console.log("tried to add: " + rec.id + rec.distance + rec.cost)
    this.setState({ records: [...this.state.records, rec] })
  }

  render() {
    return (
      <div className="App">
        <AddRecord addRecord={this.addRecord} />
        <Records records={this.state.records} />
      </div>
    )
  }
}

export default App
