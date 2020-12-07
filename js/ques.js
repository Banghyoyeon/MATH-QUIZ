//시작 버튼 누르면 뜨는 화면
function f_Ques() {
    var res = "<h1>정답을 맞혀보세요!</h1>";

    if(GetRadioChk("Pattern") == "hori") //가로모드일 때 화면
    {
        res += "<Table align='center' name='problem'>";
        res += f_Hori();
    }
    else //세로모드일 때 화면
    {
        res += "<Table align='center' name='problem' style='margin-top:0;margin-bottom:0;padding:0;font-size:30px;text-align: right;font-color:white;'>";
        res+= f_Verti();
    }
    res += "</Table>";
    $("div.list").html(res);
    $("#footer h1").html("점수 :&nbsp;&nbsp;&nbsp;&nbsp;점");
    $("#footer").show();
}

//가로 모드일 때 화면 (한 줄에 1개 총 10줄)
function f_Hori(){
    var res = "";
    for (var i = 0; i <= 9; i++) {            
            var OpArr = new Array();
            if(GetVal("Operator") == "+"){
                OpArr = f_Plus();
            }else if(GetVal("Operator") == "-"){
                OpArr = f_Minus();
            }else if(GetVal("Operator") == "X"){
                OpArr = f_Multiply()
            }else if(GetVal("Operator") == "÷"){
                OpArr = f_Division();
            }
            res += "<tr>"
                + "<td width='90'>" + OpArr[0] + "</td>"
                + "<td width='90'>"+ GetVal("Operator") +"</td>"
                + "<td width='90'>" + OpArr[1] + "</td>"
                + "<td width='90'> = </td>"
                + "<td width='90'>" 
                + "<input type=number name='answer"+i+"' class='answer'>";
                +"</td></tr>";
    }
    return res;
}

//세로 모드일 때 화면 (한 줄에 2개 총 5줄)
function f_Verti(){
    var res = "";
    for (var i = 0; i <= 4; i++) {            
        var OpArr1, OpArr1 = new Array();
        if(GetVal("Operator") == "+"){
            OpArr1 = f_Plus();
            OpArr2 = f_Plus();
        }else if(GetVal("Operator") == "-"){
            OpArr1 = f_Minus();
            OpArr2 = f_Minus();
        }else if(GetVal("Operator") == "X"){
            OpArr1 = f_Multiply()
            OpArr2 = f_Multiply()
        }else if(GetVal("Operator") == "÷"){
            OpArr1 = f_Division();
            OpArr2 = f_Division();
        }
        res += "<tr>"
            + "<td width='20'></td>"
            + "<td width='30'>" + OpArr1[0] + "</td>"
            + "<td width='30'></td>"
            + "<td width='30'></td>"
            + "<td width='30'>" + OpArr2[0] + "</td>"
            + "</tr>"
            + "<tr>"
            + "<td width='20'>"+ GetVal("Operator") +"</td>"
            + "<td width='30'>" + OpArr1[1] + "</td>"
            + "<td width='30'></td>"
            + "<td width='30'>"+ GetVal("Operator") +"</td>"
            + "<td width='30'>" + OpArr2[1] + "</td>"
            + "</tr>"
            + "<tr align='right'>"
            + "<td width='20'>=</td>"
            + "<td width='30'>"
            + "<input type=number name='answer1"+i+"' class='verti'>"
            + "</td>"
            + "<td width='30'></td>"
            + "<td width='30'>=</td>"
            + "<td width='30'>"
            + "<input type=number name='answer2"+i+"' class='verti'>"
            + "</td>"
            + "</tr>";
    }
    return res;
}

// 덧셈일 때 피연산자 지정
function f_Plus(){
    var res = new Array();
    do {
        //Math.random() : 0에서 1미만의 난수를 만듦 (0.0~0.99, double형)
        //Math.random() * 5 : 0이상 5미만의 난수 (0.0~4.99)
        //Math.random() * 5 + 1 : 1이상 6미만의 난수 (1.0~5.99)
        //Math.floor() : 소수값이 있을 때 소수점 이하를 버림
        //Math.floor((Math.random() * 10) + 1) : 1이상 11미만의 정수
        res[0] =  Math.floor((Math.random() * GetVal("Operand_1")) + 1);       
        res[1] =  Math.floor((Math.random() * GetVal("Operand_2")) + 1);
    }while (false)
        return res;  
return;
}

// 뺄셈일 때 피연산자 지정 (피연산자1 <= 피연산자2)
function f_Minus(){
    var res = new Array();
    do{
        res[0] =  Math.floor((Math.random() * GetVal("Operand_1")) + 1);       
        res[1] =  Math.floor((Math.random() * GetVal("Operand_2")) + 1);
    }while (res[0] <= res[1])
        return res;  
    return;
}

// 곱셈일 때 피연산자 지정 (피연산자1 <= 피연산자2)
function f_Multiply(){
    var res = new Array();
    do{
        res[0] =  Math.floor((Math.random() * GetVal("Operand_1")) + 1);       
        res[1] =  Math.floor((Math.random() * GetVal("Operand_2")) + 1);
    }while (res[0] <= res[1])
        return res;  
    return;
}

// 나눗셈일 때 피연산자 지정 (1. 나머지 0 / 2. A > B / 3. A!=B / 세 가지 동시에 만족)
function f_Division(){
    var res = new Array();
    do{
        res[2] = true;
        res[0] =  Math.floor((Math.random() * GetVal("Operand_1")) + 1);       
        res[1] =  Math.floor((Math.random() * GetVal("Operand_2")) + 1);        
    }while (!(res[0] % res[1] == 0 && res[0] != res[1]))
        return res;     
}

// 계산기 기능 팝업창으로 오픈
function f_calc() {
    window.open("calc.html", "a", "width=460, height=632, left=100, top=50");
}