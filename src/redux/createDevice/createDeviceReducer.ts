import { CREATE_DEVICE } from "./createDeviceActionCreator";
import { ActionsType } from "./createDeviceActionCreator";

const initialState = {
  devices: {
    code: null as string | null,
    os: null as string | null,
    vendor: null as string | null,
    model: null as string | null,
    osVersion: null as string | null,
    image: null as string | null,
  },
};

export type InitialStateType = typeof initialState;

export const createDeviceReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case CREATE_DEVICE: {
      return {
        ...state,
        devices: action.payload,
      };
    }

    default:
      return state;
  }
};
