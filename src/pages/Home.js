import { withRouter } from 'react-router-dom'
import ImageLoader from '../components/ImageLoader'
import home from '../images/home.jpg'

function Home(props) {
  return (
    <>
      <main>
        <div className="col-10 mt-5">
          <ImageLoader src={home} />
        </div>
      </main>
    </>
  )
}

export default withRouter(Home)
