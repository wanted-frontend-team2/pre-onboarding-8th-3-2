import { useState, useEffect } from "react";

/**
 * Returns the response of the get request.
 */
export default function useFetch(url: string) {
  const [fetchResult, setFetchResult] = useState([]);

  useEffect(() => {
    console.info(`calling api ${url}`);
    fetch(`http://localhost:4000/${url}`)
      .then((response) => response.json())
      .then((data) => setFetchResult(data));
  }, [url]);

  return fetchResult;
}
