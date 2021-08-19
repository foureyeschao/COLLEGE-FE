import React from 'react'
import { Table } from 'antd'
import styled from '@emotion/styled';

export interface StudentsProps {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
}

export const StudentList = ({ students }: { students: StudentsProps[] }) => {

  return (
    <Table pagination={false} columns={[
      { title: 'Firstname', dataIndex: 'firstname', key: 'firstname' },
      { title: 'Lastname', dataIndex: 'lastname', key: 'lastname' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
    ]} dataSource={students} />


  )

}

