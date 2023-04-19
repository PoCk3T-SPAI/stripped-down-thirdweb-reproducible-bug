// 32x32 icons for avatars on item details
import chainIconAvax from '../assets/images/spider-illustrations/blockchains/35x35/avalanche.png'
import chainIconBsc from '../assets/images/spider-illustrations/blockchains/35x35/bsc.png'
import chainIconEth from '../assets/images/spider-illustrations/blockchains/35x35/ethereum.png'
import chainIconFtm from '../assets/images/spider-illustrations/blockchains/35x35/fantom.png'
import chainIconPolygon from '../assets/images/spider-illustrations/blockchains/35x35/polygon.png'

// Generic robot illustration 512x512
import spiderWebAiIcon from '../assets/images/spider-illustrations/robot-profile-picture.png'

// 350x350 OpenSea-compatible NFT illustrations
import nftCardClimate from '../assets/images/spider-illustrations/nft-cards/Climate.png'
import nftCardDeFi from '../assets/images/spider-illustrations/nft-cards/DeFi.png'
import nftCardGaming from '../assets/images/spider-illustrations/nft-cards/Gaming.png'
import nftCardOther from '../assets/images/spider-illustrations/nft-cards/Other.png'
import nftCardSport from '../assets/images/spider-illustrations/nft-cards/Sport.png'

export const blockchainIllustrations = [
    
    {
        img: chainIconAvax,
        name: "Avalanche"
    },
    {
        img: chainIconBsc,
        name: "Binance Smart Chain"
    },
    {
        img: chainIconEth,
        name: "Ethereum"
    },
    {
        img: chainIconFtm,
        name: "Fantom"
    },
    {
        img: chainIconPolygon,
        name: "Polygon"
    },
]

export const spiderWebAiIconIllustration = { img: spiderWebAiIcon, name: "SpiderWeb.AI logo icon"}

export function getNftIllustration(industry) {
    if (String(industry).toLowerCase().includes("sport")) {
        return {'img': nftCardSport, 'text': "SpiderWeb.ai Machine Learning as NFT for Sport"}
    } else if (String(industry).toLowerCase().includes("gaming")) {
        return {'img': nftCardGaming, 'text': "SpiderWeb.ai Machine Learning as NFT for Gaming"}
    } else if (String(industry).toLowerCase().includes("defi")) {
        return {'img': nftCardDeFi, 'text': "SpiderWeb.ai Machine Learning as NFT for DeFi"}
    } else if (String(industry).toLowerCase().includes("climate")) {
        return {'img': nftCardClimate, 'text': "SpiderWeb.ai Machine Learning as NFT for Climate"}
    } else {
        return {'img': nftCardOther, 'text': "SpiderWeb.ai Machine Learning as NFT"}
    }
}