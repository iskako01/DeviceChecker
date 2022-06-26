import { LoginErrorType, LoginSuccessType } from "../auth/actionCreatorType";

export const IS_INIT = "IS_INIT";

type InitializeType = {
  type: typeof IS_INIT;
};

export type ActionsType = InitializeType | LoginSuccessType | LoginErrorType;

export const initialize = (): InitializeType => {
  return { type: IS_INIT };
};
