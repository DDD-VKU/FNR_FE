import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import { Input } from "@mui/material";
import Button from '@mui/material/Button';
import Image from "next/image";
import HttpsIcon from '@mui/icons-material/Https';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, {useState} from "react";



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validEmail(email)){
            setEmailError('Email không hợp lệ');
            valid = false;
        } else {
            setEmailError('');
        }

        if(password.length < 6){
            setPasswordError('Pass không được ít hơn 6 kí tự')
            valid = false;
        } else {
            setPasswordError('')
        }
        if (valid) {
            console.log('Form hợp lệ');
        }
    }

    return (
        <>
            <Header />
            <section>
                <div className="p-8">
                    <div className="min-h-screen flex items-center justify-center ">
                        <div className="bg-white rounded-lg flex space-x-10">
                            {/* Left Section with Image */}
                            <div className="hidden md:flex items-center justify-center w-full">
                                <div className="">
                                    {/* Replace with your image */}
                                    <Image
                                        src={'/assets/images/sideimage.png'}
                                        width={805}
                                        height={781}
                                        unoptimized
                                        alt=""
                                        className="w-full h-full rounded-lg object-contain"/>
                                </div>
                            </div>
                            
                            {/* Right Section with Form */}
                            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                                <h2 className="text-2xl font-semibold mb-6">Login to Exclusive </h2>
                                <p className="text-gray-600 mb-4">Enter your details below</p>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="relative">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Phone or Email</label>
                                        <Input
                                            type="text"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            error={!!emailError}
                                            className="w-full mt-2 p-2 border border-white rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                                            <AccountCircleOutlinedIcon fontSize="large"/>
                                        </div>
                                        {emailError&&<p className="text-red-500 text-sm mt-1">{emailError}</p> }
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                        <Input
                                            type="password"
                                            value={password}
                                            error={!!passwordError}
                                            onChange={(e) => setPassword(e.target.value)}
                                            id="password"
                                            className="w-full mt-2 p-2 border border-white rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                                            <LockOutlinedIcon fontSize="large"/>
                                        </div>
                                        {passwordError&&<p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition"
                                        variant="contained" color="error"
                                        >
                                        Login
                                    </Button>
                                </form>
                                <div className="mt-4 text-center">
                                    <p><a href="#" className="text-sm text-red-500 hover:underline">Forget a Password</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default LoginPage;

function setEmailError(arg0: string) {
    throw new Error("Function not implemented.");
}
