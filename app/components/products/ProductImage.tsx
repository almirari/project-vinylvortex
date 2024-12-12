"use client";

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect,
}) => {
    return (
        <div className="grid grid-cols-1 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="relative aspect-square">
                <Image
                    fill
                    src={cartProduct.selectedImg.image}
                    alt={cartProduct.name}
                    className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
                />
            </div>
        </div>
    );
};

export default ProductImage;
