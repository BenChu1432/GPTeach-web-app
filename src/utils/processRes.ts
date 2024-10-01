import { AxiosResponse } from "axios";
import { CustomResponse } from "../axios/responseTypes";
import { WbResponse } from "../data/dto";

export const processRes = <T>(res: AxiosResponse<WbResponse<T>, any>, api: any): T => {
    if (!res.data.success) {
        return api.rejectWithValue(JSON.stringify(res.data.errorMessage));
    } else {
        return res.data.result;
    }
};
