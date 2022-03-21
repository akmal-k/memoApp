import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '..';
import {v4 as uuidv4} from 'uuid';

//types
import {MemoProps} from '../../types';

//utils
import {getFormattedDate} from '../../utils/dateUtility';
import {Alert} from 'react-native';

type SliceState = {
  memoList: Array<MemoProps>;
};

const initialState: SliceState = {
  memoList: [],
};

export const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    setMemoList: (state, action: PayloadAction<Array<MemoProps>>) => ({
      ...state,
      memoList: action.payload,
    }),
  },
});

export const {setMemoList} = memoSlice.actions;

export default memoSlice.reducer;

export const addMemo = (): AppThunk => (dispatch, getState) => {
  try {
    const {memoList} = getState().memo;
    const today = getFormattedDate();
    const newMemo = {
      id: uuidv4(),
      title: '제목없음',
      description: '내용없음',
      createdAt: today,
      updatedAt: today,
    };
    if (memoList && memoList.length) {
      dispatch(setMemoList([...memoList, newMemo]));
    } else {
      dispatch(setMemoList([newMemo]));
    }
  } catch (error) {
    Alert.alert('Error occured while adding a memo');
  }
};

export const deleteMemoFromList =
  (memoId: string, onSuccess: Function): AppThunk =>
  (dispatch, getState) => {
    try {
      const {memoList} = getState().memo;
      const updatedMemoList = memoList.filter(el => el.id != memoId);
      dispatch(setMemoList(updatedMemoList));
      onSuccess();
    } catch (error) {
      Alert.alert('Error occured while deleting a memo');
    }
  };

export const editMemo =
  (
    id: string,
    title: string,
    description: string,
    onSuccess: Function,
  ): AppThunk =>
  (dispatch, getState) => {
    try {
      const {memoList} = getState().memo;
      const updatedMemoList = memoList.map(item => {
        if (item.id === id) {
          const newMemo = {
            id,
            title,
            description,
            createdAt: item.createdAt,
            updatedAt: getFormattedDate(),
          };
          item = newMemo;
        }
        return item;
      });
      dispatch(setMemoList(updatedMemoList));
      onSuccess();
    } catch (error) {
      Alert.alert('Error occured while editing a memo');
    }
  };
