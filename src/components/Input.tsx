import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputEndEditingEventData,
} from 'react-native';
import {KeyboardType} from 'react-native';
import {Input, Box, Text} from 'native-base';
import {FormikValues} from 'formik';
import {darkBlue, error, middleGrey} from '../assets/colors';

interface Props {
  name: string;
  value: string;
  onChangeText: (value: string) => void;
  onBlur: (value: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  touched?: boolean | FormikValues;
  secure?: boolean;
  error?: string;
  keyboardType?: KeyboardType;
}

export default ({
  name,
  value = '',
  touched = false,
  secure = false,
  onChangeText,
  onBlur,
  error: formikError,
  keyboardType,
}: Props) => {
  return (
    <>
      <Box mt={4} style={styles.item(touched && formikError)}>
        <Text mb={2} style={styles.label(touched && formikError)}>
          {name}
        </Text>
        <Input
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secure}
          value={value}
          keyboardType={keyboardType}
          invalidOutlineColor={'red'}
          isInvalid={!!formikError}
          _input={{
            borderColor: darkBlue,
            borderRadius: 8,
            borderWidth: 1,
            height: '50px',
            selectionColor: 'white',
            cursorColor: 'white',
          }}
        />
      </Box>
      {touched && formikError && (
        <Text style={styles.errorText}>{formikError}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create<any>({
  item: (isError: boolean) => ({
    borderColor: isError ? 'red' : 'white',
  }),
  label: (isError: boolean, disabled: boolean | undefined) => ({
    color: isError ? error : disabled ? middleGrey : darkBlue,
    fontSize: 15,
    fontWeight: 'bold',
  }),
  errorText: {
    color: error,
    marginTop: 6,
    marginBottom: 10,
  },
});
