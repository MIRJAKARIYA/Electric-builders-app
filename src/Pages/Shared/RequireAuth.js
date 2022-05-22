import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import EmailVerification from '../EmailVerification/EmailVerification';
import Loading from './Loading';




const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>;
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
    if(user?.providerData?.[0].providerId === 'password' && !user.emailVerified){
        return <EmailVerification></EmailVerification>
    }
    
    return children;
};

export default RequireAuth;