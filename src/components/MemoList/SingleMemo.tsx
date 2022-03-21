import React from 'react';
import styled from 'styled-components/native';

// store
import {deleteMemoFromList} from '../../store/slice/memoSlice';

// hooks
import {useAppDispatch} from '../../hooks';

// components
import SingleMemoDetails from './SingleMemoDetails';

//assets
import Close from '../../assets/Close.png';

// types
import {MemoProps} from '../../types';

type Props = {} & MemoProps;
const SingleMemo = ({id, title, description, createdAt, updatedAt}: Props) => {
  const dispatch = useAppDispatch();
  const HandleDeleteMemo = () => {
    dispatch(deleteMemoFromList(id, () => {}));
  };
  return (
    <Wrapper>
      <SingleMemoDetails
        id={id}
        title={title}
        details={description}
        updatedAt={updatedAt}
      />
      <ButtonWrapper onPress={HandleDeleteMemo}>
        <DeleteIcon source={Close} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SingleMemo;

const Wrapper = styled.View`
  height: 90px;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

const ButtonWrapper = styled.TouchableOpacity`
  height: 100%;
  width: 40px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
`;

const DeleteIcon = styled.Image`
  height: 24px;
  width: 24px;
  resize-mode: contain;
  tint-color: rgba(0, 0, 0, 0.3);
`;
