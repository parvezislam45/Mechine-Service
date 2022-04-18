import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div className="container">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header># Difference Between Authorization and Authentication</Accordion.Header>
                        <Accordion.Body>
                            Authentication<br></br>
                            # Authentication verifies who the user is<br></br>
                            # Authentication is the first step of a good identity and access management process.<br></br>
                            # Authentication is visible to and partially changeable by the user.<br></br>

                            Authorization<br></br>
                            # Authorization determines what resources a user can access.<br></br>
                            # Authorization works through settings that are implemented and maintained by the organization.<br></br>
                            # Authorization always takes place after authentication.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.To sign a user into your app, you first get authentication credentials from the user. These credentials can be the user's email address and password, or an OAuth token from a federated identity provider. Then, you pass these credentials to the Firebase Authentication SDK. Our backend services will then verify those credentials and return a response to the client.After a successful sign in, you can access the user's basic profile information, and you can control the user's access to data stored in other Firebase products. You can also use the provided authentication token to verify the identity of users in your own backend services.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                        <Accordion.Body>
                            1. Open Source Backend Platform<br></br>
                            2.Parse Hosting Platform;<br></br>
                            3.App Performance Management<br></br>
                            4.Game Backend Platform;<br></br>
                            5. Open-source Javascript framework;
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;