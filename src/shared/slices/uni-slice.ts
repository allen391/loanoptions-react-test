import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUniItem } from '../types';
import { Config, http } from '../utils';

interface IUniState {
  error?: string | null;
  data: IUniItem[];
  loading: boolean;
}

const initialState: IUniState = {
  error: null,
  data: [],
  loading: false,
};

export const getUniList = createAsyncThunk(
  'university/getUniList',
  async ({ endpoint, config }: { endpoint: string; config: Config }) => {
    return await http(endpoint, config);
  },
);

export const uniSlice = createSlice({
  name: 'university',
  initialState,
  reducers: {
    addItem: (state) => {
      if (state.data.length > 0) {
        const fixedList = JSON.parse(JSON.stringify(state.data));
        fixedList.push(fixedList[0]);
        state.data = fixedList;
      }
    },
    deleteItem: (state) => {
      if (state.data.length > 0) {
        const fixedList = JSON.parse(JSON.stringify(state.data));
        fixedList.pop();
        state.data = fixedList;
      }
    },
  },
  // for api call async operations
  extraReducers: {
    [getUniList.pending.type]: (state) => {
      state.loading = true;
    },
    [getUniList.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getUniList.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { addItem, deleteItem } = uniSlice.actions;
export default uniSlice.reducer;
