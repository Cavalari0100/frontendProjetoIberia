import React from "react";
import {Col , Container, Row } from "reactstrap";
import CardsSetores from "./CardsSetores";
function MidlePage() {
    return (
        <Container>
            <h1>Historia da Iberia</h1>
            <Row
                md="2"
                sm="2"
                xs="1">

                <Col>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </Col>
                <Col>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </Col>
                <Col>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </Col>
                <Col>
                    <img src="assets/img6.png" style={{ width: '100%' }} alt="imgFromIberia" />
                </Col>
            </Row>
            <CardsSetores/>
        </Container>
    )
}
export default MidlePage;