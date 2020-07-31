import { shade } from 'polished';
import styled from 'styled-components';
import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: stretch;
`;

export const Content = styled.div`
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	max-width: 700px;

	form {
		margin: 80px 0;
		width: 340px;
		text-align: center;

		h1 {
			margin-bottom: 24px;
		}

		a {
			display: block;
			margin-top: 10px;

			color: #f4ede8;
			transition: color 0.2s;
			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}
	}

	> a {
		display: flex;
		align-items: center;

		color: #ff9000;
		transition: color 0.2s;
		&:hover {
			color: ${shade(0.2, '#ff9000')};
		}

		svg {
			margin-right: 16px;
		}
	}
`;

export const Background = styled.div`
	flex: 1px;
	background: url(${signInBackground}) no-repeat center;
	background-size: cover;
`;
