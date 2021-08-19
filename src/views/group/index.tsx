import React, {useState } from 'react'
import axios from 'axios'
import config from 'config'
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMount } from 'utils/hooks';
import { Row } from 'components/lib'
import { StudentList, StudentsProps } from './students-list';

interface IParam {
  groupId: string;
}

interface IGroups {
  id: string;
  name: string;
  responsable: string;
  students: { student: StudentsProps[] }
};



export const GroupScreen = () => {
  const { groupId } = useParams<IParam>()
  const [group, setGroup] = useState<IGroups>()

  useMount(() => {
    axios({
      url: `${config.mockApi}/groups?id=${groupId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      console.log('log:', response.data.data.result[0])
      const res = response.data.data.result[0]
      setGroup(res)

    })
  })
  console.log(group)
  return (
    <Container>
      <Header between={true}>
      <HeaderLeft gap={false}>
        <h3>Group {group?.name}</h3>
      </HeaderLeft>
      <HeaderRight gap={true} >
        <h3>Responsable: {group?.responsable}</h3>
      </HeaderRight>
    </Header>
      <StudentList students={group!?.students.student} />
    </Container>)


}

const Container = styled.div`
padding: 1.2rem
`

const Header = styled(Row)`
 margin-bottom: 2rem;
`
const HeaderLeft = styled(Row)`
 
`
const HeaderRight = styled(Row)`
align-items: center;
`