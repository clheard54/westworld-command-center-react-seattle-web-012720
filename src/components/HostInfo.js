import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import {Log} from '../services/Log'


class HostInfo extends Component {
  state = {
    options: this.props.areas.map(area => {
      return {key: area.id, text: area.name.split('_').map(word => word[0].toUpperCase()+word.substring(1)).join(' '), value: area.name}}),
  }
  
  handleChange = (e, {value}) => {
    let newArea = this.props.areas.find( area => area.name === value)
    let hostsInArea = this.props.hosts.filter( host => host.area === value)

    if(newArea.limit < (hostsInArea.length + 1)){
      this.props.addLog(Log.error(`Too many hosts. Cannot add ${this.props.detail.firstName} to ${newArea.name}.`))
    } else {
      this.props.addLog(Log.notify(`${this.props.detail.firstName} set in area ${newArea.name}`))
      this.props.setArea(this.props.detail, value)
    }
  }

  toggle = () => {
    if (this.props.detail.active) {
      this.props.addLog(Log.notify(`Decommissioned ${this.props.detail.firstName}`))
    } else {
      this.props.addLog(Log.warn(`Activated ${this.props.detail.firstName}`))
    }
    this.props.activeToggle()
  }


  render(){
    const {firstName,lastName, active, imageUrl, gender, area, authorized} = this.props.detail

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {firstName} | {gender=="Male" ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={active ? "Active" : "Decommissioned"}
                  checked={active ? true : false}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.detail.area}                
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
