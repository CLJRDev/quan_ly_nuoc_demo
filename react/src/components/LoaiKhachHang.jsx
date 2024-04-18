import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import {format} from 'date-fns'


export default function DanhMucLoaiKhachHang(){
  const [loaiKhachHangs, setLoaiKhachHangs] = useState(null);
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/loai_khach_hang')
      .then(response => {
        setLoaiKhachHangs(response.data)        
      })
      .catch(e => {
        console.error('Lỗi tải dữ liệu loại khách hàng', e)
      })
  }, [])

  const xoaLoaiKhachHang = id => {
    if(!window.confirm('Bạn có chắc chắn muốn xóa loại khách hàng này?'))
      return
    axios.delete(`http://127.0.0.1:8000/api/loai_khach_hang/${id}`)
    .then(response => {
      console.log(response.data.message);
      setLoaiKhachHangs(loaiKhachHangs.filter(loaiKhachHang => {
        return loaiKhachHang.id != id;
      }));
      setErrors(null)
    })
    .catch(error => {
      setErrors(error.response.data.error);
    });
  }

  if(!loaiKhachHangs) return null;

  console.log(loaiKhachHangs)

  const loaiKhachHangElements = loaiKhachHangs.map(loaiKhachHang => {
    return <tr key={loaiKhachHang.id}>
        <td style={{textAlign: 'center'}}>{loaiKhachHang.id}</td>
        <td>{loaiKhachHang.ten_loai_khach_hang}</td>
        <td style={{textAlign: 'center'}}>{format(new Date(loaiKhachHang.created_at), 'dd-MM-yyyy')}</td>
        <td style={{textAlign: 'center'}}>
          <Link className="btn-edit" to={`/loai_khach_hang/sua/${loaiKhachHang.id}`}>Sửa</Link>
          &nbsp;
          <button onClick={() => xoaLoaiKhachHang(loaiKhachHang.id)} className="btn-delete">Xóa</button>
        </td>
    </tr>
  })

  return (
    <div className="page-container">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Loại khách hàng</h2>
        <Link to='/loai_khach_hang/them' className="btn-add">Thêm mới</Link>
      </div>
      <div className="card animated fadeInDown">
        {errors && <div className="error">{errors}</div>}
        <table>
          <thead>
            <tr>
              <th style={{width: '50px', textAlign: 'center'}}>ID</th>
              <th>Tên loại khách hàng</th>
              <th style={{width: '150px', textAlign: 'center'}}>Ngày tạo</th>
              <th style={{width: '150px', textAlign: 'center'}}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {loaiKhachHangElements}
          </tbody>
        </table>
      </div>
    </div>
  )
}