"use client"
import React, { useState, useEffect,ReactNode} from 'react';
import { DataStore } from '../../lib/dataservice/dataStore';

import { useRouter, usePathname } from 'next/navigation'



export default function PathGuard({children}: {children: ReactNode}) {
    const dataStore = new DataStore();
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const [isPublic, setIsPublic] = useState(false);
    const pathname = usePathname();

    const authCheck = (url: string) => {
        // redirect to login page if accessing a private page and not logged in
        const publicPaths = ['/login'];
        const path = url.split('?')[0];

        if (!dataStore.get('isLoggedIn') && !publicPaths.includes(path)) {
            setAuthorized(false);
            setIsPublic(true);
            router.push('/login' + '?returnUrl='+ path);
       } else {
            setAuthorized(true);
     }


    };

    // validar si el usuario esta autenticado
    useEffect(() => {       
        authCheck(pathname);
      }, []);

    return (<>

    { (dataStore.get('isLoggedIn') || isPublic ) && children}</>);
}
