import React, {FC, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {blue, grey} from '../../../assets/colors';
import Wrapper from '../../../components/Wrapper';
import ListItem from '../components/ListItem';

const TASKS = [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}];

interface Props {}

const History: FC<Props> = () => {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <Wrapper styles={{alignItems: 'center'}}>
      <View style={styles.documentsContainer}>
        <Text style={styles.title}>Tasks</Text>
      </View>
      <ScrollView contentContainerStyle={{flex: 1}}>
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} />
        ))}
      </ScrollView>
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
    flex: 1,
  },
});
