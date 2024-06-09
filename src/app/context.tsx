'use client';

import React from 'react';

interface ModalContext {
	modalIsActive: boolean;
	setModalIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	modalContent: React.ReactNode;
	setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

export const ModalContext = React.createContext<ModalContext>({
	modalIsActive: false,
	setModalIsActive: () => {},
	modalContent: null,
	setModalContent: () => {}
});

interface ModalProviderProps {
	children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [modalIsActive, setModalIsActive] = React.useState(false);
	const [modalContent, setModalContent] = React.useState<React.ReactNode>(null);

	return (
		<ModalContext.Provider
			value={{ modalIsActive, setModalIsActive, modalContent, setModalContent }}
		>
			{children}
		</ModalContext.Provider>
	);
};
