import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Modal, Breadcrumb } from 'antd';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../config/firebase';

const StatusSupir = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

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
          <Button style={{ backgroundColor: 'green', borderColor: 'green', color: 'white' }} onClick={showModal}>Buat Surat Jalan</Button>
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

    return (
      <>
        <Breadcrumb
          separator=">"
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Status Supir',
              href: 'javascript:void(0)'
            }
          ]}
        />
        <p>Di bawah ini disajikan Data Tabel Status Supir, terdapat tombol berisi form untuk membuat "Surat Jalan"</p>
        <Table style={{ border:'solid 1px gray' }} columns={columns} dataSource={data} />
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
};
export default StatusSupir;