import styled, { css } from 'styled-components';

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
	background: #232129;
	border-radius: 10px;
	border: 2px solid #232129;
	padding: 16px;
	width: 100%;
	color: #666360;

	display: flex;
	align-items: center;

	& + div {
		margin-top: 10px;
	}

	${props =>
		props.isFilled &&
		css`
			color: #ff9000;
		`}

	${props =>
		props.isFocused &&
		css`
			color: #ff9000;
			border-color: #ff9000;
		`}

	input {
		flex: 1;
		background: transparent;
		border: 0;
		color: #f4ede8;

		&:-webkit-autofill {
			transition: background-color 50000s ease-in-out 0s;
			-webkit-box-shadow: #232129;
			-webkit-text-fill-color: #f4ede8 !important;
		}

		&::placeholder {
			color: #666360;
		}
	}

	svg {
		margin-right: 16px;
	}
`;
