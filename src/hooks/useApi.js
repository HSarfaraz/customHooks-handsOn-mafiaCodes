import React, { useState, useEffect } from "react";
import axios from "axios";
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setData(null);
        })
        .finally(() => setLoading(false));
    },
    [url]
  );
  return { data, error, loading };
};

export default useApi;
