import { createContext, ReactNode } from 'react'
import { v4 as uuid } from 'uuid'

import expresso from '../assets/coffees/expresso-tradicional.png'
import americanExpresso from '../assets/coffees/expresso-americano.png'
import creamyExpresso from '../assets/coffees/expresso-cremoso.png'
import icedExpresso from '../assets/coffees/expresso-gelado.png'
import coffeeWithCream from '../assets/coffees/cafe-com-leite.png'
import latte from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import mocaccino from '../assets/coffees/mocaccino.png'
import hotChocolate from '../assets/coffees/chocolate-quente.png'
import cuban from '../assets/coffees/cubano.png'
import hawaiian from '../assets/coffees/havaiano.png'
import arab from '../assets/coffees/arabe.png'
import irish from '../assets/coffees/irlandes.png'

export interface CoffeeType {
  id: string
  imageUrl: string
  name: string
  description: string
  tags: string[]
  price: number
}

interface CoffeeListContextType {
  coffeeList: CoffeeType[]
  getCoffeeDataById: (id: string) => CoffeeType | undefined
}

export const CoffeeListContext = createContext({} as CoffeeListContextType)

interface CoffeeListProviderProps {
  children: ReactNode
}

export function CoffeeListContextProvider({
  children,
}: CoffeeListProviderProps) {
  const coffeeList: CoffeeType[] = [
    {
      id: uuid(),
      imageUrl: expresso,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      price: 9.9,
    },
    {
      id: uuid(),
      imageUrl: americanExpresso,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      tags: ['tradicional'],
      price: 9.9,
    },
    {
      id: uuid(),
      imageUrl: creamyExpresso,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tags: ['tradicional'],
      price: 11.9,
    },
    {
      id: uuid(),
      imageUrl: icedExpresso,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: ['tradicional', 'gelado'],
      price: 11.9,
    },
    {
      id: uuid(),
      imageUrl: coffeeWithCream,
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: ['tradicional', 'com leite'],
      price: 10.9,
    },
    {
      id: uuid(),
      imageUrl: latte,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: ['tradicional', 'com leite'],
      price: 13.9,
    },
    {
      id: uuid(),
      imageUrl: capuccino,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: ['tradicional', 'com leite'],
      price: 13.9,
    },
    {
      id: uuid(),
      imageUrl: macchiato,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['tradicional', 'com leite'],
      price: 13.9,
    },
    {
      id: uuid(),
      imageUrl: mocaccino,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tags: ['tradicional', 'com leite'],
      price: 14.9,
    },
    {
      id: uuid(),
      imageUrl: hotChocolate,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: ['especial', 'com leite'],
      price: 14.9,
    },
    {
      id: uuid(),
      imageUrl: cuban,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: ['especial', 'alcoólico', 'gelado'],
      price: 18.9,
    },
    {
      id: uuid(),
      imageUrl: hawaiian,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: ['especial'],
      price: 13.9,
    },
    {
      id: uuid(),
      imageUrl: arab,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: ['especial'],
      price: 16.9,
    },
    {
      id: uuid(),
      imageUrl: irish,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: ['especial', 'alcoólico'],
      price: 20.9,
    },
  ]

  function getCoffeeDataById(id: string) {
    return coffeeList.find((coffee) => coffee.id === id)
  }

  return (
    <CoffeeListContext.Provider value={{ coffeeList, getCoffeeDataById }}>
      {children}
    </CoffeeListContext.Provider>
  )
}
