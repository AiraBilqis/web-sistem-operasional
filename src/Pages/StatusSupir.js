import React from 'react';
import { Space, Table, Tag, Button } from 'antd';

const columns = [
  {
    title: 'Nama Supir',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Plat Kendaraan Supir',
    dataIndex: 'plat',
    key: 'plat',
  },
  {
    title: 'Status (Tersedia/Tidak Tersedia)',
    key: 'status',
    dataIndex: 'status',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'green' : 'green';
          if (tag === 'Tidak Tersedia') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
      <Button style={{ backgroundColor: 'green', borderColor: 'green', color: 'white' }}>Buat Surat Jalan</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    plat: 'AB 3232 PCM',
    tags: ['Tersedia', 'Tidak Tersedia'],
  },
  {
    key: '2',
    name: 'Jim Green',
    plat: 'AB 32524 PCM',
    tags: ['Tersedia','Tidak Tersedia'],
  },
  {
    key: '3',
    name: 'Joe Black',
    plat: 'AB 32524 PCM',
    tags: ['Tersedia', 'Tidak Tersedia'],
  },
];
const StatusSupir = () => {
    return (
      <>
        <h5>Status Supir</h5>
        <Table style={{ border:'solid 1px gray' }} columns={columns} dataSource={data} />
      </>
    );
};
export default StatusSupir;