import React, { useState, useEffect } from 'react';
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
            // console.log(page)s
            setPage(page)
        })()
    }, [pageId])

    if(!page) {
        return null;
    }

    // console.log(page)

    return (
        <ul>
        <li>
          <strong>Page Id</strong> {pageId}
        </li>
        <li>
          <strong>page</strong> {page.name}
        </li>
      </ul>
    )
}

export default Page
