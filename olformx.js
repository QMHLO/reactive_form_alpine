$(document).ready(function () {
  
  $('#tax_submit').on('click', function (e) {
    tax_form(e);
  });
  
  $('.estimation_selecter').on('change', function (e) {
    estimation_form(e);
  });
  
  $("#souzokunin").bind("input change", function (e) {
    tax_form_check(e)
  });
  
  $(".haigusha").bind("input change", function (e) {
    tax_form_check(e)
  });

  // 閾ｪ蜍募濠隗貞�蜉�
  $(".tbl_type01 input").blur(function(){
    changeZen($(this));
  });
  changeZen = function(ele){
      var val = ele.val();
      var han = val.replace( /[�｡-�ｺ��-�夲ｼ�-�呻ｼ搾ｼ≫晢ｼ�ｼ�ｼ�ｼ�呻ｼ茨ｼ会ｼ晢ｼ懶ｼ橸ｼ鯉ｼ趣ｼ滂ｼｿ�ｻ�ｽ�幢ｽ晢ｼ��ｾ�橸ｿ･]/g, function(s){return String.fromCharCode(s.charCodeAt(0) - 65248)});
      $(ele).val(han);
  }
  
});
  
//逶ｸ邯夂ｨ朱｡肴ｦらｮ励す繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ
function tax_form(e) {
  e.preventDefault();
  var isan_sogaku = get_value_num('input[name="isan_oku"]') * 100000000 + get_value_num('input[name="isan_man"]') * 10000;
  var sozokunin = get_value_num('input[name="legal_heir"]');
  var haigusya = $('input[name="spouse"]:checked').val();
  var zokugara = get_value_num('input[name="relationship"]:checked');
  var haiwari = get_value_num('select[name="rate"]');
  var zei_taisho = (isan_sogaku) - (30000000 + 6000000 * sozokunin);
  var hai_keigen = 0;
  var hai_tori = 0;
  var ko_tori = 0;
  var oya_tori = 0;
  var kyo_tori = 0;
  var hai_zei = 0;
  var ko_zei = 0;
  var oya_zei = 0;
  var kyo_zei = 0;
  var sozokuzei = 0;
  var test = 0;
  if (haigusya == 2) {
    //驟榊�閠�怏繧�
    switch (zokugara) {
    case 0:
        hai_tori = zei_taisho / 2;
        ko_tori = zei_taisho / 2 / (sozokunin - 1);
        hai_zei = zeikin(hai_tori);
        ko_zei = zeikin(ko_tori);
      break;
    //蟄�
    case 1:
        hai_tori = zei_taisho / 2;
        ko_tori = zei_taisho / 2 / (sozokunin - 1);
        hai_zei = zeikin(hai_tori);
        ko_zei = zeikin(ko_tori);
      break;
    //辷ｶ豈�
    case 2:
        hai_tori = zei_taisho * 2 / 3;
        oya_tori = zei_taisho / 3 / (sozokunin - 1);
        hai_zei = zeikin(hai_tori);
        oya_zei = zeikin(oya_tori);
      break;
  縲 //蜈�ｼ溷ｧ牙ｦｹ
      case 3:
        //zei_taisho = 458,000,000
        hai_tori = zei_taisho * 3 / 4;
        //hai_tori = 343,500,000
        kyo_tori = zei_taisho / 4 / (sozokunin - 1);
        //kyo_tori = 114,500,000
        hai_zei = zeikin(hai_tori);
        kyo_zei = zeikin(kyo_tori);
      break;
    }
    if (zokugara) {
      sozokuzei = (hai_zei + ko_zei * (sozokunin - 1) + oya_zei * (sozokunin - 1) + kyo_zei * (sozokunin - 1));  
    } else {
      sozokuzei = (zeikin(zei_taisho / sozokunin) * sozokunin);
    }
  } else if(haigusya == 1) {
    //驟榊�閠�┌縺�
    switch (zokugara) {
      //蟄�
    case 1:
        ko_tori = zei_taisho / sozokunin;
        ko_zei = zeikin(ko_tori);
      break;
    //辷ｶ豈�
    case 2:
        oya_tori = zei_taisho / sozokunin;
        oya_zei = zeikin(oya_tori);
      break;
  縲 //蜈�ｼ溷ｧ牙ｦｹ
    case 3:
        kyo_tori = zei_taisho / sozokunin;
        
        kyo_zei = zeikin(kyo_tori);
        
      break;
    }
    if (zokugara) {
      sozokuzei = (hai_zei + ko_zei * sozokunin + oya_zei * sozokunin + kyo_zei * sozokunin);
    } else {
      sozokuzei = (zeikin(zei_taisho / sozokunin) * sozokunin);
    }
    
  }
  //驟榊�閠�ｻｽ貂�
  if (haigusya == 2) {
    switch (zokugara) {
      //蟄�
    case 1:
        hai_tori = (isan_sogaku) / 2;
      break;
    //辷ｶ豈�
    case 2:
        hai_tori = (isan_sogaku) * 2 / 3;
      break;
  縲 //蜈�ｼ溷ｧ牙ｦｹ
    case 3:
        hai_tori = (isan_sogaku) * 3 / 4;
        // 375,000,000
      break;
    } 
    if (zokugara === 3) {
      toribun1 = sozokuzei * (haiwari / 100);
      toribun2 = (sozokuzei * ((100 - haiwari) / 100)) * 1.2;
      if (hai_tori > 160000000) {
        if (hai_tori > (isan_sogaku) / 100 * haiwari) {
          hai_keigen = sozokuzei * ((isan_sogaku) / 100 * haiwari) / (isan_sogaku);
        } else {
          hai_keigen = sozokuzei / (isan_sogaku) * hai_tori;
        }
      } else {
        if (160000000 > (isan_sogaku) / 100 * haiwari) {
          hai_keigen = sozokuzei * ((isan_sogaku) / 100 * haiwari) / (isan_sogaku);
        } else {
          hai_keigen = sozokuzei / (isan_sogaku) * 160000000;
        }
      }
    } else {
      if (hai_tori > 160000000) {
        if (hai_tori > (isan_sogaku) / 100 * haiwari) {
          hai_keigen = sozokuzei * ((isan_sogaku) / 100 * haiwari) / (isan_sogaku);
        } else {
          hai_keigen = sozokuzei / (isan_sogaku) * hai_tori;
        }
      } else {
        if (160000000 > (isan_sogaku) / 100 * haiwari) {
          hai_keigen = sozokuzei * ((isan_sogaku) / 100 * haiwari) / (isan_sogaku);
        } else {
          hai_keigen = sozokuzei / (isan_sogaku) * 160000000;
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
  
  // 蜈�
  // sozokuzei = sozokuzei - hai_keigen;
  
  
  
  
  
  
  
  
  if (validation()) {
    validation()
  } else {
    $('#necessary').text('');
    $('#result_oku').text('');
    $('#result_man').text(0);
    if ((isan_sogaku) - 30000000 - 6000000 * sozokunin > 0) {
      $('#necessary').text('蠢�ｦ�');
      $('#satori__creative_container').show();
      // alert(toribun1);
      // alert(toribun2);
      // if (zokugara === 3) {
      //   alert('kyodai');
      // }
      // setTimeout(function(){
      //     $('#satori__creative_container').show();
      //   }, 5000);
    } else {
      $('#necessary').text('荳崎ｦ�');
    }
    if (sozokunin < 2 && haigusya == 2) {
      
    } else {
      if (sozokuzei >= 1000) {
        if (sozokuzei >= 100000000) {
          $('#result_oku').text(Math.floor(sozokuzei / 100000000, 0));
        }
        $('#result_man').text(Math.ceil(sozokuzei / 10000, 0) - Math.floor(sozokuzei / 100000000, 0) * 10000); 
      }
    }
  }
}

//繝舌Μ繝��繧ｷ繝ｧ繝ｳ
function validation() {
  var souzokunin = parseInt($("#souzokunin").val());
  var haigusha = parseInt($(".haigusha:checked").val());
  var error_flg_01 = false;
  var error_flg_02 = false;
  var error_flg_03 = false;
  var error_flg_04 = false;
  if (!$('input[name = "isan_oku"]').val() && !$('input[name = "isan_man"]').val()) {
    error_flg_01 = true;
  } else {
    error_flg_02 = true;
  }
  $('input[name = "legal_heir"]').val() ? error_flg_02 = false : error_flg_02 = true;
  $('input[name="spouse"]:checked').val() ? error_flg_03 = false : error_flg_03 = true;
  if (souzokunin >= 2 && haigusha == 2 && !$('input[name="relationship"]:checked').val()) {
    error_flg_04 = true;
  } else {
    error_flg_04 = false;
  }
  if (error_flg_01 || error_flg_02 || error_flg_03 || error_flg_04) {
    error_flg_01 ? $('.error_01').show() : $('.error_01').hide();
    error_flg_02 ? $('.error_02').show() : $('.error_02').hide();
    error_flg_03 ? $('.error_03').show() : $('.error_03').hide();
    error_flg_04 ? $('.error_04').show() : $('.error_04').hide();
   $('#satori__creative_container').hide();
    $('#necessary').text('');
    $('#result_oku').text('');
    $('#result_man').text('');
    return true;
  } else {
    $('.errors li').hide();
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

//逶ｸ邯夂ｨ朱｡肴ｦらｮ励す繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ蜈･蜉幃��岼逶｣隕�
function tax_form_check(e) {
  e.preventDefault();
  var souzokunin = parseInt($("#souzokunin").val());
  var haigusha = parseInt($(".haigusha:checked").val());
  if ((souzokunin >= 2 && haigusha == 2) || isNaN(souzokunin)) {
    $(".haigusha_rate").removeAttr("disabled");   
  } else {
    $(".haigusha_rate").attr("disabled", "disabled");
  }
  if ((souzokunin == 1 && haigusha == 2) || isNaN(souzokunin)) {
    $(".zokugara").attr("disabled", "disabled");
    $(".zokugara").attr("checked", false);
  } else {
    $(".zokugara").removeAttr("disabled");
  }
}

//逕ｳ蜻頑侭驥第ｦらｮ励♀隕狗ｩ阪ｂ繧�
function estimation_form(e) {
  var selecter_name = $(e.currentTarget).attr('name');
  var heritage_num = get_value_num('select[name="heritage"]');
  var heirs_num = get_value_num('select[name="heirs"]');
  var lands_num = get_value_num('select[name="lands"]');
  var stocks_num = get_value_num('select[name="stocks"]');
  var all_price = heritage_num + lands_num + stocks_num;
  var heirs_price = heritage_num * heirs_num;
  var estimation_result = (all_price + heirs_price);
  var estimation_tax_result = (all_price + heirs_price) * 1.10;
  heirs_price = heirs_price * 10;
  heirs_price = Math.round(heirs_price);
  heirs_price = heirs_price / 10;
  $('#' + selecter_name + '_value').text($(e.currentTarget).val()); 
  $('#heirs_value').text(heirs_price);
  $('#estimation_result').text(estimation_result.toLocaleString());
  $('#estimation_tax_result').text(estimation_tax_result.toLocaleString());
}

//value蛟､蜿門ｾ鈴未謨ｰ
function get_value_num(target) {
  return Number($(target).val());
}

//遞守紫邂怜�
function zeikin(toribun) {
  var zeikin = 0;
  if (toribun <= 10000000) {
    zeikin = toribun * 0.1;
  } else if(toribun <= 30000000) {
    zeikin = toribun * 0.15 - 500000;
  } else if(toribun <= 50000000) {
    zeikin = toribun * 0.2 - 2000000;
  } else if(toribun <= 100000000) {
    zeikin = toribun * 0.3 - 7000000;
  } else if(toribun <= 200000000) {
    zeikin = toribun * 0.4 - 17000000;
  } else if(toribun <= 300000000) {
    zeikin = toribun * 0.45 - 27000000;
  } else if(toribun <= 600000000) {
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