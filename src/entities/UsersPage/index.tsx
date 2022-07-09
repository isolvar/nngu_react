import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'antd';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { resetUserStoreAction } from 'store/pages/UsersPage/actions';
import { fetchUsersAsync } from 'store/pages/UsersPage/async-actions';
import { getUsersData } from 'store/pages/UsersPage/selectors';

const UsersPage = () => {
  const dispatch = useAppDispatch();

  const { loading, usersTableColums, mappedUsersData } = useAppSelector(getUsersData);

  useEffect(() => {
    dispatch(fetchUsersAsync({ _page: 1, _limit: 10 }));
    return () => {
      dispatch(resetUserStoreAction());
    };
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalVisible((prev) => !prev)}>Открыть модальное окно</Button>
      <Modal
        okText="ОКЕЙ"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible((prev) => !prev)}>
        <p>Текст</p>
      </Modal>
      <Table
        columns={usersTableColums}
        dataSource={mappedUsersData}
        loading={loading}
        pagination={{ defaultPageSize: 5 }}
      />
    </>
  );
};
export default UsersPage;
