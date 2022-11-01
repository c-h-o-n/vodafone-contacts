import { Box, Button, FormControl, Input, ScrollView, View, VStack } from 'native-base';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Footer from '../components/Footer';
import Header from '../components/Header';

import { useContact } from '../context/ContactsContext';

import { EMAIL_REGEXP } from '../constants/regexp';

import { HomeStackScreenProps } from '../navigation/types';
import { Contact } from '../types/Contact';

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function EditContactScreen({ route, navigation }: HomeStackScreenProps<'EditContact'>) {
  const { contact } = route.params;

  const { updateContact } = useContact();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      firstName: contact.name.first,
      lastName: contact.name.last,
      email: contact.email,
      phone: contact.phone,
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const contactToUpdated: Partial<Contact> = {
      name: {
        first: data.firstName,
        last: data.lastName,
      },
      email: data.email,
      phone: data.phone,
    };

    updateContact(contact.id, contactToUpdated);

    navigation.pop();
    console.log('updated contact:', contactToUpdated);
  };

  return (
    <View>
      <ScrollView px={2} _contentContainerStyle={{ flexGrow: 1 }}>
        <Header title={`${contact.name.first} ${contact.name.last}'s Profile`} />

        <Box justifyContent={'space-between'} flex={1}>
          <VStack w={'100%'} alignItems={'center'} space={8}>
            <VStack w={'100%'} space={4}>
              {/* First name */}
              <FormControl isRequired isInvalid={'firstName' in errors}>
                <FormControl.Label>First Name</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                      onBlur={onBlur}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                      placeholder={contact.name.first}
                      autoComplete={'name-given'}
                    />
                  )}
                  name="firstName"
                  rules={{ required: 'Field is required' }}
                />
                <FormControl.ErrorMessage>{errors.firstName?.message}</FormControl.ErrorMessage>
              </FormControl>
              {/* Last name */}
              <FormControl isRequired isInvalid={'lastName' in errors}>
                <FormControl.Label>Last Name</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onBlur={onBlur}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                      placeholder={contact.name.last}
                      autoComplete={'name-family'}
                    />
                  )}
                  name="lastName"
                  rules={{ required: 'Field is required' }}
                />
                <FormControl.ErrorMessage>{errors.lastName?.message}</FormControl.ErrorMessage>
              </FormControl>
              {/* Email */}
              <FormControl isRequired isInvalid={'email' in errors}>
                <FormControl.Label>Email</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onBlur={onBlur}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                      placeholder={contact.email}
                      keyboardType={'email-address'}
                      autoComplete={'email'}
                    />
                  )}
                  name="email"
                  rules={{
                    required: 'Field is required',
                    pattern: { message: 'Not a valid email address', value: EMAIL_REGEXP },
                  }}
                />
                <FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
              </FormControl>
              {/* Phone */}
              <FormControl isRequired isInvalid={'phone' in errors}>
                <FormControl.Label>Phone</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onBlur={onBlur}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                      placeholder={contact.phone}
                      keyboardType={'phone-pad'}
                      autoComplete={'tel'}
                    />
                  )}
                  name="phone"
                  rules={{ required: 'Field is required' }}
                />
                <FormControl.ErrorMessage>{errors.phone?.message}</FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <Button onPress={handleSubmit(onSubmit)} variant={'outline'} borderColor={'black'} colorScheme="black">
              Save Contact
            </Button>
          </VStack>

          <Footer />
        </Box>
      </ScrollView>
    </View>
  );
}
