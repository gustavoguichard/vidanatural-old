import { memo } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Button, Columns, Content } from 'react-bulma-components'
import PageBreadCrumb from 'components/menu/PageBreadCrumb'
import ImageContainer from 'components/ImageContainer'
import { useMedia } from 'utils/hooks'

import content from 'content/sobre'
import 'styles/about.scss'

export default memo(() => {
  const isDesktop = useMedia('desktop')
  return (
    <Columns id="sobre" className="about-section" gapless>
      <Columns.Column
        key="design"
        className="about-header"
        style={{ display: 'flex' }}
      >
        <ImageContainer
          src={`/static/about-bg.jpg`}
          low={`/static/about-bg.jpg?lqip`}
          webp={`/static/about-bg.jpg?webp`}
          key="about-bg"
          className="about-bg"
          contentClass="about-bg-content"
          center
        >
          {isDesktop && <PageBreadCrumb key="breadcrumb" title="sobre" />}
        </ImageContainer>
      </Columns.Column>
      <Columns.Column className="content-wrapper">
        <div className="banner-content-wrapper">
          <Content key="content" className="black-content banner-content">
            <h2 className="title is-4">Sobre a VN</h2>
            <ReactMarkdown className="md-content" source={content} />
          </Content>
          <p className="banner-content">
            <Link href="sobre">
              <Button color="light" className="is-large" rounded outlined>
                Quero saber mais
              </Button>
            </Link>
          </p>
        </div>
      </Columns.Column>
    </Columns>
  )
})
