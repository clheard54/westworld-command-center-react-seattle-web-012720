import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

const LogPanel = (props) => {

  const handleSetAll = (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText == "ACTIVATE ALL") {
      props.onSetAll("activate")
      props.addLog(Log.warn("Activating all hosts!"))
    } else {
      props.onSetAll("de")
      props.addLog(Log.notify("Decommissiong all hosts."))

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

/*
1) Setting a hosts area:
Notify: {first name of host} set in area {formatted area name}



4) Activating all hosts:
Warn: Activating all hosts!

5) Decommissioning all hosts:
Notify: Decommissiong all hosts.

6) Trying to add too many hosts to an area:
Error: Too many hosts. Cannot add {first name of host} to {formatted area name}
*/