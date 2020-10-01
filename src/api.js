function fetchBookmarks() {
    return fetch(`https://thinkful-list-api.herokuapp.com/DazohnReid/bookmarks/`);
  }
  
  function addItem(obj) {
    const newItem = JSON.stringify(obj);
  
    return fetch(`https://thinkful-list-api.herokuapp.com/DazohnReid/bookmarks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newItem,
    });
  }
  
  function editItem(obj, id) {
    const newItem = JSON.stringify(obj);
  
    return fetch(`https://thinkful-list-api.herokuapp.com/DazohnReid/bookmarks/` + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newItem,
    });
  }
  
  function deleteItem(id) {
    return fetch(`https://thinkful-list-api.herokuapp.com/DazohnReid/bookmarks/` + id, {
      method: 'DELETE',
    });
  }
  
  export default {
    fetchBookmarks,
    addItem,
    deleteItem,
    editItem,
  };