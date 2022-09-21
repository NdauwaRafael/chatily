import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../store";
import {v4 as uuidv4} from 'uuid';

export interface AuthSliceState {
    username: string | null;
    tabID?: string | null;
    users?: any[];
}

const initialState: AuthSliceState = {
    username: null,
    tabID: null,
    users: []
};

export const authSLice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string | null>) => {
            state.username = action.payload;
        },
        setTabId: (state, action: PayloadAction<string | null | undefined>) => {
            state.tabID = action.payload;
        },
        setUsers: (state, action: PayloadAction<any[]>) => {
            state.users = action.payload;
        }
    },
});

export const {
    setUsername,
    setTabId,
    setUsers
} = authSLice.actions;

export const checkAuthStates = (): AppThunk => async (dispatch) => {
    let rawUsers: string | null = localStorage.getItem('chat-users');
    let users: any[] = rawUsers ? JSON.parse(rawUsers) : [];
    let tabId = sessionStorage.tabID;
    users = users.filter(user=> user.tabId = tabId);

    if (users) {
        let user: any = users[0];
        if (!user) return;
        dispatch(setUsername(user.username));
        dispatch(setTabId(user.tabID));
    }
    else {
        dispatch(setUsername(null));
        dispatch(setTabId(null));
    }


};


export const sendUsername = ({username}: any): AppThunk => async (dispatch) => {
    try {
        let tabId = sessionStorage.tabID ? sessionStorage.tabID : uuidv4();
        sessionStorage.tabID = tabId;
        sessionStorage.username = username;

        let rawUsers: string | null = localStorage.getItem('chat-users');
        let users: any[] = rawUsers ? JSON.parse(rawUsers) : [];

        users.push({
            username,
            tabId
        });

        localStorage.setItem('chat-users', JSON.stringify(users));

        dispatch(setUsername(username));
        dispatch(setTabId(tabId));
        dispatch(setUsers(users));

    } catch (e: any) {
        console.log("An error occurred")
        console.log(e)
    }
};

export default authSLice.reducer;