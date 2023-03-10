$(document).ready(function () {
  // $("#tax_submit").on("click", function (e) {
  //   tax_form(e);
  // });
  document.getElementById("print_btn").addEventListener("click", (e) => {
    e.preventDefault();
    print();
  });

  // $("#show_result").on("click", function (e) {
  //   tax_form(e);
  //   const answerBlock = document.querySelector(".answer_block");
  //   answerBlock.style.display = "block";
  //   document.getElementById("caution").style.display = "block";

  //   document.getElementById("yresult").innerText = y_result_text();
  //   if (sozokuzei < 0 || isNaN(sozokuzei)) {
  //     document.getElementById("zresult").innerText = y_result_text();
  //   } else {
  //     document.getElementById("zresult").innerText = z_result_text();
  //   }
  //   document.getElementById("zresult1")?.remove();
  // });

  $(".estimation_selecter").on("change", function (e) {
    estimation_form(e);
  });

  $("#souzokunin").bind("input change", function (e) {
    tax_form_check(e);
  });

  $(".haigusha").bind("input change", function (e) {
    tax_form_check(e);
  });

  // 自動半角入力
  $(".tbl_type01 input").blur(function () {
    changeZen($(this));
  });
  changeZen = function (ele) {
    var val = ele.val();
    var han = val.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    $(ele).val(han);
  };
});

var isan_sogaku;
var sozokunin;
var haigusya;
var zokugara;
var haiwari;
var lands_value;
var stock_value;
var sozokuzei = 0;
// var zei_taisho;

//相続税額概算シミュレーション
function tax_form() {
  var zei_taisho = isan_sogaku - (30_000_000 + 6_000_000 * sozokunin);

  var hai_keigen = 0;
  var hai_tori = 0;
  var ko_tori = 0;
  var oya_tori = 0;
  var kyo_tori = 0;
  var hai_zei = 0;
  var ko_zei = 0;
  var oya_zei = 0;
  var kyo_zei = 0;
  var test = 0;

  if (haigusya == 2) {
    //配偶者有り
    switch (zokugara) {
      case 0:
        hai_tori = zei_taisho / 2;
        ko_tori = zei_taisho / 2 / (sozokunin - 1);
        hai_zei = zeikin(hai_tori);
        ko_zei = zeikin(ko_tori);
        break;
      //子
      case 1:
        hai_tori = zei_taisho / 2;
        ko_tori = zei_taisho / 2 / (sozokunin - 1);
        hai_zei = zeikin(hai_tori);
        ko_zei = zeikin(ko_tori);
        break;
      //父母
      case 2:
        hai_tori = (zei_taisho * 2) / 3;
        oya_tori = zei_taisho / 3 / (sozokunin - 1);
        hai_zei = zeikin(hai_tori);
        oya_zei = zeikin(oya_tori);
        break; //兄弟姉妹
      case 3:
        //zei_taisho = 458,000,000
        hai_tori = (zei_taisho * 3) / 4;
        //hai_tori = 343,500,000
        kyo_tori = zei_taisho / 4 / (sozokunin - 1);
        //kyo_tori = 114,500,000
        hai_zei = zeikin(hai_tori);
        kyo_zei = zeikin(kyo_tori);
        break;
    }
    if (zokugara) {
      sozokuzei = hai_zei + ko_zei * (sozokunin - 1) + oya_zei * (sozokunin - 1) + kyo_zei * (sozokunin - 1);
    } else if (!zokugara || isNaN(zokugara)) {
      // do nothing
    } else {
      sozokuzei = zeikin(zei_taisho / sozokunin) * sozokunin;
    }
  } else if (haigusya == 1) {
    //配偶者無し
    switch (zokugara) {
      //子
      case 1:
        ko_tori = zei_taisho / sozokunin;
        ko_zei = zeikin(ko_tori);
        break;
      //父母
      case 2:
        oya_tori = zei_taisho / sozokunin;
        oya_zei = zeikin(oya_tori);
        break; //兄弟姉妹
      case 3:
        kyo_tori = zei_taisho / sozokunin;

        kyo_zei = zeikin(kyo_tori);

        break;
    }
    if (zokugara) {
      sozokuzei = hai_zei + ko_zei * sozokunin + oya_zei * sozokunin + kyo_zei * sozokunin;
    } else if (!zokugara || isNaN(zokugara)) {
      // do nothing
    } else {
      sozokuzei = zeikin(zei_taisho / sozokunin) * sozokunin;
    }
  }
  //配偶者軽減
  if (haigusya == 2) {
    switch (zokugara) {
      //子
      case 1:
        hai_tori = isan_sogaku / 2;
        break;
      //父母
      case 2:
        hai_tori = (isan_sogaku * 2) / 3;
        break; //兄弟姉妹
      case 3:
        hai_tori = (isan_sogaku * 3) / 4;
        // 375,000,000
        break;
    }
    if (zokugara === 3) {
      toribun1 = sozokuzei * (haiwari / 100);
      toribun2 = sozokuzei * ((100 - haiwari) / 100) * 1.2;
      if (hai_tori > 160000000) {
        if (hai_tori > (isan_sogaku / 100) * haiwari) {
          hai_keigen = (sozokuzei * ((isan_sogaku / 100) * haiwari)) / isan_sogaku;
        } else {
          hai_keigen = (sozokuzei / isan_sogaku) * hai_tori;
        }
      } else if (!zokugara || isNaN(zokugara)) {
        // do nothing
      } else {
        if (160000000 > (isan_sogaku / 100) * haiwari) {
          hai_keigen = (sozokuzei * ((isan_sogaku / 100) * haiwari)) / isan_sogaku;
        } else {
          hai_keigen = (sozokuzei / isan_sogaku) * 160000000;
        }
      }
    } else if (!zokugara || isNaN(zokugara)) {
      // do nothing
    } else {
      if (hai_tori > 160000000) {
        if (hai_tori > (isan_sogaku / 100) * haiwari) {
          hai_keigen = (sozokuzei * ((isan_sogaku / 100) * haiwari)) / isan_sogaku;
        } else {
          hai_keigen = (sozokuzei / isan_sogaku) * hai_tori;
        }
      } else {
        if (160000000 > (isan_sogaku / 100) * haiwari) {
          hai_keigen = (sozokuzei * ((isan_sogaku / 100) * haiwari)) / isan_sogaku;
        } else {
          hai_keigen = (sozokuzei / isan_sogaku) * 160000000;
        }
      }
    }
  }

  if (zokugara === 3) {
    if (haigusya == 1) {
      sozokuzei = (hai_zei + ko_zei * sozokunin + oya_zei * sozokunin + kyo_zei * sozokunin) * 1.2;
    } else {
      sozokuzei = toribun1 + toribun2 - hai_keigen;
    }
  } else {
    sozokuzei = sozokuzei - hai_keigen;
  }

  // if (haigusya == 1) {
  //   if (zokugara === 3) {
  //     sozokuzei = sozokuzei - hai_keigen * 1.2;
  //   } else {
  //     sozokuzei = sozokuzei - hai_keigen;
  //   }
  // } else {
  //   if (zokugara === 3) {
  //     sozokuzei = toribun1 + toribun2 - hai_keigen;
  //   } else {
  //     sozokuzei = sozokuzei - hai_keigen;
  //   }
  // }

  // 元
  // sozokuzei = sozokuzei - hai_keigen;

  document.getElementById("xresult1")?.remove();
  if (sozokuzei < 0 || isNaN(sozokuzei)) {
    document.getElementById("xresult").innerText = 0;
  } else {
    document.getElementById("xresult").innerText = localize_amount(sozokuzei);
  }

  if (validation()) {
    validation();
  } else {
    $("#necessary").text("");
    $("#result_oku").text("");
    $("#result_man").text(0);
    if (isan_sogaku - 30000000 - 6000000 * sozokunin > 0) {
      $("#necessary").text("必要");
      $("#satori__creative_container").show();
      // alert(toribun1);
      // alert(toribun2);
      // if (zokugara === 3) {
      //   alert('kyodai');
      // }
      // setTimeout(function(){
      //     $('#satori__creative_container').show();
      //   }, 5000);
    } else {
      $("#necessary").text("不要");
    }
    if (sozokunin < 2 && haigusya == 2) {
    } else {
      if (sozokuzei >= 1000) {
        if (sozokuzei >= 100000000) {
          $("#result_oku").text(Math.floor(sozokuzei / 100000000, 0));
        }
        $("#result_man").text(Math.ceil(sozokuzei / 10000, 0) - Math.floor(sozokuzei / 100000000, 0) * 10000);
      }
    }
  }
}

//バリデーション
function validation() {
  var souzokunin = parseInt(sozokunin);
  var haigusha = parseInt(haigusya);
  var error_flg_01 = false;
  var error_flg_02 = false;
  var error_flg_03 = false;
  var error_flg_04 = false;
  if (!isan_sogaku) {
    error_flg_01 = true;
  } else {
    error_flg_02 = true;
  }
  sozokunin ? (error_flg_02 = false) : (error_flg_02 = true);
  haigusya ? (error_flg_03 = false) : (error_flg_03 = true);
  if (souzokunin >= 2 && haigusha == 2 && zokugara) {
    error_flg_04 = true;
  } else {
    error_flg_04 = false;
  }
  if (error_flg_01 || error_flg_02 || error_flg_03 || error_flg_04) {
    error_flg_01 ? $(".error_01").show() : $(".error_01").hide();
    error_flg_02 ? $(".error_02").show() : $(".error_02").hide();
    error_flg_03 ? $(".error_03").show() : $(".error_03").hide();
    error_flg_04 ? $(".error_04").show() : $(".error_04").hide();
    $("#satori__creative_container").hide();
    $("#necessary").text("");
    $("#result_oku").text("");
    $("#result_man").text("");
    return true;
  } else {
    $(".errors li").hide();
    $("#satori__creative_container").hide();
    /*$("#tax_submit").click( function(){
        setTimeout(function(){
          $('#satori__creative_container').show();
        }, 5000);
    });
    return false;*/
    // setTimeout(function(){
    //       $('#satori__creative_container').show();
    //     }, 5000);
  }
}

//相続税額概算シミュレーション入力項目監視
// function tax_form_check(e) {
//   e.preventDefault();
//   var souzokunin = parseInt($("#souzokunin").val());
//   var haigusha = parseInt($(".haigusha:checked").val());
//   if ((souzokunin >= 2 && haigusha == 2) || isNaN(souzokunin)) {
//     $(".haigusha_rate").removeAttr("disabled");
//   } else {
//     $(".haigusha_rate").attr("disabled", "disabled");
//   }
//   if ((souzokunin == 1 && haigusha == 2) || isNaN(souzokunin)) {
//     $(".zokugara").attr("disabled", "disabled");
//     $(".zokugara").attr("checked", false);
//   } else {
//     $(".zokugara").removeAttr("disabled");
//   }
// }

//申告料金概算お見積もり
function estimation_form(e) {
  var selecter_name = $(e.currentTarget).attr("name");
  var heritage_num = get_value_num('select[name="heritage"]');
  var heirs_num = get_value_num('select[name="heirs"]');
  var lands_num = get_value_num('select[name="lands"]');
  var stocks_num = get_value_num('select[name="stocks"]');
  var all_price = heritage_num + lands_num + stocks_num;
  var heirs_price = heritage_num * heirs_num;
  var estimation_result = all_price + heirs_price;
  var estimation_tax_result = (all_price + heirs_price) * 1.1;
  heirs_price = heirs_price * 10;
  heirs_price = Math.round(heirs_price);
  heirs_price = heirs_price / 10;
  $("#" + selecter_name + "_value").text($(e.currentTarget).val());
  $("#heirs_value").text(heirs_price);
  $("#estimation_result").text(estimation_result.toLocaleString());
  $("#estimation_tax_result").text(estimation_tax_result.toLocaleString());
}

//value値取得関数
function get_value_num(target) {
  return Number($(target).val());
}

//税率算出
function zeikin(toribun) {
  var zeikin = 0;
  // console.log("toribun", toribun);
  if (toribun <= 10000000) {
    zeikin = toribun * 0.1;
  } else if (toribun <= 30000000) {
    zeikin = toribun * 0.15 - 500000;
  } else if (toribun <= 50000000) {
    zeikin = toribun * 0.2 - 2000000;
  } else if (toribun <= 100000000) {
    zeikin = toribun * 0.3 - 7000000;
  } else if (toribun <= 200000000) {
    zeikin = toribun * 0.4 - 17000000;
  } else if (toribun <= 300000000) {
    zeikin = toribun * 0.45 - 27000000;
  } else if (toribun <= 600000000) {
    zeikin = toribun * 0.5 - 42000000;
  } else if (toribun > 600000000) {
    zeikin = toribun * 0.55 - 72000000;
  }
  return zeikin;
}

// $(document).ready(function () {
//      $(function() {
//     $("#satori__creative_container").hide();
//     $("#tax_submit").click( function(){
//         setTimeout(function(){
//           $('#satori__creative_container').show();
//         }, 5000);
//     });
// });

//     });

//Check Heritage Value
let heritage;
const Yresult = document.getElementById("yresult");

function modifyHeritage(heritage_interval) {
  if (heritage_interval <= 5000) {
    heritage = 25;
  } else if (heritage_interval <= 6000) {
    heritage = 35;
  } else if (heritage_interval <= 7000) {
    heritage = 40;
  } else if (heritage_interval <= 8000) {
    heritage = 45;
  } else if (heritage_interval <= 10000) {
    heritage = 50;
  } else if (heritage_interval <= 15000) {
    heritage = 65;
  } else if (heritage_interval <= 20000) {
    heritage = 80;
  } else if (heritage_interval <= 25000) {
    heritage = 100;
  } else if (heritage_interval <= 30000) {
    heritage = 120;
  } else if (heritage_interval <= 40000) {
    heritage = 150;
  } else if (heritage_interval <= 50000) {
    heritage = 180;
  } else {
    heritage = undefined;
    if (heritage === undefined) {
      Yresult.innerHTML = "別途お見積り";
    }
  }
}

function land_factor(x) {
  return x > 0 ? 5 * (x - 1) + 4 : 0;
}
let heirs;
function changeHeirs() {
  if (sozokunin < 2) {
    heirs = 0;
  } else if (sozokunin === 2) {
    heirs = 0.1;
  } else if (sozokunin === 3) {
    heirs = 0.2;
  } else {
    heirs = 0.3;
  }
}

function localize_amount(value) {
  let result = "";
  if (value > 1_0000_0000) {
    result = `${Math.floor(value / 1_0000_0000)}億 `;
  }

  if (value > 1_0000) {
    let men_value = value % 1_0000_0000;
    result += `${Math.ceil(men_value / 1_0000)}万円`;
  }

  if (value < 1_0000) {
    result += `${value}円`;
  }

  return result;
}

function localize_with_decimal(value) {
  let result = "";
  if (value > 1_0000_0000) {
    result = `${Math.floor(value / 1_0000_0000)}億 `;
  }

  if (value > 1_0000) {
    let men_value = value % 1_0000_0000;
    let calculation_result = (men_value / 1_0000).toFixed(2);
    result += Number(calculation_result) + "万円";
  }

  return result;
}

function y_result_text() {
  if (heritage === undefined) {
    return "別途お見積り";
  } else if (lands_value === undefined || stock_value === undefined) {
    return "STEP3を入力したら概算を計算できます";
  } else {
    var y = (heritage + heritage * heirs + lands_value + stock_value) * 10000;
    return localize_with_decimal(y) + `（税込${localize_with_decimal(y * 1.1)}）`;
  }
}

function z_result_text() {
  if (heritage === undefined) {
    return "別途お見積り";
  } else if (lands_value === undefined || stock_value === undefined) {
    return "STEP3を入力したら概算を計算できます";
  } else {
    let y = (heritage + heritage * heirs + lands_value + stock_value) * 10000;
    let z = sozokuzei + y;
    let z_with_tax = sozokuzei + y * 1.1;
    return localize_with_decimal(z) + `（税込${localize_with_decimal(z_with_tax)}）`;
  }
}
