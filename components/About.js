import { memo } from 'react'
import { Columns, Content, Section } from 'react-bulma-components'
import Logo from 'components/Logo'
import PageBreadCrumb from 'components/menu/PageBreadCrumb'
import ImageContainer from 'components/ImageContainer'
import { useMedia } from 'utils/hooks'

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
        src="/static/about-bg.jpg"
        key="about-bg"
        className="about-bg"
        contentClass="about-bg-content"
        fixed
      >
        <Logo clickable key="logo" />
        {isDesktop && <PageBreadCrumb key="breadcrumb" title="sobre" />}
      </ImageContainer>
    </Columns.Column>
    <Columns.Column className="content-wrapper">
      <Content key="content" className="black-content">
        <h2 className="title is-4">Sobre</h2>
        <p>
          Consciêcia talvez seja a palavra mais importante no nosso
          vocabulário. E, com o tempo, você vai perceber que ela está
          presente nas nossas iniciativas e, também, na forma como nos
          relacionamos com as pessoas, produzimos e distribuímos os nossos
          cosméticos.
        </p>
        <p>
          Em breve, você conhecerá muito sobre nós, inclusive o nosso
          processo de produção. Tudo para motivar você a dizer{' '}
          <strong>eu uso</strong> cosmética consciente e nos auxiliar a
          completar a grafia do nosso posicionamento.
        </p>
      </Content>
    </Columns.Column>
  </Columns>
)})