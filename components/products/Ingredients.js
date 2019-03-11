import { Fragment } from 'react'
import { Hero, Content, Columns } from 'react-bulma-components'
import map from 'lodash/map'

export default ({ product }) => (
  <Hero css={{ backgroundColor: '#2b4135' }}>
    <Hero.Body>
      <Columns>
        <Columns.Column>
          <Content css={{ textAlign: 'left' }}>
            <h4 style={{ color: 'white' }}>Benefícios</h4>
            <p>
              {map(product.benefits, words => (
                <Fragment>
                  {words}
                  <br />
                </Fragment>
              ))}
            </p>
          </Content>
        </Columns.Column>
        <Columns.Column>
          <Content css={{ textAlign: 'left' }}>
            <h4 style={{ color: 'white' }}>Ingredientes</h4>
            <p>{product.ingredients}</p>
          </Content>
        </Columns.Column>
      </Columns>
    </Hero.Body>
  </Hero>
)
