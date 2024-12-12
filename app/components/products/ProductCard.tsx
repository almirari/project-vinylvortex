"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter();

    const productRating = data.reviews.reduce((acc:number, item:any) => item.rating  + acc, 0) / data.reviews.length

    return (
    <div
    onClick={() => router.push(`/product/${data.id}`)}
    className="
        col-span-1
        cursor-pointer
        bg-white
        rounded-sm
        p-2
        transition
        hover:scale-105
        text-center
        text-sm
        outline-none
        focus:outline-none
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          w-full
          gap-1
        "
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4 font-bold">{truncateText(data.name)}</div>
        <div>{data.brand}</div>
        <div>{formatPrice(data.price)}</div>
        <div>{data.reviews.length} Reviews</div>
      </div>
    </div>
    );
};

export default ProductCard;
