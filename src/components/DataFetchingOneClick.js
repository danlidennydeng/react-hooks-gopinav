import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOneClick() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idClick, setIdClick] = useState(1)

  const handleClick = () => {
    setIdClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idClick}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idClick])

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      
      <button type="button" onClick={handleClick}>Fetch Post</button>

      <div>{post.title}</div>
      {/* {
        posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
      }   */}
    </div>
  )
}

export default DataFetchingOneClick