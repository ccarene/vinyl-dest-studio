import logo from './logo.svg';
import './App.css';
import Home from './home-component/Home.js'

function App() {
  return (
    <div className="App">
      {/* <head>

        <meta charset="utf-8"></meta>
        <title>Vinyl Destination</title>
        <base href="/"></base>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </head> */}
      <div style={{backgroundColor: "bisque"}}>
        <Home></Home>
      </div>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>My app is working</h1>
      </header> */}
    </div>
  );
}

export default App;
