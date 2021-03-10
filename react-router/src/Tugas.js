import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function tugas() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <AuthButton />
          <LoginPage />
        </Route>
        <HomeRoute path="/home">
          <AuthButton />
          <ProtectedPage />
        </HomeRoute>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Warungpedia</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/about" class="nav-item nav-link active">About</Link>
          </div>
        </div>
      </nav>

    </Router>
  );
}

function About() {
  // `path` untuk membuat jalur <Route> yang terhadap rute induk,
  //sedangkan` url` untuk membuat link.
  let { path, url } = useRouteMatch();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Warungpedia</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/about" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <hr />
      <h2>Abouts</h2>
      <ul>
      <li>
          <Link to={`${url}/Agsal Fairrohmad A.P`}>Nama</Link>
        </li>
        <li>
          <Link to={`${url}/agsal@gmail.com`}>Email</Link>
        </li>
        <li>
          <Link to={`${url}/Username: Agsal F`}>GitHub</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}


function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button type="button" class="btn btn-danger"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
      <p>You are not Logged in.</p>
    );
}

function HomeRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ProtectedPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Warungpedia</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/topics" class="nav-item nav-link active">About</Link>
          </div>
        </div>
      </nav>
      <hr />
      <h2 class="text-center">Warungpedia</h2>
      <br />
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Leopard_2_A5_der_Bundeswehr.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Leopard 2A6</h5>
              <p class="card-text">Tank RC Milik Jerman harga murah</p>
              <a href="https://www.tokopedia.com/live4toys/henglong-rc-german-leopard-2a6-tank-1-16-remote-control-2-4ghz?whid=0" class="btn btn-success btn-lg">Beli</a>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">F-16 Fighter</h5>
              <p class="card-text">USAF F-16 Fighting Falcon yang luar biasa dikenal sebagai pesawat tempur multirole supersonik bermesin tunggal paling mumpuni di dunia. Ia juga salah satu petarung paling produktif yang bertugas di USAF.</p>
              <a href="https://www.tokopedia.com/rajajambishop/rc-plane-f16-f-16c-fighting-falcon-v2-ducted-fan-edf-jet-6s-6ch?refined=true&whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">F-35A Stealth Fighter</h5>
              <p class="card-text">USAF F-35 Stealth fighter pesawat siluman generasi ke 4+ yang bagus</p>
              <a href="https://www.tokopedia.com/al-kahfi-shop/tamiya-italeri-lockheed-martin-f-35a-lightning-ii?src=topads" class="btn btn-success btn-lg">Beli</a>
            
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/product-1/2020/8/21/5570202/5570202_417bc093-18d3-4600-a812-9645e3875946_1024_1024" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Battleship HT 3826b</h5>
              <p class="card-text"> RC Kapal Perang </p>
              <a href="https://www.tokopedia.com/gurashop/rc-kapal-perang-ht-3826b-1-250-2-4ghz-battleship-boat?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://www.bhphotovideo.com/images/images2500x2500/asus_g512li_rs73_rog_strix_g15_i7_10750h_1566741.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">ASUS ROG </h5>
              <p class="card-text">Asus Gaming Laptop</p>
              <a href="https://www.tokopedia.com/envicstore/asus-rog-strix-g512li-i75tb6t-i7-10750h-8gb-512gb-gtx1650ti-4gb-144hz?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" class="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
  }
