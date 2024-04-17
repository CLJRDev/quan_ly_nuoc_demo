import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

export default function SuaGiaNuoc(){
  const {id} = useParams()
  const navigate = useNavigate()
  const [loaiKhachHangs, setLoaiKhachHangs] = useState(null);
  const [nhomGia, setNhomGia] = useState({
    id: '',
    ten_nhom_gia: '',
    gia_duoi_10m: '',
    gia_tu_10m_den_20m: '',
    gia_tu_20m_den_30m: '',
    gia_tren_30m: '',
    ma_loai_khach_hang: ''
  })

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/nhom_gia/${id}`)
      .then(response => {
        setNhomGia(response.data)
      })
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/loai_khach_hang')
      .then(response => {
        setLoaiKhachHangs(response.data)        
      })
      .catch(e => {
        console.error('Lỗi tải dữ liệu loại khách hàng', e)
      })
  }, [])

  if(!loaiKhachHangs) return null

  const loaiKhachHangOption = loaiKhachHangs.map(loaiKhachHang => {
    return <option key={loaiKhachHang.id} value={loaiKhachHang.id}>
      {loaiKhachHang.ten_loai_khach_hang}
    </option>
  })

  
  function handleChange(e){
    const {name, value} = e.target;
    setNhomGia(preNhomGia => {
      return {
        ...preNhomGia,
        [name]: value
      }
    });
  }
  
  const suaNhomGia = async() => {
    const formData = new FormData()
    formData.append('_method', 'PUT')
    formData.append('ten_nhom_gia', nhomGia.ten_nhom_gia)
    formData.append('gia_duoi_10m', nhomGia.gia_duoi_10m)
    formData.append('gia_tu_10m_den_20m', nhomGia.gia_tu_10m_den_20m)
    formData.append('gia_tu_20m_den_30m', nhomGia.gia_tu_20m_den_30m)
    formData.append('gia_tren_30m', nhomGia.gia_tren_30m)
    formData.append('ma_loai_khach_hang', nhomGia.ma_loai_khach_hang)
    const response = await axios.post(`http://127.0.0.1:8000/api/nhom_gia/${id}`, formData)
    if(response){
      console.log(response.data)
      navigate('/gia')
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await suaNhomGia()
  }

  return (
    <div className="page-container">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2>Sửa nhóm giá nước: {nhomGia.ten_nhom_gia}</h2>        
      </div>
      <div className="card animated fadeInDown">
        <form onSubmit={handleSubmit}>
          <input 
            value={nhomGia.ten_nhom_gia}
            type="text" 
            required
            placeholder="Tên nhóm giá"
            name='ten_nhom_gia'            
            onChange={handleChange}
          />
          <input 
            value={nhomGia.gia_duoi_10m}
            type="number" 
            required
            placeholder="Giá dưới 10m³"
            name='gia_duoi_10m'            
            onChange={handleChange}
          />
          <input 
            value={nhomGia.gia_tu_10m_den_20m}
            type="number" 
            required
            placeholder="Giá từ 10m³ đến 20m³"
            name='gia_tu_10m_den_20m'            
            onChange={handleChange}
          />
          <input 
            value={nhomGia.gia_tu_20m_den_30m}
            type="number" 
            required
            placeholder="Giá từ 20m³ đến 30m³"
            name='gia_tu_20m_den_30m'            
            onChange={handleChange}
          />
          <input 
            value={nhomGia.gia_tren_30m}
            type="number" 
            required
            placeholder="Giá trên 30m³"
            name='gia_tren_30m'            
            onChange={handleChange}
          />          
          <select 
            value={nhomGia.ma_loai_khach_hang} 
            onChange={handleChange} 
            name="ma_loai_khach_hang"
          >
            <option value="" disabled>Chọn loại khách hàng</option>
            {loaiKhachHangOption}
          </select>
          <button type='submit' className="btn">Sửa nhóm giá</button>
        </form>
      </div>
    </div>
  )
}