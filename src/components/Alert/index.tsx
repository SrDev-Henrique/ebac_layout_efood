import { AlertBox, AlertMessage } from './styles'

type Props = {
  message: string
}

const Alert = ({ message }: Props) => (
  <AlertBox role="alert">
    <AlertMessage>{message}</AlertMessage>
  </AlertBox>
)

export default Alert
