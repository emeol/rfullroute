import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props)=>{

    const isRedirect = ()=> <Redirect to="/"/>    

    return (
        <div>
            <Link to={{
                pathname:`${props.match.url}/post`
            }}></Link>

            {isRedirect()}

        </div>
    )
}

export default Profile;