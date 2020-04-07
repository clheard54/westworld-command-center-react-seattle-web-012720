import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import LogPanel from './LogPanel'
import ColdStorage from './ColdStorage';


class Headquarters extends Component {

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage detail={this.props.detail} showDetail={this.props.showDetail} hosts={this.props.hosts}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details activeToggle={this.props.activeToggle} detail={this.props.detail} hosts={this.props.hosts} areas={this.props.areas}/>
        </Grid.Column>
        <Grid.Column width={3}>

        <LogPanel onSetAll={this.props.onSetAll} detail={this.props.detail} hosts={this.props.hosts}/>

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
