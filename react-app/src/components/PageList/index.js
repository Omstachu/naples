import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function Page(){
    const [pages, setPages] = useState({});
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/pages`)
            const page = await res.json()
            setPages(page)
        })()
    }, [])

    if(!pages) {
        return null;
    }


    const pageNames = (
      pages.pages?.map((page,idx) =>{
         return <li key={idx}>
             <NavLink to={`/pages/${page.id}`} >{page.name}</NavLink>
         </li>
      })
    )

    return (
        <ul>
        <li>
        </li>
        <h2>Your Pages</h2>
        <ul>
          {pageNames}
        </ul>
        </ul>
    )
}

export default Page
