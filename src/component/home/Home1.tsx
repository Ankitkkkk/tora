'use client'
import React, { useEffect, useState } from 'react'
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

import { invoke } from '@tauri-apps/api/core'
import { Theme } from '../../util/objects/Themes' 
import { Response, parse } from '../../util/objects/Response'

const connectionSchema = z.object({
    username: z.string().min(1).max(10),
    password: z.string().min(1).max(10)
})

const applyTheme = (theme: Theme) => {
  if (!theme) return
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    for (const key of Object.keys(theme) as (keyof Theme)[]) {
      const cssVarName = `--${key.replace(/_/g, '-')}`;
      const value = String(theme[key]);
      root.style.setProperty(cssVarName, value);
      console.log(cssVarName, value);
    }
  }
};

function Home1() {
  const [res, setRes] = useState(0);
  
  const click = async () => {
    const response = parse<Response<Theme[]>>(await invoke('chain', {
      request: {
        method: 'GET',
        path: '/themes',
        content: 'hello world'
      }
    }))

    let pres = { content: "some" }
    // if (response) console.log(response)
    // if (response) console.log(response.content)
    console.log(response.content[0])
    console.log(Object.keys(response.content[0]))
    console.log(pres)
    console.log(JSON.stringify(pres))
    // console.log(Object.keys(response))
    // Object.keys(response).forEach(console.log)

  }
  const [theme, setTheme] = useState();

  const updateTheme = async () => {
    const response = parse<Response<Theme[]>>(await invoke('chain', {
      request: {
        method: 'GET',
        path: '/themes',
        content: ''
      }
    }))
    setTheme(response.content[0])
    const re1 = res + 1;
    setRes(re1)
  };
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className='parent-home-box'>
      <div className='home-box'>
      <div>{res}</div>
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
          <Button onClick={() => click()} variant={'default'}>Submit</Button>
      </div>


      <Button onClick={() => updateTheme()} variant={'default'}>Chage Theme</Button>

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
        className="absolute inset-y-0 right-3 flex items-center"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export default Home1

