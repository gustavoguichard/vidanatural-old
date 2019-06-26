import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const year = new Date().getFullYear()

const styles = {
  social: {
    display: 'flex',
    padding: 8,
    border: '1px solid white',
    borderRadius: '50%',
    margin: 5,
    color: 'white',
    '&:hover': {
      borderColor: '#3273dc',
      color: '#3273dc',
    },
    '&:hover svg': {
      fill: '#3273dc',
    },
  },
}

const Footer = () => (
  <footer
    id="contato"
    className="footer"
    css={{
      backgroundImage: `url(/static/footer_bg.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div className="container">
      <nav className="level">
        <p className="level-item" css={{ flex: 1 }}>
          <a
            css={styles.social}
            target="blank"
            href="https://www.facebook.com/vidanatural.eco/"
          >
            <FaFacebookF />
          </a>
          <a
            css={styles.social}
            target="blank"
            href="https://www.instagram.com/vidanatural.eco/"
          >
            <FaInstagram />
          </a>
        </p>
        <p className="level-item" css={{ flex: 1 }}>
          <a href="#">
            <img
              src="/static/logo.svg"
              alt="Vida Natural"
              style={{ display: 'block', width: 90, height: 90 }}
            />
          </a>
        </p>
        <p css={{ flex: 1 }}>Vida Natural | Cosmética __nsciente © {year}.</p>
      </nav>
    </div>
  </footer>
)

export default Footer
