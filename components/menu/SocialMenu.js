import { memo } from 'react'
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'

export default memo(() => (
  <aside
    className="social-icons"
    css={{
      position: 'fixed',
      top: '1.5rem',
      left: '2rem',
      zIndex: 1000,
    }}
  >
    <a
      css={{ marginRight: '0.6em' }}
      href="https://facebook.com/vidanatural.eco/"
      title="Facebook"
      target="blank"
    >
      <TiSocialFacebook size="1.8em" />
    </a>
    <a
      href="https://www.instagram.com/vidanatural.eco/"
      title="Instagram"
      target="blank"
    >
      <TiSocialInstagram size="1.8em" />
    </a>
  </aside>
))
