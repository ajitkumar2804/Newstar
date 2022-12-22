import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="null">Newstar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="home" href="home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="fav">Favourite Article</a>
                            </li>
                        </ul>
                    </div>
                    <button className='btn'>Login</button>
                    <button className='btn'>Signup</button>
                </div>
            </nav>
        </div>
    )
}