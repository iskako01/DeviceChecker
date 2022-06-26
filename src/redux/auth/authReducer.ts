import {
  LOGIN_SUCCESS,
  FETCHED_LOGOUT,
  FETCHED_LOGIN,
  LOGIN_ERROR,
} from "./authActionCreator";

import { ActionsType } from "./actionCreatorType";


const initialState = {
  isAuth: false,
  user: {
    id: null as number | null,
    type: null as string | null,
    login: null as string | null,
    name: null as string | null,
    token: "",
  },
  error: null,
};

export type InitialStateType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case FETCHED_LOGIN: {
      return {
        ...state,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
        isAuth: false,
      };
    }
    case FETCHED_LOGOUT: {
      return {
        ...state,
        isAuth: false,
        user: {
          id: 0,
          type: "null",
          login: "null",
          name: "null",
          token: "",
        },
      };
    }

    default:
      return state;
  }
};
