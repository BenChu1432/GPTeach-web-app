import { createAsyncThunk, createListenerMiddleware, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse, TokenPayload, WbResponse } from "../../data/dto";
import apiClient from "../../axios/apiClient";
import apiRoutes from "../../axios/apiRoutes";
import { processRes } from "../../utils/processRes";
import registerEffects from "../../utils/registerEffects";
import { loadingActions } from "../../utils/loadingActions";

type AuthSliceState = {
    accessToken: string;
    refreshToken: string;
    user: TokenPayload | undefined;
};

const initialState: AuthSliceState = {
    accessToken: "",
    refreshToken: "",
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearUser: (state, action: PayloadAction<{}>) => {
            state.user = undefined;
            state.accessToken = "";
            state.refreshToken = "";
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authThunkAction.login.fulfilled, (state, action) => {
            const { accessToken, refreshToken, user } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.user = user;
        });
    },
});

export const authThunkAction = {
    login: createAsyncThunk("authSlice/user-login", async (props: { email: string; password: string }, api) => {
        const res = await apiClient.post<WbResponse<LoginResponse>>(apiRoutes.POST_LOGIN, props);
        return processRes(res, api);
    }),
};

export const authMiddleware = createListenerMiddleware();
registerEffects(authMiddleware, [
    ...loadingActions(authThunkAction.login),
    {
        rejections: [authThunkAction.login.rejected],
    },
]);

export default authSlice;
