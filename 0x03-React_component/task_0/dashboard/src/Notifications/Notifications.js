import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import closeIcon from '../assets/close-Icon.png';

import { getLatestNotification } from '../utils/utils.js';
import NotficationItem from './NotificationItem.js'
import NotificationItemShape from './NotificationItemShape.js';


const Notifications = ({ displayDrawer, listNotifications }) => {
    return (
        <React.Fragment>
        <div className='menuItem'><p>Your notifications</p></div>
        {
            displayDrawer && (
            <div className='Notifications'>
                <button style={{
                    right: '1%',
                    width: '32px',
                    height: '32px',
                    position: 'absolute',
                    background: 'none',
                    border: 'none',
                }}
                aria-label="Close"
               onClick={() => {
                   console.log("Close button has been clicked");
               }}
                ><img src={closeIcon} alt='close-icon' id="button-img"></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                {listNotifications.length === 0 && (
                    <>
                    <NotificationItem
                        className="default"
                        value='No new notification for now'
                        key={0}
                    />
                    </>
                )}
                {listNotifications.map((notification) => (
                    <>
                    <NotficationItem        
                        className={notification.type}            
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                    />
                    </>
                ))
                }
                </ul>
            </div>
            )
        }
        </React.Fragment>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;
