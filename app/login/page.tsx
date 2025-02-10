
"use client"
import Navbar from '@/components/Navbar'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

type LoginType = {
    email: String,
    password: String
}

function Login() {

    const { register, formState: { errors }, handleSubmit, reset } = useForm<LoginType>()
    const router = useRouter()
    const loginToUser = async (data: LoginType) => {
        reset()
        const res = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        return result;
    }

    const handleLogin = (userData: LoginType) => {
        mutation.mutate(userData)

    }

    const mutation = useMutation({
        mutationFn: loginToUser,
        onSuccess: (result) => {

            console.log(result);
            if (result.token) {
                localStorage.setItem('token', result.token)
                router.push('/')
                alert(result.msg);
            }
        },
            onError: (error) => {
                console.error(error);
            },

    })
    return (
        <>

            <Navbar />
            <div className="flex justify-center items-center mt-10">
                <form
                    className="bg-gray-800 text-gray-200 p-4 rounded space-y-4"
                    onSubmit={handleSubmit(handleLogin)}
                >


                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-200 p-1 rounded w-[350px] outline-none text-gray-800 focus:ring ring-blue-400 transition"
                            {...register('email', { required: 'Email is required' })}
                        />
                        <br />
                        {errors.email && <span className="text-red-400">{errors.email.message}</span>}
                    </div>



                    <div>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-200 p-1 rounded w-[350px] outline-none text-gray-800 focus:ring ring-blue-400 transition"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password should be at least 6 characters.' },
                            })}
                        />
                        <br />
                        {errors.password && <span className="text-red-400">{errors.password.message}</span>}
                    </div>



                    <div>
                        <input
                            type="submit"
                            value="Register"
                            className="bg-gray-400 px-3 py-1 rounded text-gray-900 font-semibold cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login