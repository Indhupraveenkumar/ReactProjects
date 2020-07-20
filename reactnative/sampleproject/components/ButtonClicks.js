
import React , {Component}from 'react';
import {
  View,
  Button
} from 'react-native';

class ButtonClicks extends Component
{
render()
{
return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Button title="Search" onPress={this.props.getSearch}/>
</View>);
}
}

export default ButtonClicks;
