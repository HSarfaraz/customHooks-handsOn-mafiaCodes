import React, { useState, useEffect } from "react";

import useApi from "./hooks/useApi";
const ApiExample = () => {
  //   const [data, setData] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => {
  //         setData(response.data);
  //         setError(null);
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //         setData(null);
  //       })
  //       .finally(() => setLoading(false));
  //   }, []);

  const { loading, error, data } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <h1>Custom API Hooks</h1>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {data && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ApiExample;
