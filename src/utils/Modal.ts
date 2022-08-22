import swal from 'sweetalert';

class Modal {
  error = async () => {
    await swal('Por favor, tente novamente', {
      title: 'Credenciais Inválidas',
      icon: 'error'
    })
  }

  success = async () => {
    await swal('Tudo certo!', 'Login efetuado com sucesso.', 'success')
  }

  invalidDocument = async () => {
    await swal('Documento inválido, tente novamente', '', 'warning')
  }
}

export default new Modal();