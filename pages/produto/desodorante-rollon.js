import { Fragment } from 'react'
import { Heading, Hero, Content } from 'react-bulma-components'
import Layout from 'components/Layout'
import buildProduct from 'utils/buildProduct'

const { Banner, Ingredients, Testimonials } = buildProduct('desodorante-rollon')

const noIngredient = word => (
  <Fragment key={word}>
    <strong css={{ color: 'black' }}>SEM {word}</strong>
    <br />
  </Fragment>
)

export default () => (
  <Layout light>
    <div css={{ backgroundColor: '#6ee2a1' }}>
      <Banner>
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
      </Banner>
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
    <Ingredients />
    <Testimonials />
    <Hero css={{ backgroundColor: '#2b4135' }}>
      <Hero.Body>
        <Heading>Um leite de magnésia para chamar de nosso!</Heading>
      </Hero.Body>
    </Hero>
  </Layout>
)
