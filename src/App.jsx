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

          <nav class="nav justify-content-center">
            <a class="nav-link" href="#">characters</a>
            <a class="nav-link" href="#">comics</a>
            <a class="nav-link" href="#">movies</a>
            <a class="nav-link" href="#">tv</a>
            <a class="nav-link" href="#">games</a>
            <a class="nav-link" href="#">collectibles</a>
            <a class="nav-link" href="#">videos</a>
            <a class="nav-link" href="#">fans</a>
            <a class="nav-link" href="#">news</a>
            <a class="nav-link" href="#">shop</a>
          </nav>

        </div>

      </header>



      <main></main>
      <footer></footer>


    </>
  )
}

export default App
