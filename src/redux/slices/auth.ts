import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { v4 as uuidv4 } from 'uuid';

interface AuthSliceState { 
    username: string | null;
    tabID?: string | null;
}

const initialState: AuthSliceState = {
    username: null,
    tabID: null
  };

  export const authSLice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setUsername: (state, action: PayloadAction<string | null>) => {
        state.username = action.payload;
      },
      setTabId: (state, action: PayloadAction<string | null>) => {
        state.tabID = action.payload;
      }
    },
  });

  export const {
    setUsername,
    setTabId
  } = authSLice.actions;


  export const sendUsername = ({ username }: any): AppThunk => async (dispatch) => {
    try {
      let tabId = sessionStorage.tabID ? sessionStorage.tabID : uuidv4();
      let rawUsers: string|null = localStorage.getItem('chat-users');
      let users: any[] = rawUsers ? JSON.parse(rawUsers) : [];

      users.push({
        username,
        tabId
      });

      localStorage.setItem('chat-users', JSON.stringify(users));

      dispatch(setUsername(username));
      dispatch(setTabId(tabId));

      // BrowserHistory.push('/chat');


    } catch (e: any) {
      console.log("An error occurred")
      console.log(e)
    }
  };

export default authSLice.reducer;