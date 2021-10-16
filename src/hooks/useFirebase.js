// import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.initialize';

// initializeAuthentication();

// const useFirebase = () => {

// 	// Declaring States
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [confirmPassword, setConfirmPassword] = useState('');

// 	// Creating auth
// 	const auth = getAuth();

// 	/* // Creating user
// 	const createNewUser = (email, password) => {
// 		createUserWithEmailAndPassword(auth, email, password)
// 			.then(result => {
// 				const user = result.user;
// 				console.log(user);

// 			});
// 	} */

// 	// Events Hnadling
// 	const handleSubmit = e => {
// 		console.log(name, email, password, confirmPassword);
// 		if (password !== confirmPassword) {
// 			document.getElementById('pass-match-error').classList.add('d-block');
// 			document.getElementById('pass-match-error').classList.remove('d-none');
// 		} else {
// 			document.getElementById('pass-match-error').classList.add('d-none');
// 			document.getElementById('pass-match-error').classList.remove('d-block');
// 		}
// 		e.preventDefault();
// 	}

// 	const handleNameChange = e => {
// 		setName(e.target.value)
// 	}

// 	const handleEmailChange = e => {
// 		setEmail(e.target.value);
// 	}

// 	const handlePasswordChange = e => {
// 		setPassword(e.target.value);
// 	}

// 	const handleConfirmPasswordChange = e => {
// 		setConfirmPassword(e.target.value);
// 	}
// 	return (
// 		name,
// 		email,
// 		password,
// 		confirmPassword,
// 		handleSubmit,
// 		handleNameChange,
// 		handleEmailChange,
// 		handlePasswordChange,
// 		handleConfirmPasswordChange
// 	);
// };

// export default useFirebase;

