import React, { useState } from "react";
import { Login } from "unauthenticated-app/login";
import { Card, Typography } from "antd";
import styled from "@emotion/styled";
import logo from 'assets/MCollegeLogo1.svg'


export const UnauthenticatedApp = () => {
  const [error,setError] = useState<Error | null>(null)
   return (
      <Container>
         <Header />
         <ShadowCard>
            <Typography.Title level={4}>
               Login
            </Typography.Title>
            {error ? <Typography.Text type={'danger'}>{error}</Typography.Text>:null}
            <Login onError={setError} />
         </ShadowCard>
      </Container>
   );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;


const Header = styled.header`
background: url(${logo}) no-repeat center;
padding: 5rem 0;
background-size: 20rem;
width: 100%;
`



const ShadowCard = styled(Card)`
width: 40rem;
min-height: 36rem;
padding: 3.2rem 4rem;
border-radius: 0.3rem;
box-sizing: border-box;
box-shadow: rgba(0,0,0,0.1) 0 0 10px;
text-align: center;


`
