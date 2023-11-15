import { useEffect, useState } from "react";
import axios from "axios";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};
