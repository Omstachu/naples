import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CreateListForm from '../CreateListForm'
import DeleteListButton from '../DeleteListButton';
import EditListForm from '../EditListForm';

function Page(){
    const [refresh, setRefresh] = useState(true)
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
    }, [pageId, refresh])


    let lists = []

    if (page.lists) {
      lists = Object.values(page.lists)
    }
    const listNames = (
      // page.lists?.map((list,idx) =>{
      lists?.map((list,idx) =>{
         return <div key={idx}>
           <NavLink to={`/lists/${list.id}`}>{list.name}</NavLink>
           <EditListForm list={list} refresher={()=>setRefresh(!refresh)}/>
           <DeleteListButton listId={list.id} pageId={pageId} refresher={()=>setRefresh(!refresh)}/>
         </div>
      })
    )

    return (
        <ul>\
        <li>
          <strong>page</strong> {page.name}
        </li>
        <h2>Lists</h2>
        <div>
          {listNames}
        </div>
        <CreateListForm pageId={pageId} refresher={()=>setRefresh(!refresh)}/>
      </ul>
    )
}

export default Page
