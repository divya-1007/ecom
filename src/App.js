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
import { FoodProductsPage } from './screens/foods/FoodProductsPage';
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
        <Route exact path='/foodproducts' element={<FoodProductsPage />}/>
        <Route exact path='/foodproducts/:id' element={<FoodProductDetailse />} />
        <Route exact path='/foodproducts/edit/:id' element={<EditFoodProducts />} />


        <Route exact path='/addFoodproducts' element={<AddFoodProductData />}/>
        <Route exact path='/account-setting' element={<AccountSettings />}/>
        <Route exact path='/inventory/:id' element={<Inventory />}/>
        <Route exact path='/stripePayment/:id' element={<StripePaymentData />}/>

      </Routes>
  )
}

export default App
