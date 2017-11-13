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
      <div className="description">
        <p>This is where the description will go. Until I decide what I want to put here, it will be this 
        random text, in order to see what it will look like.</p>
      </div>
      <div className="consoles">
        <div className="console">
          <img className="console-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Xbox_logo_2012_cropped.svg/2000px-Xbox_logo_2012_cropped.svg.png" 
           onClick={() => props.history.push('/console/xboxone')} />
        </div>
        <div className="console">
          <img className="console-pic-switch" src="https://vignette.wikia.nocookie.net/logopedia/images/6/62/Nintendo-switch-logo-587x330.png/revision/latest?cb=20161022062931" 
           onClick={() => props.history.push('/console/switch')}/>
        </div>
        <div className="console">
          <img className="console-pic" src="http://moziru.com/images/logo-clipart-ps4-9.jpg" 
           onClick={() => props.history.push('/console/ps4')}/>
        </div>
      </div>
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
