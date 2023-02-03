import React from 'react';

export type HeaderProps = {
  optionList: string[];
  backgroundColor: string;
  desktopFlyout: boolean;
  buttonType: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonHover: string;
  icon: {iconSrc: string, iconAlt: string};
  title: string;
};

export function Header({ 
  optionList,
  backgroundColor,
  desktopFlyout,
  buttonType,
  buttonPrimary,
  buttonSecondary,
  buttonHover,
  icon,
  title
 }: HeaderProps) {
  return (
    <div>
      {}
    </div>
  );
}