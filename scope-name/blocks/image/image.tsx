import React from 'react';

export type ImageProps = {
  imgSrc: string;
  imgAlt: string;
  lazyLoad: boolean;
  borderRadius: string;
};

export function Image({ 
  imgSrc,
  imgAlt,
  lazyLoad,
  borderRadius
 }: ImageProps) {
  return (
    <div>
      {}
    </div>
  );
}