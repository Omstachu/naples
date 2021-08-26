import React, { useState, useEffect } from 'react';
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
         return <li key={idx}>{page.name}</li>
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
