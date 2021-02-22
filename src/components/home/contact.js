import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const { TextArea } = Input;

function AppContact() {
    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Feel free to connect with us!</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: "May we ask your full name?",
                            },
                        ]}
                    >
                        <Input placeholder="What is your full name?" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                message:
                                    "Seems like it is not your email address?",
                            },
                            {
                                required: true,
                                message:
                                    "Oops.. you forgot your email, did not you?",
                            },
                        ]}
                    >
                        <Input placeholder="What is your email address?" />
                    </Form.Item>
                    <Form.Item name="telephone">
                        <Input placeholder="May we know your phone number?" />
                    </Form.Item>
                    <Form.Item name="subject">
                        <Input placeholder="Please put your subject here" />
                    </Form.Item>
                    <Form.Item name="message">
                        <TextArea placeholder="Please let us know your message" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value
                                            ? Promise.resolve()
                                            : Promise.reject(
                                                  "Please agree with terms and condition"
                                              ),
                                },
                            ]}
                        >
                            <Checkbox>
                                I agree with terms and conditions.
                            </Checkbox>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AppContact;
