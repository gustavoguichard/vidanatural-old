import ReactMarkdown from 'react-markdown'
import compact from 'lodash/compact'
import { nl2Br } from 'utils/helpers'

const TestimonialContent = ({ name, location, role, content, style }) => (
  <article
    css={{
      fontSize: '1.1em',
      maxWidth: '100%',
      padding: 30,
      position: 'relative',
      '& *': {
        color: 'inherit',
      },
      '& p': {
        margin: '1em 0 1em',
      },
    }}
    style={style}
  >
    <h3 className="title is-4">{name}</h3>
    <ReactMarkdown escapeHtml={false} source={nl2Br(content)} />
    <em>{compact([role, location]).join(' - ')}</em>
  </article>
)

export default TestimonialContent
