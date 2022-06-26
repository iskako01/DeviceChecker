import {
  GET_DEVICES,
  DEVICES_SUCCESS,
  DEVICES_ERROR,
  SORT_BY_OS,
  SORT_BY_VENDOR,
  SHOW_ALL_AVAILABLE_DEVICES,
} from "./deviceListActionCreator";
import { DeviceType } from "../../types/device/deviceType";
import { ActionsType } from "./actionCreatorType";


const initialState = {
  devices: [] as DeviceType[],
  error: null,
  sortOs: "all",
  sortVendor: "all",
  available: false,
};

export type InitialStateType = typeof initialState;

export const deviceListReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case GET_DEVICES: {
      return {
        ...state,
      };
    }
    case DEVICES_SUCCESS: {
      return {
        ...state,
        devices: [...action.payload],
      };
    }
    case DEVICES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SORT_BY_OS: {
      return {
        ...state,
        sortOs: action.payload,
      };
    }
    case SORT_BY_VENDOR: {
      return {
        ...state,
        sortVendor: action.payload,
      };
    }
    case SHOW_ALL_AVAILABLE_DEVICES: {
      return {
        ...state,
        available: action.payload,
      };
    }

    default:
      return state;
  }
};
