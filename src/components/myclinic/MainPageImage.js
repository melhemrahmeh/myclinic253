import { Link } from "react-router-dom"
import React  from 'react'

export default function MainPageImage() {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ borderColor: 'rgba(256, 256, 256, .3) !important' }}>Welcome To MyClinic</h5>
            <h1 className="display-1 text-white mb-md-4">Best HealthCare, From the Comfort of Your Home</h1>
            <div className="pt-2">
              <a className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"><Link to="/contactus">Contact us</Link></a>
              <a className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"> <Link to="/bookappointment">Book Appointment</Link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}