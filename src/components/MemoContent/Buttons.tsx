import React from 'react';
import styled from 'styled-components/native';

//navigation
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

//hooks
import {useAppDispatch} from '../../hooks';

//store
import {deleteMemoFromList} from '../../store/slice/memoSlice';

//types
import {MainStackParamList} from 'types';

type ButtonProps = {
  id: string;
  isRevision: boolean;
  onEdit: Function;
};

type NavigationProps = StackNavigationProp<MainStackParamList, 'MemoContent'>;

const Buttons = ({id, isRevision, onEdit}: ButtonProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  const handleEditButton = () => {
    navigation.navigate('MemoRevision', {memoId: id});
  };

  const handleDelete = () => {
    if (isRevision) {
      navigation.goBack();
    } else {
      dispatch(deleteMemoFromList(id, onSuccess));
    }
  };

  const onSuccess = () => {
    navigation.goBack();
  };

  return (
    <Wrapper>
      <ButtonWrapper
        onPress={() => (isRevision ? onEdit() : handleEditButton())}>
        <EditText>{isRevision ? '수정' : '편집'}</EditText>
      </ButtonWrapper>
      <ButtonWrapper>
        <DeleteText onPress={handleDelete}>
          {isRevision ? '취소' : '삭제'}
        </DeleteText>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.View`
  flex-direction: row;
`;

const ButtonWrapper = styled.TouchableOpacity`
  width: 65px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

const EditText = styled.Text`
  font-size: 14;
  color: blue;
`;

const DeleteText = styled.Text`
  font-size: 14;
  color: blue;
`;
