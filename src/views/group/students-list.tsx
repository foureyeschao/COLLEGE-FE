import React from 'react'
import { Table } from 'antd'
import styled from '@emotion/styled';

interface StudentsProps {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
}

export const StudentList = (students: StudentsProps[]) => {

  return (
    <Table pagination={false} />


  )

}

