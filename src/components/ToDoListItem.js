import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 10px;
`
const DeleteButton = styled.button`
    display: block;
    width: 50px;
    height: 80%;
    background: red;
    border: 1px solid red;
    border-radius: 5px;
    margin-right: 5px;
    outline: none;
    cursor: pointer;
`
const ImportantButton = styled.button`
    width: 50px;
    height: 80%;
    background: green;
    border: 1px solid green;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 29px;
`
const ToDoText = styled.p`
    padding-left: 20px;
    cursor: pointer;
`
const ListItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-top: 3px;
`

class ToDoListItem extends Component {
    render() {
        let classNames = '';
        if (this.props.done) {
            classNames += ' done'
        }
        if (this.props.important) {
            classNames += ' important'
        }
        return(
            <ListItem>
                <ToDoText onClick={this.props.onToggleDone} className={classNames}>{this.props.text}</ToDoText>
                <ButtonsContainer>
                    <DeleteButton onClick={this.props.onDeleted}>
                        <img src="https://img.icons8.com/android/24/000000/trash.png" alt="bucket" />
                    </DeleteButton>
                    <ImportantButton onClick={this.props.onToggleImportant}>!</ImportantButton>
                </ButtonsContainer>
            </ListItem>
        );
    }
}

export default ToDoListItem;