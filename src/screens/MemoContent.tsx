import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {StackScreenProps} from '@react-navigation/stack';

//hooks
import {useAppSelector} from '../hooks';

// components
import Buttons from '../components/MemoContent/Buttons';
import Details from '../components/MemoContent/Details';
import HeaderLeft from '../components/HeaderLeft';

//types
import {MainStackParamList} from '../types';

type Props = {} & StackScreenProps<MainStackParamList, 'MemoContent'>;

const MemoDetail = ({route, navigation}: Props) => {
  const memoDetails = useAppSelector(state =>
    state.memo.memoList.find(item => item.id == route.params.memoId),
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: memoDetails?.title,
      headerLeft: () => <HeaderLeft onPress={() => navigation.goBack()} />,
    });
  }, []);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>{memoDetails?.title}</HeaderTitle>
        <Buttons
          id={memoDetails?.id || ''}
          isRevision={false}
          onEdit={() => {}}
        />
      </HeaderWrapper>
      <Date>{memoDetails?.updatedAt}</Date>
      <Details content={memoDetails?.description || ''} />
    </Wrapper>
  );
};
export default MemoDetail;

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

const HeaderTitle = styled.Text`
  font-size: 24;
  font-weight: bold;
`;

const Date = styled.Text`
  margin-top: 20px;
  font-size: 12px;
  color: grey;
  text-align: right;
  margin-right: 8px;
`;
