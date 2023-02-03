import React from 'react';

export type HeroProps = {
 imgList: {imgSrc: string, imgAlt: string}[];
 title: string;
 description: string;
};

export function Hero({ 
  imgList,
  title,
  description
}: HeroProps) {
  return (
    <div>
      {}
    </div>
  );
}
