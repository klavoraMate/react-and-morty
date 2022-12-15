import { useState, useEffect } from 'react';


const useFetch = (url) => {

  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true)

    const controller = new AbortController()
    const { signal } = controller

    fetch(url, { signal })
      .then((response) => response.json())
      .then((fetchedData) => {
        setHasMore(fetchedData.length > 0)
        setLoading(false)
        return setData(previousData => [...previousData, ...fetchedData.results])
      })
      .catch((err) => {
        setLoading(false)
        if (signal.aborted) return console.log(err)
      })
    return () => controller.abort()
  }, [url]);
  return { data, loading, hasMore };
};

export default useFetch;
