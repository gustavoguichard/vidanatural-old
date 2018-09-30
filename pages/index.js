import dynamic from 'next/dynamic'
import Layout from 'components/Layout'
import Masonry from 'react-masonry-component'
import testimonials from 'content/testimonials'
import 'styles/main.scss'

const Testimonial = dynamic(import('components/Testimonial'))

const Index = () => (
  <Layout>
    <Masonry className="testimonials-grid" options={{ transitionDuration: 0 }}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </Masonry>
  </Layout>
)

export default Index
