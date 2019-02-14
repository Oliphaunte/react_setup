import { IS_LOGGED_IN } from '~/app/store/constants'

const initial_state = { isLoggedIn: false }

export function auth(state=initial_state, action) {
  switch(action.type) {
    case IS_LOGGED_IN:
      return {...state, isLoggedIn: action.isLoggedIn}
    default:
      return state
  }
}