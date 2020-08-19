import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErros from '../../utils/getValidationErros';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
		try {
			formRef.current?.setErrors({});

			const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
				password: Yup.string().min(6, 'Mínimo de 6 digitos'),
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
			<Background />
			<Content>
				<img src={logo} alt="logo" />

				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Faça seu cadastro</h1>
					<Input name="name" icon={FiUser} placeholder="Nome" />
					<Input name="email" icon={FiMail} placeholder="E-mail" />
					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Senha"
					/>
					<Button type="submit">Cadastrar</Button>
				</Form>

				<a href="createCount">
					<FiArrowLeft />
					Voltar para logon
				</a>
			</Content>
		</Container>
	);
};
export default SignUp;