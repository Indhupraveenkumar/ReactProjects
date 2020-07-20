import React from 'react';

import {FacebookLogin} from 'react-facebook-login';


class FacebookLoginSample extends React.Component
{
            
 
    render()
    {

        const responseFacebook = (response)=>
        {
       console.log(response);
        }

     return(
          
          <div>
           
            <FacebookLogin 
              appId="289217372227174"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              icon="fa-facebook" />
             
           
        </div>
        );

    }
}
export default FacebookLoginSample;
