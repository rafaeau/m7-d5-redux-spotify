import React from 'react'
import '../style/Song.css'
import { Card } from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom"

const Song = ({ src, id, title, artist, artistId }) => {
    return (
        <Col md={3} style={{backgroundColor: 'transparent'}}>
            <Card key={id}>
            <Card.Img variant="top" src={src}  />
            <Card.Body>
            <Link to={'album/' + id}><Card.Title>{title}</Card.Title></Link>
            <Link to={'artist/' + artistId}><Card.Title>{artist}</Card.Title></Link>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Song
