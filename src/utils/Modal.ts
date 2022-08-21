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
}

export default new Modal();