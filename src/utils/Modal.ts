import swal from 'sweetalert';

class Modal {
  credentialsError = async () => {
    await swal('Credenciais Inválidas', 'Por favor, tente novamente', 'error');
  }

  invalidDocument = async () => {
    await swal('Documento inválido', 'Por favor, tente novamente', 'warning');
  }

  error = async() => {
    await swal('Ops, algo deu errado...', 'Por favor, tente novamente', 'error');
  }

  userNotFound = async() => {
    await swal('Dados não cadastrados', 'Registre sua conta antes de fazer login', 'warning')
  }

  success = async () => {
    await swal('Tudo certo!', 'Login efetuado com sucesso.', 'success');
  }
}

export default new Modal();