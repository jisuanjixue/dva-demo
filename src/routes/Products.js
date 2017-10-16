import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import Add from '../components/Add';


const Products = ({ dispatch, products,inputs }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  function handleAdd() {
    dispatch({
      type: 'products/add',
      payload: inputs.input,
    });
  }

  function handelChange(e) {
    dispatch({
      type: 'inputs/change',
      payload: e.target.value
    })
  }

  return (
    <div>
     <Add onAdd={handleAdd} onChange={handelChange} input={inputs.input}/>
      <br/>
      <hr/>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};


// export default Products;
export default connect(({ products, inputs }) => ({
  products, inputs,
}))(Products);
