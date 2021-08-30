import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CreateItemForm from '../CreateItemForm';
import DeleteItemButton from '../DeleteItemButton';
import DeleteListButton from '../DeleteListButton';
import EditListForm from '../EditListForm';
import EditItemForm from '../EditItemForm';
import { getOneList } from '../../store/list';
import "./List.css"


function List(){

    const [refresh, setRefresh] = useState(true)
    const { listId }  = useParams();
    const list = useSelector(state => state.list)
    const pageId = list.pageId
    const dispatch = useDispatch()

    let editContent = null;

    console.log("ITEMS", list)

    let listItems = null
    if (list?.items) listItems = Object.values(list.items)

    // const itemContent = list.items?.map((item)=>{
    const itemContent = listItems?.map((item)=>{
      item = {
        content: item[1],
        id: item[0]
      }

      return (
        <div key={item.id}>
          {item.content}
          {editContent}
          <div className="item-button-container">
            <EditItemForm item={item} refresher={()=>setRefresh(!refresh)}/>
            <DeleteItemButton item={item} refresher={()=>setRefresh(!refresh)}/>
          </div>
        </div>
      )
    })

    useEffect(()=> {
      dispatch(getOneList(listId))
    }, [dispatch, listId, refresh])


    return (
        <ul>
        <div>
          <h2 className="list-title">{list.name}</h2>
          {/* <EditListForm list={list}/>
          <DeleteListButton listId={listId} pageId={pageId}/> */}
        </div>

        <div>
          {itemContent}
        </div>
        <div>
        <CreateItemForm listId={listId} refresher={()=>setRefresh(!refresh)}/>
        </div>

      </ul>
    )
}

export default List
