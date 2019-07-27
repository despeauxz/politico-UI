import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';


class RenderInput extends Component {
  static propTypes = {
      id: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      required: PropTypes.bool,
      placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
      handleChange: PropTypes.func.isRequired,
      onFocus: PropTypes.func
  };

  static defaultProps = {
      value: '',
      errors: {}
  };

  render() {
      const {
          id, type, name, placeholder, className,
          value, error, required, onFocus, ...rest
      } = this.props;
      
      return (
          <Fragment>
              <div className="form-group">
                  <label htmlFor={id} className="control-label">
                      {required && <span className="danger">* </span>}
                      {this.props.label}
                  </label>

                  <input
                      id={id}
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      className={className}
                      value={value}
                      onChange={e => this.props.handleChange(e)}
                      onFocus={onFocus}
                      error={error}
                      {...rest}
                  />
                  {error && <div className="text-red-600 text-xs text-left">{error}</div>}
              </div>
          </Fragment>
      );
  }
}


export default RenderInput;
