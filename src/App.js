
import './App.css';
import { Routes , Route } from 'react-router-dom'
import routes from './pages/router'
import { useState, useEffect } from "react";

// Web3 imports
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";

// Multi-chain contex & state
import ChainContext from './chain';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Spiderweb APIs calls
import SpiderwebContext from './spiderweb';



function App() {

    const [selectedChain, setSelectedChain] = useState(ChainId.Mumbai);    
    const [testnets, setTestnets] = useState([]);
    const [abis, setAbis] = useState({});    

    useEffect(() => {
        fetch('https://oracle.spiderweb.ai/networks/list/testnets')
            .then((response) => response.json())
            .then((data) => {
                console.log('Testnets where Spiderweb.ai is deployed: ' + JSON.stringify(data));
                setTestnets(data);
            })
            .catch((err) => {
                console.log('Error fetching Spiderweb.ai testnets: ' + err.message);
            });
    }, []);
    useEffect(() => {
        fetch('https://oracle.spiderweb.ai/networks/deployments/abis')
            .then((response) => response.json())
            .then((data) => {
                console.log('Received ABIs for smart contracts ' + Object.keys(data));
                setAbis(data);
            })
            .catch((err) => {
                console.log('Error fetching Spiderweb.ai ABIs: ' + err.message);
            });
    }, []);    

    return (
        
        <SpiderwebContext.Provider value={{testnets, setTestnets, abis, setAbis}}>
            <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
                <ThirdwebProvider 
                    activeChain={selectedChain}
                    dAppMeta={{
                        name: "SpiderWeb.ai",
                        description: "Machine Learning meets Smart Contracts",
                        logoUrl: "https://spiderweb.ai/icon.png",
                        url: "https://spiderweb.ai",
                        isDarkMode: false,
                    }}
                >                                
                    <ToastContainer />
                    <Routes >
                        {
                        routes.map((data,index) => (
                            <Route exact={true} path={data.path} element={data.component} key={index} />
                        ))
                        }
                    </Routes>                
                </ThirdwebProvider>
            </ChainContext.Provider>
        </SpiderwebContext.Provider>
    );
}

export default App;

