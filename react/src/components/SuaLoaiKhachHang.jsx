import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

export default function SuaLoaiKhachHang(){
  const {id} = useParams()
  const navigate = useNavigate()
  const [loaiKhachHang, setLoaiKhachHang] = useState('')
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/loai_khach_hang/${id}`)
      .then(response => {
        setLoaiKhachHang(response.data.ten_loai_khach_hang);
      });
  }, []);

  function handleChange(e){
    setLoaiKhachHang(e.target.value);
    setErrors(null)
  }

  const suaLoaiKhachHang = async() => {
    const formData = new FormData();
    formData.append('_method', 'PUT')
    formData.append('ten_loai_khach_hang', loaiKhachHang)
    
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/loai_khach_hang/${id}`, formData)
      console.log(response.data.message)          
      navigate('/loai_khach_hang')
    }catch(er){
      setErrors(er.response.data.error)      
    }
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    await suaLoaiKhachHang()
  }

  return (
    <div className="page-container">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2>Sửa loại khách hàng: {loaiKhachHang}</h2>        
      </div>
      <div className="card animated fadeInDown">
        {errors && <div className="error">{errors}</div>}
        <form onSubmit={handleSubmit}>
          <input 
            value={loaiKhachHang}
            type="text" 
            placeholder="Tên loại khách hàng"
            name='loai_khach_hang'            
            onChange={handleChange}
          />
          <button type='submit' className="btn">Cập nhật</button>
        </form>
      </div>
    </div>
  )
}