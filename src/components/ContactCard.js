import React, { Component } from "react"

// adding props
// props - custom parameters for components
class ContactCard extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div className="contact-card">
                <img src={this.props.contact.imgUrl}/>
                <h3>{this.props.contact.name}</h3>
                <p>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
            </div>
        )
    }
}



export default ContactCard