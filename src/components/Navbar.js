import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">EDUCATION</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="student">Student </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="teacher">Teacher</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="subject">Subject</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="enrolment">Enrolment</a>
            </li>
          </ul>
         
        </div>
      </nav>
    </div>
  )
}

export default Navbar