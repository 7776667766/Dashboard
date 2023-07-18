import React, { useContext, useState, useEffect } from "react"
import {auth2} from '../auth/firebase'
const AuthContext = React.createContext()

export function useAuth() {
    console.log(auth2)
  return useContext(AuthContext)
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth2.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth2.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth2.signOut()
  }

  function resetPassword(email) {
    return auth2.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth2.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}