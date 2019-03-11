import ProductTestimonials from 'components/products/Testimonials'
import Banner from 'components/products/Banner'
import Ingredients from 'components/products/Ingredients'

import find from 'lodash/find'
import products from 'content/products'

export default (path, tag) => {
  const product = find(products, p => p.path === path)
  return {
    Banner: ({ children }) => <Banner product={product}>{children}</Banner>,
    Ingredients: () => <Ingredients product={product} />,
    Testimonials: () => <ProductTestimonials tag={tag || path} />,
  }
}
