import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

export default function SuaGiaNuoc(){
  const {id} = useParams()
  const navigate = useNavigate()
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
        
      });
  }, []);

  return (
    <div className="page-container">

    </div>
  )
}