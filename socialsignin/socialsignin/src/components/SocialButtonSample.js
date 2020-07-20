import React from 'react';
import {SocialLogin} from 'react-social-login';

class SocialButtonSample extends React.Component
{

    render()
    {
        return(
            <div>
                <button onClick={this.props.triggerLogin}{...props}>Login in through facebook</button>
            </div>
        );

    }

}
export default SocialLogin(SocialButtonSample);