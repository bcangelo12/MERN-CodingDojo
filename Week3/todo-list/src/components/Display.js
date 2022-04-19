import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Display = (props) => {
    const { newList, todoList, setTodoList } = props;
    // const { text, completed } = newList;

    const markCompleted = (todo) => {
        todo.completed = !todo.completed;
        setTodoList([...todoList]);
    };
    const styling = (completed) => {
        if (completed === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    };
    const handleDelete = (todo) => {
        const todoFiltered = todoList.filter((t) => t.id !== todo.id);
        setTodoList(todoFiltered);
    };

    return (
        <div>
            {todoList.map((todo) => (
                <Col className="mx-4">
                    <div className={styling(todo.completed)} key={todo.id}>
                        <p>{todo.text}</p>
                    </div>
                    <input
                        type="checkbox"
                        onChange={() => markCompleted(todo)}
                    />
                    <Button
                        className="mx-2"
                        variant="danger"
                        onClick={() => handleDelete(todo)}
                    >
                        Delete Task
                    </Button>
                </Col>
            ))}
        </div>
    );
};

export default Display;
