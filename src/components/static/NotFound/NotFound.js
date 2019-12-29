import React from 'react';
import { withRouter } from 'react-router';
// import { PageView } from '../../../services/Analytics';
import { Icon, Link } from '../../elements';
import './notFound.scss';

class NotFound extends React.Component {


  render() {
    return (
      <div className="container--outer">
        <div className="not-found">
          <div>
            <img
              src="https://natured.s3.amazonaws.com/imgix/assets/icons/beet.png?auto=compress"
              className="beet-image"
              alt="nervous beet icon"
            />
          </div>
          <div className="content">
            <div className="text-content">
              <h2 className="header--1--ish">This can’t beet right.</h2>
              <p className="subheader">The page you are looking for cannot be found.</p>
            </div>

            <Link to="MARKET" className="button--white--jumbo">
              Back to Market &nbsp; <Icon type="right" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NotFound);
