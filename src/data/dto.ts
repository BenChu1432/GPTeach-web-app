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
