"use client"

import { useState } from "react"
import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">

              <a href="home">
               <img src="/resenha-lg-bckr.png" alt="Logo da Hamburgueria" /* style={{ height: "50px" }} */ />
              </a>
            </div>

            <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
              <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                HOME
              </a>
              <a href="#menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                CARDÁPIO
              </a>
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                QUEM SOMOS
              </a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                CONTATO
              </a>
               <a href="#events" className="cta-button" onClick={() => setIsMenuOpen(false)}>
                FAZER PEDIDO
              </a>
            </div>

            <div className={`nav-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
        </div>

        <div className="hero-content">
          <div className="hero-logo">
            <div className="logo-badge">
              <img src="/resenha-lg-bckr.png" alt="Logo da Hamburgueria" /* style={{ height: "50px" }} */ />

             {/*  <span className="badge-text">BURGERIA</span>
              <div className="logo-main">BURGER</div>
              <span className="badge-subtext">RESTAURANT</span> */}

            </div>
          </div>

<div className="hero-burger">
  <video
    className="burger-video"
    src="/res-vid.mp4"
    autoPlay
      loop
  controls
  playsInline
  />
  <div className="flame-effect"></div>
</div>

          <div className="hero-text">
            <h1 className="hero-title">CONHEÇA A MELHOR HAMBURGERIA DE SP!</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="https://wa.me/5511919223489">
              <button className="cta-button">FAZER PEDIDO</button>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title">NOSSO CARDÁPIO</h2>

          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-image">
                <img src="/rockburger.jpg?height=250&width=300" alt="Classic Burger" />
              </div>
              <h3 className="menu-item-title">ROCK BURGER</h3>
              <p className="menu-item-price">$12.99</p>
            </div>

            <div className="menu-item">
              <div className="menu-image">
                <img src="/rockfritas.jpg?height=250&width=300" alt="Crispy Fries" />
              </div>
              <h3 className="menu-item-title">ROCK FRITAS</h3>
              <p className="menu-item-price">$6.99</p>
            </div>

            <div className="menu-item">
              <div className="menu-image">
                <img src="/rockcombo.jpg?height=250&width=300" alt="Rock Combo" />
              </div>
              <h3 className="menu-item-title">ROCK COMBO</h3>
              <p className="menu-item-price">$18.99</p>
            </div>

            <div className="menu-item">
              <div className="menu-image">
                <img src="/superslashburger.jpg?height=250&width=300" alt="Double Burger" />
              </div>
              <h3 className="menu-item-title">SUPER SLASH BURGER</h3>
              <p className="menu-item-price">$16.99</p>
            </div>

            <div className="menu-item">
              <div className="menu-image">
                <img src="/rockveggie.jpg?height=250&width=300" alt="Veggie Burger" />
              </div>
              <h3 className="menu-item-title">ROCK VEGGIE </h3>
              <p className="menu-item-price">$14.99</p>
            </div>

            <div className="menu-item">
              <div className="menu-image">
                <img src="/rockcola.jpg?height=250&width=300" alt="Craft Beer" />
              </div>
              <h3 className="menu-item-title">ROCK COLA</h3>
              <p className="menu-item-price">$5.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Quem somos</h2>
              <p>
                Welcome to Burger Restaurant, where rock meets flavor! We've been serving the ultimate burger experience
                since 2010, combining premium ingredients with a rock 'n' roll atmosphere that will blow your mind.
              </p>
              <p>
                Our chefs are passionate about creating the perfect burger, using only the finest beef, fresh
                vegetables, and our secret rock sauce that keeps customers coming back for more.
              </p>
            </div>
            <div className="about-image">
              <img src="/outside.jpg?height=300&width=400" alt="Restaurant Interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">CONTATO</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>ENDEREÇO</h3>
                <p>
                  123 Rock Street
                  <br />
                  Music City, MC 12345
                </p>
              </div>
              <div className="contact-item">
                <h3>NÚMERO</h3>
                <p>(11) 9999-ROCK</p>
              </div>
              <div className="contact-item">
                <h3>HORÁRIOS</h3>
                <p>
                  Seg-Sex: 17:00-23:00
                  <br />
                  <br />
                  Sabado, domingo e feriado: 17:00-5:00am
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Burger Restaurant. Todos os direitos reservados.</p>
        </div>
      </footer>

            <a
  href="https://wa.me/5511919223489"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
      >
     🟢 WhatsApp
    </a>

    
    </div>
  )
}

export default App
