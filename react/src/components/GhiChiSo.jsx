import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function GhiChiSo(){
  const navigate = useNavigate()
  const [ghiChiSo, setGhiChiSo] = useState({
    ky_chi_so: '',
    tu_ngay: '',
    den_ngay: '',
    ma_dong_ho: '',
    chi_so_moi: ''
  })

  function handleChange(event){
    const {name, value} = event.target;
    setGhiChiSo(preGhiChiSo => {
      return {
        ...preGhiChiSo,
        [name]: value
      }
    })
  }

  const themGhiChiSo = async(e) => {
    const formData = new FormData();
    formData.append('ky_chi_so', ghiChiSo.ky_chi_so)
    formData.append('tu_ngay', ghiChiSo.tu_ngay)
    formData.append('den_ngay', ghiChiSo.den_ngay)
    formData.append('ma_dong_ho', ghiChiSo.ma_dong_ho)
    formData.append('chi_so_moi', ghiChiSo.chi_so_moi)
    const response = await axios.post('http://127.0.0.1:8000/api/ghi_chi_so_dong_ho_khoi', formData)    
    console.log(response.data.message)
    navigate('/ghi_chi_so_dong_ho_khoi');
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    await themGhiChiSo()
  }
  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Ghi chỉ số đồng hồ khối</h2>      
      </div>      
      <div className='card animated fadeInDown'>
        <form onSubmit={handleSubmit}>          
          <input 
            type="text" 
            placeholder="Kỳ chỉ số"     
            required
            onChange={handleChange}   
            value={ghiChiSo.ky_chi_so}
            name='ky_chi_so'
          />
          <input 
            type="date" 
            placeholder="Từ ngày"    
            required
            onChange={handleChange}   
            value={ghiChiSo.tu_ngay}
            name='tu_ngay'        
          />
          <input 
            type="date" 
            placeholder="Đến ngày"        
            required
            onChange={handleChange}   
            value={ghiChiSo.den_ngay}
            name='den_ngay'        
          />
          <input 
            type="text" 
            placeholder="Mã đồng hồ"        
            required
            onChange={handleChange}   
            value={ghiChiSo.ma_dong_ho}
            name='ma_dong_ho'     
          />
          <input 
            type="text" 
            placeholder="Chỉ số mới"
            required
            onChange={handleChange}   
            value={ghiChiSo.chi_so_moi}
            name='chi_so_moi'  
          />
          <button className="btn-add">Ghi chỉ số</button>        
        </form>        
      </div>
    </div>
  )
}