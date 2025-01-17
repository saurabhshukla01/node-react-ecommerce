import React , {useState} from "react";
const SignUp = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const collectData = () => {
        console.log(name,email,password);
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