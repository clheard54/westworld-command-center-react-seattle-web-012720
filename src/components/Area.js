import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList';

export default class Area extends React.Component {

  textClean = (name) => {
    let arr = name.split('_');
    let cap = arr.map(word => word[0].toUpperCase()+word.substring(1))
    return cap.join(' ')
  }
  
  render() {
    let active = this.props.hosts.filter(host => host.active)
    return (
      <div className='area' id={this.props.areaInfo.name}>
        <h3 className='labels'>{this.textClean(this.props.areaInfo.name)}</h3>
      
        <HostList hosts={active}
        detail={this.props.detail}
        showDetail={this.props.showDetail}
        limit={this.props.limit}/>

      </div>
      )
    }
  }

  
Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

Area.defaultProps = {
  hosts: []
}