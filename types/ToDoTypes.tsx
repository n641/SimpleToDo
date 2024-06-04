export interface toDoItem {
  id: number;
  text: string;
}

export interface toDoItemObjType {
  item: toDoItem;
}

export interface toDoItemProps {
  item: toDoItem;
  removeToDo: (index: number) => void;
}

export interface ToDoListProps {
  listOfToDo: toDoItem[];
  removeToDo: (index: number) => void;
}
