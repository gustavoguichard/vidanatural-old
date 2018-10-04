import MediaQuery from 'react-responsive'
import ReactMarkdown from 'react-markdown'
import compact from 'lodash/compact'
import Slogan from 'components/Slogan'
import { nl2Br } from 'utils/helpers'
import { MEDIA_QUERY } from 'utils/responsive'

export default ({ name, location, role, content }) =>
  <article className="pop-over">
    <MediaQuery query={MEDIA_QUERY.DESKTOP}>
      <Slogan />
    </MediaQuery>
    <MediaQuery query={MEDIA_QUERY.TABLET_DOWN}>
      <h3 className="title is-4">
        {name}
      </h3>
    </MediaQuery>
    <ReactMarkdown escapeHtml={false} source={nl2Br(content)} />
    <MediaQuery query={MEDIA_QUERY.DESKTOP}>
      <em>
        {name}
        <br />
      </em>
    </MediaQuery>
    <em>
      {compact([role, location]).join(' - ')}
    </em>
  </article>
