import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Img from 'components/Img'

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
  <footer id="contato" className="footer" css={{ position: 'relative' }}>
    <Img
      alt="Background"
      expand
      css={{ position: 'absolute', top: 0, left: 0 }}
      src={require('../static/footer_bg.png')}
      webp={require('../static/footer_bg.png?webp')}
      low={require('../static/footer_bg.png?lqip')}
    />
    <div className="container">
      <nav className="level">
        <p className="level-item" css={{ flex: 1 }}>
          <a
            css={styles.social}
            target="blank"
            href="https://www.facebook.com/vidanatural.eco/"
            title="Facebook da VN"
          >
            <FaFacebookF alt="Facebook da VN" />
          </a>
          <a
            css={styles.social}
            target="blank"
            title="Instagram da VN"
            href="https://www.instagram.com/vidanatural.eco/"
          >
            <FaInstagram alt="Instagram da VN" />
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
