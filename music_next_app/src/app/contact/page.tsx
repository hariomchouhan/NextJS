import { Meteors } from '@/components/ui/meteors'
import React from 'react'

const page = () => {
  return (
    <main className="bg-blue-700 flex justify-center items-center mx-auto h-full w-full">
       {/* Meaty part - Meteor effect */}
       <Meteors number={20} />
    </main>
  )
}

export default page