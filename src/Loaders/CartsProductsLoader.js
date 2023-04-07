import { getShoppingCart } from "../utilities/fakedb";

const cartsProductsLoader = async () => {
  const loadProducts = await fetch("products.json");
  const products = await loadProducts.json();
  console.log(products);

  const storedCart = getShoppingCart();
  const saveCart = [];

  for (const id in storedCart) {
    const addedProducts = products.find((pd) => pd.id === id);
    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      saveCart.push(addedProducts);
    }
  }

  return saveCart;
};

export default cartsProductsLoader;
