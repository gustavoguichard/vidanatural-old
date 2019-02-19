import About from 'components/About'
import ImageContainer from 'components/ImageContainer'
import Layout from 'components/Layout'
import { Heading, Hero, Tile } from 'react-bulma-components'

export default () => (
  <Layout>
    <Hero size="medium">
      <Hero.Head renderAs="header">
        <Heading>Sobre a VN</Heading>
      </Hero.Head>
      <Hero.Body>
        <Heading>
          <strong>Consciêcia</strong> talvez seja a palavra mais importante no
          nosso vocabulário.
        </Heading>
      </Hero.Body>
      <Hero.Footer>
        <Tile>
          <Tile size={4}>
            <ImageContainer src="/static/sobre-bg.jpg" />
          </Tile>
          <Tile size={8} vertical className="tile-copy">
            <Heading>
              Ela está presente nas nossas iniciativas e, também, na forma como
              nos relacionamos com as pessoas, produzimos e distribuímos os
              nossos cosméticos.
            </Heading>
            <p>
              Fabricamos produtos naturais que respeitam a harmonia, o
              equilíbrio e a saúde das pessoas e do planeta. Produtos naturais,
              artesanais, bioderadáveis, SEM conservantes e fragrâncias
              artificiais, SEM parabenos, SEM derivados de petroquímica ou
              animal, SEM metais pesados, livres de violência, livres de
              toxinas. Essa é umas das formas pela qual participamos da
              construção de um mundo melhor.
            </p>
          </Tile>
        </Tile>
      </Hero.Footer>
    </Hero>
    <About />
  </Layout>
)
