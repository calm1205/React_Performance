import React, { ChangeEvent, useState } from 'react';

/**
 * Good: useEffectを使用しない
 */
export const GoodEffect: React.FC = () => {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  // useEffectを使用しない。
  const fullName = firstName + ' ' + lastName;

  const onChangeFirst = (e: ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);

  const onChangeLast = (e: ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  console.log('good rendered');

  return (
    <>
      <label>firstName</label>
      <input value={firstName} onChange={onChangeFirst} />

      <br />

      <label>lastName</label>
      <input value={lastName} onChange={onChangeLast} />

      <p>Your name is {fullName}</p>
    </>
  );
};
