
const navbarComponent = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex flex-row">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbarComponent