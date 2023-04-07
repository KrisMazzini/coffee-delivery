import { useContext } from 'react'
import { CoffeeListContainer } from './styles'

import { CoffeeListContext } from '../../../../contexts/CoffeeListContext'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeList() {
  const { coffeeList } = useContext(CoffeeListContext)

  return (
    <CoffeeListContainer>
      {coffeeList.map((coffee) => {
        return <CoffeeCard key={coffee.id} {...coffee} />
      })}
    </CoffeeListContainer>
  )
}
