      import React from 'react';
      import ProductList from './data';
      import Product from './Product';
      import CompareProdList from './CompareProdList';
      import './App.css';
      import { Container,Row,Col,Button, Modal,ModalHeader,ModalBody,ModalFooter,CustomInput,Form,FormGroup, Input } from 'reactstrap';

      class App extends React.PureComponent {
        constructor(props) {
          super(props);
          this.state = {
            productList: ProductList,
            showModal:false,
			compareAttri:[{name:'price',checked:true},{name:'colors',checked:true},{name:'condition',checked:false},{name:'vendors',checked:false}],
			searchCompareAttri:[{name:'price',checked:true},{name:'colors',checked:true},{name:'condition',checked:false},{name:'vendors',checked:false}],
            selectAll:false
          }
          this.openModel = this.openModel.bind(this);
          this.compare = this.compare.bind(this);
		  this.selectAll = this.selectAll.bind(this);
		  this.onSearch = this.onSearch.bind(this);
		  this.inputRef = React.createRef();
        }

        compare(id) {
          console.log(id);
          let newProdList = this.state.productList.map((product) => {
            if (id === product.id) {
              product.compare = !product.compare
            }
            return product;
          })
          this.setState({
            productList: newProdList
          })
        }

        openModel() {
          console.log("in Open Model");
          this.setState({showModal:!this.state.showModal})
		}
		
        onCompAttriChange(obj) {
          	let newCompAttri = this.state.compareAttri.map((attr) => {
                                if(attr.name === obj.name){
                                  attr.checked = !attr.checked;
                                }
                                return attr
							});
			if(this.state.isSearching) {
				let searchVal = this.inputRef.current.value;
				if(searchVal.length > 2){
					let searchedAttri = newCompAttri.filter((attri) => {
						return attri.name.includes(searchVal);
					})
					this.setState({
						searchCompareAttri:searchedAttri,isSearching:true
					})
					return ;
				}
			}
				
          	this.setState({compareAttri:newCompAttri,searchCompareAttri:newCompAttri});
		}
		
        selectAll() {
          let newCompAttri = this.state.compareAttri.map((attr) => {
              attr.checked = !this.state.selectAll;
              return attr
          });
          this.setState({compareAttri:newCompAttri,selectAll:!this.state.selectAll,searchCompareAttri:newCompAttri});
		}

		onSearch() {
			let searchVal = this.inputRef.current.value;
			if(searchVal.length > 2){
				let searchedAttri = this.state.compareAttri.filter((attri) => {
					return attri.name.includes(searchVal);
				})
				this.setState({
					searchCompareAttri:searchedAttri,isSearching:true
				})
			}else if(searchVal.length >0 && searchVal.length < 2) {
				this.setState({isSearching:false});
			}
			if(searchVal.length === 0) {
				this.setState({
					searchCompareAttri:this.state.compareAttri,isSearching:false
				})
			}
		}
		
        render() {	
        const ProductList = this.state.productList.map(product => {
            return (
				<Col key={product.id}>
					<Product productDetails={product} compare={this.compare}></Product>
				</Col>
            )
		});

        let comparedProducts = this.state.productList.filter(product => {
            return product.compare;
        });
        return (
            <>
              <Container>
                <>
				<Row className="headerBar">
					<Col>
						<div className="mainTitle">Compare Products</div>
					</Col>
					<Col className="buttonLeft">
							<Button color="primary" onClick={this.openModel}>Add/Remove Attributes</Button>
					</Col>
				</Row>
                  <>
                    <Modal isOpen={this.state.showModal} toggle={this.openModel} backdrop={false}>
                      	<ModalHeader toggle={this.openModel}>Add/Remove Attributes</ModalHeader>
                      	<ModalBody>
							{/* For customInput id is a most prop.Remember */}
								<Input type="search" name="search"  id="search" placeholder="Search Attributes" onChange={this.onSearch} innerRef={this.inputRef}/>
								{
									this.state.isSearching 
									? 
										null
									:
										<CustomInput type="checkbox" id="selAll" checked={this.state.selectAll} onChange={this.selectAll}><b>Select All</b></CustomInput>
								}
								<hr></hr>
								{
									this.state.isSearching 
									?
										this.state.searchCompareAttri.map((attributes,index) => {
											return (
												<CustomInput type="checkbox" id={index} key={index}checked={attributes.checked} onChange={() => this.onCompAttriChange(attributes)}>{attributes.name}</CustomInput>
											)
										})
									:
										this.state.compareAttri.map((attributes,index) => {
											return (
												<CustomInput type="checkbox" id={index} key={index}checked={attributes.checked} onChange={() => this.onCompAttriChange(attributes)}>{attributes.name}</CustomInput>
											)
										})
							}
                      	</ModalBody>
                      	<ModalFooter>
                        	<Button color="light" onClick={this.openModel} disabled>Cancel</Button>{' '}
                        	<Button color="primary" onClick={this.openModel}>Apply</Button>
                      	</ModalFooter>
                    </Modal>
                  </>
                </>
				<Row lg="4" md="4" sm="2" xs="1" className="mainContainer">
					{
						ProductList
					}
				</Row>
                <>
                  {comparedProducts.length >= 2 ? <CompareProdList list={comparedProducts} compareAttri={this.state.compareAttri}></CompareProdList> : null}
                </>
              </Container>
            </>
          )
        }
      }

      export default App;