import React, {ReactElement} from 'react';

// style
import './style.scss';

export default function NoMatch(props: any): ReactElement {
  // variables
  const login = localStorage.getItem('login');

  // use effects
  React.useEffect(() => {
    const redirect = login === 'false' ? '/' : '/dashboard';
    setTimeout(() => {
      props.history.push(redirect);
    }, 6000);
  });

  return (
    <div id="nomatch">
      <div>
        <h1>Page not Found!</h1>
        <p>
          Redirecting to {login === 'false' ? 'Home' : 'Dashboard'} in 5
          seconds...
        </p>
      </div>
    </div>
  );
}
