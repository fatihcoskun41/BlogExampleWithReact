import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export default class Contacts extends Component {
    render() {
        return (
            <div>
              
              <Form addContact={this.props.addContacts}></Form>
              <List contacts={this.props.contacts}></List>
            </div>
        )
    }
}
