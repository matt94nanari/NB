import { withRouter } from 'react-router-dom'
import ImageLoader from '../components/ImageLoader'
import home from '../images/home.jpg'

function Home(props) {
  return (
    <>
      <main>
        <div className="col-lg-8 col-md-10 col-12 mt-5">
          <ImageLoader src={home} />
        </div>
        <h1 className="ps-5 mb-5">产品展示</h1>
        <div
          className="d-flex justify-content-around flex-wrap"
          data-aos="zoom-in"
        >
          <ImageLoader
            src={require('../images/product/product1.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product2.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product3.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
        </div>
        <div
          className="d-flex justify-content-around flex-wrap my-5"
          data-aos="zoom-in"
        >
          <ImageLoader
            src={require('../images/product/product4.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product5.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product6.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
        </div>
        <div
          className="d-flex justify-content-around flex-wrap my-5"
          data-aos="zoom-in"
        >
          <ImageLoader
            src={require('../images/product/product7.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product8.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product9.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
        </div>
        <div
          className="d-flex justify-content-around flex-wrap my-5"
          data-aos="zoom-in"
        >
          <ImageLoader
            src={require('../images/product/product10.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product11.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product12.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
        </div>
        <div
          className="d-flex justify-content-around flex-wrap my-5"
          data-aos="zoom-in"
        >
          <ImageLoader
            src={require('../images/product/product13.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product14.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product15.webp')}
            className="col-lg-3 col-md-8 col-10 my-2"
          />
        </div>
        <hr />
        <h1 className="ps-5 mb-5" data-aos="zoom-in">
          产品展示-運動插銷
        </h1>
        <div
          className="d-flex justify-content-around flex-wrap my-5"
          data-aos="zoom-in"
        >
          <ImageLoader
            src={require('../images/product/product16.webp')}
            className="col-lg-5 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product17.webp')}
            className="col-lg-5 col-md-8 col-10 my-2"
          />
        </div>
        <div
          className="d-flex justify-content-around flex-wrap my-5"
          data-aos="zoom-in"
        >
          <ImageLoader
            src={require('../images/product/product18.webp')}
            className="col-lg-5 col-md-8 col-10 my-2"
          />
          <ImageLoader
            src={require('../images/product/product19.webp')}
            className="col-lg-5 col-md-8 col-10 my-2"
          />
        </div>
      </main>
    </>
  )
}

export default withRouter(Home)
