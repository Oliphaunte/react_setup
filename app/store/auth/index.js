import Axios from 'axios'
import { createSlice } from 'redux-starter-kit'

const initialState = {
  isFetching: false,
  isLoading: false, 
  isLoaded: false,
  lastLoaded: null,
  data: null
}

const reducers = {
  fetchingAuth: (state, action) => { state.isFetching = action.payload },
  loadingAuth: (state, action) => { state.isLoading = action.payload },
  loadedAuth: (state, action) => { state.isLoaded = action.payload },
  loadAuth: (state, action) => { state.data = action.payload },
  lastLoadedAuth: (state, action) => { state.lastLoadedAuth = action.payload }
}

export const auth = createSlice({
  slice: 'auth',
  initialState,
  reducers
})

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