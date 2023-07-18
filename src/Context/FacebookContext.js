// import { useContext, createContext, useEffect, useState } from 'react';
// import {
//   FacebookAuthProvider,
//   signInWithPopup,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { auth2 } from '../auth/firebase';

// const FacebookAuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   const googleSignIn = () => {
//     const provider = new FacebookAuthProvider();
//     signInWithRedirect(auth2, provider)
//   };

//   const logOut = () => {
//       signOut(auth2)
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth2, (currentUser) => {
//       setUser(currentUser);
//       console.log('User', currentUser)
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <FacebookAuthContext.Provider value={{ googleSignIn, logOut, user }}>
//       {children}
//     </FacebookAuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(FacebookAuthContext);
// };