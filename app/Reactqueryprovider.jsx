"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function Reactqueryprovider({ children }) {
  const [clinet] =  React.useState(() => new QueryClient())
  console.log(clinet)
  return (
    <QueryClientProvider client={clinet}>
      {children}
    </QueryClientProvider>
  )
}

export default Reactqueryprovider