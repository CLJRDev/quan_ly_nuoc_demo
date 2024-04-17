import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function GiaNuoc(){
  const [nhomGias, setNhomGias] = useState(null)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/nhom_gia')
      .then(response => {
        setNhomGias(response.data)        
      })
      .catch(e => {
        console.error('Lỗi tải dữ liệu nhóm giá', e)
      })
  }, [])

  const xoaNhomGia = id => {
    if(!window.confirm('Bạn có chắc chắn muốn xóa nhóm giá này?'))
      return
    axios.delete(`http://127.0.0.1:8000/api/nhom_gia/${id}`)
    .then(response => {
      console.log(response.data.message);
      setNhomGias(nhomGias.filter(nhomGia => {
        return nhomGia.id != id;
      }));
    });
  }

  if(!nhomGias)
    return null

  const nhomGiaElements = nhomGias.map(nhomGia => {
    return <tr key={nhomGia.id}>
      <td style={{textAlign: 'center'}}>{nhomGia.id}</td>
      <td style={{textAlign: 'center'}}>{nhomGia.ten_nhom_gia}</td>
      <td style={{textAlign: 'center'}}>{nhomGia.gia_duoi_10m} vnd</td>
      <td style={{textAlign: 'center'}}>{nhomGia.gia_tu_10m_den_20m} vnd</td>
      <td style={{textAlign: 'center'}}>{nhomGia.gia_tu_20m_den_30m} vnd</td>
      <td style={{textAlign: 'center'}}>{nhomGia.gia_tren_30m} vnd</td>
      <td style={{textAlign: 'center'}}>{nhomGia.loai_khach_hang.ten_loai_khach_hang}</td>
      <td style={{textAlign: 'center'}}>
        <Link className="btn-edit" to={`/gia/sua/${nhomGia.id}`}>Sửa</Link>
        &nbsp;
        <button onClick={() => xoaNhomGia(nhomGia.id)} className="btn-delete">Xóa</button>
      </td>
    </tr>
  })

  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Quản lý nhóm giá nước</h2>
        <Link to='/gia/them' className="btn-add">Thêm mới</Link>
      </div>      
      <div className='card animated fadeInDown'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>          
          <input type="text" placeholder='Mã nhóm giá' style={{marginBottom: '0'}}/>
          <input type="text" placeholder='Tên nhóm giá'style={{marginLeft: '15px', marginBottom: '0'}}/>
          <select name="" id="" style={{marginLeft: '15px', marginBottom: '0'}}>
            <option value="">Chọn loại khách hàng</option>
          </select>
        </div>
        <button className='btn-add' style={{marginBottom: '10px', marginTop: '10px'}}>Tìm kiếm</button>    
        <table>
          <thead>
            <tr>
              <th style={{width: '50px', textAlign: 'center'}}>ID</th>
              <th style={{textAlign: 'center'}}>Tên nhóm giá</th>
              <th style={{textAlign: 'center'}}>Giá dưới 10m³</th>
              <th style={{textAlign: 'center'}}>Giá từ 10m³ đến 20m³</th>
              <th style={{textAlign: 'center'}}>Giá từ 20m³ đến 30m³</th>
              <th style={{textAlign: 'center'}}>Giá trên 30m³</th>                            
              <th style={{textAlign: 'center'}}>Loại khách hàng</th>                            
              <th style={{width: '150px', textAlign: 'center'}}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {nhomGiaElements}
          </tbody>
        </table>
      </div>
    </div>
  )
}