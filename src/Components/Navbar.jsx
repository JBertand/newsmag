
export const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" onClick={()=>setCategory("general")} > <span className="badge bg-light text-dark fs-4">NewsMag</span> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" aria-current="page" onClick={()=>setCategory("technology")}>Technologie</div>
                        </li>

                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" aria-current="page"onClick={()=>setCategory("business")}>Business</div>
                        </li>

                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" aria-current="page"onClick={()=>setCategory("health")}>Health</div>
                        </li>

                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" aria-current="page"onClick={()=>setCategory("science")}>Science</div>
                        </li>

                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" aria-current="page"onClick={()=>setCategory("sports")}>Sport</div>
                        </li>

                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" aria-disabled="true"onClick={()=>setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
