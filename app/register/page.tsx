'use client';

import Navbar from '@/components/Navbar';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
type registerType = {
  name: String,
  email: String,
  gender: String,
  password: String,
  cpassword: String
}

function Register() {
  const router = useRouter()

  const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<registerType>();

  const registerToUser = async (data: registerType) => {
    reset()
    const res = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  };

  const handleForm = async (userData: registerType) => {
    console.log(userData);
    mutation.mutate(userData);
  };

  const mutation = useMutation({
    mutationFn: registerToUser,
    onSuccess: (result) => {

      console.log(result);
      alert(result.msg);
      if(result.success) router.push('/login')
    },
    onError: (error) => {
      console.error(error);
    },
  });



  return (
    <>

      <Navbar />
      <div className="flex justify-center items-center mt-10">
        <form
          className="bg-gray-800 text-gray-200 p-4 rounded space-y-4"
          onSubmit={handleSubmit(handleForm)}
        >
          <div>
            <label htmlFor="username">Full Name</label>
            <br />
            <input
              type="text"
              id="username"
              className="bg-gray-200 p-1 rounded w-[350px] outline-none text-gray-800 focus:ring ring-blue-400 transition"
              {...register('name', { required: 'Full name is required' })}
            />
            <br />
            {errors.name && <small className="text-red-400">{errors.name.message}</small>}
          </div>

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
            <label htmlFor="gender">Gender</label>
            <br />
            <label htmlFor="genderMale">Male</label>
            <input
              type="radio"
              id="genderMale"
              value="male"
              {...register('gender', { required: 'Gender is required' })}
            />
            <label htmlFor="genderFemale">Female</label>
            <input
              type="radio"
              id="genderFemale"
              value="female"
              {...register('gender', { required: 'Gender is required' })}
            />
            <br />
            {errors.gender && <span className="text-red-400">{errors.gender.message}</span>}
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
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              id="cpassword"
              className="bg-gray-200 p-1 rounded w-[350px] outline-none text-gray-800 focus:ring ring-blue-400 transition"
              {...register('cpassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === getValues('password') || 'Passwords must match',
              })}
            />
            <br />
            {errors.cpassword && <span className="text-red-400">{errors.cpassword.message}</span>}
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
  );
}

export default Register;
