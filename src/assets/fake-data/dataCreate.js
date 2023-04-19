import img1 from '../images/icon/icon-10.svg'
import img2 from '../images/icon/docker.svg'
import img3 from '../images/icon/nft.svg'
import img4 from '../images/icon/icon-13.svg'

const dataCreate = [
    {
        img: img1,
        title: 'Connect your Web3 wallet',
        desc: 'MetaMask, Trust Wallet and Coinbase wallet compatible',
        link: "/connect-wallet"
    },
    {
        img: img2,
        title: 'Dockerize your model',
        desc: 'Any framework/library accepted, bundle it as a Docker-compatible container image',
        link: "/creator"
    },
    {
        img: img3,
        title: 'Publish your model',
        desc: 'Your own model-as-an-NFT gets minted on all the chains Spiderweb.ai is live on',
        class:'mg-bt-0',
        link: "/create-item"
    },
    {
        img: img4,
        title: 'Get royalty at each prediction',
        desc: 'Users requesting inference from your model awards you royalties',
        class:'mg-bt-0',
        link: "/getting-started"
    },  
]

export default dataCreate;