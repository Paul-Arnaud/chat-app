import React from 'react';
import './Contact.css';

const contacts =  [
    {
        name : "Justin Ferguson",
        status : true,
        avatar : "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
        name : "Earl Cole",
        status : false,
        avatar : "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
        name : "Theresa Morales",
        status : true,
        avatar : "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        name : "Jo Gilbert",
        status : true,
        avatar : "https://randomuser.me/api/portraits/women/88.jpg"
    },
    {
        name : "Arlene Wade",
        status : false,
        avatar : "https://randomuser.me/api/portraits/women/64.jpg"
    }
]

const ContactList = () => (
    <div> 
       {contacts.map(item => (
       <div className="Contact">    
        <img className="avatar" src={item.avatar} alt="{props.name} Avatar" />
         <div>
           <h4 className="name">{item.name}</h4>  
           <span className="status">
              {item.status ? <span className="status-online"></span> : <span className="status-offline"></span>}
              <span className="status-text">{item.status ? "Online" : "Offline"}</span>
           </span>
         </div> 
       </div>   
    ))}
    </div>
)
export default ContactList;