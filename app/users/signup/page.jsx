'use client'
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import Link from "next/link"
import * as Yup from 'yup';
import axios from "axios";
import { useState } from "react";
import SignUpForm from "@/components/users/SignupForm";


const formDetails = [
  { name: "firstName", type: "text", placeholder: "Firstname" },
  { name: "lastName", type: "text", placeholder: "Lastname" },
  { name: "email", type: "email", placeholder: "Email Address" },
  { name: "password", type: "password", placeholder: "Password" },
  { name: "passwordConfirm", type: "password", placeholder: "Confirm Password" },
]

const SignUp = () => {
  return (
    <>

      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {/* <span className="">{error}</span> */}
              <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Account
              </h1>

              {/*=============== Signup Form ==================*/}

              <SignUpForm />

              {/*=============== Signup Form ==================*/}

              <div className="flex justify-between dark:text-white">
                <hr />OR<hr />
              </div>

              <button className='bg-[#b7778c] hover:bg-[#f76d9b] font-semibold w-full rounded p-3 dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A10035]' >
                Sign up with Google
              </button>

              <div className="dark:text-white text-sm text-center">
                <Link href="/users/login" >Already Have an Account? <span className="text-[#A10035]">Log In</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default SignUp