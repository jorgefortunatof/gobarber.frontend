import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
	height: 56px;
	width: 100%;
	margin-top: 16px;
	padding: 0 16px;
	border-radius: 10px;
	border: 0;
	font-weight: 500;
	color: #312e38;

	background: #ff9000;
	transition: background-color 0.2s;

	&:hover {
		background: ${shade(0.2, '#ff9000')};
	}
`;
