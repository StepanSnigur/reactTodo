import React, { Component } from 'react';
import styled from 'styled-components';

import '../App.css'

const SearchInputRow = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`
const SearchInputStyle = styled.input`
    width: 60%;
    height: 100%;
    border: 1px solid #eee;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 4px;
`
const ButtonsWrapper = styled.div `
    height: 100%;
    width: 38%;
    display: flex;
`
const ControlButton = styled.button`
    height: 100%;
    width: calc(100% / 3);
    border: 1px solid #000;
    outline: none;
    margin-right: -1px;
    cursor: pointer;
    background: #fff;

    &:first-child {
        border-radius: 6px 0 0 6px;
    }
    &:last-child {
        margin: 0;
        border-radius: 0 6px 6px 0;
    }
    &:hover {
        background: grey;
    }
`

class SearchForm extends Component {
    state = {
        term: ''
    }
    searchButtons = [
        {name: 'all', text: 'All'},
        {name: 'active', text: 'Active'},
        {name: 'done', text: 'Done'}
    ]
    onSearchChange = (e) => {
        this.setState({
            term: e.target.value
        })
        this.props.onSearchChange(e.target.value)
    }
    render() {
        const buttons = this.searchButtons.map(( {name, text} ) => {
            const isActive = this.props.filter === name
            return <ControlButton 
                onClick={() => this.props.onFilterChange(name)} 
                className={isActive ? 'activeBtn' : false} 
                key={name}
            >
                {text}
            </ControlButton>
        })
        return (
            <SearchInputRow>
                <SearchInputStyle onChange={this.onSearchChange} placeholder="type to search" value={this.state.term} />
                <ButtonsWrapper>
                    {buttons}
                </ButtonsWrapper>
            </SearchInputRow>
        );
    }
}

export default SearchForm;