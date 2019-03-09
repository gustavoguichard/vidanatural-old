import ImageContainer from 'components/ImageContainer'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import { Content, Heading, Hero, Tile } from 'react-bulma-components'

export default () => (
  <Layout>
    <Hero size="medium">
      <Hero.Body>
        <Heading>
          <strong>Consciêcia</strong> talvez seja a palavra mais importante no
          nosso vocabulário.
        </Heading>
      </Hero.Body>
      <Hero.Footer>
        <Tile>
          <Tile size={4}>
            <ImageContainer src="/static/historia.jpg" />
          </Tile>
          <Tile size={8} vertical className="tile-copy">
            <Content>
              <Heading>Nossa história</Heading>
              <p>
                A Vida Natural é uma marca em crescimento, social e
                ambientalmente consciente. Nasceu em 2013, a partir do desejo e
                de uma equilibrada colaboração entre três criativos e
                conscientes amigos - a Lila, o Guga e o Giovane.
              </p>
              <p>
                Um Trio engajado em causas sócio-ambientais e super motivado em
                expandir este comportamento voltado ao consumo consciente, em
                equilíbrio com a natureza e com respeito ao bem estar e saúde
                das pessoas.
              </p>
            </Content>
          </Tile>
        </Tile>
      </Hero.Footer>
    </Hero>
    <Tile>
      <Tile size={2}>
        <ImageContainer src="/static/bg.jpg" fixed />
      </Tile>
      <Tile size={8} vertical className="tile-copy">
        <Content>
          <p>
            Tudo começou na tentativa de se distanciar do consumo de cosméticos
            convencionais, motivada por uma certa insegurança no processo de
            produção destes produtos, que trazem ingredientes e métodos não
            muito amigáveis ao corpo e ao meio ambiente, a Lila, começou a
            desenvolver uma fórmula e passou a produzir o seu próprio
            desodorante.
          </p>
          <p>
            Com o tempo e muitas mudanças no processo de produção e manipulação,
            aperfeiçoou a fórmula e passou a perceber, no uso diário, os
            expressivos resultados que havia alcançado, afinal havia criado um
            desodorante 100% natural e muito eficiente, que não mancha as roupas
            e ainda possui uma textura suave em contato com a pele e de rápida
            absorção.
            <br /> Diante da certeza da eficiência do desodorante, sentindo-se
            mais segura com os resultados alcançados, passou a presentear os
            amigos com frascos simples do produto.
          </p>
          <p>
            Com o uso, imediatamente as pessoas passaram a reconhecer não
            somente a eficiência do produto mas principalmente os benefícios a
            ele associados.
            <br />
            Em pouco tempo, a qualidade do desodorante da “Lila” já havia se
            espalhado e conquistado os amigos e outros consumidores em
            Florianópolis.
          </p>
          <p>
            Após este movimento inicial, pedidos para que ela comercializa-se o
            desodorante passaram a surgir com frequência e, a partir dai, ela
            resolveu investir em novas fórmulas a fim de ampliar a linha de
            produtos, e ao lado do Guga e do Giovani criou a Vida Natural -
            Cosmética Consciente.
          </p>
          <p>
            O resultado desta "aventura" e esforço agora está aqui, ao alcance
            de todos que buscam uma relação + equilibrada entre o uso de
            cosméticos para higiene e cuidados com o corpo e o meio ambiente.
          </p>
          <p>
            Um desejo único de mudança materializado em desodorantes (rollon e
            creme), shampoos, óleos hidratantes, pó dental e protetores labiais.
          </p>
        </Content>
      </Tile>
      <Tile size={2}>
        <ImageContainer
          src="/static/bg.jpg"
          fixed
          css={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: 20,
          }}
        >
          <Logo clickable key="logo" />
        </ImageContainer>
      </Tile>
    </Tile>
  </Layout>
)
