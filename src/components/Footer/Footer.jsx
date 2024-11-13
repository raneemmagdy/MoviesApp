import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Movie App. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="mb-0">This website is not affiliated with any movie studio. All rights to movie titles and content are owned by their respective copyright holders.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
