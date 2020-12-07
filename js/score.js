// 채점 기능
function f_Scoring() {
    if (GetRadioChk("Pattern") == "hori") { //가로일 때 점수 계산
        var RowTd = new Array();
        var AnsArr = new Array();
        var cnt = 0;
        var trArr = $(".list tbody tr");
        for (var i = 0; i < trArr.length; i++) {
            var tdArr = trArr.eq(i).find('td');
            for (var x = 0; x <= 3; x++) {
                RowTd[x] = tdArr.eq(x).text();
            }

            switch (RowTd[1]) {
                case "+":
                    AnsArr[i] = (parseInt(GetTxtVal("answer" + (i))) == (parseInt(RowTd[0]) + parseInt(RowTd[2])))
                    break;
                case "-":
                    AnsArr[i] = (parseInt(GetTxtVal("answer" + (i))) == (parseInt(RowTd[0]) - parseInt(RowTd[2])))
                    break;
                case "X":
                    AnsArr[i] = (parseInt(GetTxtVal("answer" + (i))) == (parseInt(RowTd[0]) * parseInt(RowTd[2])))
                    break;
                case "÷":
                    AnsArr[i] = (parseInt(GetTxtVal("answer" + (i))) == (parseInt(RowTd[0]) / parseInt(RowTd[2])))
                    break;
            }
            if (AnsArr[i]) {
                $("input[name='answer" + i + "']").attr('style', 'color:#30C0FF');
            } else {
                $("input[name='answer" + i + "']").attr('style', 'color:#FF8080');
            }
        }
    } else { //세로일 때 점수 계산
        var RowTd = new Array();
        var AnsArr = new Array();
        var cnt = 0;
        var trArr = $(".list tbody tr");
        var A = 0, a = 0;

        for (var i = 0; i < 15; i += 3) {
            var tdArr = trArr.eq(i).find('td');
            RowTd[0] = tdArr.eq(1).text();
            RowTd[1] = tdArr.eq(4).text();
        
            var tdArr = trArr.eq(i + 1).find('td');
            RowTd[2] = tdArr.eq(0).text();
            RowTd[3] = tdArr.eq(1).text();
            RowTd[4] = tdArr.eq(4).text();

            switch (RowTd[2]) {
                case "+":
                    AnsArr[A] = (parseInt(GetTxtVal("answer1" + (a))) == (parseInt(RowTd[0]) + parseInt(RowTd[3])));
                    AnsArr[A + 1] = (parseInt(GetTxtVal("answer2" + (a))) == (parseInt(RowTd[1]) + parseInt(RowTd[4])));
                    break;
                case "-":
                    AnsArr[A] = (parseInt(GetTxtVal("answer1" + (a))) == (parseInt(RowTd[0]) - parseInt(RowTd[3])));
                    AnsArr[A + 1] = (parseInt(GetTxtVal("answer2" + (a))) == (parseInt(RowTd[1]) - parseInt(RowTd[4])));
                    break;
                case "X":
                    AnsArr[A] = (parseInt(GetTxtVal("answer1" + (a))) == (parseInt(RowTd[0]) * parseInt(RowTd[3])));
                    AnsArr[A + 1] = (parseInt(GetTxtVal("answer2" + (a))) == (parseInt(RowTd[1]) * parseInt(RowTd[4])));
                    break;
                case "÷":
                    AnsArr[A] = (parseInt(GetTxtVal("answer1" + (a))) == (parseInt(RowTd[0]) / parseInt(RowTd[3])));
                    AnsArr[A + 1] = (parseInt(GetTxtVal("answer2" + (a))) == (parseInt(RowTd[1]) / parseInt(RowTd[4])));
                    break;
            }
            if (AnsArr[A]) {
                $("input[name='answer1" + a + "']").attr('style', 'color:#30C0FF');
            } else {
                $("input[name='answer1" + a + "']").attr('style', 'color:#FF8080');
            }
            if (AnsArr[A + 1]) {
                $("input[name='answer2" + a + "']").attr('style', 'color:#30C0FF');
            } else {
                $("input[name='answer2" + a + "']").attr('style', 'color:#FF8080');
            }
            a++; A += 2;
        }
    }
    AnsArr.forEach(e => {
        if (e) cnt++;
    });
    $("#footer h1").html("점수 : " + (cnt * 10) + "점");
}

// select로 선언된 기능 중에서 name=name인 것의 value 값을 리턴
function GetVal(name){
    return $("select[name='"+ name +"']").val();
}

// input으로 선언된 기능 중에서 name=name인 것의 value 값을 리턴
function GetTxtVal(name){
    return $("input[name='"+ name +"']").val();
}

// input으로 선언된 기능 중에서 name=name인 것 중 check된 것의 value 값을 리턴
function GetRadioChk(name){
    return $("input[name='"+ name +"']:checked").val();
}