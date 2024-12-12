import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>([]);

  console.log('qty', cartTotalQty)
  console.log('amount', cartTotalAmount)

  // Fetch cart products from localStorage on mount
  useEffect(() => {
    const cartItems = localStorage.getItem("VinylVortexCartItems");
    if (cartItems) {
      const cProducts: CartProductType[] = JSON.parse(cartItems) || [];
      setCartProducts(cProducts);
    }
  }, []);

  // Calculate total quantity and amount whenever cartProducts changes
  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const [total, qty] = cartProducts.reduce(
          ([totalAcc, qtyAcc], item) => [
            totalAcc + item.price * item.quantity,
            qtyAcc + item.quantity,
          ],
          [0, 0]
        );

        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };
    getTotals();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      toast.success("Product added to cart");
      localStorage.setItem("VinylVortexCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => item.id !== product.id);
        setCartProducts(filteredProducts);
        toast.success("Product removed");
        localStorage.setItem("VinylVortexCartItems", JSON.stringify(filteredProducts));
      }
    },
    [cartProducts]
  );

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      if (!cartProducts) return;

      const updatedCart = [...cartProducts];
      const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        if (updatedCart[existingIndex].quantity === 99) {
          return toast.error("Oops! Maximum reached!");
        }
        updatedCart[existingIndex].quantity += 1;
        setCartProducts(updatedCart);
        localStorage.setItem("VinylVortexCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      if (!cartProducts) return;

      const updatedCart = [...cartProducts];
      const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        if (updatedCart[existingIndex].quantity === 1) {
          updatedCart.splice(existingIndex, 1);
          toast.success("Product removed from cart");
        } else {
          updatedCart[existingIndex].quantity -= 1;
          toast.success("Product quantity decreased");
        }

        setCartProducts(updatedCart);
        localStorage.setItem("VinylVortexCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts([]);
    setCartTotalQty(0);
    setCartTotalAmount(0);
    localStorage.setItem("VinylVortexCartItems", JSON.stringify([]));
    toast.success("Cart cleared!");
  }, []);

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
