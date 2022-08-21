import AuthApi from '../services/Auth';

const useApi = () => {
  return {
    auth: new AuthApi()
  }
}

export default useApi;