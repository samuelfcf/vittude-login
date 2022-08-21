import api from './Api'

interface PatientSignInParameters {
  email: string;
  password: string;
}

interface PsicoSignInParameters extends Omit<PatientSignInParameters, 'email'> {
  document: string;
}

class Auth {
  patientSignIn = async (body: PatientSignInParameters) => {
    const response = await api.post('/auth/psico', body);
    return response;
  }

  psicoSignIn = async (body: PsicoSignInParameters) => {
    const response = await api.post('/auth/patient', body);
    return response;
  }
}

export default Auth;