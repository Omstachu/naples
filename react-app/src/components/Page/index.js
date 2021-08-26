import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Page(){
    const [page, setPage] = useState({});
    const { pageId }  = useParams();

    useEffect(() => {
        if (!pageId){
            return;
        }
        (async () => {
            const res = await fetch(`/api/pages/${pageId}`)
            const page = await res.json()
            setPage(page)
        })()
    }, [pageId])

    const listNames = (
      page.lists?.map((list,idx) =>{
         return <li key={idx}>
           <NavLink to={`/lists/${list.id}`}>{list.name}</NavLink>
         </li>
      })
    )

    return (
        <ul>\
        <li>
          <strong>page</strong> {page.name}
        </li>
        <h2>Lists</h2>
        <ul>
          {listNames}
        </ul>

      </ul>
    )
}

export default Page
