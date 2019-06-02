import dynamic from 'next/dynamic'

import Box from 'components/home/Box'
import ProductBox from 'components/home/ProductBox'
import ImageContainer from 'components/ImageContainer'
import Layout from 'components/Layout'
import Loading from 'components/Loading'
import products from 'content/products'

import { absoluteCover } from 'utils/css'

const People = dynamic(() => import('components/People'), {
  loading: () => <Loading size={80} />,
})

export default () => (
  <Layout>
    <ImageContainer
      src="/static/vn_capa.png"
      id="home"
      css={{ minHeight: '100vh' }}
    >
      <Box title="Proteja sua pele!" to="/produtos">
        Nossos cosméticos são 100% naturais e livres de substâncias sintéticas
        porque nós acreditamos que você só deve colocar coisas boas no seu maior
        orgão de absorção - a pele.
      </Box>
    </ImageContainer>
    <ImageContainer
      src="/static/oleo-background.png"
      id="ingredients"
      css={{ minHeight: '100vh' }}
    >
      <Box
        title="Você se importa com o que sua pele absorve todos os dias? Nós nos importamos!"
        to="/produtos"
      >
        Por isso, preferimos ingredientes que são seguros para a saúde do seu
        corpo e do planeta.
      </Box>
    </ImageContainer>
    {products
      .filter(product => product.showHome)
      .map(product => (
        <ImageContainer
          key={product.path}
          css={{ backgroundColor: `#${product.tone}`, minHeight: '100vh' }}
          src={`/static/home_bg/${product.tone}.jpg`}
        >
          <ProductBox
            product={product}
          />
        </ImageContainer>
      ))}
    <People square dark faceCount={12}>
      <div
        css={{
          ...absoluteCover(),
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,.4)',
        }}
      >
        <Box title="* Eu uso!" to="/eu-uso">
          Descubra o que motiva as pessoas a usarem os nossos produtos
        </Box>
      </div>
    </People>
  </Layout>
)
