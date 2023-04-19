import { createContext } from "react";

const SpiderwebContext = createContext({
  testnets: [],
  setTestnets: (testnets) => {},
  abis: {},
  setAbis: (abis) => {},  
});

export default SpiderwebContext;

