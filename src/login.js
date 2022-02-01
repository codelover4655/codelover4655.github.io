import React from 'react';
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import './login.css';
import { Link ,Outlet} from "react-router-dom";
class LOGIN extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        username:'',
        password:'',
     
        }
    }


    f1(e){
        this.setState({username: e.target.value});
    }
    f2(e){
        this.setState({password: e.target.value})
    }
   
    async handle(){
        const data={username: this.state.username,password: this.state.password};
       const response = await fetch("http://127.0.0.1:8000/check/login/",{
           method: "POST",
           headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: 'cors',
            body: JSON.stringify(data)
       });
       // response is a promise here 
       if(!response.ok)
       {
           alert("this user may not exits ");
           alert("you can google the respone code :"+response.status);
       }
       else
       {
          const yoyo=response.json();
          // yet not response is extrected properly
          yoyo.then((data) => {
              console.log(data);
              localStorage.setItem('token',data.Token);
              localStorage.setItem('userid',data.id);
              window.location = "/Mappage";
            });
      
       }
      
      
        }
   
    render(){
        return(
            <>
       
                <div className="login">
                <h3>LOGIN</h3>
                    <form>
                    <div className="us1">
                        <input type="text" onChange={(e) => this.f1(e)}  placeholder="username"/></div>
                       <div className="us2"> <input type="password" onChange={(e) => this.f2(e)}placeholder="password" /></div>
                       <div className="us3"> <button type="button" onClick={() => this.handle()} >SUBMIT </button></div>
                    </form>
                    <div className="butoontutor">
                    <Link
            style={{ display: "block-inline", margin: "auto",border: "1px solid blue",color: "black",background: "grey"}}
            to="/Tutorportal"

          >
          SHIFT TO TUTOR PORTAL
          </Link>
                    </div>
                </div>
                </>
            
        )
    }
}


export default LOGIN
 
