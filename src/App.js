import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'
import {Log} from './services/Log'

class App extends Component {
  constructor() {
    super();
    this.state = {
      hosts: [],
      areas: [],
      detail: []
    }
  }

  getHosts = () => {
    fetch("http://localhost:3000/hosts")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        hosts: data
      })
    })
  }

  getAreas = () => {
    fetch("http://localhost:3000/areas")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        areas: data
      })
    })
  }

  componentDidMount = () => {
    this.getHosts();
    this.getAreas();
  }
  
  showDetail = (host) => {
    this.setState({
      detail: host
    })
  }

  activeToggle = () => {
    let x = this.state.hosts.filter(host => host != this.state.detail)
    let newDetail = {...this.state.detail, active: !this.state.detail.active}
    this.setState({
        detail: newDetail,
        hosts: x.concat(newDetail)
    })
  }

  setArea = (currentHost, areaName) => {
    this.setState( prev => {
      prev.hosts.forEach( host => {
        if(host === currentHost){
          host.area = areaName
        }
      })
      return {hosts: prev.hosts}
    })

  }

  setAll = (action) => {
    let allActive = this.state.hosts.map(host => {
      return {...host, active: true}
    })
    let deactivated = this.state.hosts.map(host => {
      return {...host, active: false}
    })
    console.log(action)
    this.setState(prev => {
      return {
        hosts: (action == "activate" ? allActive : deactivated),
        detail: (action == "activate" ? {...prev.detail, active: true} : {...prev.detail, active: false})
      }
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap hosts={this.state.hosts} areas={this.state.areas} showDetail={this.showDetail}/>
        <Headquarters setArea={this.setArea} activeToggle={this.activeToggle} detail={this.state.detail} hosts={this.state.hosts} areas={this.state.areas} onSetAll={this.setAll} showDetail={this.showDetail}/>
        
      </Segment>
    )
  }
}

export default App;
