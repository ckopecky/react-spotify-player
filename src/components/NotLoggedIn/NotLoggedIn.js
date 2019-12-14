import React from "react";

const endpoint = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_PROD_AUTHENDPOINT : process.env.REACT_APP_DEV_AUTHENDPOINT

const NotLoggedIn = () => {
  return (
    <a
      className="btn btn--loginApp-link"
      href={`${endpoint}/auth/spotify`}
    >
      Login to Spotify
    </a>
  );
};

export default NotLoggedIn;
