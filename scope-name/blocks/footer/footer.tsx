import React from 'react';

export type FooterProps = {
  disclaimerTxt: string;
  socialMedia: {imgSrc: string, imgAlt: string, linkSrc: string}[];
}

export function Footer({ 
  disclaimerTxt,
  socialMedia
 }: FooterProps) {
  return (
  <div>
    {}
  </div>
  );
}
