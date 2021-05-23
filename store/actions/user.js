import { auth, provider } from '../../config/firebase'
import { setUserSignIn, setUserSignOut } from '../features/user'

export const getLogin = () => {
  auth
    .signInWithPopup(provider)
    .then(result => {
      dispatch(setUserSignIn(result.user))
    })
    .catch(err => console.log(err))
}

export const getLogout = () => {
  auth
    .signOut()
    .then(() => {
      dispatch(setUserSignOut())
    })
    .catch(err => console.error(err))
}
