import React, { ReactNode, useState } from 'react'
import { AuthForm, User } from 'utils/interfaceCollections'
import * as auth from 'auth-provider'
import { http } from "utils/http"
import { useAsync, useMount } from 'utils/hooks'
import { FullPageLoading } from 'components/lib'

const bootstrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await http('users', { token })
    user = data.user
  }
  return user
}

const AuthContext = React.createContext<{
  user: User | null,
  login: (form: AuthForm) => Promise<void>,
  logout: () => Promise<void>
} | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {data:user,error,isLoading,isIdle,isError,run,setData:setUser} = useAsync<User | null>()
  
  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))

  useMount(() => {
    run(bootstrapUser()) 
  })

  if(isIdle || isLoading){
    return <FullPageLoading />
  }
  return <AuthContext.Provider children={children} value={{ user, login, logout }} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used in AuthProvider')
  }
  return context
}