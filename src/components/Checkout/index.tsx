import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clear, closeCheckout, open } from '@/store/slices/cart'
import { usePurchaseMutation } from '@/services/api'
import { formatPrice, formatCardNumber } from '@/utils/formatters'
import type { CheckoutResponse } from '@/types/checkout'
import {
  CheckoutWrapper,
  CheckoutOverlay,
  CheckoutPanel,
  CheckoutTitle,
  CheckoutDescription,
  FormRow,
  FieldGroup,
  FieldError,
  ActionButton
} from './styles'

type CheckoutStep = 'delivery' | 'payment' | 'confirmation' | 'error'

type DeliveryValues = {
  name: string
  endereco: string
  cidade: string
  cep: string
  numero: string
  complemento: string
}

type PaymentValues = {
  cardName: string
  cardNumber: string
  cvv: string
  dueMonth: string
  dueYear: string
}

type FieldErrors<T> = { [K in keyof T]?: string }

const emptyDelivery: DeliveryValues = {
  name: '',
  endereco: '',
  cidade: '',
  cep: '',
  numero: '',
  complemento: ''
}

const emptyPayment: PaymentValues = {
  cardName: '',
  cardNumber: '',
  cvv: '',
  dueMonth: '',
  dueYear: ''
}

const validateDelivery = (v: DeliveryValues): FieldErrors<DeliveryValues> => {
  const e: FieldErrors<DeliveryValues> = {}
  if (!v.name.trim()) e.name = 'O nome do destinatário é obrigatório'
  if (!v.endereco.trim()) e.endereco = 'O endereço é obrigatório'
  if (!v.cidade.trim()) e.cidade = 'A cidade é obrigatória'
  if (!v.cep.trim()) e.cep = 'O CEP é obrigatório'
  else if (!/^\d{8}$/.test(v.cep.replace(/\D/g, '')))
    e.cep = 'O CEP deve ter 8 dígitos'
  if (!v.numero.trim()) e.numero = 'O número é obrigatório'
  return e
}

const validatePayment = (v: PaymentValues): FieldErrors<PaymentValues> => {
  const e: FieldErrors<PaymentValues> = {}
  if (!v.cardName.trim()) e.cardName = 'O nome no cartão é obrigatório'
  if (!v.cardNumber.trim()) e.cardNumber = 'O número do cartão é obrigatório'
  else if (!/^\d{16}$/.test(v.cardNumber.replace(/\s/g, '')))
    e.cardNumber = 'O número deve ter 16 dígitos'
  if (!v.cvv.trim()) e.cvv = 'O CVV é obrigatório'
  else if (!/^\d{3}$/.test(v.cvv)) e.cvv = 'O CVV deve ter 3 dígitos'
  if (!v.dueMonth.trim()) e.dueMonth = 'O mês é obrigatório'
  else if (!/^(0[1-9]|1[0-2])$/.test(v.dueMonth))
    e.dueMonth = 'Mês inválido (01–12)'
  if (!v.dueYear.trim()) e.dueYear = 'O ano é obrigatório'
  else if (!/^\d{4}$/.test(v.dueYear)) e.dueYear = 'Formato inválido (AAAA)'
  return e
}

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { items, isCheckoutOpen } = useAppSelector((state) => state.cart)
  const [purchase, { isLoading: isSubmitting }] = usePurchaseMutation()
  const totalPrice = items.reduce((acc, item) => acc + item.preco, 0)
  const [step, setStep] = useState<CheckoutStep>('delivery')
  const [orderData, setOrderData] = useState<CheckoutResponse | null>(null)
  const [delivery, setDelivery] = useState<DeliveryValues>(emptyDelivery)
  const [payment, setPayment] = useState<PaymentValues>(emptyPayment)
  const [deliveryErrors, setDeliveryErrors] = useState<
    FieldErrors<DeliveryValues>
  >({})
  const [paymentErrors, setPaymentErrors] = useState<
    FieldErrors<PaymentValues>
  >({})

  useEffect(() => {
    if (isCheckoutOpen) {
      setStep('delivery')
      setDelivery(emptyDelivery)
      setPayment(emptyPayment)
      setDeliveryErrors({})
      setPaymentErrors({})
      setOrderData(null)
    }
  }, [isCheckoutOpen])

  const handleDeliverySubmit = (e: FormEvent) => {
    e.preventDefault()
    const errors = validateDelivery(delivery)
    setDeliveryErrors(errors)
    if (Object.keys(errors).length === 0) setStep('payment')
  }

  const handlePaymentSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errors = validatePayment(payment)
    setPaymentErrors(errors)
    if (Object.keys(errors).length > 0) return

    try {
      const data = await purchase({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: delivery.name,
          address: {
            description: delivery.endereco,
            city: delivery.cidade,
            zipCode: delivery.cep.replace(/\D/g, ''),
            number: Number(delivery.numero),
            complement: delivery.complemento
          }
        },
        payment: {
          card: {
            name: payment.cardName,
            number: payment.cardNumber.replace(/\s/g, ''),
            code: Number(payment.cvv),
            expires: {
              month: Number(payment.dueMonth),
              year: Number(payment.dueYear)
            }
          }
        }
      }).unwrap()
      setOrderData(data)
      setStep('confirmation')
    } catch {
      setStep('error')
    }
  }

  const handleBackToCart = () => {
    dispatch(closeCheckout())
    dispatch(open())
  }

  const handleFinish = () => {
    dispatch(closeCheckout())
    dispatch(clear())
    navigate('/')
  }

  if (!isCheckoutOpen) return null

  if (step === 'error') {
    return (
      <CheckoutWrapper>
        <CheckoutOverlay />
        <CheckoutPanel>
          <CheckoutTitle>Erro ao realizar o pedido</CheckoutTitle>
          <CheckoutDescription>
            Ocorreu um erro ao processar seu pedido. Por favor, tente novamente
            mais tarde.
          </CheckoutDescription>
          <ActionButton
            $marginTop
            type="button"
            onClick={() => setStep('payment')}
          >
            Tentar novamente
          </ActionButton>
          <ActionButton type="button" onClick={handleBackToCart}>
            Voltar ao carrinho
          </ActionButton>
        </CheckoutPanel>
      </CheckoutWrapper>
    )
  }

  if (step === 'confirmation' && orderData) {
    return (
      <CheckoutWrapper>
        <CheckoutOverlay />
        <CheckoutPanel>
          <CheckoutTitle>Pedido realizado - {orderData.orderId}</CheckoutTitle>
          <CheckoutDescription>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </CheckoutDescription>
          <CheckoutDescription>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </CheckoutDescription>
          <CheckoutDescription>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </CheckoutDescription>
          <CheckoutDescription>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </CheckoutDescription>
          <ActionButton $marginTop type="button" onClick={handleFinish}>
            Concluir
          </ActionButton>
        </CheckoutPanel>
      </CheckoutWrapper>
    )
  }

  if (step === 'payment') {
    return (
      <CheckoutWrapper>
        <CheckoutOverlay />
        <CheckoutPanel>
          <form onSubmit={handlePaymentSubmit}>
            <CheckoutTitle>
              Pagamento - Valor a pagar {formatPrice(totalPrice)}
            </CheckoutTitle>

            <FormRow>
              <FieldGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  value={payment.cardName}
                  onChange={(e) =>
                    setPayment((p) => ({ ...p, cardName: e.target.value }))
                  }
                />
                {paymentErrors.cardName && (
                  <FieldError>{paymentErrors.cardName}</FieldError>
                )}
              </FieldGroup>
            </FormRow>

            <FormRow>
              <FieldGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  inputMode="numeric"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  value={payment.cardNumber}
                  onChange={(e) =>
                    setPayment((p) => ({
                      ...p,
                      cardNumber: formatCardNumber(e.target.value)
                    }))
                  }
                />
                {paymentErrors.cardNumber && (
                  <FieldError>{paymentErrors.cardNumber}</FieldError>
                )}
              </FieldGroup>
              <FieldGroup $width="86px">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  value={payment.cvv}
                  onChange={(e) =>
                    setPayment((p) => ({ ...p, cvv: e.target.value }))
                  }
                />
                {paymentErrors.cvv && (
                  <FieldError>{paymentErrors.cvv}</FieldError>
                )}
              </FieldGroup>
            </FormRow>

            <FormRow>
              <FieldGroup>
                <label htmlFor="dueMonth">Mês de vencimento</label>
                <input
                  id="dueMonth"
                  name="dueMonth"
                  type="text"
                  placeholder="01"
                  value={payment.dueMonth}
                  onChange={(e) =>
                    setPayment((p) => ({ ...p, dueMonth: e.target.value }))
                  }
                />
                {paymentErrors.dueMonth && (
                  <FieldError>{paymentErrors.dueMonth}</FieldError>
                )}
              </FieldGroup>
              <FieldGroup>
                <label htmlFor="dueYear">Ano de vencimento</label>
                <input
                  id="dueYear"
                  name="dueYear"
                  type="text"
                  placeholder="2025"
                  value={payment.dueYear}
                  onChange={(e) =>
                    setPayment((p) => ({ ...p, dueYear: e.target.value }))
                  }
                />
                {paymentErrors.dueYear && (
                  <FieldError>{paymentErrors.dueYear}</FieldError>
                )}
              </FieldGroup>
            </FormRow>

            <ActionButton $marginTop type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Processando...' : 'Finalizar pagamento'}
            </ActionButton>
            <ActionButton type="button" onClick={() => setStep('delivery')}>
              Voltar para a edição de endereço
            </ActionButton>
          </form>
        </CheckoutPanel>
      </CheckoutWrapper>
    )
  }

  return (
    <CheckoutWrapper>
      <CheckoutOverlay />
      <CheckoutPanel>
        <form onSubmit={handleDeliverySubmit}>
          <CheckoutTitle>Entrega</CheckoutTitle>

          <FormRow>
            <FieldGroup>
              <label htmlFor="name">Quem irá receber</label>
              <input
                id="name"
                name="name"
                type="text"
                value={delivery.name}
                onChange={(e) =>
                  setDelivery((d) => ({ ...d, name: e.target.value }))
                }
              />
              {deliveryErrors.name && (
                <FieldError>{deliveryErrors.name}</FieldError>
              )}
            </FieldGroup>
          </FormRow>

          <FormRow>
            <FieldGroup>
              <label htmlFor="endereco">Endereço</label>
              <input
                id="endereco"
                name="endereco"
                type="text"
                value={delivery.endereco}
                onChange={(e) =>
                  setDelivery((d) => ({ ...d, endereco: e.target.value }))
                }
              />
              {deliveryErrors.endereco && (
                <FieldError>{deliveryErrors.endereco}</FieldError>
              )}
            </FieldGroup>
          </FormRow>

          <FormRow>
            <FieldGroup>
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                value={delivery.cidade}
                onChange={(e) =>
                  setDelivery((d) => ({ ...d, cidade: e.target.value }))
                }
              />
              {deliveryErrors.cidade && (
                <FieldError>{deliveryErrors.cidade}</FieldError>
              )}
            </FieldGroup>
          </FormRow>

          <FormRow>
            <FieldGroup>
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                name="cep"
                type="text"
                value={delivery.cep}
                onChange={(e) =>
                  setDelivery((d) => ({ ...d, cep: e.target.value }))
                }
              />
              {deliveryErrors.cep && (
                <FieldError>{deliveryErrors.cep}</FieldError>
              )}
            </FieldGroup>
            <FieldGroup>
              <label htmlFor="numero">Número</label>
              <input
                id="numero"
                name="numero"
                type="text"
                value={delivery.numero}
                onChange={(e) =>
                  setDelivery((d) => ({ ...d, numero: e.target.value }))
                }
              />
              {deliveryErrors.numero && (
                <FieldError>{deliveryErrors.numero}</FieldError>
              )}
            </FieldGroup>
          </FormRow>

          <FormRow>
            <FieldGroup>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input
                id="complemento"
                name="complemento"
                type="text"
                value={delivery.complemento}
                onChange={(e) =>
                  setDelivery((d) => ({ ...d, complemento: e.target.value }))
                }
              />
            </FieldGroup>
          </FormRow>

          <ActionButton $marginTop type="submit">
            Continuar com o pagamento
          </ActionButton>
          <ActionButton type="button" onClick={handleBackToCart}>
            Voltar para o carrinho
          </ActionButton>
        </form>
      </CheckoutPanel>
    </CheckoutWrapper>
  )
}

export default Checkout
