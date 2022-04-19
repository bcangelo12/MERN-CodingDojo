import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        console.log("Welcome, ", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div>
            <Form onSubmit={createUser}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                {/* <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    /> */}
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name="lastName"
                        placeholder="Last Name"
                    />
                </Form.Group>
                {/* <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                /> */}
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <div>
                <p>Your Form Data:</p>
                <p>
                    <label>First Name: {firstName}</label>
                </p>
                <p>
                    <label>Last Name: {lastName}</label>
                </p>
                <p>
                    <label>Email: {email}</label>
                </p>
                <p>
                    <label>Password: {password}</label>
                </p>
                <p>
                    <label>Confirm Password: {confirmPassword}</label>
                </p>
            </div>
        </div>
    );
};

export default UserForm;
