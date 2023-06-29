'use client'
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"

import Link from "next/link"
import LoginForm from "@/components/users/LoginForm";





const SignIn = () => {
  return (
    <>
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome Back
              </h1>

              {/*================ LogIn Form =================*/}
              <LoginForm />
              {/*================ LogIn Form =================*/}



              <div className="dark:text-white text-sm text-center hover:underline">
                <Link href="/users/signup" >Forgotten Password?</Link>
              </div>

              <div className="dark:text-white text-sm text-center">
                <Link href="/users/signup" >Do not Have an Account? <span className="text-[#A10035]">SignUp </span></Link>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default SignIn