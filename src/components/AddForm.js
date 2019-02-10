import React, { Component } from 'react';
import styled from 'styled-components';


const FormInputRow = styled.form`
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`
const StyledInput = styled.input`
    width: 86%;
    height: 100%;
    border: 1px solid #eee;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    margin-right: 4px;
    font-size: 20px;
`
const AddTaskButton = styled.button`
    height: 100%;
    width: 12%;
    color: #000;
    border: 1px solid #000;
    border-radius: 4px;
    outline: none;
    background: #fff;
    cursor: pointer;
`

class AddForm extends Component {

    state = {
        task: ''
    }

    onLabelChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.task)
        this.setState({
            task: ''
        })
    }
    render() {
        return (
            <FormInputRow onSubmit={this.onSubmit}>
                <StyledInput value={this.state.task} type="text" onChange={this.onLabelChange} placeholder="What needs to be done?" />
                <AddTaskButton>Add</AddTaskButton>
            </FormInputRow>
        );
    }
}

export default AddForm;