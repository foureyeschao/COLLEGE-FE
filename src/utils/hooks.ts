import axios from "axios";
import { useState, useEffect } from "react";
import { ApiConfig, nameSpace } from "api";
import { State } from "utils/interfaceCollections";
// import request from './request'

export const useApi = () => {
  return nameSpace;
};

export const useFetch = <Params, Data>(apiConfig: ApiConfig<Params, Data>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    setLoading(true);
    axios(apiConfig)
      .then((response) => {
        setData(response.data as Data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    data,
  };
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// useAsync hook
const defaultInitialState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};
export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState,
  });

  const setData = (data: D) =>
    setState({
      stat: "success",
      data,
      error: null,
    });

  const setError = (error: Error) =>
    setState({
      stat: "error",
      data: null,
      error,
    });

  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("Please send a Promise data ");
    }
    setState({ ...state, stat: "loading" });
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return Promise.reject(error);
      });
  };
  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    run,
    setData,
    setError,
    ...state,
  };
};

export const resetRoute = () =>
  (window.location.href = window.location.origin + "/groups");
