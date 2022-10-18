import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import ListItem from './List';

const UniversityList = () => {
  const [uniList] = useState([]);
  const handleLoad = () => {
    console.log('load');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  const handleAdd = () => {
    console.log('add');
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
  align-items: center;
`;

const SpacedButton = styled(Button)`
  margin-right: 20px;
`;

export default UniversityList;
