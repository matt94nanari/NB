import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ImageLoader from './ImageLoader'
import certification from '../images/certification.jpg'
function Footer(props) {
  return (
    <>
      <footer className="footer">
        <hr />
        <Container>
          <div className="d-flex">
            <div className="col-8">
              <ImageLoader src={certification} />
            </div>
            <ul>
              <li>联络资讯</li>
              <li>86-574-87271432</li>
              <li>86-574-87651963</li>
              <li>xeon@easylink.com.tw</li>
              <li>宁波市海曙区解放南路202号9-2室</li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  )
}
export default withRouter(Footer)
