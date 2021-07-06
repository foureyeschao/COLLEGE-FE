import { User } from 'utils/interfaceCollections'

const localStorageKey = '__auth_provider_token__'

export const getToken = () => {
  const token = window.localStorage.getItem(localStorageKey)
  return token
}

export const handleUserResponse = ({ user }: {user: User}) => {
  window.localStorage.setItem(localStorageKey,user.token || '')
  return user
}

export const login = (data:{username: string,password: string}) => {
  
}