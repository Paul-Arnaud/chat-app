import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
     state = {
        online: this.props.online
    }
    render (){
        const toggleOnline = () =>{
            this.setState({
              online: !this.state.online 
            });
        }
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="{props.name} Avatar" />
                <div>
                    <h4 className="name">{this.props.name}</h4>  
                    <span className="status" onClick={toggleOnline}>
                    {this.state.online ? <span className="status-online"></span> : <span className="status-offline"></span>}
                    <span className="status-text">{this.state.online ? "Online" : "Offline"}</span>
                    </span>
                </div>
            </div>
        )
    }
}

export default Contact