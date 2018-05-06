import React, { Component } from 'react'
import Icon from 'react-simple-icons'

import './SocialIcons.styles.css'

export default class SocialIcons extends Component {
  state = {
    instagram: false,
    linkedin: false,
    facebook: false,
    medium: false,
    twitter: false,
  }

  render () {
    return (
      <div id="social-icons">
        <a href="https://www.instagram.com/_mannycolon/" target="_blank" rel='noopener noreferrer'>
          <Icon
            name='instagram'
            size={17}
            color={this.state.instagram ? '#bd0826' : "#4d4d4e"}
            style={{ margin: 10, cursor: 'pointer' }}
            onMouseOver={() => this.setState({ instagram: true })}
            onMouseLeave={() => this.setState({ instagram: false })}
          />
        </a>
        <a href="https://www.linkedin.com/in/mannycolon/" target="_blank" rel='noopener noreferrer'>
          <Icon
            name='linkedin'
            size={17}
            color={this.state.linkedin ? '#bd0826' : "#4d4d4e"}
            style={{ margin: 10, cursor: 'pointer' }}
            onMouseOver={() => this.setState({ linkedin: true })}
            onMouseLeave={() => this.setState({ linkedin: false })}
          />
        </a>
        <a href="https://www.facebook.com/colonmanny" target="_blank" rel='noopener noreferrer'>
          <Icon
            name='facebook'
            size={17}
            color={this.state.facebook ? '#bd0826' : "#4d4d4e"}
            style={{ margin: 10, cursor: 'pointer' }}
            onMouseOver={() => this.setState({ facebook: true })}
            onMouseLeave={() => this.setState({ facebook: false })}
          />
        </a>
        {/* <a href="https://medium.com/@colonmanuel7" target="_blank" rel='noopener noreferrer'>
          <Icon
            name='medium'
            size={17}
            color={this.state.medium ? '#bd0826' : "#4d4d4e"}
            style={{ margin: 10, cursor: 'pointer' }}
            onMouseOver={() => this.setState({ medium: true })}
            onMouseLeave={() => this.setState({ medium: false })}
          />
        </a> */}
        <a href="https://www.twitter.com/" target="_blank" rel='noopener noreferrer'>
          <Icon
            name='twitter'
            size={17}
            color={this.state.twitter ? '#bd0826' : "#4d4d4e"}
            style={{ margin: 10, cursor: 'pointer' }}
            onMouseOver={() => this.setState({ twitter: true })}
            onMouseLeave={() => this.setState({ twitter: false })}
          />
        </a>
      </div>
    )
  }
}
