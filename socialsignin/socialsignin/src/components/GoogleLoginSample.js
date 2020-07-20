import React from 'react';

import {GoogleLogin} from 'react-google-login';


class GoogleLoginSample extends React.Component
{
            
 
    render()
    {
        const responseGoogle = (response)=>
        {
       console.log(response);
        }


        return(
        <div>
           
           <GoogleLogin

                clientId="676333635417-7v8v25ml4eukovri0c9mm4f9l7p6lhp1.apps.googleusercontent.com"

                buttonText="Login with Google"
                isSignedIn={true}
               
                ></GoogleLogin>
         
           
        </div>
        );

    }
}
export default GoogleLoginSample;
