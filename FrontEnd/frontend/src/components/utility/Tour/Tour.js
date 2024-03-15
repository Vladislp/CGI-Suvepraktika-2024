import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';

const TourTest = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refDateTime = useRef(null);
  const refCinemaList = useRef(null); // Add a new ref for CinemaList
  const [open, setOpen] = useState(false);

  const steps = [
    {
      title: 'Date and Time',
      description: 'Check out the current date and time.',
      target: () => refDateTime.current,
    },
    {
      title: 'Select Cinema',
      description: 'Choose your favorite cinema.',
      target: () => refCinemaList.current, // Use the CinemaList ref
    },
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
          loading="lazy"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={refDateTime} style={{ display: 'none' }}></Button>
        <Button ref={refCinemaList} style={{ display: 'none' }}></Button>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};

export default TourTest;
