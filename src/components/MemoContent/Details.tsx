import React from 'react';
import styled from 'styled-components/native';

//containers
import CustomScrollView from '../../containers/ScrollView';

type Props = {
  content: string;
};

const Details = ({content}: Props) => {
  return (
    <DetailsWrapper as={CustomScrollView}>
      <DetailsText>{content}</DetailsText>
    </DetailsWrapper>
  );
};
export default Details;

const DetailsWrapper = styled.ScrollView`
  margin-top: 20px;
  overflow-y: hidden;
  flex: 1;
`;
const DetailsText = styled.Text`
  font-size: 16px;
`;
