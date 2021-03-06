import React from 'react';
import constants from './constants';
import cx from 'classnames';

class Preloader extends React.Component {
  render() {
    let classes = {
      'preloader-wrapper': true,
      active: this.props.active
    };
    if (this.props.size) {
      classes[this.props.size] = true;
    }
    return (
      <div className={cx(this.props.className, classes)}>
        {this.props.colors.map(color => {
          let spinnerClasses = {
            'spinner-layer': true
          };
          spinnerClasses['spinner-' + color] = true;
          return (
            <div className={cx(spinnerClasses)}>
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

Preloader.propTypes = {
  size: React.PropTypes.oneOf(constants.SCALES),
  active: React.PropTypes.bool,
  colors: React.PropTypes.array
};

Preloader.defaultProps = {
  active: true,
  colors: ['blue', 'red', 'yellow', 'green']
};

export default Preloader;
