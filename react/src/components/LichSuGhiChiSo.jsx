import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import {format} from 'date-fns'

export default function LichSuGhiChiSo(){
  const {id} = useParams()
  const [dongHoKhoi, setDongHoKhoi] = useState('')
  const [ghiChiSos, setGhiChiSos] = useState('')
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/dong_ho_khoi/${id}`)
      .then(response => {
        setDongHoKhoi(response.data.data[0])
        console.log(response.data.data[0])
      })
  }, [])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/ghi_chi_so_dong_ho_khoi/${id}`)
      .then(response => {
        setGhiChiSos(response.data.ghi_chi_so)
      }).catch(error => {
        console.error('Error fetching data:', error);
      })
  }, [])
  
  if(!dongHoKhoi) return null
  if(!ghiChiSos) return null
  
  let check = true;
  const ghiChiSoElements = ghiChiSos.map(ghiChiSo => {
    const editButton = check === true ? 
    <Link to={`ghi_chi_so_dong_ho_khoi/sua/${ghiChiSo.id}`}><button className="btn-edit">Sửa</button></Link> : 
    <button className="btn-edit-disable">Sửa</button>
    check = false
    return <tr key={ghiChiSo.id}>
      <td style={{textAlign: 'center'}}>{ghiChiSo.id}</td>
      <td style={{textAlign: 'center'}}>{dongHoKhoi.tuyen_doc.ten_tuyen}</td>
      <td style={{textAlign: 'center'}}>{ghiChiSo.ky_chi_so}</td>
      <td style={{textAlign: 'center'}}>{format(new Date(ghiChiSo.tu_ngay), 'dd-MM-yyyy')}</td>
      <td style={{textAlign: 'center'}}>{format(new Date(ghiChiSo.den_ngay), 'dd-MM-yyyy')}</td>
      <td style={{textAlign: 'center'}}>{ghiChiSo.chi_so_cu}</td>
      <td style={{textAlign: 'center'}}>{ghiChiSo.chi_so_moi}</td>
      <td style={{textAlign: 'center'}}>{ghiChiSo.so_tieu_thu}</td>
      <td style={{textAlign: 'center'}}>
        {editButton}
      </td>
    </tr>
  })

  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Lịch sử ghi chỉ số đồng hồ khối: {id}</h2>
      </div>      
      <div className='card animated fadeInDown'>        
        <table>
          <thead>
            <tr>
              <th style={{width: '50px', textAlign: 'center'}}>ID</th>
              <th style={{textAlign: 'center'}}>Tuyến đọc</th>
              <th style={{textAlign: 'center'}}>Kỳ chỉ số</th>
              <th style={{textAlign: 'center'}}>Từ ngày</th>
              <th style={{textAlign: 'center'}}>Đến ngày</th>              
              <th style={{textAlign: 'center'}}>Chỉ số cũ</th>              
              <th style={{textAlign: 'center'}}>Chỉ số mới</th>              
              <th style={{textAlign: 'center'}}>Số tiêu thụ</th>              
              <th style={{width: '150px', textAlign: 'center'}}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {ghiChiSoElements}            
          </tbody>
        </table>
      </div>
    </div>
  )
}