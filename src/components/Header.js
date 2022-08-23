import { NavLink } from 'react-router-dom'
import { Navbar, Image } from 'react-bootstrap'
import logo from '../images/other/logo.svg'
import logoText from '../images/other/logoText.svg'

function Header(props) {
  return (
    <header className="header">
      <Navbar expand="null" fixed="top">
        <Navbar.Brand className="col-3" exact as={NavLink} to="/">
          <picture>
            <source media="(min-width: 1250px)" srcSet={logoText} />
            <source media="(max-width: 1249px)" srcSet={logo} />
            <Image src={logoText} alt="logo" />
          </picture>
        </Navbar.Brand>
        <div className="text">
          <p>
            寧波易連貿易有限公司
            <br />
            <strong>Ningbo Easylink Trade Co. Ltd</strong>
            <br />
            ROOM 9-2 JIEFANG SOUTH ROAD, HAISHU, NINGBO, CHINA
          </p>
        </div>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
