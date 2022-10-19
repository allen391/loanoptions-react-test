import React from 'react';
import styled from 'styled-components';
import { Button, Spin } from 'antd';
import ListItem from './List';
import { useSelector, useDispatch } from 'react-redux';
import { getUniList, addItem, deleteItem } from '../../shared/slices/uni-slice';
import { AppDispatch, RootState } from '../../shared/slices/store';

const UniversityList = () => {
  const uniList = useSelector((state: RootState) => state.uni.data);
  const loading = useSelector((state: RootState) => state.uni.loading);
  const dispatch = useDispatch<AppDispatch>();
  const handleLoad = () => {
    dispatch(
      getUniList({
        endpoint: 'search',
        config: {
          data: {
            country: 'Australia',
          },
        },
      }),
    );
  };

  const handleDelete = () => {
    dispatch(deleteItem());
  };

  const handleAdd = () => {
    dispatch(addItem());
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <SpacedButton type="primary" size="large" onClick={() => handleLoad()}>
          Load
        </SpacedButton>
        <SpacedButton type="primary" size="large" onClick={() => handleDelete()}>
          Delete
        </SpacedButton>
        <SpacedButton type="primary" size="large" onClick={() => handleAdd()}>
          Add
        </SpacedButton>
      </ButtonWrapper>
      {loading && <CenteredSpin size="large" />}
      <ListItem uniList={uniList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px;
  position: relative;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

const CenteredSpin = styled(Spin)`
  position: absolute;
  top: 90%;
  left: 50%;
  z-index: 10000;
`;

const SpacedButton = styled(Button)`
  margin-right: 20px;
`;

export default UniversityList;
