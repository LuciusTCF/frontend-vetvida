// import React from 'react'

const NavbarApp = () => {
  return (
    <nav className="navbar bg-info mb-3">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex" >
      
      <button className="btn btn-outline-danger" >cerrar sesion</button>
      {loginUser ? "LogOut" : "LogIn"}
    </form>
  </div>
</nav>
  )
}

export default NavbarApp