import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { v4 } from "uuid";

function TodoForm(props) {
    const { todoList, setTodoList } = props;
    const [todoText, setTodoText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newList = {
            id: v4(),
            text: todoText,
            completed: false,
        };
        setTodoList([...todoList, newList]);
        e.target.reset();
        setTodoText("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mx-3" controlId="todoText">
                <Form.Label>New ToDo List Task: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Task"
                    name="todoText"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
            </Form.Group>
            <Button className="my-2" variant="primary" type="submit">
                Add Task
            </Button>
        </Form>
    );
}

export default TodoForm;
