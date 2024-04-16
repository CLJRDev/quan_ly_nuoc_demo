import {Link} from 'react-router-dom'

export default function Dashboard(){
  return(
    <div className="dashboard">
      <Link to='/'>Home</Link>
      <Link to='/loai_khach_hang'>Loại khách hàng</Link>
      <Link to='/gia'>Giá nước</Link>
      <Link to='/ghi_chi_so_dong_ho_khoi'>Ghi chỉ số đồng hồ khối</Link>        
    </div>
  )
}