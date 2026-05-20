export const loadCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categories = [
        { id: 1, name: 'Fresh Fruits' },
        { id: 2, name: 'Vegetables' },
        { id: 3, name: 'Dairy Products' },
        { id: 4, name: 'Bakery Items' },
        { id: 5, name: 'Beverages' }
      ];
      resolve(categories);
    }, 2000);
  });
};
