import dynamic from 'next/dynamic'
import About from 'components/About'
import Home from 'components/Home'
import Layout from 'components/Layout'
import Loading from 'components/Loading'

const People = dynamic(() => import('components/People'), {
  loading: () => <Loading size={80} />,
  ssr: false,
})

export default () => (
  <Layout>
    <Home />
    <About />
    <People />
  </Layout>
)
