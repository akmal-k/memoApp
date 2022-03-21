import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';

// hooks
import {useAppDispatch, useAppSelector} from '../hooks';

// components
import List from '../components/MemoList/List';

// store
import {addMemo} from '../store/slice/memoSlice';

//type
import {MainStackParamList} from '../types';

type Props = {} & StackScreenProps<MainStackParamList, 'MemoList'>;

const MemoList = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {memoList} = useAppSelector(state => state.memo);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `메모리스트(${
        memoList && memoList.length ? memoList.length : ''
      })`,
    });
  }, [memoList]);

  const handleAddButton = () => {
    dispatch(addMemo());
  };
  return (
    <Wrapper>
      <ListWrapper>
        <List memoList={memoList} />
      </ListWrapper>
      <AddButtonWrapper onPress={handleAddButton}>
        <AddText>추가</AddText>
      </AddButtonWrapper>
    </Wrapper>
  );
};

export default MemoList;

const Wrapper = styled.View`
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: space-evenly;
  display: flex;
`;

const ListWrapper = styled.View`
  flex: 1;
  margin-bottom: 60px;
`;

const AddButtonWrapper = styled.TouchableOpacity`
  border-radius: 10px;
  height: 50px;
  width: 100%;
  bottom: 55px;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const AddText = styled.Text`
  font-size: 16;
  color: #ffffff;
`;
