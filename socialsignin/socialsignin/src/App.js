import React from 'react';
// import FacebookLoginSample from './components/FacebookLoginSample';
// import GoogleLoginSample from './components/GoogleLoginSample';
import {GoogleLogin} from 'react-google-login';
import {FacebookLogin} from 'react-facebook-login';
function App() {

 

  const responseFacebook = (response)=>
  {
 console.log(response);
  }

  const responseGoogle = (response)=>
  {
 console.log(response);
  }

return ( 
  
 

    <div>
      {/* <FacebookLogin 
              appId="289217372227174"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" /> */}
       <GoogleLogin

            clientId="676333635417-7v8v25ml4eukovri0c9mm4f9l7p6lhp1.apps.googleusercontent.com"

            buttonText="Login with Google"
            onSuccess={responseGoogle}
            isSignedIn={true}></GoogleLogin>
             
    </div>

  );
}



export default App;
