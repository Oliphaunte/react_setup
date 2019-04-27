import Axios from 'axios'
import auth from './index'

export const fetchAuth = () => {
  const payload = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json' 
    },
    user: {email: 'admina@admin.com', password: 'admin123' }
  }

  return function(dispatch) {
    dispatch(auth.actions.fetchingAuth(true))

    return Axios
      .post('http://0.0.0.0:4000/api/sessions', payload)
      .then(res => dispatch(auth.actions.loadAuth(res.data.user)))
      .then(() => dispatch(auth.actions.lastLoadedAuth(Date.now())))
      .catch(err => err)
      .finally(() => dispatch(auth.actions.fetchingAuth(false)))
  }
}