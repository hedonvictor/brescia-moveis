import { Col, Row } from "react-bootstrap";

import { SocialIcons } from "../socialIcons";

export const CustomFooter = () => {
    return (
        <footer className="mt-5 text-center">
            <Row>
                <Col md={4} className="mt-4 textFooter order-2 order-md-1" style={{ color: "grey" }}>
                    <p>
                        Copyright © 2024 dimobili  | Fábrica de móveis.
                    </p>
                </Col>
                <Col md={4} className="order-1 order-md-2">
                    <SocialIcons />
                    <div className="d-flex justify-content-center mt-3">
                        <p className="text-center dimobiliColor">
                            +55 (14) 99839-2170 - (14) 3325-2776
                        </p>
                    </div>
                </Col>
                <Col md={4} className="mt-4 textFooter order-3 order-md-3" style={{ color: "grey" }}>
                    <p>
                        DesenvolVido por - <a href="https://www.instagram.com/hedonvictor.dev/" target="_blank">Hédon Victor</a>
                    </p>
                </Col>
            </Row>
        </footer>
    )

}