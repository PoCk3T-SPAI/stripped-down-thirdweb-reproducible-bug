import React , { useState , useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import SpiderwebContext from '../../spiderweb';

import img1 from '../../assets/images/post/post-recent-new-4.jpg'
import img2 from '../../assets/images/post/post-recent-new-5.jpg'

import logo from '../../assets/images/logo/logo_dark.png'
import logo2x from '../../assets/images/logo/logo_dark@2x.png'

const Footer = () => {
    const [dataSocial] = useState([
        {
            icon: 'fab fa-discord',
            link: "https://discord.gg/SpiderWeb.AI"
        },
        {
            icon: 'fab fa-twitter',
            link: "https://twitter.com/SpiderWeb.AI"
        },
        {
            icon: 'fab fa-medium',
            link: "https://spiderweb-ai.medium.com/"
        },        
    ])

    const [dataLinkSpiderweb] = useState([
        {
            title: 'SpiderWeb.ai Inc.',
            link: '/company'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
        {
            title: 'How it works',
            link: 'https://docs.spiderweb.ai/getting-started'
        },
        {
            title: 'FAQ',
            link: 'https://docs.spiderweb.ai/faq'
        },
        {
            title: 'Blog',
            link: 'https://spiderweb-ai.medium.com/'
        },        
    ])

    const [dataLinkMarket] = useState([
        {
            title: 'Gaming',
            link: '/item'
        },
        {
            title: 'Product',
            link: '/item'
        },
        {
            title: 'All NFTs',
            link: '/item'
        },
        {
            title: 'Social Network',
            link: '/item'
        },
        {
            title: 'Domain Names',
            link: '/item'
        },
        {
            title: 'Collectibles',
            link: '/item'
        },
    ])

    const [dataSupport] = useState([
        {
            title: 'Setting & Privacy',
            link: '/contact'
        },
        {
            title: 'Help & Support',
            link: '/contact'
        },
        {
            title: 'Live Auctions',
            link: '/item'
        },
        {
            title: 'Item Details',
            link: '/item-details'
        },
        {
            title: '24/7 Supports',
            link: '/contact'
        },
        {
            title: 'Blog',
            link: '/blog'
        },
    ])

    const [dataRecent] = useState([
        {
            img: img1,
            title: 'Roll Out New Features Without Hurting Loyal Users',
            time: '25 JAN 2022',
        },
        {
            img: img2,
            title: 'An Overview The Most Comon UX Design Deliverables',
            time: '25 JAN 2022',
        },
    ])

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Spiderweb testnets API calls from context 
    const { testnets, setTestnets, abis, setAbis} = useContext(SpiderwebContext);

    // Helping functions
    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    
    function getTestnetPrettyName(testnet) {
        if (testnet === undefined)
            return undefined 
        return capitalizeFirstLetter(testnet.ecosystem) + " " + capitalizeFirstLetter(testnet.chain);
    }

  return (
      <div>
            <footer id="footer" className="clearfix bg-style">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/">
                                        <img id="logo_footer" src={logo} alt="SpiderWeb.ai" srcSet={logo2x} />
                                    </Link>
                                </div>
                                {/* <p className="sub-widget-logo">Sed ut perspiciatis unde omnis iste natus error sit voluptate
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes</p> */}
                                <div className="widget widget-menu menu-marketplace" style={{paddingLeft: 0 + 'em'}}>
                                    <ul>
                                        {
                                            dataLinkSpiderweb.map((item,index)=> (
                                                <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>                                                                
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-marketplace">
                                <h5 className="title-widget">Token</h5>
                                <ul>
                                    {
                                        testnets?.map((item,index)=> (
                                            <li key={index}><Link target='_blank' to={item.token_url}>{getTestnetPrettyName(item)}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-supports">
                                <h5 className="title-widget">Contract</h5>
                                <ul>
                                    {
                                        testnets?.map((item,index)=> (
                                            <li key={index}><Link target='_blank' to={item.nft_url}>{getTestnetPrettyName(item)}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* <div className="widget widget-post">
                                <h5 className="title-widget">News & Post</h5>
                                <ul className="post-new">
                                    {
                                        dataRecent.map((item,index)=> (
                                            <li key={index}>
                                                <div className="post-img">
                                                    <img src={item.img} alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                                    <Link to="/blog-details" className="post-date"><i
                                                            className="far fa-calendar-week"></i> {item.time}</Link>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div> */}
                             <div className="widget-social style-2">
                                <h5 className="title-widget">Join our community</h5>
                                <ul>
                                {
                                    dataSocial.map((item,index)=> (
                                        <li key={index}><Link to={item.link} target="_blank"><i className={item.icon}></i></Link></li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom">
                <div className="container">
                    <div className="bottom-inner">
                        Copyright © 2023 <a href="/company">SpiderWeb.ai - Incorporated in Delaware</a>
                    </div>
                </div>
            </div>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
      </div>
  );
};

export default Footer;
