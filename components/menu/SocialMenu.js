import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'

export default ({ isOpen, onClick }) =>
  <aside className="social-icons">
    <a href="https://facebook.com/vidanatural.eco/" target="blank">
      <TiSocialFacebook size="1.8em" />
    </a>
    <a href="https://www.instagram.com/vidanatural.eco/" target="blank">
      <TiSocialInstagram size="1.8em" />
    </a>
  </aside>
