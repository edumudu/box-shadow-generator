interface Shadow {
  mode: string;
  x: number;
  y: number;
  blur: number;
  length: number;
  rgba: string;
}

export const generateCssCommand = ({ x, y, mode, blur, length, rgba }: Shadow) => {
  const shadowTemplate = `
    -webkit-box-shadow: ${mode} ${x}px ${y}px ${blur}px ${length}px ${rgba};
    -moz-box-shadow: ${mode} ${x}px ${y}px ${blur}px ${length}px ${rgba};
    box-shadow: ${mode} ${x}px ${y}px ${blur}px ${length}px ${rgba};
  `;

  return shadowTemplate;
};
