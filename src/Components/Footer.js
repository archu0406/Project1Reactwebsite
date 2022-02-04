import React from 'react';
import '../css/Footer.css';


class Footer extends React.Component {
  render()  {
  return (
    <div className='footer'>
        <p>
          Join the Adventure newsletter to receive our best vacation deals.
          You can unsubscribe at any time.
          <small>Copyright &copy; 2022. all rights reserved.</small>
        </p>
    </div>
  );
}
};

export default Footer;