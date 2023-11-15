import { useEffect, useState } from "react";

export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc;
      setResource(result);
    })();
  }, [getResourceFunc]);

  return resource;
};
