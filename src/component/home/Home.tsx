import { Button } from '@/components/ui/button'
import { Theme } from '@/util/objects/Themes'
import { parse , Response} from '@/util/objects/Response'
import React, { useRef, useState } from 'react'
import { invoke } from '@tauri-apps/api/core'
import AdjustableSidebar from './AdjustableSidebar'


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
    <div className="grid grid-cols-48 min-h-screen">
      <div className="col-span-47 border shadow"><AdjustableSidebar/></div>
      <div className="col-span-1 border shadow">Item 3</div>
    </div>
  )
}

export default Home