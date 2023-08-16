
import React from 'react';
import Link from 'next/link';
import SignState from './components/SignState';



const Main = () => {

  return <div>
    <h1>main page</h1>
    <SignState />
    <p><Link href={'/signin'}>signin</Link></p>
    <Link href={'/sample'}>sample</Link>
  </div>
}
export default Main

