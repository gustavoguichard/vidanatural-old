import ReactMarkdown from 'react-markdown'
import compact from 'lodash/compact'
import { nl2Br } from 'utils/helpers'

export default ({ name, location, role, content, style }) =>
  <article className="testimonial-content" style={style}>
    <h3 className="title is-4">
      {name}
    </h3>
    <ReactMarkdown escapeHtml={false} source={nl2Br(content)} />
    <em>
      {compact([role, location]).join(' - ')}
    </em>
  </article>
