import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


 
function Navbar () {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><span className="color">INTERN</span>SHALA</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Internships <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Online Trainings">Online Trainings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Fresher Jobs">Fresher Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Login">Login</a>
      </li>
        
      <li class="nav-item">
        <a class="nav-link" href="/Register">Register</a>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar 
