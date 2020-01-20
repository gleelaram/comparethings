import React,{Component } from 'react';
import {Button,Card,CardBody,CardImg,CardTitle,CardSubtitle, Row,Col} from 'reactstrap';
import './Product.css';


export default class Product extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            
            <Card >
                <div className="imgCard">
                    <CardImg top width="100%" src={this.props.productDetails.image} alt="Card image cap" />
                    <div className={this.props.productDetails.compare ? "imgOverLay clkimgOverLay":"imgOverLay"}></div>
                    <div className="imgCompare">
                        <Button outline color="light" className="overlayButton" onClick={() => this.props.compare(this.props.productDetails.id)}> {this.props.productDetails.compare?"Remove":"Compare"}</Button>
                    </div>
                </div>
                <CardBody>
                    <Row>
                        <Col>{this.props.productDetails.name}</Col>
                        <Col className="priceAlign">{this.props.productDetails.price}</Col>
                    </Row>
                    <Row>
                        <Col className="descOpac">{this.props.productDetails.description}</Col>
                    </Row>
                </CardBody>
            </Card>            

        )
    }
}