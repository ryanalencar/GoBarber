import pt, { format } from 'date-fns'

export default function formatDate(date) {
  return format(date, "'dia' dd 'de' MMM', às' H:mm'h' ", { locale: pt })
}
