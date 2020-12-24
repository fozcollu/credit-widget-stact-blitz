import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import KonutKrediForm from "./KonutKrediForm";

import { KonutKrediOzet } from "./KonutKrediOzet";
import { RollbackOutlined, HomeOutlined } from "@ant-design/icons";
import "./index.css";

const KonutKredi = () => {
  const [formValues, setFormValues] = useState(undefined);
  return (
    <Row>
      <Col
        xl={{ span: 8, offset: 9 }}
        lg={{ span: 12, offset: 6 }}
        md={{ span: 12, offset: 6 }}
        sm={{ span: 16, offset: 4 }}
        xs={{ span: 16, offset: 3 }}
      >
        <Card
          title={
            formValues ? (
              "Konut Kredisi Başvuru Özeti"
            ) : (
              <>Konut Kredisi {<HomeOutlined />}</>
            )
          }
          extra={
            formValues && (
              <RollbackOutlined onClick={() => setFormValues(undefined)} />
            )
          }
        >
          {formValues ? (
            <KonutKrediOzet values={formValues} />
          ) : (
            <>
              <KonutKrediForm onSubmit={values => setFormValues(values)} />
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default KonutKredi;
