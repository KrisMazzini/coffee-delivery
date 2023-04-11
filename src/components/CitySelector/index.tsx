import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { MapPin } from 'phosphor-react'

import { OpenCityList, CitySelectorContainer, ClosedCityList } from './styles'
import { CartContext } from '../../contexts/CartContext'

export function CitySelector() {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const {
    deliveryData: { address },
    changeCity,
  } = useContext(CartContext)

  const availableCities = [
    {
      name: 'Juiz de Fora',
      state: 'MG',
    },
    {
      name: 'Teresópolis',
      state: 'RJ',
    },
    {
      name: 'Curitiba',
      state: 'PR',
    },
  ]

  const CityList = isClosing ? ClosedCityList : OpenCityList

  function handleToggleOpen() {
    if (isOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setIsClosing(false)
      }, 1000)
    }

    setIsOpen((prev) => !prev)
  }

  function handleChangeCity(city: { name: string; state: string }) {
    changeCity(city.name, city.state)
  }

  useEffect(() => {
    const { city, state } = address

    const defaultCity = {
      name: 'Juiz de Fora',
      state: 'MG',
    }

    if (!city || !state) {
      changeCity(defaultCity.name, defaultCity.state)
    }
  }, [address, changeCity])

  return (
    <CitySelectorContainer onClick={handleToggleOpen}>
      <MapPin size={22} weight="fill" color={theme.purple} />
      <span>
        {address.city}, {address.state}
      </span>
      {(isOpen || isClosing) && (
        <CityList>
          {availableCities.map((city) => {
            return (
              <li key={city.name} onClick={() => handleChangeCity(city)}>
                {city.name}, {city.state}
              </li>
            )
          })}
        </CityList>
      )}
    </CitySelectorContainer>
  )
}
