import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (<>

    <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found Page 404</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="d-flex flex-column justify-content-center align-items-center vh-100  text-white text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="fs-4 mb-3 text-secondary">Page Not Found</h2>
      <p className="mb-4 text-light">
        It seems like you've reached the end of the reel. The page you're looking for is missing. 
        Let's rewind and take you back to our home screen.
      </p>
      <a href="/" className="btn btn-danger btn-lg rounded-pill">
        Back to Home
      </a>
    </div>
    </>
  );
}
