import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Grid, Row, Col, Form, FormGroup, FormControl} from 'react-bootstrap';
import {Card, CardHeader, CardText, CardTitle, FlatButton, Checkbox} from 'material-ui';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


export class TodoList extends Component{
    
    listItemStyles = {};
    constructor(props){
        super(props);

        this.state = {
            enteredText: '',
            todoListItems:[]
        }
        
        this.listItemStyles.checkedStyle = {'textDecoration': 'lineThrough'};
        this.listItemStyles.unCheckedStyle = {'textDecoration': 'none'};
        
    }

    handleEnterKeyPress = (event) =>{
        if(event.key === 'Enter'){
            let idx = this.state.todoListItems.length + 1;
            let newItem = <ListItem style={this.listItemStyles.unCheckedStyle} onClick={(e) =>{this.handleCompletedClick(e,idx, event)}} rightIconButton={<DeleteIcon onClick={(e) =>{this.handleDeleteButtonClick(idx, event)}}/>} secondaryText={'Created on ' + new Date(Date.now()).toLocaleDateString()}  key={idx} primaryText={this.state.enteredText}/>
            this.state.todoListItems.push(newItem);
            this.setState({todoItems: this.state.todoListItems, enteredText: ''});
        }
    }

    handleCompletedClick = (e, idx, event) =>{
        this.state.todoListItems.forEach((item)=>{
            if(item.key.toString() === idx.toString()){
                console.log('found matching id: ' + idx.toString())
            }
        })

    }


    handleDeleteButtonClick = (idx, event) =>{
        console.log('selected idx is ' + idx);
        let results = [];
        this.state.todoListItems.forEach((item) =>{
            if(item.key.toString() !== idx.toString()){
                results.push(item);
            }
        });
        this.setState({todoListItems: results});
    }


    render(){
        return(
            <Card style={{'width':'50%', 'marginLeft': '25%', 'marginTop': '5%'}}>
                <CardHeader>
                    <h4>{this.state.todoListItems.length + ' Tasks Created'}</h4>
                </CardHeader>
                <CardText>
                <Grid fluid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <TextField style={{'width':'100%'}} hintText="Enter your task and press enter to save it."  value={this.state.enteredText} onKeyPress={this.handleEnterKeyPress} onChange={(e, val) =>{ this.setState({enteredText: val})}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <List style={{'marginLeft':'-20px'}}>
                                {this.state.todoListItems}
                            </List>
                        </Col>
                    </Row>
                </Grid>
                </CardText>
            </Card>
        );
    }
}
