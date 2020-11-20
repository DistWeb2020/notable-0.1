import React, {useContext, useState} from 'react';

// This can be used as a basic template for context. Makes your program more manageable by having it all in one file
const LoginContext = React.createContext();
const UpdateLoginContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext)
}

export function useUpdateLogin() {
  return useContext(updateLoginContext)
}

export function LoginProvider({children}) {
  const [permit, setPermit] = useState(false);

  function togglePermit() {
    setDarkTheme(prevPermit => !prevPermit)
  }

  return (
    // There is now a context provider for the theme and the button. You need both
    <LoginContext.Provider value={permit}>
      <UpdateLoginContext.Provider value={togglePermit}>
        {children}
      </UpdateLoginContext.Provider>
    </LoginContext.Provider>
  )

}







