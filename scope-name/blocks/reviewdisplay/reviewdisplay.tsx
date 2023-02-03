import React from 'react';

export type ReviewdisplayProps = {
  userName: string;
  profileImg: {imgSrc: string, imgAlt: string};
  title: string;
  body: string;
  ratingNum: number;
};

export function Reviewdisplay({ 
  userName,
  profileImg,
  title,
  body,
  ratingNum
 }: ReviewdisplayProps) {
  return (
    <div>
      {}
    </div>
  );
}
