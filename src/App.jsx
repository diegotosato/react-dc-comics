import './App.css'
import Header from './contents/Header'
import Icon from './assets/img/buy-comics-digital-comics.png'

function App() {

  return (
    <>
      <Header />



      <main>
        <div className="container">
          <section className="content">
            <h3>-- Content goes here --</h3>
          </section>

        </div>
      </main>

      <section className="banner">

        <div className="container">

          <ul>

            <li>
              <div className="icon">
                <img src={Icon} alt="icon_image" />
              </div>
              <a href="#">digital comics</a>
            </li>

            <li>
              <div className="icon">
                <img src={Icon} alt="icon_image" />
              </div>
              <a href="#">digital comics</a>
            </li>

            <li>
              <div className="icon">
                <img src={Icon} alt="icon_image" />
              </div>
              <a href="#">digital comics</a>
            </li>

            <li>
              <div className="icon">
                <img src={Icon} alt="icon_image" />
              </div>
              <a href="#">digital comics</a>
            </li>

            <li>
              <div className="icon">
                <img src={Icon} alt="icon_image" />
              </div>
              <a href="#">digital comics</a>
            </li>

          </ul>

        </div>

      </section>

      <footer></footer>


    </>
  )
}

export default App
