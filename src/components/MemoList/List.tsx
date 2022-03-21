import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';

// type
import {MemoProps} from '../../types';

//components
import SingleMemo from './SingleMemo';

type Props = {
  memoList: Array<MemoProps>;
};

const List = ({memoList}: Props) => {
  const renderItemHandler: ListRenderItem<MemoProps> = ({item}) => {
    return <SingleMemo {...item} />;
  };
  return (
    <StyledFlatList
      data={memoList}
      renderItem={renderItemHandler}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

export default React.memo(List);

const StyledFlatList = styled.FlatList`
  flex: 1;
  overflow-y: hidden;
` as unknown as typeof FlatList;
