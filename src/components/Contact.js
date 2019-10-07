import React from 'react';

import './Contact.css';

const Contact = props => {
    console.log (props.online);
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="{props.name} Avatar" />
            <div>
                <h4 className="name">{props.name}</h4>  
                <span className="status">
                   {props.online === 'True' ? <span className="status-online"></span> : <span className="status-offline"></span>}
                   {props.online === 'True' ? "Online" : "Offline"}
                </span>
            </div>
        </div>
    )
}

export default Contact