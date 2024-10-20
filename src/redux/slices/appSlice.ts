import { PayloadAction, createAsyncThunk, createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../axios/apiClient";
import apiRoutes from "../../axios/apiRoutes";
import { ToastType, WbResponse } from "../../data/dto";
import { processRes } from "../../utils/processRes";
import getEnv from "../../utils/getEnv";
import registerEffects from "../../utils/registerEffects";
import { loadingActions } from "../../utils/loadingActions";

export type AppSliceState = {
    loading: boolean;
    activePath: string | null;
    // Used to control when to open a dialog component
    toast: { message: string; type: ToastType | string };
    timetableAction: TimetableAction;
    createClassPopperFromHourTimestampOnShow: string;
    llmResponse: string;
};

type TimetableAction = "Create Class" | "Move Class" | "Resize Class" | null;

const initialState: AppSliceState = {
    loading: false,
    activePath: null,
    timetableAction: null,
    createClassPopperFromHourTimestampOnShow: "",
    toast: { message: "", type: "error" },
    llmResponse: "",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setToast: (state, action: PayloadAction<{ message: string; type: ToastType | "" }>) => {
            state.toast = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(appThunkAction.sendLLMRequest.fulfilled, (state, action) => {
            state.llmResponse = action.payload;
        });
    },
});

export const appThunkAction = {
    emailVerification: createAsyncThunk("appSlice/create-user", async (props: { email: string; token: string }, api) => {
        const res = await apiClient.patch<WbResponse<{}>>(apiRoutes.PATCH_VERIFY_EMAIL, props);
        return processRes(res, api);
    }),
    sendGmailToVerifyAccountDeletion: createAsyncThunk("appSlice/send-gmail-to-verify-account-deletion", async (props: { email: string }, api) => {
        const res = await apiClient.post<WbResponse<{}>>(apiRoutes.POST_DELETE_ACCOUNT_VERIFICATION_EMAIL, props);
        return processRes(res, api);
    }),
    deleteAccount: createAsyncThunk("appSlice/delete-user", async (props: { email: string; token: string }, api) => {
        const res = await apiClient.post<WbResponse<{}>>(apiRoutes.DELETE_USER, props);
        return processRes(res, api);
    }),
    sendLLMRequest: createAsyncThunk("appSlice/send-llm-request", async (props: { systemMessage: string; assistantMessage: string; userMessage: string }, api) => {
        const res = await apiClient.post<WbResponse<string>>(apiRoutes.POST_LLM_REQUEST, props);
        return processRes(res, api);
    }),
};

export const appMiddleware = createListenerMiddleware();
registerEffects(appMiddleware, [
    ...loadingActions(appThunkAction.sendLLMRequest),
    {
        rejections: [appThunkAction.sendLLMRequest.rejected],
    },
]);

export default appSlice;
