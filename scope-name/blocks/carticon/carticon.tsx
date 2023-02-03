import React from 'react';

export type CarticonProps = {
  data: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    subtitle: string;
    regPrice: number;
    salePrice: number;
    cartQuantity: number;
  }[];
  quantity: number;
};

export function Carticon({ data, quantity }: CarticonProps) {
  return (
    <div>
      {}
    </div>
  );
}
