import dynamic from 'next/dynamic'
import About from 'components/About'
import Home from 'components/Home'
import ProductList from 'components/products/List'
import Layout from 'components/Layout'
import Loading from 'components/Loading'

const People = dynamic(() => import('components/People'), {
  loading: () => <Loading size={80} />,
})

export default () => (
  <Layout>
    <Home />
    <ProductList short />
    <About />
    <People square />
  </Layout>
)
