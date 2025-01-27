import React , {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    });
    const collectData = async () => {
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await(result.json());
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
    } 
    return (
        <div className="register">
            <h1 className="levelBox">Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter Email" />
            <input className="inputBox" type="text" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter Password" />
            <button className="appButton" onClick={collectData} type="button">SignUp</button>
        </div>
    )
}
export default SignUp;