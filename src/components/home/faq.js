import React from "react";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function AppFaq() {
    return (
        <div id="faq" className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Question</h2>
                    <p>Find what confuses you here</p>
                </div>
                <Collapse defaultActiveKey={["1"]}>
                    <Panel header="How to setup the theme?" key="1">
                        <p>
                            Choose your theme. You can choose either light or
                            dark theme.
                        </p>
                    </Panel>
                    <Panel
                        header="Can I change plan or cancel at any time?"
                        key="2"
                    >
                        <p>
                            Sure! We even have money back guarantee if you
                            cancel your plan in 30-days
                        </p>
                    </Panel>
                    <Panel header="How to access through cloud?" key="3">
                        <p>
                            Login then click admin panel on the left top of the
                            page.
                        </p>
                    </Panel>
                    <Panel header="Can I manage multiple tasks?" key="4">
                        <p>
                            Of course, just put your tasks in Kanban board that
                            we provide.
                        </p>
                    </Panel>
                    <Panel header="How can I change my password?" key="5">
                        <p>
                            Go to Forgot Password page and put your email. You
                            will receive a link that enables you to set your
                            password.
                        </p>
                    </Panel>
                    <Panel header="How to manage your account?" key="6">
                        <p>
                            Please keep your password secret and do not share it
                            with anyone.
                        </p>
                    </Panel>
                </Collapse>
                <div className="quickSupport">
                    <h3>Want quick support?</h3>
                    <p>
                        Contact us and we'll be asking your issues to solve it
                        in no time!
                    </p>
                    <Button type="primary" size="large">
                        <i className="fas fa-envelope"></i>
                        Please let us know your question
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppFaq;
