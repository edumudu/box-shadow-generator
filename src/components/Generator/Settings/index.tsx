import React, { FC, useContext, useState } from 'react';
import Prism from 'prismjs';

import { SettingsTag, Group, Command, IconWrapper, CopiedMessage, Wrapper } from './styles';

import { InputColor } from '../../Form/InputColor';
import { InputRange } from '../../Form/InputRange';
import { InputSwitch } from '../../Form/InputSwitch';
import { BoxShadowContext } from '../../../contexts/BoxShadowContext';
import { hexToRgba } from '../../../utils/colorsConvertion';

let copyButtonTimeout: NodeJS.Timeout;

const Settings: FC = () => {
  const [copyActive, setCopyActive] = useState(false);

  const {
    currentCssCommands,
    boxShadow,
    boxBackground,
    containerBackground,
    changeBoxShadow,
    changeBoxBackground,
    changeContainerBackground,
  } = useContext(BoxShadowContext);

  function handleCopy() {
    setCopyActive(true);
    clearTimeout(copyButtonTimeout);
    copyButtonTimeout = setTimeout(() => setCopyActive(false), 5000);

    navigator.clipboard.writeText(currentCssCommands);
  }

  function hightlighterCSS() {
    const command = Prism.highlight(currentCssCommands, Prism.languages.css, 'css').replace(/;/g, '; <br />');

    return { __html: command };
  }

  return (
    <SettingsTag>
      <Wrapper>
        <Group>
          <InputRange
            name="Horizontal Length"
            min={-200}
            max={200}
            value={boxShadow.x}
            onChange={val => changeBoxShadow({ x: val })}
          />

          <InputRange
            name="Vertical Length"
            min={-200}
            max={200}
            value={boxShadow.y}
            onChange={val => changeBoxShadow({ y: val })}
          />
        </Group>

        <Group>
          <InputRange
            name="Blur Radius"
            value={boxShadow.blur}
            min={0}
            max={200}
            onChange={val => changeBoxShadow({ blur: val })}
          />

          <InputRange
            name="Spread Radius"
            value={boxShadow.length}
            min={-100}
            max={200}
            onChange={val => changeBoxShadow({ length: val })}
          />

          <InputRange
            name="Opacity"
            value={boxShadow.alpha / 100}
            min={0}
            max={1}
            step={0.01}
            onChange={val => changeBoxShadow({ alpha: val * 100 })}
          />
        </Group>

        <Group>
          <InputColor
            name="Shadow color"
            value={boxShadow.rgba}
            alpha={boxShadow.alpha}
            onChange={({ alpha, color }) => changeBoxShadow({ alpha, hex: color })}
          />

          <InputColor
            name="Background color"
            value={containerBackground.rgba}
            alpha={containerBackground.alpha}
            onChange={({ alpha, color }) => changeContainerBackground({ alpha, rgba: hexToRgba(color, alpha) })}
          />

          <InputColor
            name="Box color"
            value={boxBackground.rgba}
            alpha={boxBackground.alpha}
            onChange={({ alpha, color }) => changeBoxBackground({ alpha, rgba: hexToRgba(color, alpha) })}
          />
        </Group>

        <Group>
          <InputSwitch
            on="Inset"
            off="Outline"
            active={boxShadow.mode === 'inset'}
            onChange={isChecked => changeBoxShadow({ mode: isChecked ? 'inset' : '' })}
          />
        </Group>

        <Group>
          <IconWrapper active={copyActive}>
            <span>
              <button type="button" onClick={handleCopy}>
                <i className="material-icons">file_copy</i>
              </button>

              {copyActive && <CopiedMessage>Copied</CopiedMessage>}
            </span>
          </IconWrapper>

          <Command>
            <code dangerouslySetInnerHTML={hightlighterCSS()} />
          </Command>
        </Group>
      </Wrapper>
    </SettingsTag>
  );
};

export default Settings;
