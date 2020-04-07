import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  const renderHosts = () => {
    return props.hosts.map(host => {
      return (host == props.detail ? <Host host={host} key={host.id} showDetail={props.showDetail} detail/> : <Host host={host} key={host.id} showDetail={props.showDetail}/>) 
    })
  }

  return(
    <Card.Group itemsPerRow={6}>
      {renderHosts()}
    </Card.Group>
  )
}

export default HostList

HostList.defaultProps = {
  hosts: []
}