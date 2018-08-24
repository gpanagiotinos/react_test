import React from 'react'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.InputRef = React.createRef()
    this.state = {
      placeholder: this.props.placeholder,
      type: this.props.type,
      id: this.props.id,
      value: '',
      autofocus: this.props.autofocus
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    e.persist()
    // this.props.onChange(e.target.value)
    this.setState((prevState, props) => ({
      value: e.target.value
    }))
  }
  componentDidMount () {
    if (this.state.autofocus !== undefined) {
      this.InputRef.current.focus()
    }
  }
  render () {
    return (
      <div>
        <input className='input control' ref={this.InputRef} id={this.state.id} type={this.state.type} placeholder={this.state.placeholder} onChange={this.handleChange} />
      </div>
    )
  }
}
module.exports = Input
