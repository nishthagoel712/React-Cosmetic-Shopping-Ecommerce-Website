import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cart from "../cart.svg";
import makeup from "../makeup.svg";
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class Navbar extends Component{
    render(){
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5" >
            {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
            <Link to='/'><img src={makeup} alt="store" width='70px' height='70px'  className="navbar-brand"></img></Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        myCosmetics
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
            <ButtonContainer>
						my cart
						<span className="mr-2">
							<img src={cart} width='40px' height='40px' alt=''/>
						</span>
					</ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}
const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.6rem;
    text-transform:capitalize;
}
`
