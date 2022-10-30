import { Heading } from 'native-base';

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message = 'Message' }: ErrorMessageProps) {
  return <Heading>{message}</Heading>;
}
