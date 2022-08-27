import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ImageLoader from './ImageLoader'
import certification from '../images/certification.jpg'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFax } from 'react-icons/fa'
import { GoMailRead } from 'react-icons/go'
import { HiOutlineLocationMarker } from 'react-icons/hi'
function Footer(props) {
  return (
    <>
      <footer className="footer">
        <hr />
        <Container>
          <div className="d-flex flex-wrap justify-content-around">
            <div className="col-lg-8 col-md-12">
              <ImageLoader src={certification} />
            </div>
            <ul className="col-lg-4 col-md-12">
              <li className="ps-4">联络资讯</li>
              <li>
                <BsTelephoneFill /> 86-574-87271432
              </li>
              <li>
                <FaFax /> 86-574-87651963
              </li>
              <li>
                <GoMailRead /> xeon@easylink.com.tw
              </li>
              <li>
                <HiOutlineLocationMarker /> 宁波市海曙区解放南路202号9-2室
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  )
}
export default withRouter(Footer)
