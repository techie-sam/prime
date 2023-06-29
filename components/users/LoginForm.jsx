'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as Yup from 'yup';

const formDetails = [
    { name: "email", type: "email", placeholder: "Email Address" },
    { name: "password", type: "password", placeholder: "Password" },
]


const LoginForm = () => {
    const [error, setError] = useState(null)
    const router = useRouter()
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Valid email address is required'),
        password: Yup.string()
            .min(9, 'Minimum Password of 8 characters is required ')
            .required("Password field is Required")
    })

    const onSubmit = async (values, { setSubmitting }) => {
        const res = await
            (await fetch('http://localhost:5000/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(values)
            }))
                .json()
        if (res.status === 'success') {
            // alert("Logged In")
            setSubmitting(false)
            router.push('/users/')
            console.log(res)
        } else {
            setSubmitting(false)
            setError(res.message)
        }

    }
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <>
                        {
                            error &&
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
                                <span class="">{error}</span>
                            </div>
                        }
                        <Form className="space-y-4 md:space-y-6">
                            {
                                formDetails.map(({ name, type, placeholder }) =>
                                    <div key={name} className="relative mb-6" data-te-input-wrapper-init>
                                        <label htmlFor={name} className="sr-only">Email address</label>
                                        <Field
                                            type={type}
                                            name={name}

                                            className="block min-h-[auto] w-full rounded-lg bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear dark:text-white ring-gray-400 ring-1 focus:ring-2 focus:ring-[#A10035] focus:border-transparent "
                                            id={name}
                                            placeholder={placeholder} />
                                        <small className="text-red-500">
                                            <ErrorMessage name={name} />
                                        </small>
                                    </div>
                                )
                            }
                            <button type="submit" className='bg-[#A10035] hover:bg-[#fb1361] font-semibold w-full rounded p-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A10035]'>
                                {isSubmitting ?
                                    <div role="status">
                                        <svg aria-hidden="true" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div> :
                                    "LOGIN"}
                            </button>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm