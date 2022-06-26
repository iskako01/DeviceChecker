import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { deviceListReducer } from "./deviceList/deviceListReducer";
import { createDeviceReducer } from "./createDevice/createDeviceReducer";
import { deleteDeviceReducer } from "./deleteDevice/deleteDeviceReducer";
import { initReducer } from "./init/initReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  devices: deviceListReducer,
  createDevice: createDeviceReducer,
  deleteDevice: deleteDeviceReducer,
  init: initReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppStateType = ReturnType<typeof rootReducer>;

export default store;
