import React, { ReactNode } from 'react';

export type FormProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  fontColor: string;
  fontSize: string;
  buttonType: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonHover: string;
  borderColor: string;
};

export function Form({ 
  children
 }: FormProps) {
  return (
    <div>
      {children}
    </div>
  );
}