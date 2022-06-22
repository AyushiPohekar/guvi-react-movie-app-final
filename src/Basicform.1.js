


// import { useFormik } from "formik";
// import * as yup from 'yup';

// const formValidationSchema=yup.object({
//   email:yup
//   .string()
//   .email()
//   .min(5,"Need a bigger email")
//   .required("Why not fill this email?"),
//     password:yup
//     .string()
//     .min(8,"Need a bigger password")
//     .max(12,"Too much password")
//     .required("Why not fill this password?"),
// });

// export function Basicform() {
//   const formik=useFormik({
//     initialValues:{email:'Anusha',password:'abc'},
//     validationSchema:formValidationSchema,
//     onSubmit:(values)=>{
    
//       console.log("onSubmit",values);
//     },
//   });
//   return (
   
//   <form onSubmit={formik.handleSubmit}>
//   {/* only if user touched the form and moves away,then show error message */}

//     <input  type="email" placeholder="Enter email" value={formik.values.email} name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
//     {formik.touched.email && formik.errors.email ? formik.errors.email: ""}
//     <input  type="password" placeholder="Enter password" value={formik.values.password} name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
//     {formik.touched.password && formik.errors.password ? formik.errors.password: ""}
//     <button type="submit">Submit</button>
//     {/* <p>{JSON.stringify(formik.values)}</p>
//     <p>{JSON.stringify(formik.touched)}</p> */}
//   </form>
//   );
// }


import { useFormik } from "formik";
import * as yup from 'yup';

const formValidationSchema=yup.object({
  email:yup
  .string()
  .email()
  .min(5,"Need a bigger email")
  .required("Why not fill this email?"),
    password:yup
    .string()
    .min(8,"Need a bigger password")
    .max(12,"Too much password")
    .required("Why not fill this password?"),
});

export function Basicform() {
  const {handleSubmit,values,handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{email:'Anusha',password:'abc'},
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
    
      console.log("onSubmit",values);
    },
  });
  return (
   
  <form onSubmit={handleSubmit}>
  {/* only if user touched the form and moves away,then show error message */}

    <input  type="email" placeholder="Enter email" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur}/>
    {touched.email && errors.email ?errors.email: ""}
    <input  type="password" placeholder="Enter password" value={values.password} name="password" onChange={handleChange} onBlur={handleBlur}/>
    {touched.password && errors.password ? errors.password: ""}
    <button type="submit">Submit</button>
    {/* <p>{JSON.stringify(formik.values)}</p>
    <p>{JSON.stringify(formik.touched)}</p> */}
  </form>
  );
}