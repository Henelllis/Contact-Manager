import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    state ={
        showContact: true
    }

    onClickShowContact = () => {
        this.setState({showContact: !this.state.showContact})
    }

    render() {
        const { showContact } = this.state
        const {id ,name, email, phone } = this.props.contact;

        let contactRender = null

        if (showContact){
            contactRender = (
                <ul className=" list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>
            )
        }

        return (
            <div className="card card-body mb-3">
                <h4>{name} <i onClick={this.onClickShowContact} 
                    className="fas fa-sort-down" 
                    style={{'cursor':'pointer'}}></i>
                    <i className="fas fa-times"
                        onClick={(event) => this.props.onDelete(event, id)} 
                        style={{'cursor':'pointer'
                                ,'float':'right',
                                'color':'red'}}></i>
                </h4>

                {contactRender}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;