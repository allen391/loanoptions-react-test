import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import ListItem from './List';
import { useSelector, useDispatch } from 'react-redux';
import { getUniList, addItem, deleteItem } from '../../shared/slices/uni-slice';
import { AppDispatch } from '../../shared/slices/store';

const UniversityList = () => {
  // @ts-ignore
  const uniList = useSelector((state) => state.uni.data);
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
      <ListItem uniList={uniList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

const SpacedButton = styled(Button)`
  margin-right: 20px;
`;

export default UniversityList;
