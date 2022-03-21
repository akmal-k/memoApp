import React from 'react';
import styled from 'styled-components/native';

// navigation
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

//types
import {MainStackParamList} from '../../types';

// utils
import {rederDetails} from '../../utils/renderDetails';

type Props = {
  id: string;
  title: string;
  details: string;
  updatedAt: string;
};

type NavigationProps = StackNavigationProp<MainStackParamList, 'MemoList'>;

const SingleMemoDetails = ({id, title, details, updatedAt}: Props) => {
  const navigation = useNavigation<NavigationProps>();
  const navigationHandler = () => {
    navigation.navigate('MemoContent', {memoId: id});
  };

  return (
    <InnerWrapper onPress={navigationHandler}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Date>{updatedAt}</Date>
      </TitleWrapper>
      <Description>{rederDetails(details)}</Description>
    </InnerWrapper>
  );
};

export default SingleMemoDetails;

const InnerWrapper = styled.TouchableOpacity`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Date = styled.Text`
  font-size: 12px;
  color: grey;
  margin-left: 8px;
`;

const Description = styled.Text`
  font-size: 12px;
  color: grey;
  margin-top: 8px;
`;
