import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { FacebookAuth, twitterAuth } from "../firebase"
const Header=()=>{

    const {user,googleSignIn,logOut} = UserAuth();
    const [loading, setLoading] = useState(true);

    // console.log(user)
    const handleSignIn = async()=>{
     try{
        await googleSignIn()
     }   catch(error)
     {
        console.log(error);
     }
     
    }

    const handleSignOut = async()=>{
        try{
           await logOut()
        }   catch(error)
        {
           console.log(error);
        }
        
       }
   //avaoid error referesh
   useEffect(()=>{
    const checkAuthentication = async ()=>{
    await new Promise((resolve) => setTimeout(resolve, 50));
    setLoading(false);
    };
    checkAuthentication();
   },[user]);


   //for facebook
   async function facebookAuthButtonClicked()
   {
    const user = await FacebookAuth();
    console.log("facebook user:", user);

   }

   async function twitterAuthButtonClicked()
   {
    const user = await twitterAuth();
    console.log("Twitter user:", user);

   }



    return(
        <header className="h-20 bg-gray-300 flex px-10 drop-shadow-[0px_2px_10px_rgba(2,0,0)]">
            <nav className="w-full flex justify-between items-center">
               <div>Logo</div>
                <ul className="flex">
                  
                       <li className="p-2 cursor-pointer">
                        <Link href="/home">Home</Link>
                       </li>
                       <li className="p-2 cursor-pointer">
                        <Link href="/about">About</Link>
                       </li>
                       <li className="p-2 cursor-pointer">
                        <Link href="/profile">Profile</Link>
                       </li>
                </ul>

                {loading ? null : !user ? (<ul className="felx">
                    <li onClick={handleSignIn} className="p-2 cursor pointer">
                        <Link href="/">LogIn</Link>
                    </li>

                    <li onClick={handleSignIn} className="p-2 cursor pointer">
                        <Link href="/">Sign Up</Link>
                    </li>
                </ul>):(
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <Link href="/"><p className="Cursor-pointer" onClick={handleSignOut}>SignOut</p></Link>
                    </div>
                )}

                <ul>
                <li onClick={facebookAuthButtonClicked} className="p-2 cursor pointer">
                        <Link href="/">Facebook LogIn</Link>
                    </li>

                <li onClick={twitterAuthButtonClicked} className="p-2 cursor pointer">
                        <Link href="/">Twitter LogIn</Link>
                    </li>
                </ul>

                
            </nav>
        </header>
    )
    
}
export default Header;