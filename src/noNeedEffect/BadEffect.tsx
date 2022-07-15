import React, { ChangeEvent, useEffect, useState } from 'react';

/**
 * useEffectが不要なのに使っているケース
 */
export const BadEffect: React.FC = () => {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  const [fullName, setFullName] = useState('');

  // 不要なuseEffect
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);

  const onChangeFirst = (e: ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);

  const onChangeLast = (e: ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  console.log('bad rendered');

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
