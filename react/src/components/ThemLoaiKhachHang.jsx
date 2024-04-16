import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ThemLoaiKhachHang(){
  const navigate = useNavigate();
  const [loaiKhachHang, setLoaiKhachHang] = useState('');

  function handleChange(e){
    setLoaiKhachHang(e.target.value);
  }

  const themLoaiKhachHang = async() => {
    const formData = new FormData();
    formData.append('ten_loai_khach_hang', loaiKhachHang)
    const response = await axios.post('http://127.0.0.1:8000/api/loai_khach_hang', formData)
    if(response){
      console.log(response.data.message)
      navigate('/loai_khach_hang');
    }
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    await themLoaiKhachHang()
  }

  return (
    <div className="page-container">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2>Thêm loại khách hàng</h2>        
      </div>
      <div className="card animated fadeInDown">
        <form onSubmit={handleSubmit}>
          <input 
            value={loaiKhachHang}
            type="text" 
            placeholder="Tên loại khách hàng"
            name='loai_khach_hang'            
            onChange={handleChange}
          />
          <button type='submit' className="btn">Thêm loại khách hàng</button>
        </form>
      </div>
    </div>
  )
}