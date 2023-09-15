const Yup = require ("yup")

 const formSchema= Yup.object().shape({
    username:Yup.string().required("Please Enter UserName").max(50),
    email:Yup.string().required("Please Enter EmailId"),
    dob:Yup.string().required("Please Enter Date of Birth"),
    password:Yup.string().required("Please Enter Password").min(5).max(20)
})
export default formSchema