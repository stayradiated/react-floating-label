import React, {PropTypes} from 'react'
import classNames from 'classnames'

export default class FloatingLabel extends React.Component {

  static propTypes = {
    errorMsg: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    pattern: PropTypes.instanceOf(RegExp),
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  constructor (props) {
    super(props)
    this.state = {hasValue: false, hasError: false}

    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onBlur (event) {
    this.setState({
      hasValue: !!event.currentTarget.value,
    })
  }

  onChange (event) {
    const {pattern, onChange} = this.props
    if (pattern != null) {
      this.setState({
        hasError: !pattern.test(event.currentTarget.value),
        hasValue: !!event.currentTarget.value,
      })
    }
    onChange && onChange(event)
  }

  render () {
    const {errorMsg, id, pattern, placeholder, ...inputProps} = this.props
    const {hasValue, hasError} = this.state

    const inputClasses = classNames('fl-input', {
      'fl-valid': hasValue && !hasError,
      'fl-invalid': hasValue && hasError,
    })

    const errMsgClasses = classNames({
      'fl-error-msg': errorMsg,
      'fl-error-show': (hasError && hasValue) && (errorMsg && pattern),
    })

    return (
      <div className='fl-input-container'>
        <input
          {...inputProps}
          className={inputClasses}
          id={id}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
        <label className='fl-input-label' htmlFor={id}>
          {placeholder}
        </label>
        <span className='fl-input-bar' />
        {errorMsg &&
          <span className={errMsgClasses}>{errorMsg}</span>}
      </div>
    )
  }
}

FloatingLabel.defaultProps = {
  id: 'text-box',
  placeholder: 'name',
}
