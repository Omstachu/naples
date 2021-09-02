import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CreateListForm from '../CreateListForm'
import DeleteListButton from '../DeleteListButton';
import EditListForm from '../EditListForm';
import "./Page.css"

function Page(){
    const [refresh, setRefresh] = useState(true)
    const [page, setPage] = useState({});
    const { pageId }  = useParams();

    const QUADRANTS = ["top-left", "top-right", "bottom-right", "bottom-left"]

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

         return (
           <div>
              <div className={`list-container quadrant ${QUADRANTS[idx]}`} key={idx}>
                  <div className="list-content-container">
                    <NavLink className="list-nav" to={`/lists/${list.id}`}>
                      <div className="list-name">
                        {list.name}
                      </div>
                    </NavLink>
                    <div className="list-button-container">
                      <EditListForm list={list} refresher={()=>setRefresh(!refresh)}/>
                      <DeleteListButton listId={list.id} pageId={pageId} refresher={()=>setRefresh(!refresh)}/>
                    </div>
                  </div>
              </div>
           </div>
         )
      })
    )

    return (
        <div className="list-section">
        <h2 className="list-page-title">{page.name}</h2>
        <div>
          {listNames}
        </div>
        <CreateListForm pageId={pageId} refresher={()=>setRefresh(!refresh)}/>
      </div>
    )
}

export default Page
