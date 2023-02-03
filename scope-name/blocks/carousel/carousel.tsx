import React from 'react';

export type CarouselProps = {
  data: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  regPrice: number;
  salePrice: number;
  description: string;
  specs: string[];
  }[];
  scrollDistance: number;
  hasButtons: boolean;
};

export function Carousel({ 
  data,
  scrollDistance,
  hasButtons
 }: CarouselProps) {
  return (
    <div>
      {}
    </div>
  );
}
