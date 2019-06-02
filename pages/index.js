import dynamic from 'next/dynamic'

import About from 'components/About'
import Box from 'components/home/Box'
import Home from 'components/Home'
import ProductList from 'components/products/List'
import Layout from 'components/Layout'
import Loading from 'components/Loading'

import { absoluteCover, homeBox } from 'utils/css'

const People = dynamic(() => import('components/People'), {
  loading: () => <Loading size={80} />,
})

export default () => (
  <Layout>
    <Home />
    <ProductList short />
    <About />
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
