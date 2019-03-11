import map from 'lodash/map'

export default ({ product }) => (
  <p css={{ display: 'flex', justifyContent: 'space-around' }}>
    {map(product.stamps, (title, key) => (
      <img key={key} src={`/static/icons/${key}.png`} alt={title} />
    ))}
  </p>
)
