import { useAuth } from "./../context/auth-context";
import config from "config";
import qs from "qs";
import * as auth from "auth-provider";
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, token, ...customConfig }: Config = {}
) => {
  const fetchConfig = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (fetchConfig.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    fetchConfig.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${config.mockApi}/${endpoint}`, fetchConfig)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "Please SignIn" });
      }
      const data = await response.json();
      console.log(response);
      if (response.ok) {
        return data.data;
      } else {
        alert("username or password is invalid.");
        return Promise.reject(data);
      }
    });
};
export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, fetchConfig]: Parameters<typeof http>) =>
    http(endpoint, { ...fetchConfig, token: user?.token });
};
