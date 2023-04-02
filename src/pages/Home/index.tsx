import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeCard />
    </HomeContainer>
  )
}
