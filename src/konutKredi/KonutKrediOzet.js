import { Descriptions } from 'antd';
import React from 'react';
import { getMaturityDisplayText } from './components/MaturitySelect';

export const KonutKrediOzet = ({
  values: { name, surname, tckn, houseValue, creditValue, maturityValue }
}) => {
  return (
    <Descriptions column={1}>
      <Descriptions.Item label="Ad - Soyad">{`${name} ${surname}`}</Descriptions.Item>
      <Descriptions.Item label="TCKN">{tckn}</Descriptions.Item>
      <Descriptions.Item label="Evin Değeri">{houseValue} TL</Descriptions.Item>
      <Descriptions.Item label="Kredi Tutarı">
        {creditValue} TL
      </Descriptions.Item>
      <Descriptions.Item label="Vade">
        {getMaturityDisplayText(maturityValue)}
      </Descriptions.Item>
    </Descriptions>
  );
};
