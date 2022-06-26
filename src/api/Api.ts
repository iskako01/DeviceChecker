import axios from "axios";
import { DeviceType } from "../types/device/deviceType";

const instance = axios.create({
  baseURL: "https://js-test-api.etnetera.cz/api/v1/",
});

export const authAPI = {
  login(login: string | null, password: string | null) {
    return instance.post("login", { login, password });
  },
  logout() {
    return instance.delete("login");
  },
  authMe(token: any, id: number | string | null) {
    return instance.get(`users/${id}`, {
      headers: {
        "Auth-Token": token,
      },
    });
  },
};

export const usersAPI = {
  getUsers(userId: number, token: any) {
    return instance.get(`users/${userId}`, {
      headers: {
        "Auth-Token": token,
      },
    });
  },
};

export const devicesAPI = {
  getDevices(token: any) {
    return instance
      .get("phones", {
        headers: {
          "Auth-Token": token,
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  createDevice(
    token: any,
    { id, code, os, vendor, model, osVersion, image }: DeviceType
  ) {
    return instance.post(
      "phones",
      { code, os, vendor, model, osVersion, image },
      {
        headers: {
          "Auth-Token": token,
        },
      }
    );
  },

  deleteDevice(token: any, id: number) {
    return instance.delete(`phones/${id}`, {
      headers: {
        "Auth-Token": token,
      },
    });
  },

  borrowDevice(token: any, id: number) {
    return instance.post(
      `phones/${id}/borrow`,
      {},
      {
        headers: {
          "Auth-Token": token,
        },
      }
    );
  },

  getDeviceBack(token: any, id: any) {
    return instance.post(
      `phones/${id}/return`,
      {},
      {
        headers: {
          "Auth-Token": token,
        },
      }
    );
  },
};
