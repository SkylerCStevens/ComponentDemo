import React from 'react';

export type CardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  regPrice: number;
  salePrice: number;
  description: string;
  specs: string[];
  cartQuantity: number;
};

export function Card({ 
  imgSrc,
  imgAlt,
  title,
  subtitle,
  regPrice,
  salePrice,
  description,
  specs,
  cartQuantity
 }: CardProps) {
  return (
    <div>
      {}
    </div>
  );
}