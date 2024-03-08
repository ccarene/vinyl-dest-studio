export default function Home() {
    return (
    <header class="head" style={{backgroundColor: "bisque"}}>
        <div class="row">
            <div class="large-6" style={{textAlign: "center"}}>
            <h1 class="font-test">Vinyl Destination</h1>
            </div>
        </div>
        <div class="row page-header"> 
            <div class="col-2 nav-button"><p></p></div>
            <div class="col-2 nav-button"><a href="./"> <h2>All Vinyls</h2></a></div>
            <div class="col-2 nav-button"><a class="board" routerLink="/next" routerLinkActive="active" ariaCurrentWhenActive="page"><h2>60s</h2></a></div>
            <div class="col-2 nav-button"><a class="board" routerLink="/next" routerLinkActive="active" ariaCurrentWhenActive="page"><h2>70s</h2></a></div>
            <div class="col-2 nav-button"><a class="board" routerLink="/next" routerLinkActive="active" ariaCurrentWhenActive="page"><h2>80s</h2></a></div> 
            <div class="col-2 nav-button" style={{paddingTop: "0.5rem"}}><a href="./login"><h5>Log in/Sign up</h5></a></div> 
        </div> 

    </header> 
    );
}