import { Input } from 'antd';
import React from 'react';

export const NumberInput = ({ value, onChange, ...rest }) => {
  return (
    <Input
      {...rest}
      type="number"
      value={value}
      onChange={({ target: { value } }) => {
        return onChange(value !== '' ? parseInt(value) : undefined);
      }}
    />
  );
};
