import { Button } from '@/components/ui/button'
import { Theme } from '@/util/objects/Themes'
import { parse , Response} from '@/util/objects/Response'
import React from 'react'
import { invoke } from '@tauri-apps/api/core'


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

function Home() {
  const changeTheme = async () => {
    const response = parse<Response<Theme[]>>(await invoke('chain', {
        request: {
          method: 'GET',
          path: '/themes',
          content: 'hello world'
        }
      }))
    applyTheme(response.content[0])
  }

  return (
    <div className='flex justify-center h-screen items-center border-2 border-solid border-[red]'>
      <div className='border-2 border-solid border-[green]'>
        Create Connection
      </div>

    </div>
    
  )
}

export default Home