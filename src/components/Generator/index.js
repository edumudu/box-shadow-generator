import React, {useState} from 'react';
import Settings from './Settings/index';
import Preview from './Preview/index';
import { colors } from '../../general-styles'
import { Wrapper } from './styles';

const Generator = () => {
  const [data, setData] = useState({
    bg: colors.white,
    shadow: {
      color: 'rgba(0,0,0,1)',
      x: 0,
      y: 0,
      length: 0,
      blur: 3,
      alpha: 1,
      mode: ''
    },
    box: colors.white
  })
  
  function handleChange(value) {
    setData({...data, ...value}); 
  }

  return (
    <Wrapper>
      <Settings
        data={data}
        changed={handleChange} 
      />

      <Preview data={data} />
    </Wrapper>
  )
}

export default Generator;
