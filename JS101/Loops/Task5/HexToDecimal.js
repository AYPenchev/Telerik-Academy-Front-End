function HexToDecimal() {
    let decimalNum = 0,
        HexNum = window.prompt("Enter Hexdecimal number: ", '');
    for (i = HexNum.length - 1, j = 1; i >= 0; i--, j *= 16) {
        switch (HexNum[i]) {
            case '1':
                decimalNum += 1 * j;
                break;
            case '2':
                decimalNum += 2 * j;
                break;
            case '3':
                decimalNum += 3 * j;
                break;
            case '4':
                decimalNum += 4 * j;
                break;
            case '5':
                decimalNum += 5 * j;
                break;
            case '6':
                decimalNum += 6 * j;
                break;
            case '7':
                decimalNum += 7 * j;
                break;
            case '8':
                decimalNum += 8 * j;
                break;
            case '9':
                decimalNum += 9 * j;
                break;
            case 'A':
                decimalNum += 10 * j;
                break;
            case 'B':
                decimalNum += 11 * j;
                break;
            case 'C':
                decimalNum += 12 * j;
                break;
            case 'D':
                decimalNum += 13 * j;
                break;
            case 'E':
                decimalNum += 14 * j;
                break;
            case 'F':
                decimalNum += 15 * j;
                break;
            default:
                break;
        }
    }
    console.log(decimalNum);
}

HexToDecimal();