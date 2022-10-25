import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://react-http-5ec53-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { method: 'PUT', body: JSON.stringify(cart) });
  }, [cart]);

  return (
    <Layout>
      <Products />
      {showCart && <Cart />}
    </Layout>
  );
}

export default App;
