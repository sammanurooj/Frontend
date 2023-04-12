import { useEffect ,useState } from "react";
// import { children } from "react-router-dom";
import {Link} from "react-router-dom"
function Auth(props) {

    const [isLogin , setISLogin] = useState(false);
    let UserString= localStorage.getItem('this is token')
    // let Email = JSON.parse(EmailString)
    // let PasswordString= localStorage.getItem('password')
    // let Password = JSON.parse(PasswordString)
    useEffect(()=>{
  
        if(UserString !== null){

         
            setISLogin(true);
        }
       
    },[])
    // console.log(EmailString , PasswordString, "my data")

    return(
        <>
        {" "}
        {isLogin? (props.children):(<h4>USer not created plz login<Link to={"/signin"}>Login</Link></h4>)}
        </>

    );
    
}
export default Auth;