"use client"
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function Page() {
  const router = useRouter();
  const token = localStorage.getItem('token')
  const [errorMessage, setErrorMessage] = useState('')

  console.log('Token:', token);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  const isAuthenticated = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/home', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (!res.ok) {
        throw new Error('Invalid token');
      }

      const result = await res.json();
      return result; 
    } catch (error) {
      console.log('Authentication failed:', error);
      setErrorMessage(error.message); 
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: isAuthenticated,
    enabled: !!token, 
  });

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>; 
  }

  if (!data) {
    return <div>No data found or authentication failed</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Welcome, {data.name}</h1>
     
      {errorMessage && <p style={{ color: 'red' }}>Error: {errorMessage}</p>} {/* Display error message */}
    </div>
  );
}

export default Page;
