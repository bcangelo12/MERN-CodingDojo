import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

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
        setHasBeenSubmitted(true);
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is required.");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters!");
        } else {
            setFirstNameError("");
        }
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last Name is required.");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters!");
        } else {
            setLastNameError("");
        }
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required.");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("");
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required.");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            setPasswordError("");
        }
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required.");
        } else if (e.target.value.length < 8) {
            setConfirmPasswordError(
                "Confirm Password must be at least 8 characters!"
            );
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    };
    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for submitting your form!";
    //     } else {
    //         return "Welcome, please submit your form.";
    //     }
    // };

    return (
        <form onSubmit={createUser}>
            {/* <h3>{formMessage()}</h3> */}
            {hasBeenSubmitted ? (
                <h3>Thank you for submitting your form!</h3>
            ) : (
                <h3>Welcome, please submit your form.</h3>
            )}
            <div>
                <label>First Name: </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstName}
                />
                {firstNameError ? (
                    <p>{firstNameError}</p>
                ) : (
                    <p>{firstNameError}</p>
                )}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={handleLastName} />
                {lastNameError ? (
                    <p>{lastNameError}</p>
                ) : (
                    <p>{lastNameError}</p>
                )}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={handleEmail} />
                {emailError ? <p>{emailError}</p> : <p>{emailError}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                />
                {passwordError ? (
                    <p>{passwordError}</p>
                ) : (
                    <p>{passwordError}</p>
                )}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                />
                {confirmPasswordError ? (
                    <p>{confirmPasswordError}</p>
                ) : (
                    <p>{confirmPasswordError}</p>
                )}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;
