//Quản lí sinh viên

//Lấy giá trị khu vực và đối tượng


var tinhDiemKhuVuc = function(ipKhuVuc){
    var diemKhuVuc = 0
    switch (ipKhuVuc) {
        case 'A':
            diemKhuVuc = 2*1;
            break;
        case 'B':
            diemKhuVuc = 1*1;
            break;
        case 'C':
            diemKhuVuc = 0.5*1;
            break;
        case 'X':
            diemKhuVuc = 0;
            break;
    }
    return diemKhuVuc;
}

var tinhDiemDoiTuong = function(ipDoiTuong){
    var diemDoiTuong = 0;
    switch (ipDoiTuong) {
        case '1':
            diemDoiTuong = 2.5*1;
            break;
        case '2':
            diemDoiTuong = 1.5*1;
            break;
        case '3':
            diemDoiTuong = 1*1;
            break;
        case '0':
            diemDoiTuong = 0;
            break;
    }
    return diemDoiTuong;
}

var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.onclick = function(){
    var ipKhuVuc = document.getElementById('ipKhuVuc').value;
    var diemKhuVuc = tinhDiemKhuVuc(ipKhuVuc)
    
    var ipDoiTuong = document.getElementById('ipDoiTuong').value;
    var diemDoiTuong = tinhDiemDoiTuong(ipDoiTuong);

    var diem1 = document.getElementById('ipDiem1').value;
    var diem2 = document.getElementById('ipDiem2').value;
    var diem3 = document.getElementById('ipDiem3').value;
    var ipDiemChuan = document.getElementById('ipDiemChuan').value;
    var pKetQua = document.getElementById('pKetQua');
    var pTongDiem = document.getElementById('pTongDiem');
    var diemTongKet = diem1*1 + diem2*1 + diem3*1 + diemDoiTuong*1 + diemKhuVuc*1;
    var diemChuan = ipDiemChuan*1

    // console.log(diemChuan)
    if ((diemTongKet >= diemChuan) && (diem1 != 0) && (diem2 != 0) && (diem3 != 0)){
        pKetQua.innerHTML = "Kết quả : Đậu";
        pTongDiem.innerHTML = "Điểm tổng kết là : " + diemTongKet;
    } else {
        pKetQua.innerHTML = "Kết quả : Rớt";
    }
}

//Tính tiền điện:

var tinhTienThanhToan = function(soKw){
    var tienThanhToan = 0;

    if (soKw <= 50 && soKw >0){
        tienThanhToan = soKw*500;
    } else if (soKw > 50 && soKw <= 100 ){
        tienThanhToan = 50*500 + (soKw-50)*650;
    } else if (soKw > 100 && soKw <=200){
        tienThanhToan = 50*500 + 50*650 + (soKw - 100)*850;
    } else if (soKw >200 && soKw <=350){
        tienThanhToan = 50*500 + 50*650 + 100*850 + (soKw - 200)*1100;
    } else if (soKw >350){
        tienThanhToan = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw - 350)*1300;
    }
    return tienThanhToan;
}

var btnSubmit1 = document.getElementById('btnSubmit1')
btnSubmit1.onclick = function(){
    var ipKH = document.getElementById('ipKH').value;
    var _soKw = document.getElementById('ipKwSuDung').value;
    var pTienThanhToan = document.getElementById('pTienThanhToan');
    var tienThanhToan = tinhTienThanhToan(_soKw);
    pTienThanhToan.innerHTML ="Tiền thanh toán giá điện của khách hàng " + ipKH + " là : " + tienThanhToan + " đồng"
}