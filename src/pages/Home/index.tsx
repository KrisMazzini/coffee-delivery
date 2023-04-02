import { Coffees, HomeContainer } from './styles'

import { Banner } from './components/Banner'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Coffees>
        <h3>Nossos cafés</h3>
        <CoffeeList />
      </Coffees>
    </HomeContainer>
  )
}
