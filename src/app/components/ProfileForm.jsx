"use client"

import React, {useState} from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email({
    message: "Email must be valid",
  }),
  password: z.string().min(5, {
    message: "Password must be valid and not less than five characters",
  }),
})

export default function ProfileForm() {

  const { toast } = useToast();
  const router = useRouter();
  const [error, setError] = useState('');
  const [isPassword, setisPassword] = useState(true);
  

  const togglePasswordView = () => {
    setisPassword(!isPassword);
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Handle form submission
  const onSubmit = async (values) => {
    console.log(values); // Logs validated form values

    try {
        const result = await signIn('credentials', {
            redirect: false, // Prevent automatic redirection to handle errors
            email: values.email,
            password: values.password,
        });

        if (result?.error) {
            setError(result.error);
            toast({
                title: "Login Failed",
                description: result.error,
                status: "error", // Assuming your toast component can handle different statuses
                action: <ToastAction altText="Try again">Try Again</ToastAction>,
            });
        } else {
            toast({
                title: "User Logged in successfully",
                description: `Welcome, ${values.email}!`,
                action: <ToastAction altText="Close">Exit</ToastAction>,
            });
            router.push('/dashboard'); // Redirect to the dashboard or a protected page
            form.reset();
        }
    } catch (error) {
        toast({
            title: "An error occurred",
            description: "Something went wrong. Please try again.",
            status: "error",
            action: <ToastAction altText="Try again">Retry</ToastAction>,
        });
    }
};

  const { isSubmitting, isValid } = form.formState

  return (
    <div className='min-w-[300px] max-w-full border min-h-[70%] container flex justify-center items-center sm:justify-start sm:min-h-screen'>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
            className="min-w-[300px] min-h-[300px] w-full space-y-4 p-[10%] max-w-[704px] max-h-[900px] border-[rgba(84, 95, 125, 0.15)] sm:p-[10%] md:p-[20%] lg:p-[100px]">
        {/* Email Field */}
        <p className='text-red-500'>{error}</p>

        <h1 className='font-extrabold text-[40px] leading-[54.64px]'>Welcome!</h1>
        <p className='text-[20px] leading-[27.32px]'>Enter details to login</p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input
                  className=" min-h-[50px] sm:min-w-[447px] md:max-w-[70%] lg:max-w-full "
                  placeholder="Email"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {/* Please enter a valid email */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <div className='relative'>
                <Input
                  className=" min-h-[50px] sm:min-w-[447px] md:max-w-[70%] lg:max-w-full "
                  placeholder="Password"
                  type={isPassword? "password" : "text"}
                  disabled={isSubmitting}
                  {...field}
                />
                <span 
                onClick={togglePasswordView}
                className='absolute top-[25%] left-[70%] cursor-pointer text-[rgb(57,205,204)] font-bold sm:left-[80%]'>
                  {isPassword? 'SHOW' : 'HIDE'}
                </span>
                </div>
              </FormControl>
              <FormDescription>
                {/* Password should be at least 5 characters. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <span className='text-[rgb(57,205,204)] block'>
        <Link href="/forgot-password">
          Forgot Password?
        </Link>
        </span>
        
        <Button
          disabled={!isValid || isSubmitting}
          className="bg-[rgb(57,205,204)] w-full min-h-[48px] sm:min-w-[447px] md:max-w-[70%] lg:max-w-full "
          type="submit"
      >
          {isSubmitting ? "Logging in..." : "LOG IN"}
      </Button>
      </form>
    </Form>
    </div>
  )
}


// "use client"
// import React, { useState } from 'react'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// const formSchema = z.object({
//   email: z.string().email({
//     message: "Email must be valid",
//   }),
//   password: z.string().min(5, {
//     message: "Password must be valid and not less than five characters",
//   }),
// })

// export default function ProfileForm() {

//   const [credentials, setCredentials] = useState({email: '', password: ''})

//   const handleInput = (e) => {
//     const { name, value } = e.target

//     setCredentials((prev) => ({
//       ...prev, [name]: value
//     }))
//   }
//   const router = useRouter();
//      // 1. Define your form.
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: '', password: '',
//     },
//   })
 
//   // 2. Define a submit handler.
//   function onSubmit(values) {
//     // const result = await signIn('credentials', {
//     //   redirect: false, // Prevent automatic redirection to avoid handling errors
//     //   email: values.email,
//     //   password: values.password,
//     // });

//     // if (result?.error) {
//     //   setError(result.error); // Set error if there's an issue with sign-in
//     // } else {
//     //   router.push('/dashboard'); // Redirect to dashboard or any protected page
//     // }
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }
//   // ...

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder="Email" {...field}
//                 name='email'
//                 type='email'
//                 onChange={handleInput}
//                 value={credentials.email}/>
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder="Password" {...field}
//                 name='password'
//                 type='password'
//                 onChange={handleInput}
//                 value={credentials.password}
//                  />
//               </FormControl>
//               <FormDescription>
//                 This is your public display password.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }