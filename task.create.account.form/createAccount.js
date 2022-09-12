"use strict";
    /*** REGION 1 - Vùng khai báo biến toàn cục */
    
    /*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
        $("#btn-sign-up").on("click", function(e){
            e.preventDefault(); // hàm ngăn chặn sự kiện mặc định
            onBtnSignUpClick();
        });
    /*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
        // hàm sự kiện nhấn nút sign up
        function onBtnSignUpClick(){
            "use strict";
            // bước 0: tạo đối tượng chứa dữ liệu từ form
            var vUserObject = {
                name: "",
                email: "",
                password: "",
                repeatPassword: "",
                agreeStatments: false
            };
            // bước 1: thu thập dữ liệu
            getDataFromForm(vUserObject);
            // bước 2: kiểm tra dữ liệu
            var vCheck = validateData(vUserObject);
            // bước 3: hiển thị dữ liệu
            if (vCheck == true){
                displayData(vUserObject);
            }
        }
    /*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
        // hàm thu thập dữ liệu
        function getDataFromForm(paramUser){
            "use strict";
            var vInputUserName = $("#inp-yourname").val();
            var vInputUserEmail = $("#inp-email").val();
            var vInputPassword = $("#pwd-password").val();
            var vInputRepeatPassword = $("#pwd-prepeat-password").val();

            if($("#ckb-agree-statements").is(":checked") == true){
                var vAgree = true;
            }
            else {
                var vAgree = false;
            }

            paramUser.name= vInputUserName;
            paramUser.email = vInputUserEmail
            paramUser.password = vInputPassword;
            paramUser.repeatPassword = vInputRepeatPassword;
            paramUser.agreeStatments = vAgree;
        }
        
        // hàm kiểm tra dữ liệu
        function validateData(paramUser){
            "use strict";
            var vUsername = paramUser.name;
            var vUserEmail = paramUser.email;
            var vPassword = paramUser.password;
            var vRepeatPassword = paramUser.repeatPassword;
            var vAgreeStatements = paramUser.agreeStatments;

            if (vUsername == ""){
                alert("Your Name is empty!");
                return false;
            }

            if (vUserEmail == ""){
                alert("Email is empty!");
                return false;
            }

            if(validateEmail(vUserEmail) == false){
                alert("Email input is invalid!");
                return false;
            }

            if (vPassword.length < 8){
                alert("Password must have at least 8 characters!");
                return false;
            }

            if (vPassword !== vRepeatPassword){
                alert("Password and confirm password does not match!");
                return false;
            }

            if (vAgreeStatements == false){
                alert("You have to agree all statments in Terms of service!");
                return false;
            }

            // validate form với htmls
            if($("#form-create-account")[0].checkValidity()== true){
                console.log("Form hợp lệ");
            }
            else {
                $("#form-create-account")[0].reportValidity();
            }

            return true;
        }

        // Hàm kiểm tra định dạng email
        function validateEmail(paramEmail) {
            var vValidRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (paramEmail.match(vValidRegex)) {
                return true;
                } else {
                return false;
                }
        }

        // hàm hiển thị dữ liệu
        function displayData(paramUser){
            "use strict";
            console.log(paramUser);
        }