import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  state = {
    options: this.props.areas.map(area => {
      return {key: area.id, text: area.name.split('_').map(word => word[0].toUpperCase()+word.substring(1)).join(' '), value: area.name}}),
  }

  
  handleChange = (e, {value}) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
  }

  toggle = () => {
    this.props.activeToggle()
  }


  render(){
    const {firstName,lastName, active, imageUrl, gender, area, authorized} = this.props.host

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
                value={this.props.detail.area}                options={this.state.options}
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
