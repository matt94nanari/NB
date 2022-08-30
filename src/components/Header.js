import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Image } from 'react-bootstrap'
import logo from '../images/other/logo.svg'
import logoText from '../images/other/logoText.svg'

function Header(props) {
  const [showNavbar, setShowNavbar] = useState(true)
  useEffect(() => {
    let lastScroll = window.scrollY || document.body.scrollTop
    const handleScroll = () => {
      document.onmousemove = handleMouseMove
      function handleMouseMove(event) {
        let eventDoc, doc, body
        if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document
          doc = eventDoc.documentElement
          body = eventDoc.body
          event.pageX =
            event.clientX +
            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0)
          event.pageY =
            event.clientY +
            ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
            ((doc && doc.clientTop) || (body && body.clientTop) || 0)
        }
        if (event.clientY <= 110) {
          setShowNavbar(true)
        }
      }
      const currentScroll = window.scrollY || document.body.scrollTop
      if (currentScroll > lastScroll) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      if (currentScroll === 0) {
        setShowNavbar(true)
      }
      if (currentScroll < 0) {
        lastScroll = 0
      } else {
        lastScroll = currentScroll
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [props])
  return (
    <header className="header">
      <Navbar expand="null" fixed="top" className={showNavbar ? 'show' : ''}>
        <Navbar.Brand className="col-3" exact as={NavLink} to="/">
          <picture>
            <source media="(min-width: 1250px)" srcSet={logoText} />
            <source media="(max-width: 1249px)" srcSet={logo} />
            <Image src={logoText} alt="logo" />
          </picture>
        </Navbar.Brand>
        <div className="text">
          <p>
            宁波易扬贸易有限公司
            <br />
            <strong>NINGBO YIYANG TRADE CO., LTD</strong>
            <br />
            ROOM 9-2, NO.202 JIEFANG SOUTH ROAD, HAISHU, NINGBO, CHINA
          </p>
        </div>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
