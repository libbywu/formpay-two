 
 //upload
        $(function () {
            $('.uploadbutton').on('change', '.input-file', function (event) {
                $(this).siblings('.input-file-text').html(this.value);
            });

//選擇申請 - 個人 or 公司

            $("#application_company").on("click" , function(){
                if ($(this).prop("checked")) {
                    $("#form_company").show();
                    $("#form_oneself").hide();
                }
             });
             $("#application_oneself").on("click" , function(){
                if ($(this).prop("checked")) {
                    $("#form_oneself").show();
                    $("#form_company").hide();
                }
             });
 
 //選擇客服類型 - 公司
 
             $("#services_line").on("click" , function(){
                 if ($(this).prop("checked" , true)) {
                     $("#services_line_open").toggle();
                     $("#services_tel_open").hide();
                     $("#services_mobile_open").hide();
                 }
             });
             $("#services_tel").on("click" , function(){
                 if ($(this).prop("checked" , true)) {
                     $("#services_line_open").hide();
                     $("#services_tel_open").toggle();
                     $("#services_mobile_open").hide();
                 }
             });
             $("#services_mobile").on("click" , function(){
                 if ($(this).prop("checked" , true)) {
                     $("#services_line_open").hide();
                     $("#services_tel_open").hide();
                     $("#services_mobile_open").toggle();
                 }
             });
 
 //選擇客服類型 - 個人
 
             $("input[id='personal_line']").on("click" , function(){
                 if ($(this).prop("checked" , true)) {
                     $("#personal_line_open").toggle();
                     $("#personal_tel_open").hide();
                     $("#personal_mobile_open").hide();
                 }
             });
 
 
             $("input[id='personal_tel']").on("click" , function(){
                 if ($(this).prop("checked")) {
                     $("#personal_line_open").hide();
                     $("#personal_tel_open").toggle();
                     $("#personal_mobile_open").hide();                }
             });
 
             $("input[id='personal_mobile']").on("click" , function(){
                 if ($(this).prop("checked")) {
                     $("#personal_line_open").hide();
                     $("#personal_tel_open").hide();
                     $("#personal_mobile_open").toggle();
                 }
             });
 
 //新增營業地址
             $("input[name='really_address_btn']").change(function(){
                 if ($(this).is(':checked')) {
                     $("#open-address").css("display" , "none");
                     } else{
                         $("#open-address").css("display" , "block");
                     }
             });
             $("input[name='personal_really_address_btn']").change(function(){
                 if ($(this).is(':checked')) {
                     $("#personal-open-address").css("display" , "none");
                     } else{
                         $("#personal-open-address").css("display" , "block");
                     }
             });


    
        }); 
