export const addItemToCart = (items, newItem) => {
    const exists = items.find(item => item.id === newItem.id);
    if (exists) {
        return items.map(item => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item));
    }

    return [...items, { ...newItem, quantity: 1 }];
};
