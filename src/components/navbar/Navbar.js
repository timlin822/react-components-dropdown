import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa';

import logo from 'images/logo.png';

import './Navbar.css';

const Navbar=()=>{
    const [dropdownIsShow,setDropdownIsShow]=useState(false);
	const [navbarIsOpen,setNavbarIsOpen]=useState(false);

	const navbarClickHandler=()=>{
		setNavbarIsOpen(!navbarIsOpen);
	};
	const navbarCloseHandler=()=>{
		setNavbarIsOpen(false);
	};

    const mouseEnterHandler=()=>{
		setDropdownIsShow(true);
	};
    const mouseLeaveHandler=()=>{
		setDropdownIsShow(false);
	};

    return (
		<header className="navbar">
			<nav className="container navbar-menu">
				<Link to="/" className="logo" onClick={navbarCloseHandler}><img src={logo} alt="logo" /></Link>
				<div className={navbarIsOpen?"main-navbar main-navbar-open":"main-navbar"}>
					<Link to="/" className="btn-link" onClick={navbarCloseHandler}>首頁</Link>
                    <div className="btn-link" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>聯繫
						<div className={dropdownIsShow?"dropdown dropdown-open":"dropdown"}>
							<Link to="/about" className="btn-dropdown-link" onClick={navbarCloseHandler}>關於我們</Link>
							<Link to="/blog" className="btn-dropdown-link" onClick={navbarCloseHandler}>部落格</Link>
							<Link to="/contact" className="btn-dropdown-link" onClick={navbarCloseHandler}>聯絡我們</Link>
						</div>
                    </div>
					<Link to="/feature" className="btn-link" onClick={navbarCloseHandler}>特色</Link>
                    <Link to="/product" className="btn-link" onClick={navbarCloseHandler}>產品</Link>
					<Link to="/service" className="btn-link" onClick={navbarCloseHandler}>服務</Link>
                    <Link to="/login" className="btn-login" onClick={navbarCloseHandler}>登入</Link>
				</div>
				<span className="btn-toggle" onClick={navbarClickHandler}>{navbarIsOpen?<FaTimes />:<FaBars />}</span>
			</nav>
		</header>
    );
}

export default Navbar;