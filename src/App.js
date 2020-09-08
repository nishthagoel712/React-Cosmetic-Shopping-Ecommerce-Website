import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';
import Checkout from './Components/Checkout';
import OrderPlaced from './Components/OrderPlaced';
import HomeBanner from './Components/HomeBanner';
class App extends React.Component{
  render()
  {
    return(
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" render={(props) => (
							<React.Fragment>
								<HomeBanner />
								<ProductList />
							</React.Fragment>
						)}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path='/checkout' component={Checkout} />
					<Route path='/orderplaced' component={OrderPlaced} />
          <Route  component={Default}></Route>
        </Switch>
          <Modal/>
        </React.Fragment>
    )
  }
}
export default App;
