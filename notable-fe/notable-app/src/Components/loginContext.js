import React, {useContext, useState} from 'react';

// This can be used as a basic template for context. Makes your program more manageable by having it all in one file
const LoginContext = React.createContext();
// const UpdateLoginContext = React.createContext();

const UserInfoContext = React.createContext({});
// const UpdateUserInfoContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext)
}

export function useUpdateLogin() {
  return useContext(UpdateLoginContext)
}

export function useUserContext() {
  return useContext(UserInfoContext)
}

// export function useUpdateUserInfo() {
//   return useContext(UpdateUserInfoContext)
// }

export function LoginProvider({children}) {
  const [permit, setPermit] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  // function togglePermit() {
  //   setPermit(prevPermit => !prevPermit);
  // }

  // function updateUserInfo(user) {
  //   setUserInfo(user);
  // }

  return (
    // There is now a context provider for the theme and the button. You need both
    <LoginContext.Provider value={[permit, setPermit]}>
      {/* <UpdateLoginContext.Provider value={togglePermit}> */}
        <UserInfoContext.Provider value={[userInfo,setUserInfo]}>
            {children}
        </UserInfoContext.Provider>
      {/* </UpdateLoginContext.Provider> */}
    </LoginContext.Provider>
  )

}