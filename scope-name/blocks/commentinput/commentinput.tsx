import React, { ReactNode } from 'react';

export type CommentinputProps = {
  buttonType: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonHover: string;
  isLoggedIn: boolean;
};

export function Commentinput({ 
  buttonType,
  buttonPrimary,
  buttonSecondary,
  buttonHover,
  isLoggedIn
 }: CommentinputProps) {
  return (
    <div>
      {}
    </div>
  );
}