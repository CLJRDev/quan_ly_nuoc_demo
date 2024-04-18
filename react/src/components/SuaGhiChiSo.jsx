import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

export default function SuaGhiChiSo(){
  const {id} = useParams()
  const [lichSu, setLichSu] = useState('')
  const [chiSoMoi, setChiSoMoi] = useState('')
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/ghi_chi_so_dong_ho_khoi/${id}`)
      .then(response => {
        setLichSu(response.data.lich_su)
      })
  },[])

  function handleChange(e){
    setChiSoMoi(e.target.value)
  }

  const suaChiSo = async() => {
    const formData = new FormData()
    formData.append('_method', 'PUT')
    formData.append('chi_so_moi', chiSoMoi)
    const response = await axios.post(`http://127.0.0.1:8000/api/ghi_chi_so_dong_ho_khoi/${id}`, formData)
    if(response){
      console.log(response.data)
      window.history.back()
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await suaChiSo()
  }

  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Sửa chỉ số đồng hồ khối: {lichSu.ma_dong_ho}, Kỳ chỉ số: {lichSu.ky_chi_so}</h2>
      </div>      
      <div className='card animated fadeInDown'>
        <form onSubmit={handleSubmit}>        
          <input 
            type="number" 
            placeholder="Chỉ số mới"
            value={chiSoMoi}
            onChange={handleChange}
          />
          <button type="submit" className="btn-add">Sửa chỉ số</button>
        </form>        
      </div>
    </div>
  )
}