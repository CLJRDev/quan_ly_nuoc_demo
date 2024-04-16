import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


export default function SuaGhiChiSo(){
  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Cập nhật ghi chỉ số đồng hồ khối</h2>
        {/* <Link to='/gia/them' className="btn-add">Thêm mới</Link> */}
      </div>      
      <div className='card animated fadeInDown'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input type="text" placeholder="Mã lịch sử"/>
          <input style={{marginLeft: '15px'}} type="text" placeholder="Mã đồng hồ khối"/>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input type="text" placeholder="Chỉ số cũ"/>
          <input type="text" style={{marginLeft: '15px'}} placeholder="Chỉ số mới"/>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input type="text" placeholder="Số tiêu thụ"/>
          <input type="text" placeholder="Kỳ chỉ số" style={{marginLeft: '15px'}}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input type="text" placeholder="Từ ngày"/>
          <input type="text" placeholder="Đến ngày" style={{marginLeft: '15px'}}/>
        </div>
        <button className="btn-add">Sửa chỉ số</button>
        {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>          
          <input type="text" placeholder='Mã nhóm giá' style={{marginBottom: '0'}}/>
          <input type="text" placeholder='Tên nhóm giá'style={{marginLeft: '15px', marginBottom: '0'}}/>
          <select name="" id="" style={{marginLeft: '15px', marginBottom: '0'}}>
            <option value="">Chọn loại khách hàng</option>
          </select>
        </div>
        <button className='btn-add' style={{marginBottom: '10px', marginTop: '10px'}}>Tìm kiếm</button>     */}
        {/* <table>
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
            {}
          </tbody>
        </table> */}
      </div>
    </div>
  )
}