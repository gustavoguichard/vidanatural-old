import { Heading, Hero, Content } from 'react-bulma-components'
import ImageContainer from 'components/ImageContainer'
import Layout from 'components/Layout'
import ProductTestimonials from 'components/products/Testimonials'

const noIngredient = word => (
  <>
    <strong css={{ color: 'black' }}>SEM {word}</strong>
    <br />
  </>
)

export default () => (
  <Layout light>
    <div css={{ backgroundColor: '#6ee2a1' }}>
      <ImageContainer
        column
        src="/static/products/desodorante-rollon.jpg"
        id="home"
      >
        <Content
          css={{
            backgroundColor: 'rgba(255,255,255,.8)',
            padding: 60,
            maxWidth: 450,
            alignSelf: 'flex-start',
            marginTop: '7rem',
          }}
        >
          <Heading style={{ fontSize: '3em', lineHeight: 1, color: 'black' }}>
            Desodorante
            <br />
            Rollon
          </Heading>
          <p css={{ fontSize: '1.2em', color: 'black' }}>
            <strong style={{ color: 'black' }}>100% Natural</strong>
            <br />
            Só usamos ingredientes que não prejudicam a sua saúde e o planeta.
          </p>
          <p css={{ fontSize: '1.2em', color: 'black' }}>
            {[
              'alumínio',
              'parabeno',
              'triclosan',
              'fragrâncias sintéticas',
              'alergias',
            ].map(noIngredient)}
          </p>
        </Content>
      </ImageContainer>
      <Content
        css={{
          padding: 30,
          maxWidth: 450,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h3 style={{ color: 'black' }}>Você sabia?</h3>
        <p css={{ color: 'black' }}>
          Na axila há uma grande concentração de gânglios linfáticos
          responsáveis pela desintoxicação do corpo.
        </p>
      </Content>
    </div>
    <ProductTestimonials tag="desodorante-rollon" />
    <Hero css={{ backgroundColor: '#2b4135' }}>
      <Hero.Body>
        <Heading>Um leite de magnésia para chamar de nosso!</Heading>
      </Hero.Body>
    </Hero>
  </Layout>
)
