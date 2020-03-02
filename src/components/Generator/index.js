import React, {useState} from 'react';
import Settings from './Settings/index';
import Preview from './Preview/index';
import { colors } from '../../general-styles'
import { Wrapper } from './styles';

const Generator = () => {
  const [settings, setSettings] = useState({
    shadow: {
      rgba: 'rgba(0,0,0,1)',
      hex: '#000000',
      x: 0,
      y: 0,
      length: 0,
      blur: 3,
      alpha: 1,
      mode: ''
    },
    bg: {
      rgba: hexToRgb(colors.white, 1),
      hex: colors.white,
      alpha: 1
    },
    box: {
      rgba: hexToRgb(colors.white, 1),
      hex: colors.white,
      alpha: 1
    }
  });

  const [command, setCommand] = useState(generateCommand(settings.shadow))
  
  function handleChange(value) {
    const newSettings = {...settings, ...value};
    const key = Object.keys(value)[0]
    newSettings[key].rgba = hexToRgb(
      newSettings[key].hex,
      newSettings[key].alpha
    )
    setSettings(newSettings);
    setCommand(generateCommand(newSettings.shadow))
  }

  function handlerCopy() {
    const dummy = document.createElement('textarea');
    dummy.value = command.replace(/<br \/>/g, '');
    document.body.appendChild(dummy);

    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  function generateCommand(shadow) {
    let shadowTemplate = `
      -webkit-box-shadow: {mode} {x}px {y}px {blur}px {length}px {rgba};
      -moz-box-shadow: {mode} {x}px {y}px {blur}px {length}px {rgba};
      box-shadow: {mode} {x}px {y}px {blur}px {length}px {rgba};
    `;

    for (let [prop, val] of Object.entries(shadow)) {
      const regex = new RegExp(`{${prop}}`, 'g',);
      shadowTemplate = shadowTemplate.replace(regex, val)
    }

    return shadowTemplate;
  }

  function hexToRgb(hex, alpha) {
    const rgb = hex.substring(1)
      .match(/.{2}/g)
      .map(x => parseInt(x, 16))
      .join();

    return `rgba(${rgb}, ${alpha})`
  }

  return (
    <Wrapper>
      <Settings
        {...settings}
        changed={handleChange}
        command={command}
        onCopy={handlerCopy}
      />

      <Preview data={settings} />
    </Wrapper>
  )
}

export default Generator;
