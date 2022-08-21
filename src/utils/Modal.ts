import swal from 'sweetalert';

class Modal {
  error = async () => {
    await swal('Credenciais Inválidas', {
      title: 'Error',
      icon: 'error'
    })
  }

  success = async () => {
    await swal('Tudo certo!', 'Login efetuado com sucesso.', 'success')
  }
}

export default new Modal();