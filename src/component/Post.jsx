import { Navigate, useNavigate, useParams, Routes, Route } from "react-router-dom"
function Post() {
    const params=useParams();
    const navigate = useNavigate();
    const status=200;
    if(status===400){
      return <Navigate to={'/notfound'}/>
    }

    const onClick= () =>{
      navigate('/about')
    }
  return (
    <div>
      <h1> Post {params.id}</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>}/>
      </Routes>
    </div>
  )
}

export default Post
