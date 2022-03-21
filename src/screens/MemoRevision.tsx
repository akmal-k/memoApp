import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';

// store
import {editMemo} from '../store/slice/memoSlice';

// hooks
import {useAppDispatch, useAppSelector} from '../hooks';

// components
import HeaderLeft from '../components/HeaderLeft';
import Buttons from '../components/MemoContent/Buttons';
import EditDetails from '../components/MemoRevision/EditDetails';

// types
import {MainStackParamList} from 'types';
import {useState} from 'react';

type Props = {} & StackScreenProps<MainStackParamList, 'MemoRevision'>;

const MemoEdit = ({route, navigation}: Props) => {
  const dispatch = useAppDispatch();
  const memoDetails = useAppSelector(state =>
    state.memo.memoList.find(item => item.id == route.params.memoId),
  );
  const [newTitle, setNewTitle] = useState(memoDetails?.title);
  const [newDescription, setNewDescription] = useState(
    memoDetails?.description,
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: memoDetails?.title,
      headerLeft: () => <HeaderLeft onPress={() => navigation.goBack()} />,
    });
  }, []);
  const editMemoHandler = () => {
    dispatch(
      editMemo(
        memoDetails?.id || '',
        newTitle || '',
        newDescription || '',
        onSuccess,
      ),
    );
  };
  const onSuccess = () => {
    navigation.goBack();
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle
          value={newTitle}
          onChangeText={setNewTitle}
          multiline={true}
        />
        <Buttons
          id={memoDetails?.id || ''}
          isRevision={true}
          onEdit={editMemoHandler}
        />
      </HeaderWrapper>
      <Date>{memoDetails?.updatedAt}</Date>
      <EditDetails
        content={newDescription || ''}
        onChangeText={setNewDescription}
      />
    </Wrapper>
  );
};
export default MemoEdit;

const Wrapper = styled.View`
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.TextInput`
  font-size: 24;
  font-weight: bold;
  width: 65%;
`;

const Date = styled.Text`
  margin-top: 20px;
  font-size: 12px;
  color: grey;
  text-align: right;
  margin-right: 8px;
`;
