import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () =>{

    const [menu, setmenu] = useState('home')

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='' className='logo'></img>
            <ul className="navbar-menu">
                <li onClick={()=>{
                    setmenu("home")
                }} className={menu=="home"?"active":""} >Sobre nós</li>
                <li onClick={()=>{
                    setmenu("menu")
                }} className={menu=="menu"?"active":""} >Área de atuação</li>
                <li onClick={()=>{
                    setmenu("mobile-app")
                }} className={menu=="mobile-app"?"active":""} >Suporte</li>
                <li onClick={()=>{
                    setmenu("contact-us")
                }} className={menu=="contact-us"?"active":""} >Feedback</li>
                <li onClick={()=>{
                    setmenu("contact-us")
                }} className={menu=="contact-us"?"active":""} >Contato</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-seach-icon">
                    <img src={assets.basket_icon} alt=""/>
                    <div className="dot"></div>
                </div>
            </div>

        </div>
    )
}

export default Navbar