import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
	const navigate = useNavigate();
	const submit = () => {
		navigate('/');
	};
	return (
		<div className="flex">
			<div className="bg-blue-100 h-screen" style={{ minWidth: '400px' }}>
				<h2>ASCF</h2>
				<div className="p-inputgroup">
					<span className="p-inputgroup-addon">
						<MdPersonOutline size="20" />
					</span>
					<InputText placeholder="Username" />
				</div>
				<div className="p-inputgroup">
					<span className="p-inputgroup-addon">
						<MdLockOutline size="20" />
					</span>
					<InputText placeholder="Username" />
				</div>
				<div>
					<Button label="login" onClick={submit} />
				</div>
			</div>
			<div className="bg-blue-500 h-screen w-full flex align-items-center justify-content-center">
				<h1>Aplicação Simples de Controle Financeiro</h1>
			</div>
		</div>
	);
};
