import styled from '@emotion/styled'
import { Row } from 'components/lib'
import { useAuth } from 'context/auth-context'
import React from 'react'
import { ReactComponent as SoftwareLogo } from 'assets/MCollegeLogo2.svg'
import { Button, Dropdown,Menu } from 'antd'

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'16rem'} />
          <h3>Class</h3>
          <h3>Student</h3>
          <h3>Teacher</h3>
        </HeaderLeft>
        <HeaderRight gap={true} >
         <Dropdown overlay={
         <Menu>
             <Menu.Item key={'logout'}>
               <Button type={'link'} onClick={logout}>Logout</Button>
             </Menu.Item> 
         </Menu>
        }>
          <Button type={'link'} onClick={e => e.preventDefault()}>Hi,{user?.username}</Button>

         </Dropdown>
        </HeaderRight>
      </Header>
      <Main>

      </Main>
    </Container>
  )
}

const Container = styled.div`
display: grid;
grid-template-rows: 6rem 1fr 6rem;
height: 100vh;
`

const Header = styled(Row)`
box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
z-index: 1;
`
const HeaderLeft = styled(Row)`
 
`
const HeaderRight = styled(Row)`
align-items: center;
`

const Main = styled.main`
`