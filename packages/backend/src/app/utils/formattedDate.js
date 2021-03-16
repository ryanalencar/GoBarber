import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function formatDate(date) {
  return format(date, "'dia' dd 'de' MMM', às' H:mm'h' ", { locale: pt });
}
