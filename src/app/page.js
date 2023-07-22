import Header from './components/static/header'
import Nav from './components/static/nav'
import Content from './components/content'
import SpriteSVG from './components/static/sprite-svg'

export default function Home() {
  return (
    <div>
      <SpriteSVG></SpriteSVG>
      <Header></Header>
      <Nav></Nav>
      <Content></Content>
    </div>
  )
}
