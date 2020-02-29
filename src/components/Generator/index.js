import React, {useState} from 'react';
import Settings from './Settings/index';
import Preview from './Preview/index';
import { colors } from '../../general-styles'
import { Wrapper } from './styles';

const Generator = () => {
  const [settings, setSettings] = useState({
    shadow: {
      color: 'rgba(0,0,0,1)',
      x: 0,
      y: 0,
      length: 0,
      blur: 3,
      alpha: 1,
      mode: ''
    },
    bg: colors.white,
    box: colors.white
  });

  const [command, setCommand] = useState(generateCommand(settings.shadow))
  
  function handleChange(value) {
    const newSettings = {...settings, ...value};
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
      -webkit-box-shadow: {mode} {x}px {y}px {blur}px {length}px {color}; <br />
      -moz-box-shadow: {mode} {x}px {y}px {blur}px {length}px {color}; <br />
      box-shadow: {mode} {x}px {y}px {blur}px {length}px {color};
    `;

    for (let [prop, val] of Object.entries(shadow)) {
      const regex = new RegExp(`{${prop}}`, 'g',);
      shadowTemplate = shadowTemplate.replace(regex, val)
    }

    return shadowTemplate;
  }

  return (
    <Wrapper>
      <Settings
        data={settings}
        changed={handleChange}
        command={command}
        onCopy={handlerCopy}
      />

      <Preview data={settings} />
    </Wrapper>
  )
}

export default Generator;
