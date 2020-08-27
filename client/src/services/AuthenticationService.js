import Api from '@/services/Api'

class AuthenticationService {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

export default new AuthenticationService()
