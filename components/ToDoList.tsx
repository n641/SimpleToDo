import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ITEM_HEIGHT} from '../constants/dimentions';
import {ToDoListProps, toDoItem, toDoItemObjType} from '../types/ToDoTypes';
import ToDoItem from './ToDoItem';

/**
 * ToDoList Component
 *
 * A memoized functional component that renders a list of to-do items using FlatList.
 * Optimized with React.memo and useCallback to prevent unnecessary re-renders.
 *
 * @param {Object} props - The component props
 * @param {Function} props.removeToDo - Function to remove a to-do item by id
 * @param {Array} props.listOfToDo - Array of to-do items to be rendered
 * @returns {JSX.Element} The rendered component
 */

const ToDoList: React.FC<ToDoListProps> = React.memo(
  ({removeToDo, listOfToDo}) => {
    const keyExtractor = useCallback(
      (item: toDoItem) => item.id.toString(),
      [],
    );
    const renderItem = useCallback(
      ({item}: toDoItemObjType) => (
        <ToDoItem removeToDo={removeToDo} item={item} />
      ),
      [removeToDo],
    );

    return (
      <View>
        <FlatList
          data={listOfToDo}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          style={styles.list}
        />
      </View>
    );
  },
);

export default ToDoList;

const styles = StyleSheet.create({
  list: {
    marginBottom: 80,
  },
});
