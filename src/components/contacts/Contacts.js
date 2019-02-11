import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';

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
        ,
        nextContactId: 4
    }

    onDeleteContact = (event , id) => {
        event.preventDefault();
        const contacts = this.state.contacts.filter(contact => contact.id !== id)
        this.setState({contacts:contacts})
    }

    onAddContact = (event, argcontact) => {
        event.preventDefault()
        console.log('[Contacts: argContact]' + JSON.stringify(argcontact))
        let {contacts} =  { ...this.state }
        let contact = {...argcontact} 
        contact.id = this.state.nextContactId
        this.setState({nextContactId: contact.id += 1})
        console.log('[Contacts: contact]' +JSON.stringify(contact))
        console.log('[Contacts: contacts]' +JSON.stringify(contacts))

        contacts.push(contact)
        this.setState({contacts:contacts})

    }

    render() {
        const { contacts } = this.state 

        const contactsToRender = contacts.map(contact => {
 
            return(
                    <Contact key={contact.id} contact={contact} onDelete={this.onDeleteContact}/>
            )
        })

        return(
            <Fragment>
                 <AddContact addContact={this.onAddContact}/>
                {contactsToRender}
            </Fragment>
        )
    }
}

export default Contacts;