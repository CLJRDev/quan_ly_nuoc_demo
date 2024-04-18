import Header from "./components/Header"
import Home from './components/Home'
import Dashboard from "./components/Dashboard"
import LoaiKhachHang from "./components/LoaiKhachHang"
import ThemLoaiKhachHang from "./components/ThemLoaiKhachHang"
import SuaLoaiKhachHang from "./components/SuaLoaiKhachHang"
import GiaNuoc from "./components/GiaNuoc"
import ThemGiaNuoc from "./components/ThemGiaNuoc"
import SuaGiaNuoc from "./components/SuaGiaNuoc"
import GhiChiSoDongHoKhoi from "./components/GhiChiSoDongHoKhoi"
import GhiChiSo from "./components/GhiChiSo"
import SuaGhiChiSo from './components/SuaGhiChiSo'
import LichSuGhiChiSo from "./components/LichSuGhiChiSo"
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loai_khach_hang' element={<LoaiKhachHang />} />
        <Route path='/loai_khach_hang/them' element={<ThemLoaiKhachHang />} />
        <Route path='/loai_khach_hang/sua/:id' element={<SuaLoaiKhachHang />} />
        <Route path='/gia' element={<GiaNuoc />} />
        <Route path='/gia/them' element={<ThemGiaNuoc />} />
        <Route path='/gia/sua/:id' element={<SuaGiaNuoc />} />
        <Route path='/ghi_chi_so_dong_ho_khoi' element={<GhiChiSoDongHoKhoi />} />
        <Route path='/ghi_chi_so_dong_ho_khoi/ghi' element={<GhiChiSo />} />
        <Route path='/ghi_chi_so_dong_ho_khoi/lich_su/:id/ghi_chi_so_dong_ho_khoi/sua/:id' element={<SuaGhiChiSo />} />
        <Route path='/ghi_chi_so_dong_ho_khoi/lich_su/:id' element={<LichSuGhiChiSo />} />
      </Routes>      
    </>    
  )
}