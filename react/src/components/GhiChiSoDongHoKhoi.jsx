import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function GhiChiSoDongHoKhoi(){
  const [dongHoKhois, setDongHoKhois] = useState(null)
  const [maDongHo, setMaDongHo] = useState('')
  const [refreshFlag, setRefreshFlag] = useState(false)
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/dong_ho_khoi`)
      .then(response => {
        setDongHoKhois(response.data);
      })
  },[refreshFlag])

  if(!dongHoKhois) return null

  const dongHoKhoiElements = dongHoKhois.map(dongHoKhoi => {
    return <tr key={dongHoKhoi.id}>
      <td style={{textAlign: 'center'}}>{dongHoKhoi.id}</td>
      <td style={{textAlign: 'center'}}>{dongHoKhoi.ten_dong_ho}</td>
      <td style={{textAlign: 'center'}}>{dongHoKhoi.tuyen_doc.ten_tuyen}</td>
      <td style={{textAlign: 'center'}}>{dongHoKhoi.kich_co.ten_kich_co}</td>
      <td style={{textAlign: 'center'}}>{dongHoKhoi.trang_thai === '1' ? 'Đang lắp đặt' : 'Chưa lắp đặt'}</td>
      <td style={{textAlign: 'center'}}>
        {/* <button className="btn-edit">Chi tiết đồng hồ</button>
        &nbsp; */}
        <Link to={`/ghi_chi_so_dong_ho_khoi/lich_su/${dongHoKhoi.id}`}>
          <button type="button" className="btn-edit">Lịch sử chỉ số</button>          
        </Link>        
      </td>
    </tr>
  }) 

  const refresh = () => {
    setRefreshFlag(!refreshFlag)
    setMaDongHo('')
    setErrors(null)
  }

  function handleChange(e){
    setMaDongHo(e.target.value)
    setErrors(null)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await axios.get(`http://127.0.0.1:8000/api/dong_ho_khoi/${maDongHo}`)
      setDongHoKhois(response.data.data)
    }catch(error){
      setErrors(error.response.data.error);
    }
  } 

  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Quản lý ghi chỉ số đồng hồ khối</h2>
        <Link to='/ghi_chi_so_dong_ho_khoi/ghi' className="btn-add">Ghi chỉ số</Link>        
      </div>      
      <div className='card animated fadeInDown'>
        {errors && <div className="error">{errors}</div>}
        <form onSubmit={handleSubmit}>    
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <input required type="number" placeholder='Mã đồng hồ' style={{marginBottom: '0'}} value={maDongHo} onChange={handleChange}/>          
            {/* <select style={{marginLeft: '15px', marginBottom: '0'}}>
              <option value="">Chọn tuyến đọc</option>
            </select>  */}
          </div>    
          <button type='submit' className='btn-add' style={{marginTop: '10px', marginBottom: '10px'}}>Tìm kiếm</button>       
          <button type='button' onClick={refresh} className='btn-add' style={{marginLeft: '10px'}}>Tải lại</button>       
        </form>
        <table>
          <thead>
            <tr>
              <th style={{width: '50px', textAlign: 'center'}}>ID</th>
              <th style={{textAlign: 'center'}}>Tên đồng hồ</th>
              <th style={{textAlign: 'center'}}>Tuyến đọc</th>
              <th style={{textAlign: 'center'}}>Kích cỡ</th>
              <th style={{textAlign: 'center'}}>Tình trạng</th>              
              <th style={{width: '150px', textAlign: 'center'}}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {dongHoKhoiElements}
          </tbody>
        </table>
      </div>
    </div>
  )
}