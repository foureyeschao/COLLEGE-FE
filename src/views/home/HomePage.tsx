import React from "react";
import { List, Card, Badge } from 'antd'
import { data } from 'data'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {

  return (<List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>
          {item.groupe.map(s => <span key={s.id}><Link to={`/groups/${s.id}`}>{s.name}</Link><Badge
            count={s.rest}
            offset={[80, 0]}
            style={{ backgroundColor: '#52c41a' }}
          /><br /></span>)}
        </Card>
      </List.Item>
    )}
  />);
};
