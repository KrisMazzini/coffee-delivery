import { useContext } from 'react'
import { addMinutes } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CheckoutContainer, CheckoutSection } from './styles'

import { CartState } from '../../reducers/cart/reducer'
import { CartContext } from '../../contexts/CartContext'

import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { EmptyCart } from './components/EmptyCart'

const checkoutFormValidationSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, 'O CEP deve conter 8 caracteres')
    .max(8, 'O CEP deve conter 8 caracteres')
    .refine((value) => {
      const numericStringRegex = /^\d+$/g
      return numericStringRegex.test(value)
    }, 'Deve conter apenas números'),
  street: zod.string().min(1, 'O campo rua é obrigatório'),
  number: zod
    .string()
    .min(1, 'O campo número é obrigatório')
    .refine((value) => {
      const numericStringRegex = /^\d+$/g
      return numericStringRegex.test(value)
    }, 'Deve conter apenas números'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'O campo bairro é obrigatório'),
  city: zod.string().min(1, 'O campo cidade é obrigatório'),
  state: zod.string().min(2, 'Ex.: MG').max(2, 'Ex.: MG'),
  payment: zod.string().min(1, 'Necessário escolher uma forma de pagamento'),
})

type CheckoutFormDataType = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { items, completeOrder } = useContext(CartContext)

  const storedCheckoutFormValues = retriveCheckoutFormValuesFromLocalStorage()

  const checkoutForm = useForm<CheckoutFormDataType>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: storedCheckoutFormValues || {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      payment: '',
    },
  })

  const { handleSubmit } = checkoutForm

  function retriveCheckoutFormValuesFromLocalStorage() {
    const storedCartStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state:2.1.0',
    )

    if (!storedCartStateAsJSON) {
      return null
    }

    const storedCartState = JSON.parse(storedCartStateAsJSON) as CartState

    if (!storedCartState.deliveryData) {
      return null
    }

    return {
      ...storedCartState.deliveryData.address,
      payment: storedCartState.deliveryData.paymentMethod,
    }
  }

  function handleCheckout(checkoutData: CheckoutFormDataType) {
    const { payment, ...address } = checkoutData
    completeOrder({
      address,
      paymentMethod: payment,
      orderTime: new Date(),
      deliveryTime: addMinutes(new Date(), 30),
    })

    navigate('/success')
    checkoutForm.reset()
  }

  return items.length > 0 ? (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <form onSubmit={handleSubmit(handleCheckout)} noValidate>
          <CheckoutSection>
            <h2>Complete seu pedido</h2>
            <AddressForm />
            <PaymentForm />
          </CheckoutSection>
          <CheckoutSection>
            <h2>Cafés selecionados</h2>
            <SelectedCoffees />
          </CheckoutSection>
        </form>
      </FormProvider>
    </CheckoutContainer>
  ) : (
    <EmptyCart />
  )
}
