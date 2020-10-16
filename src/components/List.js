import React from 'react'
import { connect } from 'react-redux';
 
function List(props) {
    return (
        <div>
            <ul>
                {props.todos.map((todo) => (
                    <li>{todo.message}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
});

export default connect(mapStateToProps) (List);
