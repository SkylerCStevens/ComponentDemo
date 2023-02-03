import React from 'react';

export type ButtonProps = {
  primaryColor: string;
  secondaryColor: string;
  hoverColor: string;
  btnType: string;
  btnStyle: string;
};

export function Button({ 
  primaryColor,
  secondaryColor,
  hoverColor,
  btnType,
  btnStyle
 }: ButtonProps) {
  return (
    <div>
      {}
    </div>
  );
}