import { AxiosRequestConfig, Method } from "axios";
import config from "config";

export type ApiConfig<Params = any, Data = any> = AxiosRequestConfig & {
  url: string;
  method?: Method;
  params?: Params;
  data?: Params;
  _response?: Data;
  [x: string]: any;
};

export type Service<Params = any, Data = any> = (
  headParams: Params,
  otherSet?: object
) => ApiConfig<Params, Data>;

export const createGetApi =
  <Params = any, Data = any>(apiConfig: ApiConfig): Service<Params, Data> =>
  (headParams: Params, otherSet = {}) => {
    return {
      ...apiConfig,
      params: headParams,
      ...otherSet,
    };
  };

export const getLogin = createGetApi<{userName: string; password: string }>({
  url: `${config.mockApi}/login`,
  method: "POST",
  headers: {
    'Content-Type':'application/json'
  },
});

export const nameSpace = {
  user: {
    getLogin,
  },
};
