import axios from "axios";
import { useState, useEffect } from "react";
import { ApiConfig } from "api";
import { nameSpace } from "api";
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
