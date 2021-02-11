import React, {Component} from 'react';
import Contacts from "./Contacts";
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.addContact=this.addContact.bind(this)
    }
    state={
        contacts:[
          
            ]
    }
    addContact(contact){
        console.log(contact)

        const{contacts} = this.state
        contacts.push(contact)
        this.setState({
            contacts: contacts
        })

    }
    render() {
        return (
            <div className={'App'}>
                <Contacts addContacts={this.addContact} contacts={this.state.contacts}></Contacts>

            </div>
        );
    }
}

export default App;
