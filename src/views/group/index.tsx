import React, { useEffect, useState } from 'react'
import axios from 'axios'
import config from 'config'
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMount } from 'utils/hooks';

interface IParam {
  groupId: string;
}

interface IGroups {
  id: string;
  name: string;
  responsable: string;
  students: { id: string, firstname: string, lastname: string, age: number }[];

}


export const GroupScreen = () => {
  const { groupId } = useParams<IParam>()
  const [group, setGroup] = useState<IGroups | null>(null)

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

  return (
    <Container>
      <h2>Group List</h2>
      <GroupScreen group={group} />
      {/*          <table>
            <thead>
               <tr>
                  <th>Group</th>
                  <th>Responsable</th>
                  <th>Local</th>
                  <th>Remaining</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>{group?.name}</td>
                  <td>{group?.responsable}</td>
               </tr>
            </tbody>
         </table> */}
    </Container>)


}

const Container = styled.div`
padding: 1.2rem
`