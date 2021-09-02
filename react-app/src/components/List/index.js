import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CreateItemForm from '../CreateItemForm';
import DeleteItemButton from '../DeleteItemButton';
import EditItemForm from '../EditItemForm';
import { getOneList } from '../../store/list';
import "./List.css"


function List(){

    const [refresh, setRefresh] = useState(true)
    const { listId }  = useParams();
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()


    let listItems = null
    if (list?.items) listItems = Object.values(list.items)

    const itemContent = listItems?.map((item)=>{
      item = {
        content: item[1],
        id: item[0]
      }



      return (
        <div className="item-container" key={item.id}>
          <div className="item-content">

          {item.content}
          </div>
          <div className="item-button-container">
            <EditItemForm item={item}
            refresher={()=>{
              setRefresh(!refresh)
            }}
            />
            <DeleteItemButton item={item} refresher={()=>setRefresh(!refresh)}/>
          </div>
        </div>
      )
    })

    useEffect(()=> {
      dispatch(getOneList(listId))
    }, [dispatch, listId, refresh])


    return (
        <div>
        <div >
          <h2 className="list-title">{list.name}</h2>
        </div>

        <div className="item-list-container">
          {itemContent}
        </div>
          <div className="item-create-container">
          <CreateItemForm listId={listId} refresher={()=>setRefresh(!refresh)}/>
          </div>

      </div>
    )
}

export default List
