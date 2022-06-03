import React, { ChangeEvent, memo, useState } from 'react';
import { HighCost } from '~/components/HighCost';

const MemoHighCost = memo(HighCost);
type SwitchType = 'slow' | 'fast';

export const Memo: React.FC = () => {
  const [radio, setRadio] = useState<SwitchType>('slow');
  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const _value = e.target.value as SwitchType;
    setRadio(_value);
  };

  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const _value = e.target.value;
    setValue(_value);
  };

  console.log('renderd');

  return (
    <>
      <input
        type="radio"
        name="switch"
        value="slow"
        checked={'slow' === radio}
        onChange={onChangeRadio}
      />
      <label>slow</label>
      <input
        type="radio"
        name="switch"
        value="fast"
        checked={'fast' === radio}
        onChange={onChangeRadio}
      />
      <label>fast</label>

      <br />

      {radio === 'slow' && (
        <>
          <input type="text" value={value} onChange={onChange} />
          <HighCost />
        </>
      )}
      {radio === 'fast' && (
        <>
          <input type="text" value={value} onChange={onChange} />
          <MemoHighCost />
        </>
      )}
    </>
  );
};
