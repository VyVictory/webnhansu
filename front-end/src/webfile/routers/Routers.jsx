import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
//import Login from "../views/Login/Login";
//<Route path="/home" element={<Home/>} /> 
import Qlthongtinnhanvien from "../views/qlhoso/qlthongtinnhanvien/Qlthongtinnhanvien";
import Bar from '../views/bar/Bar';
import Qlvitri from "../views/qlhoso/quanlycongtacnhanvien/qlvitri/Qlvitri";
import Lbchamcong from "../views/qlchamcong/lbchamcong/Lbchamcong";
import Chamcong from "../views/qlchamcong/qlcalamviec/chamcong/Cc";
import Chamcongcanhan from "../views/qlchamcong/qlcalamviec/chamcong/Chamcongcanhan"

import Xdcalamviec from "../views/qlchamcong/qlcalamviec/xdcalamviec/Xdcalamviec";
import Chinhsuacalamviec from "../views/qlchamcong/qlcalamviec/xdcalamviec/chinhsuacalamviec"

import Tl from "../views/qltienluong/tinhluong/Tl";
import Xbluongtheomau from "../views/qltienluong/xbluongtheomau/Xbluongtheomau";
import ThemNhanvien from "../views/qlhoso/qlthongtinnhanvien/ThemNhanvien";
import ThemChucvu from "../views/qlhoso/quanlycongtacnhanvien/qlvitri/ThemChucvu";
import Chinhsua from "../views/qlhoso/qlthongtinnhanvien/Chinhsua"
import Chinhsuachucvu from "../views/qlhoso/quanlycongtacnhanvien/qlvitri/Chinhsuachucvu"
import ThemCalamviec from "../views/qlchamcong/qlcalamviec/xdcalamviec/ThemCalamviec"
function Routers(){
    return(
        
        <Router> 
            <Bar/>
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/quanlythongtinnhanvien" element={<Qlthongtinnhanvien/>}/> 
                    <Route path="/ThemNhanvien" element={<ThemNhanvien/>}/> 
                    <Route path="/quanlythongtinnhanvien/Chinhsua/:id" element={<Chinhsua/>}/>                                      
                    <Route path="/quanlycongtacnhanvien/quanlyvitri" element={<Qlvitri/>} />
                    <Route path="/quanlycongtacnhanvien/ThemChucvu" element={<ThemChucvu/>} />
                    <Route path="/quanlythongtinnhanvien/Chinhsuachucvu/:id" element={<Chinhsuachucvu/>}/>  

                    <Route path="/lapbangchamcong" element={<Lbchamcong/>}/>    
                    <Route path="/quanlychamcong/quanlycalamviec/chamcong" element={<Chamcong/>}/>
                    <Route path="/quanlychamcong/quanlycalamviec/Chamcongcanhan/:id" element={<Chamcongcanhan/>}/>
                    <Route path="/quanlychamcong/quanlycalamviec/xaydungcalamviec" element={<Xdcalamviec/>}/>
                    <Route path="/quanlychamcong/quanlycalamviec/xaydungcalamviec/themcalamviec" element={<ThemCalamviec/>}/>
                    <Route path="/quanlychamcong/quanlycalamviec/xaydungcalamviec/chinhsuacalamviec/:id" element={<Chinhsuacalamviec/>}/>

                    <Route path="/tinhluong" element={<Tl/>}/>
                    <Route path="/xuatbangluongtheomau" element={<Xbluongtheomau/>}/>
                </Routes>
            </div>
        </Router>
    );
}
export default Routers;