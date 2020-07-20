

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import ButtonClicks from './components/ButtonClicks'

class App extends React.Component
{
//navigator.geolocation.getCurrentPosition( position => {console.log.(position);},err => console.log.(err););
getSearchButton = (e) => {
console.log('the search button is clicked');
}
render()
{
return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Hello world </Text>
<ButtonClicks getSearch={this.getSearchButton}/>

</View>);
}
}

export default App;
