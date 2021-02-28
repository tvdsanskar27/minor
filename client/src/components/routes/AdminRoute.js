import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom'
import {useSelector} from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
// import {currentAdmin} from '../../functions/auth';


const AdminRoute = ({children, ...rest}) => {
  const {user} = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      console.log("###########################FROM FRONTEND######################",user);
      try{
        if (user.role === 'admin'){
          setOk(true);
        }else{setOk(false);}
      }catch(err){
        setOk(false);
        console.log('ADMIN ROUTE ERR', err);
      }
      // currentAdmin(user.token)
      // .then((res) => {
      //   console.log("CURRENT ADMIN RES", res);
      //   setOk(true);
      // })
      // .catch((err) => {
      //   console.log('ADMIN ROUTE ERR', err);
      //   setOk(false);
      // })
    }
  }, [user])


  return (ok ?  (
    <Route {...rest} render={() => children} />
  ):(
    <LoadingToRedirect />
   )
 );
};

export default AdminRoute;
