import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import QuesoCard from './QuesoCard'


export default function QuesoContainer({ quesos, }) {
    const displayQuesos = () => quesos.map(queso => {
        return <QuesoCard key={queso.id} queso={queso}  />
    })


    return (
        <Container className="d-flex" >
            <Row className="flex-lg-wrap">
                <Col> {displayQuesos()}</Col>
            </Row>
        </Container>
            
            
    )
}
