import React from 'react';

export type PriceProps = {
  regPrice: number;
  salePrice: number;
  priceType: string;
};

export function Price({ 
  regPrice,
  salePrice,
  priceType
 }: PriceProps) {
  return (
    <div>
      {}
    </div>
  );
}
