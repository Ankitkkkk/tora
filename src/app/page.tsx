'use client'
// import Facade from "@/component/home/Facade";
// import { useRouter } from "next/navigation";
import Home  from "@/component/home/Home";
import ThemeProvider from "./ThemeProvider";

export default function HomeEntry() {
  // return <Home />;
  return (
  <ThemeProvider> 
    <Home />
  </ThemeProvider>)
}
