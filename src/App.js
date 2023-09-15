import React from "react"
import {useFormik} from "formik"
import './App.css';
import formSchema from "./validateForm";

function App() {
  const formik=useFormik({
    initialValues:{
      username:"",
      email:"",
      dob:"",
      password:""
    },
    onSubmit:function(){
      console.log("data")
    },
    validationSchema:formSchema,
    validate:function(data){
      console.log(data);
      let errors = {};

      if (!data.username) {
        errors.username = "Please Enter UserName🤗";
      }
      if (!data.email) {
        errors.email = "Please Enter Email Id🤗";
      }
      if (!data.dob) {
        errors.dob = "Please Enter Date of Birth🤗";
      }
      if (!data.password) {
        errors.password = "Please Enter Password🤗 ";
      }
      return errors;
    }


  })

  return (
    <div className="App">
      <h1>User Details</h1>
      <div className="container">
      <form className="form"method="POST" onSubmit={formik.handleSubmit}>
        <label>Name:  </label>
        <input type="text"
        value={formik.values.username}
        name="username"
        onChange={formik.handleChange}
        placeholder="Enter Name"/><br></br><br/>
        {formik.errors.username ? <h3>{formik.errors.username}</h3> : null}

        <label>Emai Id: </label>
        <input type="email"
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        placeholder="Enter Email"/><br/><br/>
        {formik.errors.email ? <h3>{formik.errors.email}</h3> : null}

        <label>DOB:  </label>
        <input type="date"
        value={formik.values.dob}
        name="dob"
        onChange={formik.handleChange}
        placeholder="Enter DOB"/><br/><br/>
        {formik.errors.dob  ? <h3>{formik.errors.dob}</h3> : null}

        <label>Password:  </label>
        <input type="password"
        value={formik.values.password}
        name="password"
        onChange={formik.handleChange}
        placeholder="Enter Password"/><br/><br/>
        {formik.errors.dob  ? <h3>{formik.errors.password}</h3> : null}<br/><br/>
        <button type="submit"className="btn">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
