import React from "react";
import { PropertyCardProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  price,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm transition-transform hover:scale-105 cursor-pointer">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-[#34967C] font-medium mb-1">{price}</p>
        <p className="text-sm text-gray-500">{rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
