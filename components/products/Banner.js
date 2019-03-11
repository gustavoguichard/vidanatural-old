import { Fragment } from 'react'
import { Heading, Content } from 'react-bulma-components'
import ImageContainer from 'components/ImageContainer'
import Stamps from 'components/products/Stamps'

export default ({ product, children }) => (
  <ImageContainer column src={`/static/products/${product.path}.jpg`}>
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
        {product.name.split(' ').map((word, index) => (
          <Fragment key={`banner-word-${index}`}>
            {word}
            <br />
          </Fragment>
        ))}
      </Heading>
      {children}
      <Stamps product={product} />
    </Content>
  </ImageContainer>
)
