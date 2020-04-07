import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

const LogPanel = (props) => {

  const handleSetAll = (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText == "ACTIVATE ALL") {
      props.onSetAll("activate")
    } else {
      props.onSetAll("de")
    }
  }

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {props.messages.map((e, i) => <p key={i} className={e.type}>{e.msg}</p>)}
      </pre>
      
      {/* Button below is the Activate All/Decommisssion All button */}
      <Button onClick={handleSetAll}
        fluid
        color={props.detail.active ? "green" : "red"}
        content={props.detail.active ? "DECOMMISSION ALL":"ACTIVATE ALL"} 
      />
    </Segment>
  )
}

export default LogPanel


