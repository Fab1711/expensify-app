// Higher Order Component (HOC) - A component that renders another component
// Reunse code
// Render hijacking
// Prop manipulation
// Abstract state




import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin &&  <p>This is private Info. Please don't share!</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />  
      ) : ( 
        <p>You are not log in</p>
      )}
    </div>
  );
}; 

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="test" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="test" />,document.getElementById('app'));