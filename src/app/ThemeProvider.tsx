'use client';

import { Theme } from '@/util/objects/Themes';
import { parse, Response } from '@/util/objects/Response'
import { invoke } from '@tauri-apps/api/core';
import { useEffect, useState } from 'react';

const lightTheme = {
  '--radius': '0.625rem',
  '--background': '#f8f8f2',
  '--foreground': '#282a36',
  '--card': '#f8f8f2',
  '--card-foreground': '#282a36',
  '--popover': '#f8f8f2',
  '--popover-foreground': '#282a36',
  '--primary': '#282a36',
  '--primary-foreground': '#f8f8f2',
  '--secondary': '#f7f7fb',
  '--secondary-foreground': '#282a36',
  '--muted': '#f7f7fb',
  '--muted-foreground': '#6272a4',
  '--accent': '#f7f7fb',
  '--accent-foreground': '#282a36',
  '--destructive': '#ff5555',
  '--border': '#dfe1ed',
  '--input': '#dfe1ed',
  '--ring': '#858bb0',
  '--chart-1': '#bd93f9',
  '--chart-2': '#8be9fd',
  '--chart-3': '#50fa7b',
  '--chart-4': '#ffb86c',
  '--chart-5': '#ff79c6',
  '--sidebar': '#f8f8f2',
  '--sidebar-foreground': '#282a36',
  '--sidebar-primary': '#282a36',
  '--sidebar-primary-foreground': '#f8f8f2',
  '--sidebar-accent': '#f7f7fb',
  '--sidebar-accent-foreground': '#282a36',
  '--sidebar-border': '#dfe1ed',
  '--sidebar-ring': '#858bb0',
};

const darkTheme = {
  '--background': '#002b36',
  '--foreground': '#93a1a1',
  '--card': '#073642',
  '--card-foreground': '#eee8d5',
  '--popover': '#073642',
  '--popover-foreground': '#eee8d5',
  '--primary': '#268bd2',
  '--primary-foreground': '#002b36',
  '--secondary': '#2aa198',
  '--secondary-foreground': '#002b36',
  '--muted': '#586e75',
  '--muted-foreground': '#93a1a1',
  '--accent': '#b58900',
  '--accent-foreground': '#002b36',
  '--destructive': '#dc322f',
  '--border': 'rgba(147, 161, 161, 0.2)',
  '--input': 'rgba(147, 161, 161, 0.15)',
  '--ring': '#859900',
  '--chart-1': '#268bd2',
  '--chart-2': '#2aa198',
  '--chart-3': '#859900',
  '--chart-4': '#b58900',
  '--chart-5': '#cb4b16',
  '--sidebar': '#073642',
  '--sidebar-foreground': '#eee8d5',
  '--sidebar-primary': '#268bd2',
  '--sidebar-primary-foreground': '#002b36',
  '--sidebar-accent': '#2aa198',
  '--sidebar-accent-foreground': '#002b36',
  '--sidebar-border': 'rgba(147, 161, 161, 0.2)',
  '--sidebar-ring': '#859900',
};

function applyTheme(theme: Record<string, string>) {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => applyTheme(darkTheme), [])
  return (
    <div style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      width: '100%',
      minHeight: '100vh',
    }}>
      {children}
    </div>
  );
}
