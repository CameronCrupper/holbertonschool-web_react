import React from 'react';
import PropTypes from 'prop-types';


const NotificationItem = ({type, value, html, className}) => {
    if (!html) {
        return (
            <li data-notification-type={type}
            className={className}
            >{value}</li>
        )
    } else {
        return (
            <li data-notification-type={type}
            dangerouslySetInnerHTML={html}
            className={className}
            ></li>
        );
    }
}
NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: null,
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
}

export default NotificationItem;
