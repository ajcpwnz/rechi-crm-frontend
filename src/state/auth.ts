import { useCallback } from 'react'
import { atom, selector, useSetRecoilState } from 'recoil'

interface AuthUser {
  id: number;
  display_name: string;
  email: string,
  token: string,
}

export const __authUser__ = atom<Partial<AuthUser>>({
  key: '@rcmf/auth/user',
  default: {}
})


export const useUpdateUser = () => {
  const setUser = useSetRecoilState(__authUser__);

  return useCallback((userFields: Partial<AuthUser>) => {
    if(userFields.token) {
      localStorage.setItem('authToken', userFields.token);
    }

    setUser({
      display_name: userFields.display_name,
      email: userFields.email,
      id: userFields.id,
      token: userFields.token
    });
  }, [setUser])
}

export const selectIsLoggedIn = selector({
  key: '@rcmf/auth/isLoggedIn',
  get: ({ get }) => {
    const user = get(__authUser__)
    console.warn(user,'--')
    return !!user.id;
  }
})
