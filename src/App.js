import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddProduct from './screens/AddProduct'
import Loginpage from './screens/loginpage'
import Singup from './screens/Singup';
import { Dashboard } from './screens/Dashboard';
import { AddProductData } from './screens/AddProductData';
import { ProductDetailse } from './screens/ProductDetailse';
import { EditProductPage } from './screens/EditProxucts'
import { FoodProductDetailse } from './screens/foods/FoodProductDetailse';

// food Product
import { FoodProductData } from './screens/foods/FoodProductsPage';
import { AddFoodProductData } from './screens/foods/AddFoodProductsPage';
import { EditFoodProducts } from './screens/foods/EditFoodProducts';

// Account Setting
import { AccountSettings } from './screens/accountSetting/AccountSettings'

// invetery
import { Inventory } from './screens/Inventory/InventeryUser';
import { StripePaymentData } from './screens/StripePayment/StripePayments';

const App = () => {
  return (
      <Routes>
        <Route exact path='/addProduct' element={<AddProduct />} />
        {/* <Route exact path='/products' component={ShowProducts} /> */}
        <Route exact path='/product/edit/:id' element={<EditProductPage />} />
        <Route exact path='/product/:id' element={<ProductDetailse />} />
        <Route exact path='/' element={<Loginpage />}/>
        <Route exact path='/signup' element={<Singup />}/>
        <Route exact path='/dashboard' element={<Dashboard />}/>
        <Route exact path='/addproducts' element={<AddProductData />}/>


        {/* Food Products */}
        <Route exact path='/foodproducts' component={FoodProductData}/>
        <Route exact path='/foodproducts/:id' component={FoodProductDetailse} />
        <Route exact path='/foodproducts/edit/:id' component={EditFoodProducts} />


        <Route exact path='/addFoodproducts' component={AddFoodProductData}/>
        <Route exact path='/account-setting' component={AccountSettings}/>
        <Route exact path='/inventory/:id' component={Inventory}/>
        <Route exact path='/stripePayment/:id' component={StripePaymentData}/>

      </Routes>
  )
}

export default App
