import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';

interface AddToDoInputProps {
  addToDo: (text: string) => void;
}

/**
 * AddToDoInput Component
 *
 * A functional component that renders an input field and a button for adding new to-do items.
 * Utilizes React.memo for performance optimization to prevent unnecessary re-renders.
 *
 * @param {Object} props - The component props
 * @param {Function} props.addToDo - Function to add a new to-do item
 * @returns {JSX.Element} The rendered component
 */
const AddToDoInput: React.FC<AddToDoInputProps> = React.memo(({ addToDo }) => {
  const [newItemText, setNewItemText] = useState('');

  /**
   * HandleAddItem
   *
   * A memoized callback function that adds the new to-do item using the addToDo function
   * passed as a prop. Clears the input field after adding the item.
   */
  
  const handleAddItem = useCallback(() => {
    if (!newItemText.trim()) return; // Prevent adding empty items
    addToDo(newItemText);
    setNewItemText('');
  }, [newItemText, addToDo]);

  return (
    <View style={styles.addContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new to-do"
        value={newItemText}
        onChangeText={setNewItemText}
      />
      <Button title="Add" onPress={handleAddItem} />
    </View>
  );
});

export default AddToDoInput;

const styles = StyleSheet.create({
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});
