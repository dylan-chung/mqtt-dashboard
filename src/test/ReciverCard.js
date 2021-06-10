import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import Card from '@material-ui/core/Card'

const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (payload.message) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta
        title={item.topic}
        description={item.message}
      />
    </List.Item>
  )

  return (
    <Card
      title="Receiver"
    >
      <List
        size="small"
        bordered
        dataSource={messages}
        renderItem={renderListItem}
      />
    </Card>
  );
}

export default Receiver;
