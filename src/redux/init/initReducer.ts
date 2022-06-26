import { ActionsType, IS_INIT } from "./initActionCreator";

type InitialStateType = {
  isInit: boolean;
};

const initialState = {
  isInit: false,
};

export const initReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case IS_INIT: {
      return {
        ...state,
        isInit: true,
      };
    }

    default:
      return state;
  }
};
