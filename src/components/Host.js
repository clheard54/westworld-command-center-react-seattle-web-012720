import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  const handleShowDetail = (event) => {
    props.showDetail(props.host)
    event.target.className = "selected"
    console.log(event.target)
  }

  const clicked = props.detail ? "host selected" : "host"

  return(
    <Card
      className={clicked}
      onClick={handleShowDetail}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
