    import React from 'react';
    import axios from 'axios';
    import { useEffect, useState } from 'react';
    import '../../../../viewcss/qlchamcong/qlcalamviec/Cc.css';
    import { Link, NavLink, useNavigate } from 'react-router-dom';

    const Chamcong = () => {

        const[Nhansus, setNhansu] = useState([]);
        const[Chucvus, setChucvu] = useState([]);
        const [isOverlayVisible, setIsOverlayVisible] = useState(false); 

        useEffect(()=> {
            axios.get('http://localhost:3000/nhansu')
            .then((res) => setNhansu(res.data))
            .catch(err => console.log(err));

            axios.get('http://localhost:3000/chucvu')
            .then(Response => {
                if(Response.data) {
                    setChucvu(Response.data);
                } else {
                    alert(Response.data)
                }
            })
            .catch(err => console.log(err));
        },[])
        
        function hienthibang() {
            setIsOverlayVisible(true);
        }

        function tacbang() {
            setIsOverlayVisible(false);
        }
        
        
    // const navigate = useNavigate()
        return ( 
            <div>
                <Link to="/quanlychamcong/quanlycalamviec/xaydungcalamviec/themcalamviec" className='btn btn-success'>
                    Chấm Công
                </Link>
                <div>
                    <div className={isOverlayVisible ? "overlay show" : "overlay"}>
                        <div className="centeredTable">
                            <span>Dòng chữ trong bảng</span><button onClick={tacbang}>Tắt bảng</button><br/>
                            <input type='date' required></input><button>Tìm</button>
                            <table>
                                <tr>
                                    
                                    <th>Header 1</th>
                                    <th>Header 2</th>
                                </tr>
                                <tr>
                                    <td>Data 1</td>
                                    <td>Data 2</td>
                                    
                                </tr>
                            </table>
                            <button>Chấm</button>
                        </div>
                    </div>
                </div>
                
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã Nhân Viên</th>
                            <th>Tên</th>
                            <th>Chức Vụ</th>
                            <th>Cập Nhật Gần Đây</th>
                            <th>Tùy Chọn</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                        Nhansus.map(e => {
                            
                            const correspondingChucvu = Chucvus.find((cv) => cv._id === e.Chucvu);
                            return <tr >
                                <td>{e.Mnv}</td>
                                <td>{e.Hoten}</td>
                                <td>{correspondingChucvu ? correspondingChucvu.Tenchucvu : '-'}</td>
                                <td></td>

                                <td>
                                    <Link to={'http://localhost:3001/quanlychamcong/quanlycalamviec/chamcongcanhan/&idns='+ e._id} className='btn btn-info btn-sm me-2'> 
                                        Chấm Công</Link>
                                    <button className='btn btn-warning btn-sm' onClick={hienthibang}>
                                        Chấm Lại</button>
                                </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    
    export default Chamcong;