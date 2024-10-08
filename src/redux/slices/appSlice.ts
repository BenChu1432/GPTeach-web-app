import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../axios/apiClient";
import apiRoutes from "../../axios/apiRoutes";
import { WbResponse } from "../../data/dto";
import { processRes } from "../../utils/processRes";
import getEnv from "../../utils/getEnv";

export type AppSliceState = {
    loading: boolean;
    activePath: string | null;
    // Used to control when to open a dialog component
    timetableAction: TimetableAction;
    createClassPopperFromHourTimestampOnShow: string;
};

type TimetableAction = "Create Class" | "Move Class" | "Resize Class" | null;

const initialState: AppSliceState = {
    loading: false,
    activePath: null,
    timetableAction: null,
    createClassPopperFromHourTimestampOnShow: "",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const appThunkAction = {
    emailVerification: createAsyncThunk("authSlice/create-user", async (props: { email: string; token: string }, api) => {
        const res = await apiClient.patch<WbResponse<{}>>(apiRoutes.PATCH_VERIFY_EMAIL, props);
        return processRes(res, api);
    }),
    sendGmailToVerifyAccountDeletion: createAsyncThunk("authSlice/send-gmail-to-verify-account-deletion", async (props: { email: string }, api) => {
        const res = await apiClient.post<WbResponse<{}>>(apiRoutes.POST_DELETE_ACCOUNT_VERIFICATION_EMAIL, props);
        return processRes(res, api);
    }),
    deleteAccount: createAsyncThunk("authSlice/delete-user", async (props: { email: string; token: string }, api) => {
        const res = await apiClient.post<WbResponse<{}>>(apiRoutes.DELETE_USER, props);
        return processRes(res, api);
    }),
};

export default appSlice;
