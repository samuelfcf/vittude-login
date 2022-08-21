import api from './Api'

interface PatientSignInParameters {
  email: string;
  password: string;
}

interface PsicoSignInParameters extends Omit<PatientSignInParameters, 'email'> {
  document: string;
}

class Auth {
  patientSignIn = async ({email, password}: PatientSignInParameters) => {
    const response = await api.post('/auth/sign-in', {email, password});
    return response;
  }

  psicoSignIn = async ({document, password}: PsicoSignInParameters) => {
    const response = await api.post('/auth/sign-in', {document, password});
    return response;
  }
}

export default Auth;