import './Header.css'

const Header = () => {
    return ( 
        <div className="header-container">
            <div className="brand">
                <h1>Yonatan</h1>
            </div>
            <div className="navigations">
                <nav>
                    <ul>
                       <li><a>Home</a></li>
                       <li><a>Cars</a></li>
                       <li><a>About</a></li>
                       <li><a>Services</a></li> 
                    </ul>
                </nav>
            </div>

        </div> 
     );
}
 
export default Header;