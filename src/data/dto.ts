export type WbResponse<T> =
    | {
          success: false;
          errorMessage: string;
          errorObject: Object;
      }
    | {
          success: true;
          result: T;
      };
export interface IdsToObject {
    [key: string]: string | null;
}

export type TokenPayload = {
    email: string;
    emailVerified: boolean;
    updatedAt: string;
    is_blocked: boolean;
    role: "OWNER" | "FREE_USER" | "PAID_USER" | "BETA_TESTER";
    createdAt: number;
};

export type ToastType = "success" | "info" | "error" | "warning";

export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
    user: TokenPayload;
};
