"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation"; // Use the updated navigation hook for Next.js App Router
import { BsCart2 } from "react-icons/bs";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-2xl">
        <BsCart2 />
      </div>
      {cartTotalQty > 0 && (
        <span className="absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm">
          {cartTotalQty}
        </span>
      )}
    </div>
  );
};

export default CartCount;
