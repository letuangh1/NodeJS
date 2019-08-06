var Duong_dan_Du_lieu=`../Du_lieu_Luu_tru`;
var Duong_dan_Dich_vu=`http://localhost:1000`


function Doc_Du_lieu_Dien_thoai(){
    var Tap_tin=`Dien_thoai.json`
    var Dia_chi_Xu_ly=`${Duong_dan_Du_lieu}/${Tap_tin}`
    var Xu_ly_HTTP=new XMLHttpRequest()
    Xu_ly_HTTP.open(`GET`,`${Dia_chi_Xu_ly}`,false) 
    Xu_ly_HTTP.send()
    var Chuoi_json=Xu_ly_HTTP.responseText.trim() // Nội dung trả về
    return JSON.parse(Chuoi_json)
}
function Xuat_Thong_Dien_thoai(Th_Cha,Dien_thoai){
    let trang_thai=(Dien_thoai.Trang_thai)?"Còn hàng":"Hết hàng"
    let html=`<img src="../Media/ANDROID_1.png">
    <h2>${Dien_thoai.Ten}</h2>
    <div>Đơn giá bán: ${Dien_thoai.Don_gia_Ban}</div>
    <div>Hệ điều hành: ${Dien_thoai.He_Dieu_hanh.Ten}</div>
    <div>Trạng thái: ${trang_thai}</div>`
    //return html;
    Th_Cha.innerHTML=html;
}

///////////////////// Hàm giao tiếp Dịch vụ
function Doc_Du_lieu_Cua_hang(){
    var Dia_chi_Xu_ly=`${Duong_dan_Dich_vu}/?Ma_so_Xu_ly=DOC_CUA_HANG`
    var Xu_ly_HTTP=new XMLHttpRequest()
    //var chuoi_goi="Client  goi du lieu ve cho Server";
    Xu_ly_HTTP.open(`POST`,`${Dia_chi_Xu_ly}`,false) 
    //Xu_ly_HTTP.send(chuoi_goi)
    Xu_ly_HTTP.send()
    var Chuoi_json=Xu_ly_HTTP.responseText.trim() // Nội dung trả về
    return JSON.parse(Chuoi_json)
}