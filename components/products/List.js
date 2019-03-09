import { Button, Columns } from 'react-bulma-components'
import { FaPlus } from 'react-icons/fa'

const Product = ({ name, src }) => (
  <Columns.Column
    css={{
      backgroundImage: `url(/static/products/thumbs/${src}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: 300,
      minWidth: 240,
      paddingTop: '25%',
      position: 'relative',
      overflow: 'hidden',
      filter: 'saturate(0)',
      transition: '1s all',
      '&:hover': {
        filter: 'saturate(1)',
      },
    }}
  >
    <a
      href={`/produto/${src}`}
      css={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        opacity: 0,
        left: 0,
        right: 0,
        transition: '.3s all',
        backgroundColor: 'rgba(0,0,0,.6)',
        '&:hover': {
          opacity: 1,
        },
      }}
    >
      <Button color="light" className="is-large" rounded outlined>
        {name}
      </Button>
    </a>
  </Columns.Column>
)

export default () => (
  <Columns css={{ margin: '0 !important' }}>
    <Product name="Desodorante Rollon" src="rollon" />
    <Product name="Desodorante Pasta" src="desodorante_pasta" />
    <Product name="Óleo Hidratante" src="oleo_hidratante" />
    <Columns.Column
      css={{
        position: 'relative',
        minWidth: 240,
        minHeight: 200,
      }}
    >
      <a
        className="tile-content center"
        href="/produtos"
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          minHeight: '100px !important',
        }}
      >
        <p>Conheça nossos produtos</p>
        <button title="Mais produtos" className="plus-bt">
          <FaPlus />
        </button>
      </a>
    </Columns.Column>
  </Columns>
)
