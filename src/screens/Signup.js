import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../components/Assets/foodlogin.jpg"

export default function Signup() {
  let navigate = useNavigate();
    const [credentials, setcredentials] = useState({name:"", email:"", password:"", geolocation:""});


    const handleSubmit =async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation}))
        const response = await fetch("http://localhost:5000/api/createuser",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
        });
        const json = await response.json()
        console.log(json);
        if(json.success)
        {
          navigate("/login");
        }
       

        if(!json.success)
        {
            alert("Enter Valid Credentials");
        }
    }

    const onChange = (event) =>{
        setcredentials({...credentials, [event.target.name]:event.target.value})
    }



  return (
    <div className='container-fluid'>
      <section className="text-white" >
  <div className="container h-80">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-10 col-xl-11">
        <div className="card text-white" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0 text-black">
                      <input type="text" id="form3Example1c" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0 text-black">
                      <input type="email" id="form3Example3c" className="form-control" name="email" value={credentials.email} onChange={onChange} />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0 text-black">
                      <input type="password" id="form3Example4c" className="form-control" name="password" value={credentials.password} onChange={onChange}/>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0 text-black">
                      <input type="text" id="form3Example4cd" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange} />
                      <label className="form-label" for="form3Example4cd">Your Address</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5 text-black">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn">Register</button>
                    <Link to="/login" className='m-3 btn btn-lg btn-danger '>Already a User?</Link>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={image}
                  className="img-fluid" style={{borderRadius: "30%", maxHeight:"90vh", minWidth:"40vh", marginLeft:"30%"}} alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

    </div>
  );
}


