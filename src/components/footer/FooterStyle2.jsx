import React , { useState , useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import SpiderwebContext from '../../spiderweb';

import logo from '../../assets/images/logo/logo_dark.png'
import logo2x from '../../assets/images/logo/logo_dark@2x.png'

const FooterStyle2 = () => {
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
            link: "https://medium.com/@SpiderWeb.AI"
        },        
    ])

    const [dataLinkMarket] = useState([
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
            link: '/getting-started'
        },
        {
            title: 'FAQ',
            link: '/faq'
        },
        {
            title: 'Blog',
            link: '/blog'
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

    // Load the list of testnets & ABIs from Spiderweb APIs
    const { testnets, setTestnets, abis, setAbis} = useContext(SpiderwebContext);
    
  return (
      <div>
            <footer id="footer" className="clearfix bg-style style-2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-12 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/"><img id="logo_footer" src={logo} alt="SpiderWeb.ai" srcSet={logo2x} /></Link>
                                </div>
                            </div>
                            <div className="widget widget-menu menu-marketplace style-2">
                                <ul>
                                    {
                                        dataLinkMarket.map((item,index)=> (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-12">
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
                    <div className="row">
                        
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

export default FooterStyle2;
