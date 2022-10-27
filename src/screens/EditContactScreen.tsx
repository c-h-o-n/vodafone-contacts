import { Button, FormControl, Heading, Input, ScrollView, View, VStack } from 'native-base';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { EMAIL_REGEXP } from '../constants/regexp';
import { HomeStackScreenProps } from '../navigation/types';

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function EditContactScreen({
  route: {
    params: { contact },
  },
}: HomeStackScreenProps<'EditContact'>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<object> = (data) => {
    console.log('submiting with ', data, errors);
  };

  return (
    <View>
      <ScrollView p={2}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          {contact.name.first} {contact.name.last}'s Profile
        </Heading>

        <VStack width="100%" alignItems={'center'} space={4}>
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
                  placeholder={contact.name.last}
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
                  placeholder={contact.phone}
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
          <Button onPress={handleSubmit(onSubmit)} variant={'outline'} colorScheme="black">
            Save Contact
          </Button>
        </VStack>
      </ScrollView>
    </View>
  );
}
