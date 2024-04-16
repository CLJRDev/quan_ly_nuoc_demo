import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function LichSuGhiChiSo(){
  return (
    <div className='page-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Lịch sử ghi chỉ số đồng hồ khối</h2>
        {/* <Link to='/ghi_chi_so_dong_ho_khoi/ghi' className="btn-add">Ghi chỉ số</Link>         */}
      </div>      
      <div className='card animated fadeInDown'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>          
          <input type="text" placeholder='Mã đồng hồ'/>          
        </div>
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
            <tr>
              <td style={{textAlign: 'center'}}>1</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 1</td>
              <td style={{textAlign: 'center'}}>T2 - 2024</td>
              <td style={{textAlign: 'center'}}>01-02-2024</td>
              <td style={{textAlign: 'center'}}>28-02-2024</td>
              <td style={{textAlign: 'center'}}>005556</td>
              <td style={{textAlign: 'center'}}>005580</td>
              <td style={{textAlign: 'center'}}>24</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Sửa</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>2</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 1</td>
              <td style={{textAlign: 'center'}}>T3 - 2024</td>
              <td style={{textAlign: 'center'}}>01-03-2024</td>
              <td style={{textAlign: 'center'}}>31-03-2024</td>
              <td style={{textAlign: 'center'}}>005580</td>
              <td style={{textAlign: 'center'}}>005590</td>
              <td style={{textAlign: 'center'}}>10</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Sửa</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>3</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 1</td>
              <td style={{textAlign: 'center'}}>T4 - 2024</td>
              <td style={{textAlign: 'center'}}>01-04-2024</td>
              <td style={{textAlign: 'center'}}>30-04-2024</td>
              <td style={{textAlign: 'center'}}>005590</td>
              <td style={{textAlign: 'center'}}>005615</td>
              <td style={{textAlign: 'center'}}>25</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Sửa</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>4</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 1</td>
              <td style={{textAlign: 'center'}}>T5 - 2024</td>
              <td style={{textAlign: 'center'}}>01-05-2024</td>
              <td style={{textAlign: 'center'}}>30-05-2024</td>
              <td style={{textAlign: 'center'}}>005615</td>
              <td style={{textAlign: 'center'}}>005630</td>
              <td style={{textAlign: 'center'}}>15</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Sửa</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>5</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 1</td>
              <td style={{textAlign: 'center'}}>T6 - 2024</td>
              <td style={{textAlign: 'center'}}>01-06-2024</td>
              <td style={{textAlign: 'center'}}>31-06-2024</td>
              <td style={{textAlign: 'center'}}>005630</td>
              <td style={{textAlign: 'center'}}>005655</td>
              <td style={{textAlign: 'center'}}>25</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Sửa</button>                
              </td>
            </tr>
            <tr>
              <td style={{textAlign: 'center'}}>6</td>
              <td style={{textAlign: 'center'}}>Tuyến đọc 1</td>
              <td style={{textAlign: 'center'}}>T7 - 2024</td>
              <td style={{textAlign: 'center'}}>01-07-2024</td>
              <td style={{textAlign: 'center'}}>30-07-2024</td>
              <td style={{textAlign: 'center'}}>005655</td>
              <td style={{textAlign: 'center'}}>005680</td>
              <td style={{textAlign: 'center'}}>25</td>
              <td style={{textAlign: 'center'}}>
                <button className="btn-edit">Sửa</button>                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}