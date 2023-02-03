import React from 'react';

export type CartlistProps = {
  data: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  regPrice: number;
  salePrice: number;
  cartQuantity: number;
  }[];
};

export function Cartlist({ data }: CartlistProps) {
  return (
    <div>
      {}
    </div>
  );
}
