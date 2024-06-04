import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ITEM_HEIGHT} from '../constants/dimentions';
import {toDoItemProps} from '../types/ToDoTypes';

/**
 * ToDoItem Component
 *
 * A memoized functional component that renders a single to-do item with an option to delete it.
 * Utilizes React.memo for performance optimization to prevent unnecessary re-renders.
 *
 * @param {Object} props - The component props
 * @param {Object} props.item - The to-do item data
 * @param {Function} props.removeToDo - Function to remove the to-do item by id
 * @returns {JSX.Element} The rendered component
 */

/**
 * HandleDelete
 *
 * A memoized callback function to handle the deletion of the to-do item.
 * Calls the removeToDo function passed as a prop with the item's id.
 */

/**
 * handleChecked
 *
 * A memoized callback function to toggle the checked state of the to-do item.
 */

const ToDoItem: React.FC<toDoItemProps> = React.memo(({item, removeToDo}) => {
  // State to manage the checked state of the to-do item
  const [IsChecked, setIsChecked] = useState(false);

  const handleDelete = useCallback(() => {
    removeToDo(item.id);
  }, [item.id]);

  const HandleChecked = useCallback(() => {
    setIsChecked(!IsChecked);
  }, [IsChecked]);

  return (
    <View style={styles.wrapperItem}>
      <View style={styles.toDoContainer}>
        <TouchableOpacity style={styles.checkBorder} onPress={HandleChecked}>
          {IsChecked && <Text style={styles.styleChecked}>✔️</Text>}
        </TouchableOpacity>
        <Text style={IsChecked ? styles.styleCheckedText : null}>
          {item.text}
        </Text>
      </View>

      <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
});

export default ToDoItem;

const styles = StyleSheet.create({
  toDoContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    height: ITEM_HEIGHT,
  },
  deleteBtn: {
    backgroundColor: 'red',
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  styleCheckedText: {
    textDecorationLine: 'line-through',
  },
  checkBorder: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleChecked: {
    fontSize: 10,
  },
});
