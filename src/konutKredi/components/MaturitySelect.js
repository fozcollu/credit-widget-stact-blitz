import { Select } from 'antd';
import React from 'react';

const MaturityMonthOptions = [12, 18, 24, 36, 48, 60, 72, 90, 108, 120];

export function getMaturityDisplayText(month) {
  return `${parseFloat(month / 12)} Yıl (${month} Ay)`;
}

export const MaturitySelect = props => {
  return (
    <Select {...props}>
      {MaturityMonthOptions.map(option => (
        <Select.Option value={option}>{getMaturityDisplayText(option)}</Select.Option>
      ))}
    </Select>
  );
};
