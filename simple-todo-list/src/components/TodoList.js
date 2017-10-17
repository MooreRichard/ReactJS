import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Grid, Row, Col, Form, FormGroup, FormControl} from 'react-bootstrap';
import {Card, CardHeader, CardText, CardTitle, FlatButton, Checkbox} from 'material-ui';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import UndoIcon from 'material-ui/svg-icons/content/undo';

export class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            enteredText: '',
            todoListItems:[]
        }

        this.listItemStyles ={};
        this.listItemStyles.checkedStyle = {'textDecoration': 'lineThrough'};
        this.listItemStyles.unCheckedStyle = {'textDecoration': 'none'};
        
    }

    handleEnterKeyPress = (event) =>{
        if(event.key === 'Enter'){
            var newItem = <ListItem leftCheckbox={<Checkbox onCheck={this.handleCompletedCheckbox}/>} rightIcon={<div style={{'display':'inline-flex', 'width':'45px'}}><UndoIcon /> <DeleteIcon /></div>}  key={this.state.todoListItems.length + 1} primaryText={this.state.enteredText}/>
            this.state.todoListItems.push(newItem);
            this.setState({todoItems: this.state.todoListItems, enteredText: ''});
        }
    }

    handleCompletedCheckbox = (event, val) =>{
        if(val === true){
            this.state.todoListItems.forEach((listItem) =>{
                if(listItem.checked == true){
                    console.log(listItem.props)
                }else{
                }
            });
        }
    }

    handleSaveBtnClick = () =>{
        var newItem = <ListItem leftCheckbox={<Checkbox />} key={this.state.todoListItems.length + 1} primaryText={this.state.enteredText}/>
        this.state.todoListItems.push(newItem);
        this.setState({todoItems: this.state.todoListItems, enteredText: ''});
    }

    render(){
        return(
            <Card style={{'width':'50%', 'marginLeft': '25%', 'marginTop': '5%'}}>
                <CardHeader>
                    <h4>{this.state.todoListItems.length + ' Tasks'}</h4>
                </CardHeader>
                <CardText>
                <Grid fluid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <TextField style={{'width':'100%'}} hintText="Enter your task and press enter to save it."  value={this.state.enteredText} onKeyPress={this.handleEnterKeyPress} onChange={(e, val) =>{ this.setState({enteredText: val})}}/>
                            {/* <FlatButton style={{'width':'20%'}} label="Save Task" onClick={this.handleSaveBtnClick}/> */}
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
