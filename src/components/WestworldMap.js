import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

let hosts = []
export default class WestworldMap extends React.Component{

 renderHosts = (areaName, limit) => ( this.props.hosts.filter( host => host.area == areaName ) )

 showAreas = () => {
   return this.props.areas.map( (area) => {
     return (<Area
       areaInfo={area}
       hosts={this.renderHosts(area.name, area.limit)}
       detail={this.props.detail}
       showDetail={this.props.showDetail}
     />
   )
 })
}

  render() {
   return (
    <Segment id="map" >
      {this.showAreas()}
    </Segment>
  )
}
}

