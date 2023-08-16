'use client'
import { useAppContext } from '@/config/AppContext';

const SignState = () => {
  const { state } = useAppContext()
  return <p>{state?.user ? state.user.email : 'not login'}</p>
}

export default SignState