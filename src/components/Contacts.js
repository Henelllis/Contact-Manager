import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    state={
        contacts:[
            {
                id: 1,
                name:'John Doe',
                email:'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name:'Karen Williams',
                email:'kwill@gmail.com',
                phone: '222-222-2222'
            },
            {
                id: 3,
                name:'Henry Johnson',
                email:'henDawg@gmail.com',
                phone: '333-333-7777'
            },
        ]
    }

    render() {
        const { contacts } = this.state 

        const contactsToRender = contacts.map(contact => {
 
            return(
                    <Contact key={contact.id} contact={contact}/>
            )
        })

        return(
            <div>
                {contactsToRender}
            </div>
        )
    }
}

export default Contacts;