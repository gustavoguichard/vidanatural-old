import { Container, Content, Footer } from 'react-bulma-components'
import { FaWhatsapp } from 'react-icons/fa'
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'
import { IoIosAt } from 'react-icons/io'

// import 'styles/contact.scss'

const Contact = () => (
  <Footer id="contato" className="black-content">
    <Container>
      <Content style={{ textAlign: 'center' }}>
        <p>
          <strong>Vida Natural</strong> cosmética consciente
          <br /> <FaWhatsapp /> (48) 99103.9557
          <br />{' '}
          <a
            href="https://facebook.com/vidanatural.eco/"
            title="Facebook"
            target="blank"
          >
            <TiSocialFacebook />
          </a>
          <a
            href="https://www.instagram.com/vidanatural.eco/"
            title="Instagram"
            target="blank"
          >
            <TiSocialInstagram />
          </a>{' '}
          vidanatural.eco
          <br />{' '}
          <a href="mailto:falecom@vidanatural.eco.br" target="blank">
            falecom
            <IoIosAt />
            vidanatural.eco.br
          </a>
        </p>
      </Content>
    </Container>
  </Footer>
)

export default Contact
