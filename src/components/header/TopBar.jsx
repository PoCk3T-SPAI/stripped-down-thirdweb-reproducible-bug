import React from 'react';
import { Link } from 'react-router-dom'
import Countdown from "react-countdown";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';

// Web3 related imports
import { ChainId, useNetwork, Web3Button, useAddress } from "@thirdweb-dev/react";
import ChainContext from '../../chain';

// Toast me
import { toast } from 'react-toastify';
import SpiderwebContext from '../../spiderweb';
import { capitalizeFirstLetter } from '../../utils/stringUtils';

function getTestnetPrettyName(testnet) {
    if (testnet === undefined)
        return undefined 
    return capitalizeFirstLetter(testnet.ecosystem) + " " + capitalizeFirstLetter(testnet.chain);
}

const TopBar = () => {
    
    // Load the list of testnets & ABIs from Spiderweb APIs
    const { testnets, setTestnets, abis, setAbis} = useContext(SpiderwebContext);

    // // Thirdweb integration to manage the wallet
    const { selectedChain, setSelectedChain } = useContext(ChainContext);
    const [{ data, error, loading }, switchNetwork] = useNetwork();
    const isUserWalletConnected = useAddress() != null;    

    // Dropdown selection handler
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionSelect = (eventKey) => {
        console.log("User selected a chain: " + eventKey)
        if (!isUserWalletConnected) {            
            toast.error('Connect your wallet & try again');
        } else {
            const testnetJson = JSON.parse(eventKey);
                        
            switchNetwork?.(testnetJson.chain_id).then(result => {
                if (result.data) {
                    console.log("Switched to "+ JSON.stringify(testnetJson) + " successfully");
                    setSelectedChain(parseInt(testnetJson.chain_id));
                    setSelectedOption(getTestnetPrettyName(testnetJson));
                    console.log("Now the selectedChain = " +  JSON.stringify({selectedChain}));
                } else {
                    console.log("Error switching to " + JSON.stringify(testnetJson) + ": " + result.error);
                }
            })
            
        }                
    };

    function getTestnetTokenAddressPerChainId(chainId) {
        for (let index = 0; index < testnets?.length; index++) {
            const element = testnets[index];
            if (element.chain_id === chainId) {
                return element.token_address
            }
        }
    }

    useEffect(() => {
        if (!loading && testnets.length > 0) {            
            const userChainId = 0;
            try {
                const userChainId = parseInt(JSON.stringify(data.chain.chainId))
            } catch {}
            
            // console.log("User is connected to chain ID " + userChainId);
            for (let index = 0; index < testnets.length; index++) {
                const element = testnets[index];
                if (element.chain_id === userChainId) {
                    // console.log("This chain is in our list, it's " + data.chain.slug);
                    setSelectedChain(userChainId);
                    setSelectedOption(getTestnetPrettyName({'ecosystem': data.chain.chain, 'chain': data.chain.name}));
                }
            }
        }
    }, [testnets, loading, data, setSelectedChain])

    
    

    

    return    <div className="topbar">
                <div className="container">
                    <div className="topbar-inner flex">
                        <span>SpiderWeb.ai is now BETA on {testnets?.length} testnets</span>
                        <div className="menu-options flex">                            
                            <div className="ethereum">
                                <div id="ethereum" className="dropdown">
                                    <Dropdown>
                                        <DropdownButton id="dropdown-basic-button" title={selectedOption || 'Select a chain'} onSelect={handleOptionSelect}>
                                            {testnets?.map((testnet) => {
                                                    return (
                                                        <Dropdown.Item key={testnet.chain_id} eventKey={JSON.stringify(testnet)} value={testnet.ecosystem}>{getTestnetPrettyName(testnet)}</Dropdown.Item>                                                    
                                                    );
                                            })}                                            
                                        </DropdownButton>
                                    </Dropdown>
                                </div>
                            </div>                           
                        </div>
                        <div className="topbar-right flex">                            
                            <div id="claim-button" style={{ maxHeight: "50%", display: "block", visibility: selectedOption ? "visible" : "hidden" }}>
                                <span style={{marginRight: 10 + 'em'}}>Try us out for free!</span>
                                <Web3Button 
                                    contractAddress={getTestnetTokenAddressPerChainId(selectedChain)} 
                                    contractAbi={abis?.token}
                                    // action={(contract) => contract.erc20.claim(100)}>
                                    action={(contract) => contract.contractWrapper.readContract.owner()} // TODO
                                    onSuccess={(result) => { console.log("Claim success: " + result) ; toast.success("Claim was successful! 🤑") }}
                                    onError={(error) => { toast.error('Something went wrong.. '); console.log(error)}}
                                    >
                                        Claim 100 SPAI token
                                </Web3Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>;
};

export default TopBar;
