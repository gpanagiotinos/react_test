import React from 'react'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      placeholder: this.props.placeholder,
      type: this.props.type
    }
  }
  render () {
    return (
      <div>
        <input className='input control' type={this.state.type} placeholder={this.state.placeholder} />
      </div>
    )
  }
}
module.exports = Input
