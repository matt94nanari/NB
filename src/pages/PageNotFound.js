import { withRouter } from 'react-router-dom'

function PageNotFound(props) {
  return (
    <>
      <section className="pageNotFound">
        <div className="d-flex flex-column align-items-center">
          <div>
            <h1>ERROR 404</h1>
          </div>
          <div>
            <h3>Page Not Found</h3>
          </div>
          <div>
            <button
              className="btn my-3"
              onClick={() => {
                props.history.push('/')
              }}
            >
              首頁
            </button>
          </div>
          <br />
        </div>
      </section>
    </>
  )
}

export default withRouter(PageNotFound)
