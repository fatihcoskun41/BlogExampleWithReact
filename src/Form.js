
import React, { Component } from 'react';
import './Form.css';
import { Button, FormGroup, Col } from 'reactstrap';

export default class Form extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    state = {
        name: "New Title",
        textarea: "",
        foto: ""
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    onSubmit(e) {
        e.preventDefault()

        this.props.addContact({
            ...this.state
        })
        this.setState({
            name: "New Title",
            textarea: "",
            foto: ""
        })


    }
    render() {
        return (
            <div style={{width:'70%'}}>
                <form onSubmit={this.onSubmit}>
                    <FormGroup className={"form"}>

                        <input style={{ borderStyle: 'none',paddingLeft:'15px'}} value={this.state.name} onChange={this.onChange} name="name" id="name" />
                    </FormGroup>
                    <Col className={'col'}>

                     <p style={{ float: 'left', color: '#B87153', outline: 'none', fontSize: '20px' }}>{this.state.name}</p>
                        <br></br>
                        <br></br>


                        <FormGroup style={{ float: 'left' }}>
                            <textarea style={{ borderStyle: 'none', resize: 'none' }} onChange={this.onChange} value={this.state.textarea} placeholder={"New Description"} name="textarea" id="textarea" />
                        </FormGroup>
                        <br></br>
                        <br></br>
                        <br></br>


                        <FormGroup className={'foto-class'} style={{clear:'both'}}>


                            
                            <svg style={{marginTop:'30px'}} xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <p style={{fontSize:'20px'}}>GÖRSEL</p>
                        </FormGroup>

                        <Button style={{ float: 'right', backgroundColor: "#C3C3C3" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg></Button>
                    </Col>
                    <br />



                </form>
            </div>
        )
    }
}


/*

<Input style={{ backgroundColor: '#E2B7A7' }} value={this.state.foto} onChange={this.onChange} name="foto" id="foto" placeholder={"Fotoğraf için url giriniz"} />



*/
