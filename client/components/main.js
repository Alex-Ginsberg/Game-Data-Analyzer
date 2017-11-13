import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  return (
    <div>
      <h1 className="title">Pending Title Here</h1>
      <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={7000}
      transitionTime={1000}>
        <div>
            <img src="https://cdn.wccftech.com/wp-content/uploads/2017/09/Assassins-Creed-Origins-skills.jpg"/>
        </div>
        <div>
            <img src="http://www.justpushstart.com/wp-content/uploads/2017/06/NSwitch_SuperMarioOdyssey_05_mediaplayer_large.jpg" />
        </div>
        <div>
            <img src="https://www.dualshockers.com/wp-content/uploads/2017/10/CoD-WWII.png" />
        </div>
      </Carousel>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {

}
