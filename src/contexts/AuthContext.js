import { useContext, useState, useEffect, createContext } from 'react';
import { auth } from '../services/Firebase';
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  
  const signup = (email, password, fullName) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          ref.user.updateProfile({
            displayName: fullName,
          });
          resolve(ref);
        })
        .catch((error) => reject(error));
    });
    return promise;
  };
  
  const signin = (email, password) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((ref) => {
          resolve(ref);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  };
  
  const signout = () => {
    return auth.signOut();
  };
  
  // todo: implementar password reset en segunda etapa del sitio
  // const passwordReset = (email) => {
  //   let promise = new Promise(function (resolve, reject) {
  //     auth
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         resolve(`Password Reset Email sent to ${email}`);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  //   return promise;
  // };
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [currentUser]);

  const value = { currentUser, signup, signin, signout };
  
return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
