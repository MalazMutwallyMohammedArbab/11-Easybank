import React, { useRef } from 'react';
import './App.css';
import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import mock from './images/image-mockups.png';
import online from './images/icon-online.svg';
import budg from './images/icon-budgeting.svg';
import onboard from './images/icon-onboarding.svg'
import api from './images/icon-api.svg';
import currency from './images/image-currency.jpg';
import restaurant from './images/image-restaurant.jpg';
import plane from './images/image-plane.jpg';
import confeti from './images/image-confetti.jpg';
import facebook from './images/facebook1.png';
import whats from './images/whatsapp.png';
import twetter from './images/twetter.png';
import instagram from './images/instagram.png';

//const logo = require('./images/logo.svg');

const App = () => {
    const navRef = useRef();

const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
}
    return(
        <section className='all'>
            <section className='header'>
            <div className="container">
                <img className='logo' src={logo} alt='' /> 
                <ul ref={navRef} className='list hidden'>
                    <li className='listitem'>Home</li>
                    <li className='listitem'>About</li>
                    <li className='listitem'>Contact</li>
                    <li className='listitem'>Blog</li>
                    <li className='listitem'>Careers</li>
                </ul>
                <button className='button'>Request Invite</button>
                <img onClick={showNavbar} className='hamp' src={hamburger} alt='' />
            </div>
            </section>

            <section className='intro'>
                <div className='container '>
                    <img className='mockimg' src={mock} alt='' />                    
                    
                    <div className='paragraph'>
                        <h2 className='heroTitle'>Next generation digital banking</h2>
                        <p className='heroPara'>lorem hdjkkxk kdnl/n kjhkznkl klhlkhnv lhb/lkvs hilnlz hilnz jbljsl h.zkblkv g.jkbkjvs jgcf lorem hdjkkxk kdnl/n kjhkznkl klhlkhnv lhb/lkvs hilnlz hilnz jbljsl h.zkblkv g.jkbkjvs jgc</p>
                        <button className='button'>Request Invite</button>
                    </div>                        
                </div>
            </section>

            <section className="services">
               <div className="container">
                    <h3 className="serviceTitle">Why choose Easybank?</h3>
                    <p className="servicePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus mollitia, nesciunt quod accusantium expedita quos distinctio qui ullam, debitis assumenda dignissimos accusamus.</p>
                    <div className="serviceFlex">
                        <div className="first">
                            <img className='serviceimg' src={online} alt='' />
                            <h4 className="title">Online Banking</h4>
                            <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</p>
                        </div>
                        <div className="second">
                            <img className='serviceimg' src={budg} alt='' />
                            <h4 className="title">Simple Budgeting</h4>
                            <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</p>
                        </div>
                        <div className="third">
                            <img className='serviceimg' src={onboard} alt='' />
                            <h4 className="title">Fast Onboarding</h4>
                            <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</p>
                        </div>
                        <div className="forth">
                            <img className='serviceimg' src={api} alt='' />
                            <h4 className="title">Open API</h4>
                            <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='article'>
                <div className='container'>
                <h3 className='articleTitle'>Latest Articles</h3>
                <div className='articleGrid'>
                    <div className='articleFirst'>
                        <img className='imgarticle' src={currency} alt='' />
                        <div className='author'>By Claire Robinson</div>
                        <h4 className='titleArticle'>Receive money in any currency with no fees</h4>
                        <div className='paraArticle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</div>
                    </div>
                    <div className='articleSecond'>
                        <img className='imgarticle' src={restaurant} alt='' />
                        <div className='author'>By Wilson Hulton</div>
                        <h4 className='titleArticle'>Treat yourself without worrying about money</h4>
                        <div className='paraArticle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</div>
                    </div>
                    <div className='articleThird'>
                        <img className='imgarticle' src={plane} alt='' />
                        <div className='author'>By Wilson Hulton</div>
                        <h4 className='titleArticle'>Take your Easybank card wherever you go</h4>
                        <div className='paraArticle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</div>
                    </div>
                    <div className='articleForth'>
                        <img className='imgarticle' src={confeti} alt='' />
                        <div className='author'>By Claire Robinson</div>
                        <h4 className='titleArticle'>Our invite-only Beta accounts are now live!</h4>
                        <div className='paraArticle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro optio, veniam sapiente quas harum amet officiis ad reiciendis dolorem.</div>
                    </div>
                </div>
                </div>
            </section>

            <section className='footer'>
                <div className='container'>
                    <div className='footerFlex'>
                        <div className='footerOne'>
                            <img className='footerimg' src={logo} alt='' />
                            <div className='social'>
                                <img className='socialicon' src={facebook} alt='' />
                                <img className='socialicon' src={whats} alt='' />
                                <img className='socialicon' src={twetter} alt='' />
                                <img className='socialicon' src={instagram} alt='' />
                            </div>
                        </div>
                        <div className='footerTwo'>
                            <div className='about'>About Us</div>
                            <div className='contact'>Contact</div>
                            <div className='blog'>Blog</div>
                        </div>
                        <div className='footerThree'>
                            <div className='careers'>Careers</div>
                            <div className='support'>Support</div>
                            <div className='privacy'>Privace Policy</div>
                        </div>
                        <div className='footerFour'>
                            <button className='button'>Request Invite</button>
                            <div className='copy'>&copy; Easybank. All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default App;