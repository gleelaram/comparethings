import React from 'react';
import {Table} from 'reactstrap';
import './CompareProdList.css';

export default class CompareProdList extends React.Component {
    render() {
        return (
                <Table className="compareTable">
                    <thead>
                        <tr>
                            <th ></th>
                            {
                                this.props.list.map(product => {
                                    return (
                                                <th key={product.id} className="tableHeader">{product.name}</th>
                                            );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.compareAttri.map((attr,index) => {
                                console.log("outter Attri", attr);
                                if(!attr.checked){
                                    return null;
                                }
                                return (
                                    <tr key={index}>
                                        <td className="compareItemsRow">{attr.name}</td>
                                        {
                                            this.props.list.map((product,index) => {                                                
                                                return (
                                                    typeof product[attr.name] === 'object' 
                                                    ? 
                                                        attr.name === 'colors'
                                                        ?
                                                            <td key={index} className="tableCell">
                                                                {
                                                                    product[attr.name].map((color) => {
                                                                        return <span className={'color-bg-'+color}></span>
                                                                    })
                                                                }
                                                            </td>
                                                        :
                                                            <td key={index} className="tableCell">{product[attr.name].join()}</td> 
                                                    :
                                                        attr.name === 'condition' 
                                                        ?
                                                            product[attr.name] === 'Frozen' 
                                                            ?
                                                                <td key={index} className="tableCell bg-red">{product[attr.name]}</td>
                                                            :   
                                                                <td key={index} className="tableCell bg-green">{product[attr.name]}</td>
                                                        :
                                                            <td key={index} className="tableCell">{product[attr.name]}</td>
                                                );
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </Table>
        )
    }
}