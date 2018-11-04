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
          <strong>Vida Natural</strong> 🌱
          <br /> <FaWhatsapp /> (48) 99103.9557
          <br /> <TiSocialFacebook />
          <TiSocialInstagram /> vidanatural.eco
          <br /> falecom
          <IoIosAt />
          vidanatural.eco.br
        </p>
      </Content>
    </Container>
  </Footer>
)

export default Contact
