import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itemName, initialValue]);

  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos)
  }

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

//localStorage.removeItem('TODOS_V1')

/* const defaultTodos = [
  { text: 'Cortar', completed: true },
  { text: 'Realizar curso', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Eeeeeeeeeeeeeeeepa', completed: true }
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */