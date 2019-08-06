var File = require("fs")
//var Duong_dan_Thu_muc_Du_lieu = "Du_lieu_Luu_tru"

function Doc_Thong_tin_Cua_hang() {
   // var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Cua_hang.json"
  //  var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8") // Đồng bộ
    var Chuoi_JSON=File.readFileSync(`./Dich_vu_Du_lieu/Du_lieu_Luu_tru/Cua_hang.json`,`UTF-8`)
    var Cua_hang = JSON.parse(Chuoi_JSON)
    return Cua_hang
}


class XL_LUU_TRU {
    Doc_Du_lieu() {
        var Du_lieu = {}
        Du_lieu.Cua_hang = Doc_Thong_tin_Cua_hang()
        return Du_lieu
    }
}

var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly