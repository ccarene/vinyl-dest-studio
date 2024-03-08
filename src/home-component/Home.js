export default function Home() {
    return (
        <div>
    <header className="head" style={{backgroundColor: "bisque"}}>
        <div className="row">
            <div className="large-6" style={{textAlign: "center"}}>
            <h1 className="font-test">Vinyl Destination</h1>
            </div>
        </div>
        <div className="row page-header"> 
            <div className="col-2 nav-button"><p></p></div>
            <div className="col-2 nav-button"><a href="./"> <h2>All Vinyls</h2></a></div>
            <div className="col-2 nav-button"><a className="board" ><h2>60s</h2></a></div>
            <div className="col-2 nav-button"><a className="board" ><h2>70s</h2></a></div>
            <div className="col-2 nav-button"><a className="board" ><h2>80s</h2></a></div> 
            <div className="col-2 nav-button" style={{paddingTop: "0.5rem"}}><a href="./login"><h5>Log in/Sign up</h5></a></div> 
        </div> 

    </header> 

    <footer className="footer-outline">
        <div className="row">
            <div className="col-2 footer-col">
                <div className="row"><h5>Visit Us Here</h5></div>
                <div className="row"><a>Donate Here</a></div>
                <div className="row"><a>Social Media Links</a></div>
                <div className="row"><a>Other</a></div>
            </div>
            <div className="col-2 footer-col">
                <div className="row"><h5>Account Links</h5></div>
                <div className="row"><a href="./login" >Log in</a></div>
                <div className="row"><a>Account Settings</a></div>
                <div className="row"><a>Sign Out</a></div>
            </div>
        </div>
    </footer>
    </div>
    );
}