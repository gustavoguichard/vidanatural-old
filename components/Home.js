import { memo } from 'react'
import Logo from 'components/Logo'
import ImageContainer from 'components/ImageContainer'
import { Content, Heading } from 'react-bulma-components'
import { useMedia } from 'utils/hooks'

export default memo(() => {
  const isDesktop = useMedia('desktop')
  return (
    <>
      <ImageContainer
        src="/static/about-bg.jpg"
        id="home"
        column={!isDesktop}
        css={{ height: '100vh' }}
      >
        <Content
          css={{
            alignSelf: 'center',
            backgroundColor: 'rgba(0,0,0,.9)',
            color: 'white',
            padding: isDesktop ? '90px 100px' : '90px 30px',
            maxWidth: 480,
            marginLeft: 'auto',
          }}
        >
          <Heading
            css={{
              color: 'white !important',
              fontSize: '3rem !important',
              textTransform: 'uppercase',
            }}
          >
            Da pele
            <br />
            para
            <br />
            dentro
          </Heading>
          <p style={{ fontSize: '1.2em', lineHeight: 1.7 }}>
            Nossos <strong>cosméticos 100% naturais</strong> são{' '}
            <strong>livres de substâncias sintéticas</strong> porque nós
            acreditamos que você só deve colocar coisas boas no seu maior orgão
            de absorção
            <br />- a pele.
          </p>
        </Content>
        <Logo
          className="is-hidden-mobile"
          css={{
            position: isDesktop ? 'absolute' : 'static',
            bottom: 30,
            left: 30,
          }}
        />
      </ImageContainer>
    </>
  )
})
