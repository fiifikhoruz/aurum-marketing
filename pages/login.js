import { useEffect } from 'react'
export default function LoginRedirect() {
  useEffect(() => { window.location.replace('https://app.aurumpms.com/login') }, [])
  return <div style={{background:'#0e0c0a',color:'#c9a96e',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>Redirecting…</div>
}
