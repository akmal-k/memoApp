import React from 'react';
import {ScrollView} from 'react-native';

const CustomScrollView = (props: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 40}}
      {...props}
    />
  );
};
export default CustomScrollView;
