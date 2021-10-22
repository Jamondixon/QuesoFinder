import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import QuesoCard from './QuesoCard'


export default function QuesoContainer({ quesos, clickAction }) {
    const displayQuesos = () => quesos.map(queso => {
        return <QuesoCard key={queso.id} queso={queso}  clickAction={clickAction}/>
    })


    return (
        <Container className="d-flex m-3"  >
            <Row className="flex-lg-wrap">
                <Col className="col-6"> {displayQuesos()}</Col>
            </Row>
        </Container>
            
            
    )
}
