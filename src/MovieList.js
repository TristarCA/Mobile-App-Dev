import React from 'react';
import Movie from './Movie';
import tophits from './movies.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList() {
    return (
        <section>
            <Row xs={1} md={2} lg={3} className="g-4">
                {tophits.movies.map((movie, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Body>
                                <Movie
                                    name={movie.name}
                                    year={movie.year}
                                    rating={movie.rating}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default MovieList;