import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos'
//import components
import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './utils/ScrollToTop'
import PrivacyButton from './components/PirvacyButton'
//import pages
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [hashID, setHashID] = useState('')
  useEffect(() => {
    const handleAos = () => {
      AOS.init({
        duration: 500,
      })
    }
    if (showLoader) {
      setTimeout(() => {
        setShowLoader(false)
        handleAos()
      }, 1500)
    }
  }, [showLoader])
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <HelmetProvider>
          <Suspense fallback={null}>
            <ScrollToTop
              setShowLoader={setShowLoader}
              showLoader={showLoader}
              hashID={hashID}
            >
              <Loader showLoader={showLoader} />
              <Header setShowLoader={setShowLoader} setHashID={setHashID} />
              <Route
                render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={450}
                      classNames="fade"
                    >
                      <Switch location={location}>
                        <Route exact path="/">
                          <Home
                            showLoader={showLoader}
                            setShowLoader={setShowLoader}
                          />
                        </Route>
                        <Route path="*">
                          <PageNotFound />
                        </Route>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
              <BackToTop />
              <Footer />
            </ScrollToTop>
          </Suspense>
        </HelmetProvider>
      </Router>
    </>
  )
}

export default App
