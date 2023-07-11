import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {blue, grey} from '../../../assets/colors';
import Wrapper from '../../../components/Wrapper';

interface Props {}

const History: FC<Props> = () => {
  return (
    <Wrapper styles={{alignItems: 'center'}}>
      <View style={styles.documentsContainer}>
        <Text style={styles.title}>Documents management</Text>
      </View>
      <View style={styles.card} />
    </Wrapper>
  );
};

export default History;

const styles = StyleSheet.create({
  title: {
    color: blue,
    fontSize: 20,
  },
  documentsContainer: {
    marginHorizontal: 15,
    alignSelf: 'flex-start',
    padding: 10,
    marginVertical: 15,
  },
  card: {
    height: '80%',
    width: '93%',
    backgroundColor: grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
