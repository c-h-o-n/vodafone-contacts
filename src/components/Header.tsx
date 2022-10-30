import { Center, Divider, Heading } from 'native-base';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Center>
      <Heading fontSize={'4xl'} pb={2} textAlign={'center'}>
        {title}
      </Heading>

      <Divider w={'10%'} h={1} bg={'primary'} rounded={'2xl'} />
    </Center>
  );
}
