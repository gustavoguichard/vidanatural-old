import Layout from 'components/Layout'
import buildProduct from 'utils/buildProduct'

const { Banner, Ingredients, Testimonials } = buildProduct(
  'oleo-hidratante',
  'hidratante',
)

export default () => (
  <Layout light>
    <Banner>
      <p css={{ fontSize: '1.2em', color: 'black' }}>
        <strong style={{ color: 'black' }}>100% Natural</strong>
        <br />
        Só usamos ingredientes que não prejudicam a sua saúde e o planeta.
      </p>
    </Banner>
    <Ingredients />
    <Testimonials />
  </Layout>
)
