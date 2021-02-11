import React, { Component } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
} from 'reactstrap';

export default class List extends Component {
    render() {
        return (
            <div className={'list-area'}>


                {this.props.contacts.map(contact =>
                    <Card key={contact.id}>

                        <CardTitle tag="h5">{contact.name}</CardTitle>
                        <CardImg height="200px" top width="30%" src={contact.foto} alt="Fotoğraf Yok" />
                        <CardBody>


                            <CardText>{contact.textarea}</CardText>

                        </CardBody>
                       
                    </Card>
                    
                    
                )}



            </div>
        )
    }
}
