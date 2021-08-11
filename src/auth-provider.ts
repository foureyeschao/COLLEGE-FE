import axios from "axios";
import { User } from "utils/interfaceCollections";
import config from "config";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user: User) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return axios({
    url: `${config.mockApi}/login`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }).then((response) => {
    console.log(response.data);
    if (response.data.data.verifySuccess) {
      return handleUserResponse(response.data.data.user);
    } else {
      alert("Invalid username or password.!");
      return Promise.reject(data);
    }
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
