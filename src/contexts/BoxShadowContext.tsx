import React, { createContext, ReactNode, useState } from 'react';

import { generateCssCommand } from '../utils/generateCssCommand';
import { hexToRgb } from '../utils/colorsConvertion';

import { colors } from '../general-styles';

export interface BoxShadowContextData {
  currentCssCommands: string;

  boxShadow: {
    rgba: string;
    hex: string;
    x: number;
    y: number;
    length: number;
    blur: number;
    alpha: number;
    mode: string;
  };

  boxBackground: {
    rgba: string;
    hex: string;
    alpha: number;
  };

  containerBackground: {
    rgba: string;
    hex: string;
    alpha: number;
  };

  changeBoxShadow: (obj: Partial<BoxShadowContextData['boxShadow']>) => void;
  changeBoxBackground: (obj: Partial<BoxShadowContextData['boxBackground']>) => void;
  changeContainerBackground: (obj: Partial<BoxShadowContextData['containerBackground']>) => void;
}

export interface BoxShadowProviderProps {
  children: ReactNode;
}

export const BoxShadowContext = createContext({} as BoxShadowContextData);

export function BoxShadowProvider({ children }: BoxShadowProviderProps) {
  const [boxShadow, setBoxShadow] = useState<BoxShadowContextData['boxShadow']>({
    rgba: 'rgba(0,0,0,1)',
    hex: '#000000',
    x: 0,
    y: 0,
    length: 0,
    blur: 3,
    alpha: 100,
    mode: '',
  });

  const [boxBackground, setBoxBackgound] = useState<BoxShadowContextData['boxBackground']>({
    rgba: hexToRgb(colors.white, 1),
    hex: colors.white,
    alpha: 100,
  });

  const [containerBackground, setContainerBackgound] = useState<BoxShadowContextData['boxBackground']>({
    rgba: hexToRgb(colors.white, 1),
    hex: colors.white,
    alpha: 100,
  });

  const currentCssCommands = generateCssCommand(boxShadow);

  const changeBoxShadow = (partial: Partial<BoxShadowContextData['boxShadow']>) => {
    setBoxShadow({
      ...boxShadow,
      ...partial,
    });
  };

  const changeBoxBackground = (partial: Partial<BoxShadowContextData['boxBackground']>) => {
    setBoxBackgound({
      ...boxBackground,
      ...partial,
    });
  };

  const changeContainerBackground = (partial: Partial<BoxShadowContextData['containerBackground']>) => {
    setContainerBackgound({
      ...containerBackground,
      ...partial,
    });
  };

  return (
    <BoxShadowContext.Provider
      value={{
        currentCssCommands,
        boxBackground,
        boxShadow,
        containerBackground,
        changeBoxShadow,
        changeBoxBackground,
        changeContainerBackground,
      }}
    >
      {children}
    </BoxShadowContext.Provider>
  );
}
