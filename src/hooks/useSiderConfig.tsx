import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useNavigate } from 'react-router-dom';

export const useSiderConfig = (): { siderConfig: ItemType[] } => {
  const navigate = useNavigate();

  const siderConfig = [
    {
      key: '/users_page',
      icon: <UserOutlined />,
      label: 'Страница пользователей',
      onClick: () => navigate('/users_page'),
    },
    {
      key: '/page_two',
      icon: <VideoCameraOutlined />,
      label: 'Страница 2',
      onClick: () => navigate('/page_two'),
    },
    {
      key: '/page_three',
      icon: <UploadOutlined />,
      label: 'Страница 3',
      onClick: () => navigate('/page_three'),
    },
  ];

  return { siderConfig };
};
