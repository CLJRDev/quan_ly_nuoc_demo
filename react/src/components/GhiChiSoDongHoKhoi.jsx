import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function GhiChiSoDongHoKhoi(){
  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Quản lý ghi chỉ số đồng hồ khối</h2>
        <Link to='/ghi_chi_so_dong_ho_khoi/ghi' className="btn-add">Ghi chỉ số</Link>        
      </div>      
      <div className='card animated fadeInDown'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>          
          <input type="text" placeholder='Mã đồng hồ' style={{marginBottom: '0'}}/>          
          <select style={{marginLeft: '15px', marginBottom: '0'}}>
            <option value="">Chọn tuyến đọc</option>
          </select>
        </div>
        <button className='btn-add' style={{marginBottom: '10px', marginTop: '10px'}}>Tìm kiếm</button>    
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
            <tr>
              <td style={{textAlign: 'center'}}>1</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 1</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 1</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 1</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>2</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 2</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 2</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 2</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>3</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 3</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 3</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 3</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>4</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 4</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 4</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 4</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>5</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 5</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 5</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 5</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>6</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 6</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 6</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 6</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>7</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 7</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 7</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 7</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>8</td>
              <td style={{textAlign: 'center'}}>Đồng hồ khối 8</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 8</td>
              <td style={{textAlign: 'center'}}>Kích cỡ 8</td>
              <td style={{textAlign: 'center'}}>Đang lắp đặt</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Chi tiết đồng hồ</button>
                &nbsp;
                <button className="btn-edit">Lịch sử chỉ số</button>                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}