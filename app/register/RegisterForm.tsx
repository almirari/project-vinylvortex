"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            name: "",
            email: "",
            password: "",
        },
    });
 
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        console.log(data)
    };

    return ( <>
    <Heading title="Sign Up for VinylVortex"/>
    <Button
    outline
    label="Sign Up with Google"
    icon={FcGoogle}
    onClick={() => {}}
    />
    <hr className="bg-slate-300 w-full h-px"/>
    <Input id="name" 
    label="Name"
    disabled={isLoading}
    register={register}
    errors={errors} 
    required/>

    <Input id="email" 
    label="Email"
    disabled={isLoading}
    register={register}
    errors={errors} 
    required/>

    <Input id="password" 
    label="Password"
    disabled={isLoading}
    register={register}
    errors={errors} 
    required
    type="password"/>

    <Button label={isLoading ? "Loading" : "Sign Up"} onClick={handleSubmit(onSubmit)}/>
    <p className="text-sm">
        Already have an account? <Link className="underline" href='/login'>Log in here.</Link>
    </p>
    </> );
};
 
export default RegisterForm;