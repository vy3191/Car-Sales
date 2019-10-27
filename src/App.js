import React, {useReducer} from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import { connect } from 'react-redux';
import Total from './components/Total';
// import { initialState, reducer} from './reducers/cars';

const App = (props) => {  

  // const [state, dispatch] = useReducer(reducer, initialState);

  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log('working', item)
    props.dispatch({type:"REMOVE_ITEM", payload:item})
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log('working', item)
    props.dispatch({type:"ADD_ITEM", payload:item})
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} remove={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} add={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
   return {
     car: state.car,
     additionalprice: state.additionalPrice,
     additionalFeatures: state.additionalFeatures
   }
}
export default connect(mapStateToProps)(App);
