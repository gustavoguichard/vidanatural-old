import ReactMarkdown from 'react-markdown'
import compact from 'lodash/compact'
import Slogan from 'components/Slogan'
import { nl2Br } from 'utils/helpers'
import { Responsive } from 'utils/responsive'

export default ({ name, location, role, content }) =>
  <article className="pop-over">
    <Responsive>
      <Slogan />
    </Responsive>
    <Responsive media="tabletDown">
      <h3 className="title is-4">
        {name}
      </h3>
    </Responsive>
    <ReactMarkdown escapeHtml={false} source={nl2Br(content)} />
    <Responsive>
      <em>
        {name}
        <br />
      </em>
    </Responsive>
    <em>
      {compact([role, location]).join(' - ')}
    </em>
  </article>
