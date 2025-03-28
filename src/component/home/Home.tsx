import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'

const connectionSchema = z.object({
    username: z.string().min(1).max(10),
    password: z.string().min(1).max(10)
})

function Home() {


  return (
    <div className='parent-home-box'>
      <div className='home-box'>
          <h2>Create Connection +</h2>
          <div className='home-form-field'>
            <div className='home-form-field-element'>
              <Label htmlFor="host">Host</Label>
              <Input name='host' type='text' placeholder='' defaultValue='localhost' />
            </div>
            <div className='home-form-field-element'>
              <Label htmlFor="port">Port</Label>
              <Input name='port' type='number' placeholder='' defaultValue='5432' />
            </div>
            <div className='home-form-field-element'>
              <Label htmlFor="user">Username</Label>
              <Input name='user' type='text' placeholder='username' />
            </div>
            <div className='home-form-field-element'>
              <Label htmlFor="password">Password</Label>
              <Input name='password' type='password' placeholder='password' />
            </div>
          </div>
          <PasswordInput/>
          <Button>Submit</Button>
      </div>
    </div>
  )
}

function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        className="w-full px-4 py-2 border rounded-lg pr-10" /* Space for icon */
      />
      <button
        type="button"
        onMouseDown={() => setShow(true)}
        onMouseUp={() => setShow(false)}
        onMouseLeave={() => setShow(false)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export default Home