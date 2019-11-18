import React from "react";


const NotLoggedIn = () => {
  console.log(process.env.REACT_APP_SCOPES)
  return (
    <a
      className="btn btn--loginApp-link"
      href={`${process.env.REACT_APP_AUTHENDPOINT}?client_id=${process.env.REACT_APP_CLIENTID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPES}&response_type=token&show_dialog=true`}
    >
      Login to Spotify
    </a>
  );
};

export default NotLoggedIn;
