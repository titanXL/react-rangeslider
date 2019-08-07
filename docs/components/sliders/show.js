import React, { Component } from 'react'
import Slider from '../../../lib/index'

class Show extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 1
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
          show
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default Show
