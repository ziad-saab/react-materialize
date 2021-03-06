import React from 'react';
import cx from 'classnames';

// This should be used within any component that has a menu like interface
class MenuItem extends React.Component {
  render() {
    let {href, className, ...props} = this.props;
    let classes = {
      breadcrumb: true,
    };
    return (
      <a href={href} {...props} className={cx(classes, className)}>{this.props.children}</a>
    );
  }
}

MenuItem.propTypes = {
  // internal
  breadcrumbItem: React.PropTypes.bool,
  /**
   * The link for the anchor
   */
  href: React.PropTypes.string,
};

export default MenuItem;
