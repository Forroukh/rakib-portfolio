import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './News.css'

const News = (props) => {
    const{author,title,description} = props.article;
    return (
        <CardGroup >
            <Card >
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>Author: {author}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                   <Button className='outline-info'>Read More</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default News;