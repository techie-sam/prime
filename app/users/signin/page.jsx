'use client'
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import * as Yup from 'yup';
import Link from "next/link"


const formDetails = [
  { name: "email", type: "email", placeholder: "Email Address" },
  { name: "password", type: "password", placeholder: "Password" },
]



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

              {/*================ SignIn Form =================*/}
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email('Invalid email address')
                    .required('Valid email address is required'),
                  password: Yup.string()
                    .min(9, 'Minimum Password of 8 characters is required ')
                    .required("This field is Required")
                })}

                onSubmit={(values, { setSubmitting }) => {
                  fetch()
                }}
              >
                <Form className="space-y-4 md:space-y-6" action="#">
                  {
                    formDetails.map(({ name, type, placeholder }) =>
                      <div key={name} className="relative mb-6" data-te-input-wrapper-init>
                        <label htmlFor={name} className="sr-only">Email address</label>
                        <Field
                          type={type}
                          name={name}

                          className="block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear dark:text-white ring-gray-400 ring-1 focus:ring-2 focus:ring-[#A10035] focus:border-transparent "
                          id={name}
                          placeholder={placeholder} />
                        <small className="text-red-500">
                          <ErrorMessage name={name} />
                        </small>
                      </div>
                    )
                  }

                  <button type="submit" className='bg-[#A10035] hover:bg-[#fb1361] font-semibold w-full rounded p-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A10035]'>
                    SIGN IN
                  </button>

                  <div className="dark:text-white text-sm text-center hover:underline">
                    <Link href="/users/signup" >Forgotten Password?</Link>
                  </div>

                  <div className="dark:text-white text-sm text-center">
                    <Link href="/users/signup" >Do not Have an Account? <span className="text-[#A10035]">SignUp </span></Link>
                  </div>

                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default SignIn