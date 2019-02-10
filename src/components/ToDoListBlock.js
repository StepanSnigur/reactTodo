import React, { Component } from 'react';
import styled from 'styled-components';

import ToDoListItem from '../components/ToDoListItem';

const ToDoWrapper = styled.div`
    margin-top: 25px;
`

class ToDoList extends Component {
    RenderTasks = () => {
        return (
            <div>
                {
                    this.props.todos.map((item) => {
                        return (
                            <ToDoListItem 
                                onDeleted={() => this.props.onDeleted(item.id)}
                                onToggleImportant={() => this.props.onToggleImportant(item.id)}
                                onToggleDone={() => this.props.onToggleDone(item.id)}
                                key={item.id}
                                {...item}
                            />
                        );
                    })
                }
            </div>
        );
    }
    render() {
        return (
            <ToDoWrapper>
                {this.RenderTasks()}
            </ToDoWrapper>
        );
    }
}

export default ToDoList;