import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'

function Contact(){
    return (
        <div>
            <p>Location: Chicago</p>
           <p>Email: adamcpenman@gmail.com </p>
           <p>Phone Number: 614.813.9729 </p>
        </div>
    )
}
export default Contact; 