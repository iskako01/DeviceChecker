import {
  DELETE_DEVICE,
  DELETE_DEVICE_ERROR,
} from "./deleteDeviceActionCreator";
import { ActionsType } from "./actionCreatorType";

type InitialStateType = {
  error: null;
};

const initialState = {
  error: null,
};

export const deleteDeviceReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case DELETE_DEVICE: {
      return {
        ...state,
      };
    }

    case DELETE_DEVICE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
