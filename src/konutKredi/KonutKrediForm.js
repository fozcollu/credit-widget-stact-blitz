import { Form, Input, Button, InputNumber, message, Row, Col } from 'antd';

import React from 'react';
import { MaturitySelect } from './components/MaturitySelect';
import { NumberInput } from './components/NumberInput';
import { useFormValidation } from './hooks/useValidation';

const formItemLayout = {
  labelCol: { xl: 24, md: 24, sm: 24 },
  wrapperCol: { xl: 24, md: 24, sm: 24 }
};

const colLayout = {
  xl: 12,
  lg: 24,
  sm: 24
};

const KonutKrediForm = props => {
  /* ---------------------------------- HOOKS --------------------------------- */

  const { requiredRule, minRule, maxRule, nameRules } = useFormValidation();

  /* --------------------------------- METHODS -------------------------------- */

  /**
   * The credit amount must be less than 75% of the house value.
   */
  const validateCreditValue = (credit, house) => {
    return (credit * 4) / 3 < house ? true : false;
  };

  function submit(values) {
    if (!validateCreditValue(values.creditValue, values.houseValue)) {
      message.error('Kredi tutarı, ev değerinin %75’inden küçük olmalıdır');
      return;
    }
    props.onSubmit(values);
  }

  /* --------------------------------- RENDER --------------------------------- */

  return (
    <Form
      {...formItemLayout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={submit}
      labelAlign="left"
      size="small"
    >
      <Row gutter={[8, 0]}>
        <Col {...colLayout}>
          <Form.Item label="Ad" name="name" rules={[...nameRules('Ad')]}>
            <Input type="string" />
          </Form.Item>
        </Col>
        <Col {...colLayout}>
          <Form.Item
            label="Soyad"
            name="surname"
            rules={[...nameRules('Soyad')]}
          >
            <Input type="string" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="TCKN"
        name="tckn"
        rules={[
          requiredRule('TC Kimlik Numarası'),
          {
            pattern: /^[1-9]{1}[0-9]{9}[02468]{1}$/,
            message: 'TC kimlik numarası geçersiz.'
          }
        ]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Row gutter={[8, 0]}>
        <Col {...colLayout}>
          <Form.Item
            label="Evin Değeri"
            name="houseValue"
            rules={[
              requiredRule('Evin değerini'),
              minRule('Evin Değeri', 1000),
              maxRule('Evin Değeri', 1000000)
            ]}
          >
            <NumberInput suffix="TL" />
          </Form.Item>
        </Col>
        <Col {...colLayout}>
          <Form.Item
            label="Kredi Tutarı"
            name="creditValue"
            rules={[
              requiredRule('Kredi Tutarı'),
              minRule('Kredi Tutarı', 1000),
              maxRule('Kredi Tutarı', 1000000)
            ]}
          >
            <NumberInput suffix="TL" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Vade"
        name="maturityValue"
        rules={[requiredRule('Kredi Tutarı')]}
      >
        <MaturitySelect />
      </Form.Item>

      <div style={{ textAlign: 'right' }}>
        <Button type="primary" htmlType="submit">
          Devam Et
        </Button>
      </div>
    </Form>
  );
};

export default KonutKrediForm;
