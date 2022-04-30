import React  from 'react'

export default function Header() {
  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-decoration-none text-body pe-3" href><i className="bi bi-telephone me-2" />+961 71 589 832</a>
              <span className="text-body">|</span>
              <a className="text-decoration-none text-body px-3" href><i className="bi bi-envelope me-2" />myclinic.cmps253@gmail.com</a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <a className="text-body px-2" href="https://www.facebook.com/">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-body px-2" href="https://twitter.com/">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-body px-2" href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-body px-2" href="https://www.instagram.com/">
                <i className="fab fa-instagram" />
              </a>
              <a className="text-body ps-2" href='https://www.youtube.com/'>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}