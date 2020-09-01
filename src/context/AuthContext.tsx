import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface Credentials {
	email: string;
	password: string;
}

interface AuthContextData {
	user: any;
	signIn(credentials: Credentials): Promise<void>;
}

interface AuthState {
	token: string;
	user: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		const user = localStorage.getItem('@GoBarber:user');
		const token = localStorage.getItem('@GoBarber:token');

		if (user && token) {
			return { user: JSON.parse(user), token };
		}

		return {} as AuthState;
	});

	const signIn = useCallback(async ({ email, password }: Credentials) => {
		const response = await api.post('/sessions', { email, password });

		const { token, user } = response.data;

		localStorage.setItem('@GoBarber:token', token);
		localStorage.setItem('@GoBarber:user', JSON.stringify(user));

		setData({ token, user });
	}, []);

	// const signOut = useCallback(() => { }, []);

	return (
		<AuthContext.Provider value={{ user: data.user, signIn }}>
			{children}
		</AuthContext.Provider>
	);
};

function useAuth(): AuthContextData {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within a AuthProvider');
	}

	return context;
}

export { AuthProvider, useAuth };
