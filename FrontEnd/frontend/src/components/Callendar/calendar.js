import React from 'react';
import { Badge, Button, Calendar } from 'antd';

const eventListData = {
  8: [
    { type: 'warning', content: 'This is warning event.' },
    { type: 'success', content: 'This is usual event.' },
  ],
  10: [
    { type: 'warning', content: 'This is warning event.' },
    { type: 'success', content: 'This is usual event.' },
    { type: 'error', content: 'This is error event.' },
  ],
  15: [
    { type: 'warning', content: 'This is warning event' },
    { type: 'success', content: 'This is very long usual event......' },
    { type: 'error', content: 'This is error event 1.' },
    { type: 'error', content: 'This is error event 2.' },
    { type: 'error', content: 'This is error event 3.' },
    { type: 'error', content: 'This is error event 4.' },
  ],
};

const getMonthData = (value) => (value.month() === 8 ? 1394 : null);

const Testing = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = eventListData[value.date()] || [];
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div>
      <Button href="/">Esilehele</Button>
      <Button href="/">Valin see kuupäeva</Button>
      <Calendar cellRender={cellRender} />
    </div>
  );
};

export default Testing;