import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 50px;
`
const MainHeadline = styled.h1`
  font-size: 40px;
  color: #000;
`

class Header extends Component {
    render() {
        return(
            <HeaderRow>
                <MainHeadline>Todo List</MainHeadline>
                <h5>{this.props.todo} more dodo, {this.props.done} done</h5>
            </HeaderRow>
        );
    }
}

export default Header;