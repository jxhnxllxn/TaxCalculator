/* main js v2.02

note: PRIMARY JS SOURCE CODE: MAIN CODE;
*/

var salary, sss, phealth, pagibig;
/*basic salary*/
salary = document.getElementById("input-salary");
/*deduction*/
sss = document.getElementById("input-sss");
phealth = document.getElementById("input-phealth");
pagibig = document.getElementById("input-pagibig");

var healthCare, overTime, holidayPay;
/*misc*/
healthCare = document.getElementById("input-health"); //<-- deduction
overTime = document.getElementById("input-overtime");
holidayPay = document.getElementById("input-holiday");

/*result*/
var totalDeduc, totalMisc, taxIncome, withTax, netIncome;

totalDeduc = document.getElementById("tDeduction");
totalMisc = document.getElementById("tMisc");
taxIncome = document.getElementById("tIncome");
withTax = document.getElementById("wTax");
netIncome = document.getElementById("netIncome");

var period = document.getElementById("select-period"),
    Status = document.getElementById("select-status");

/* Button Function: CALCULATE/CLEAR ALL BUTTON*/
var btn_Click = document.getElementById("button"),
    Rules = true; //true of false

//Contributions

period.onclick = function () {

    PH_Compute();
    SSS_Compute();
    PagIbig();

    if (period.value == "") {
        sss.value = "";
        phealth.value = "";
        pagibig.value = "";
    }
}

/*RESULT SECTION */
function allResult() {

    if (Rules) {
        totalDeduc.textContent = "P " + parseFloat(ResultDeduction()).toFixed(2);

        totalMisc.textContent = "P " + parseFloat(ResultMisc()).toFixed(2);

        taxIncome.textContent = "P " + parseFloat(ResultTaxIncome()).toFixed(2);

        withTax.textContent = "P " + parseFloat(Stats()).toFixed(2);

        netIncome.textContent = "P " + parseFloat(NetIncome()).toFixed(2);

    } else {
        /* CLEAR FIELD */
        totalDeduc.textContent = "P 0.00";
        totalMisc.textContent = "P 0.00";
        taxIncome.textContent = "P 0.00";
        withTax.textContent = "P 0.00";
        netIncome.textContent = "P 0.00";
    }
}

function clearTabs() {

    if (Rules == false) {
        salary.value = "";
        sss.value = "";
        phealth.value = "";
        pagibig.value = "";
        healthCare.value = "";
        overTime.value = "";
        holidayPay.value = "";
        period.value = "";
        Status.value = "";
    }
}

/* Button */
btn_Click.onclick = function () {

    if (salary.value == "" && Rules == true) {
        alert("Please Enter the amount of your Salary");
        //... insert validation code here;
        /*   database:     return false; */  
/*        var ask = document.getElementById("sample");
        ask.textContent = "*";
        ask.style = "color: red";   */     

    } else if (period.value == ""  && Rules == true) {
        alert("Please Select Period");
        //... insert validation code here;
        /*     database:   return false; */
    } else if (Status.value == ""  && Rules == true) {
        alert("Please Select Status");
        //... insert validation code here;
        /*     database:   return false; */
    } else if (Rules && btn_Click.className == "") {
        allResult();
        btn_Click.innerHTML = "CLEAR ALL";
        btn_Click.className = "clicked";
        Rules = false;
    } else {
        allResult();
        clearTabs();
        btn_Click.innerHTML = "CALCULATE";
        btn_Click.className = "";
        Rules = true;

    }
}