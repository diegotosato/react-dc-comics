import './App.css'
import logo from './assets/img/dc-logo.png'

function App() {

  return (
    <>
      <header>

        <div className="container">

          <div className="logo">
            <img src={logo} alt="DC_logo" />
          </div>

          <nav className="nav justify-content-center">
            <a className="nav-link" href="#">characters</a>
            <a className="nav-link" href="#">comics</a>
            <a className="nav-link" href="#">movies</a>
            <a className="nav-link" href="#">tv</a>
            <a className="nav-link" href="#">games</a>
            <a className="nav-link" href="#">collectibles</a>
            <a className="nav-link" href="#">videos</a>
            <a className="nav-link" href="#">fans</a>
            <a className="nav-link" href="#">news</a>
            <a className="nav-link" href="#">shop</a>
          </nav>

        </div>

      </header>



      <main></main>
      <footer></footer>


    </>
  )
}

export default App
