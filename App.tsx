/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import {initialItems} from './constants/ToDoListData';
import {toDoItem} from './types/ToDoTypes';
import AddToDoInput from './components/AddToDoInput';

/**
 * App Component
 *
 * The main application component that manages the state of the to-do list and
 * renders the AddToDoInput and ToDoList components.
 *
 * @returns {JSX.Element} The rendered component
 */

/**
 * removeToDo
 *
 * A memoized callback function to remove a to-do item by id.
 *
 * @param {number} id - The id of the to-do item to be removed
 */

/**
 * addToDo
 *
 * A memoized callback function to add a new to-do item.
 *
 * @param {string} newItemText - The text of the new to-do item
 */

function App(): React.JSX.Element {
  // State to manage the list of to-do items
  const [listOfToDo, setListOfToDo] = useState<toDoItem[]>(initialItems);

  const removeToDo = useCallback((id: number) => {
    setListOfToDo(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const addToDo = useCallback(
    (newItemText: string) => {
      const isDuplicate = listOfToDo.some(
        item =>
          item.text.trim().toLocaleLowerCase() ===
          newItemText.trim().toLocaleLowerCase(),
      );
      if (isDuplicate) {
        Alert.alert(
          'Duplicate Item',
          'This item already exists in your to-do list.',
        );
        return;
      }

      const newItem: toDoItem = {
        id: listOfToDo.length ? listOfToDo[listOfToDo.length - 1].id + 1 : 1,
        text: newItemText,
      };
      setListOfToDo(prevItems => [...prevItems, newItem]);
    },
    [listOfToDo],
  );

  return (
    <SafeAreaView style={styles.container}>
      <AddToDoInput addToDo={addToDo} />
      <ToDoList removeToDo={removeToDo} listOfToDo={listOfToDo} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});
