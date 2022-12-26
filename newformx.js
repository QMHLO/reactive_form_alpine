//逶ｸ邯夂ｨ朱｡肴ｦらｮ励す繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ
function tax_form(e) {
    e.preventDefault();
    var step1_result;
    var total_inheritance = step1_result * 10000;
    var no_heir; // 1-10 or 2-10
    var have_spouse;//あり or なし
    var zokugara;//子 or 兄弟姉妹 or 父母 or いない
    var inherit_rate ;//0-100
    var taxable = (total_inheritance) - (30000000 + 6000000 * no_heir);
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
    if (have_spouse == 2) {
      //驟榊�閠�怏繧�
      switch (zokugara) {
      case 0:
          hai_tori = taxable / 2;
          ko_tori = taxable / 2 / (no_heir - 1);
          hai_zei = zeikin(hai_tori);
          ko_zei = zeikin(ko_tori);
        break;
      //蟄�
      case 1:
          hai_tori = taxable / 2;
          ko_tori = taxable / 2 / (no_heir - 1);
          hai_zei = zeikin(hai_tori);
          ko_zei = zeikin(ko_tori);
        break;
      //辷ｶ豈�
      case 2:
          hai_tori = taxable * 2 / 3;
          oya_tori = taxable / 3 / (no_heir - 1);
          hai_zei = zeikin(hai_tori);
          oya_zei = zeikin(oya_tori);
        break;
    縲 //蜈�ｼ溷ｧ牙ｦｹ
        case 3:
          //taxable = 458,000,000
          hai_tori = taxable * 3 / 4;
          //hai_tori = 343,500,000
          kyo_tori = taxable / 4 / (no_heir - 1);
          //kyo_tori = 114,500,000
          hai_zei = zeikin(hai_tori);
          kyo_zei = zeikin(kyo_tori);
        break;
      }
      if (zokugara) {
        sozokuzei = (hai_zei + ko_zei * (no_heir - 1) + oya_zei * (no_heir - 1) + kyo_zei * (no_heir - 1));  
      } else {
        sozokuzei = (zeikin(taxable / no_heir) * no_heir);
      }
    } else if(have_spouse == 1) {
      //驟榊�閠�┌縺�
      switch (zokugara) {
        //蟄�
      case 1:
          ko_tori = taxable / no_heir;
          ko_zei = zeikin(ko_tori);
        break;
      //辷ｶ豈�
      case 2:
          oya_tori = taxable / no_heir;
          oya_zei = zeikin(oya_tori);
        break;
    縲 //蜈�ｼ溷ｧ牙ｦｹ
      case 3:
          kyo_tori = taxable / no_heir;
          
          kyo_zei = zeikin(kyo_tori);
          
        break;
      }
      if (zokugara) {
        sozokuzei = (hai_zei + ko_zei * no_heir + oya_zei * no_heir + kyo_zei * no_heir);
      } else {
        sozokuzei = (zeikin(taxable / no_heir) * no_heir);
      }
      
    }
    //驟榊�閠�ｻｽ貂�
    if (have_spouse == 2) {
      switch (zokugara) {
        //蟄�
      case 1:
          hai_tori = (total_inheritance) / 2;
        break;
      //辷ｶ豈�
      case 2:
          hai_tori = (total_inheritance) * 2 / 3;
        break;
    縲 //蜈�ｼ溷ｧ牙ｦｹ
      case 3:
          hai_tori = (total_inheritance) * 3 / 4;
          // 375,000,000
        break;
      } 
      if (zokugara === 3) {
        toribun1 = sozokuzei * (inherit_rate / 100);
        toribun2 = (sozokuzei * ((100 - inherit_rate) / 100)) * 1.2;
        if (hai_tori > 160000000) {
          if (hai_tori > (total_inheritance) / 100 * inherit_rate) {
            hai_keigen = sozokuzei * ((total_inheritance) / 100 * inherit_rate) / (total_inheritance);
          } else {
            hai_keigen = sozokuzei / (total_inheritance) * hai_tori;
          }
        } else {
          if (160000000 > (total_inheritance) / 100 * inherit_rate) {
            hai_keigen = sozokuzei * ((total_inheritance) / 100 * inherit_rate) / (total_inheritance);
          } else {
            hai_keigen = sozokuzei / (total_inheritance) * 160000000;
          }
        }
      } else {
        if (hai_tori > 160000000) {
          if (hai_tori > (total_inheritance) / 100 * inherit_rate) {
            hai_keigen = sozokuzei * ((total_inheritance) / 100 * inherit_rate) / (total_inheritance);
          } else {
            hai_keigen = sozokuzei / (total_inheritance) * hai_tori;
          }
        } else {
          if (160000000 > (total_inheritance) / 100 * inherit_rate) {
            hai_keigen = sozokuzei * ((total_inheritance) / 100 * inherit_rate) / (total_inheritance);
          } else {
            hai_keigen = sozokuzei / (total_inheritance) * 160000000;
          }
        }
      }
      
    }
    
    if (zokugara === 3) {
      if (have_spouse == 1) { 
        sozokuzei = (hai_zei + ko_zei * no_heir + oya_zei * no_heir + kyo_zei * no_heir) * 1.2;
      } else {
        sozokuzei = toribun1 + toribun2 - hai_keigen;
      }
    } else {
      sozokuzei = sozokuzei - hai_keigen;
    }
    
    // if (have_spouse == 1) {
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
      if ((total_inheritance) - 30000000 - 6000000 * no_heir > 0) {
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
      if (no_heir < 2 && have_spouse == 2) {
        
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




