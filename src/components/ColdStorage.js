import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = (props) => {
  const deactivated = props.hosts.filter(host => !host.active)
  return (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      <HostList detail={props.detail} showDetail={props.showDetail} hosts={deactivated}/>

    </Segment>
  </Segment.Group>
)
  }
export default ColdStorage
