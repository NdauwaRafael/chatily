import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../store";



export interface ChatSliceState {
    chats: any[];
}

let l_chats: string | null = localStorage.getItem("chats");

const initialState: ChatSliceState = {
    chats: l_chats ? JSON.parse(l_chats) : []
};

export const chatSLice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChats: (state, action: PayloadAction<any[]>) => {
            state.chats = action.payload;
        }
    },
});

export const {
    setChats
} = chatSLice.actions;

export const sendMessage = ({message}: any): AppThunk => async (dispatch) => {
    let rawChats = localStorage.getItem("chats");
    let chats: any[] = rawChats ? JSON.parse(rawChats) : [];

    chats.push({
        id: sessionStorage.tabID,
        message,
        username: sessionStorage.username,
        time: Date.now()
    });

    localStorage.setItem('chats', JSON.stringify(chats));

    dispatch(setChats(chats))
}