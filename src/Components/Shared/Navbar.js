import { faArrowAltCircleRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle hover:bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/menu'>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/reviews'>Reviews</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center">
                    <Link to='/' class="normal-case text-xl font-bold hover:text-primary">Petuk's Catering</Link>
                </div>
                <div class="navbar-end">
                    <button class="btn btn-ghost btn-circle hover:bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button class="btn btn-ghost btn-circle hover:bg-primary">
                        <div class="indicator">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;