var tmp = document.getElementById('tmp');
var input = document.getElementById('input');

/* AC 눌렀을 때 tmp, input 초기화 */
function all_del() {
    tmp.innerText = "";
    input.innerText = "";
}

/* C 눌렀을 때 input 초기화 */
function del() {
    input.innerText = "";
}

/* <- 눌렀을 때 하나씩 초기화 */
function back() {
    if (input.innerText == "") { //input이 비었으면
        if (tmp.innerText == "") { //tmp도 비었으면
            //아무것도 하지 않음
        } else { //tmp에는 지울게 있으면
            tmp.innerText = tmp.innerText.slice(0,-1);
        }
    } else { //input이 있으면
        input.innerText = input.innerText.slice(0,-1);
    }
}

/* 뒤에 문자열 추가 */
function add(char) {
    if (input.innerText.length > 16) { //input 길이가 16 초과면
        input.innerText = input.innerText.slice(0,-1);
        return alert("최대 입력 범위 초과했습니다.");
    } else {
        if (input.innerText == "") { //input이 비었는데
            if (isNaN(char) == true) { //연산자 입력하면
                //아무것도 하지않음
            } else { //숫자 입력하면
                input.innerText += char;
            }
        } else { //input에 값이 있는데
            if (isNaN(char) == true) { //연산자 입력하면
                tmp.innerText += input.innerText + char;
                input.innerText = "";
            } else { //숫자 입력하면
                input.innerText += char;
            }
        }
    }
}

/* . 눌렀을 때 input 값 */
function dot() {
    if (input.innerText == "") { //input이 null이면
        input.innerText = "0.";
    } else { //input이 null이 아니면
        if (input.innerText.includes('.')) { //input 값에 . 이 이미 포함되어 있으면
            return;
        } else { //input 값에 . 이 없으면
            input.innerText += '.';
        }
    }
}

/* = 눌렀을 때 계산 실행 */
function calculate(){
    if (input.innerText) { //input에 숫자가 있으면
        input.innerText = eval(tmp.innerText + input.innerText);
        tmp.innerText = "";
    }
}

/* +/- 눌렀을 때 양수음수 전환 (꼭 숫자 누른 뒤에만 눌림) */
function plusminus() {
    if (input.innerText != "") { //input에 숫자가 있으면
        input.innerText = input.innerText * -1;
    }

    // if (input.innerText.startsWith("-")) { //문자열 맨 앞이 - 이면 (음수)
    //     input.innerText = input.innerText.slice(1);
    // } else { //문자열 맨 앞이 숫자면 (양수)
    //     input.innerText = input.innerText * -1;
    // }
}

$(document).keydown(function (event) {
    if (event.key == 'Backspace') {
        back();
    } else if (event.key == '=') {
        calculate();
    } else if (event.key == 'Delete') {
        all_del();
    } else if (event.key == '.') {
        dot();
    } else if (event.key == '+' || event.key == '-' || event.key == '/' || event.key == '*' ||
        event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' ||
        event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9') {
        add(event.key);
    } else {
        // 아무것도 하지 않음
    }
});