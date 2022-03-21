import React from 'react';
import styled from 'styled-components/native';

// assets
import ArrowLeft from '../assets/Left.png';

type Props = {
  onPress: Function;
};

const HeaderLeft = ({onPress}: Props) => {
  return (
    <Wrapper onPress={() => onPress()}>
      <Icon source={ArrowLeft} />
    </Wrapper>
  );
};
export default HeaderLeft;

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: 5px;
`;

const Icon = styled.Image`
  height: 26px;
  width: 32px;
  resize-mode: contain;
  tint-color: #fff;
`;
