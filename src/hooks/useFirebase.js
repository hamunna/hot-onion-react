import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();

const useFirebase = () => {

	// State Declerations
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Create auth
	const auth = getAuth();

	// Creating user
	const createNewUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
				
			});
	}


	return (
		<div>
			
		</div>
	);
};

export default useFirebase;

