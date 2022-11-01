import { Box, Button, FormControl, Input, ScrollView, View, VStack } from 'native-base';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { v4 as uuidv4 } from 'uuid';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { useContact } from '../context/ContactsContext';

import { EMAIL_REGEXP } from '../constants/regexp';
import { Contact } from '../types/Contact';
import { RootStackScreenProps } from '../navigation/types';

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export default function AddNewContactScreen({ navigation }: RootStackScreenProps<'AddNewContact'>) {
  const { addContact } = useContact();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const contactToAdd: Contact = {
      id: uuidv4(),
      imageUrl: 'https://cdn.vodafone.co.uk/en/assets/images/large2X/IMG_Tech_Team_Tobi.jpg',

      name: {
        first: data.firstName,
        last: data.lastName,
      },
      email: data.email,
      phone: data.phone,
      address: data.address,
    };

    addContact([contactToAdd]);
    navigation.pop();
  };
  return (
    <View>
      <ScrollView px={2} _contentContainerStyle={{ flexGrow: 1 }}>
        <Header title={'Add New Contact'} />

        <Box flex={1} justifyContent={'space-between'}>
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
                      placeholder={'Enter First name'}
                      autoComplete={'name-given'}
                    />
                  )}
                  name="firstName"
                  rules={{ required: 'Field is required' }}
                  defaultValue=""
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
                      placeholder={'Enter Last name'}
                      autoComplete={'name-family'}
                    />
                  )}
                  name="lastName"
                  rules={{ required: 'Field is required' }}
                  defaultValue=""
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
                      placeholder={'Enter Phone'}
                      keyboardType={'email-address'}
                      autoComplete={'email'}
                    />
                  )}
                  name="email"
                  rules={{
                    required: 'Field is required',
                    pattern: { message: 'Not a valid email address', value: EMAIL_REGEXP },
                  }}
                  defaultValue=""
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
                      placeholder={'Enter Phone'}
                      keyboardType={'phone-pad'}
                      autoComplete={'tel'}
                    />
                  )}
                  name="phone"
                  rules={{ required: 'Field is required' }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>{errors.phone?.message}</FormControl.ErrorMessage>
              </FormControl>

              {/* Address */}
              <FormControl isRequired isInvalid={'address' in errors}>
                <FormControl.Label>Address</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onBlur={onBlur}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                      placeholder={'Enter Address'}
                      keyboardType={'default'}
                      autoComplete={'off'}
                    />
                  )}
                  name="address"
                  rules={{ required: 'Field is required' }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>{errors.phone?.message}</FormControl.ErrorMessage>
              </FormControl>
            </VStack>

            <Button onPress={handleSubmit(onSubmit)} variant={'outline'} borderColor={'black'} colorScheme="black">
              Add Contact
            </Button>
          </VStack>

          <Footer />
        </Box>
      </ScrollView>
    </View>
  );
}
