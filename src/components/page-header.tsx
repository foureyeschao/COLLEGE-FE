import styled from '@emotion/styled'
import { Row } from 'components/lib'
import { useAuth } from 'context/auth-context'
import React from 'react'
import { ReactComponent as SoftwareLogo } from 'assets/MCollegeLogo2.svg'
import { Button, Dropdown, Menu } from 'antd'
import { resetRoute } from 'utils/hooks'

export const PageHeader = () => {
  const { logout, user } = useAuth()
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type={'link'} onClick={() => resetRoute()}>
          <SoftwareLogo width={'15rem'} height={'6rem'} />
        </Button>

        <h3>Class</h3>
        <h3>Student</h3>
        <h3>Teacher</h3>
      </HeaderLeft>
      <HeaderRight gap={true} >
        <Dropdown overlay={
          <Menu>
            <Menu.Item key={'logout'}>
              <Button type={'link'} onClick={() => { logout(); }}>Logout</Button>
            </Menu.Item>
          </Menu>
        }>
          <Button type={'link'} onClick={e => e.preventDefault()}>Hi,{user?.username}</Button>

        </Dropdown>
      </HeaderRight>
    </Header>
  )
}

const Header = styled(Row)`

box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
z-index: 1;
`
const HeaderLeft = styled(Row)`
 
`
const HeaderRight = styled(Row)`
align-items: center;
`