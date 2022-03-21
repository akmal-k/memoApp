import React from 'react';
import styled from 'styled-components/native';

type Props = {
  content: string;
  onChangeText: Function;
};
const EditDetails = ({content, onChangeText}: Props) => {
  return (
    <DetailsWrapper>
      <DetailsInput
        value={content}
        onChangeText={e => onChangeText(e)}
        multiline={true}
      />
    </DetailsWrapper>
  );
};
export default EditDetails;

const DetailsWrapper = styled.View`
  margin-top: 20px;
  overflow-y: hidden;
  flex: 1;
`;

const DetailsInput = styled.TextInput`
  font-size: 16px;
  text-align-vertical: top;
  width: 100%;
`;
