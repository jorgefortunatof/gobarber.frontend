import React, { createContext, useContext, useCallback } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextDate {
	addToast(): void;
	removeToast(): void;
}

const ToastContext = createContext<ToastContextDate>({} as ToastContextDate);

const ToastProvider: React.FC = ({ children }) => {
	const addToast = useCallback(() => {
		console.log('addToast');
	}, []);

	const removeToast = useCallback(() => {
		console.log('removeToast');
	}, []);

	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<ToastContainer />
		</ToastContext.Provider>
	);
};

function useToast(): ToastContextDate {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error('useToast must be use with ToastProvider');
	}

	return context;
}

export { useToast, ToastProvider };
