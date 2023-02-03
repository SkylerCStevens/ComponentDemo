import React from 'react';

export type BuylaterlistProps = {
  data: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  regPrice: number;
  salePrice: number;
  }[];
};

export function Buylaterlist({ data }: BuylaterlistProps) {
  return (
    <div>
      {}
    </div>
  );
}
