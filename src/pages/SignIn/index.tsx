import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErros from '../../utils/getValidationErros';
import AuthContext from '../../context/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
		try {
			formRef.current?.setErrors({});

			const schema = Yup.object().shape({
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
				password: Yup.string().required('Senha obrigatória'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			const errors = getValidationErros(err);
			formRef.current?.setErrors({ ...errors });
			console.log(err);
		}
	}, []);

	return (
		<Container>
			<Content>
				<img src={logo} alt="logo" />

				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Faça seu logon</h1>

					<Input name="email" icon={FiMail} placeholder="E-mail" />
					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Senha"
					/>

					<Button type="submit">Entrar</Button>
					<a href="forgot">Esqueci minha senha</a>
				</Form>

				<a href="createCount">
					<FiLogIn />
					Criar conta
				</a>
			</Content>
			<Background />
		</Container>
	);
};
export default SignIn;