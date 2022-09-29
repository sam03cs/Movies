import './EditPage.css'
import React, { useState } from 'react';

import {
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';
// core components

export default function Edit() {
  return (
    <>
      {/* Page content */}

      <Container className="mt--7" fluid>
        <Row>
          {/* PRINCIPAL BODY */}
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                      <Button color="primary" size="sm">
                        Save
                      </Button>
                   (
                      <Button color="primary" size="sm">
                        Edit
                      </Button>
                    )
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information 
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            E-mail
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="email"
                            required
                            value={' '}
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            disabled={' '}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="firstname"
                            required
                            value={' '}
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            disabled={' '}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="lastname"
                            required
                            value={' '}
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            disabled={' '}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
                    }

