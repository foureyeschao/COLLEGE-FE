import React from 'react'
import styled from '@emotion/styled'
import { PageHeader } from 'components/page-header'
import { HomePage } from 'views/home/HomePage'
import { GroupScreen } from 'views/group/'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Router>
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/groups'} component={HomePage} />
            <Route exact path={'/groups/:groupId'} component={GroupScreen} />
          </Switch>
        </Router>
      </Main>
    </Container>
  )
}

const Container = styled.div`
display: grid;
grid-template-rows: 6rem 1fr 6rem;
height: 100vh;
`
const Main = styled.main`
padding: 2rem;
`