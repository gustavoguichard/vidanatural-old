import Link from 'next/link'
import Layout from 'components/Layout'
import { Heading, Hero, Columns, Content } from 'react-bulma-components'
import ProductList from 'components/products/List'

export default () => (
  <Layout>
    <Hero size="medium">
      <Hero.Body>
        <Heading style={{ fontSize: '3.7em' }}>Repense seu dia-a-dia</Heading>
        <p css={{ fontSize: '1.2em' }}>
          Mude seus hábitos e reduza seus rastros. Um corpo, uma mente e um
          planeta sadios dependem de tudo o que você faz e coloca neles.
        </p>
      </Hero.Body>
    </Hero>
    <ProductList />
    <Hero css={{ backgroundColor: '#2b4135' }}>
      <Hero.Body>
        <Heading>Por que mudar?</Heading>
      </Hero.Body>
      <Columns css={{ paddingBottom: '4rem' }}>
        <Columns.Column css={{ padding: '0 3rem', textAlign: 'center' }}>
          <Content>
            <img
              css={{ width: 200, height: 200, borderRadius: '50%' }}
              src="https://source.unsplash.com/random?person"
            />
            <h2 css={{ color: 'white !important' }}>melhor para você</h2>
            <p>
              Se seu corpo recebe diariamente substâncias sintéticas - e
              potencialmente tóxicas - com o tempo, esse acúmulo prejudica o
              funcionamento do seu organismo.
              <br />É por isso que nossos ingredientes são seguros.
            </p>
          </Content>
        </Columns.Column>
        <Columns.Column css={{ padding: '0 3rem', textAlign: 'center' }}>
          <Content>
            <img
              css={{ width: 200, height: 200, borderRadius: '50%' }}
              src="https://source.unsplash.com/random?eco"
            />
            <h2 css={{ color: 'white !important' }}>melhor para o planeta</h2>
            <p>
              Aquilo que não se acumula no seu organismo, se acumula fora dele.
              Nossos produtos são biodegradáveis e não poluentes.
            </p>
          </Content>
        </Columns.Column>
        <Columns.Column css={{ padding: '0 3rem', textAlign: 'center' }}>
          <Content>
            <img
              css={{ width: 200, height: 200, borderRadius: '50%' }}
              src="https://source.unsplash.com/random?good"
            />
            <h2 css={{ color: 'white !important' }}>e... FUNCIONA!</h2>
            <p>
              Não adianta ser só natural e sustentável, tem que ser prático e
              eficiente.
              <br />
              Veja o que as pessoas{' '}
              <Link href="/eu-uso">
                <a>estão falando</a>
              </Link>{' '}
              dos nossos produtos.
            </p>
          </Content>
        </Columns.Column>
      </Columns>
    </Hero>
  </Layout>
)
