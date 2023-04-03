function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-transparant position-fixed w-100">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/Assets/Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-3"></img>
          Rumah Impian
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Layanan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fitur
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Kontak</a>
            </li>
          </ul>
        <div>
          <button className=" btn-pr">DAFTAR</button>
          <button className=" btn-sc">MASUK</button>
        </div>
        </div>

      </div>
    </nav>

  );
}

export default Navbar;