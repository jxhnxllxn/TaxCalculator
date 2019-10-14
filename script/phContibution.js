/* this variable storage of philHealth/SSS and other Contibution table*/

var rate_Phealth = [];
rate_Phealth[0] = 100;
rate_Phealth[1] = 112.50;
rate_Phealth[2] = 125;
rate_Phealth[3] = 137.50;
rate_Phealth[4] = 150;
rate_Phealth[5] = 162.50;
rate_Phealth[6] = 175;
rate_Phealth[7] = 187.50;
rate_Phealth[8] = 200;
rate_Phealth[9] = 212.50;
rate_Phealth[10] = 225;
rate_Phealth[11] = 237.50;
rate_Phealth[12] = 250;
rate_Phealth[13] = 262.50;
rate_Phealth[14] = 275;
rate_Phealth[15] = 287.50;
rate_Phealth[16] = 300;
rate_Phealth[17] = 312;
rate_Phealth[18] = 325;
rate_Phealth[19] = 337.50;
rate_Phealth[20] = 350;
rate_Phealth[21] = 362.50;
rate_Phealth[22] = 375;
rate_Phealth[23] = 387.50;
rate_Phealth[24] = 400;
rate_Phealth[25] = 412.50;
rate_Phealth[26] = 425;
rate_Phealth[27] = 437.50;

var rate_SSS = [];
rate_SSS[0] = 36.30;
rate_SSS[1] = 54.50;
rate_SSS[2] = 72.70;
rate_SSS[3] = 90.80;
rate_SSS[4] = 109;
rate_SSS[5] = 127.20;
rate_SSS[6] = 145.30;
rate_SSS[7] = 163.50;
rate_SSS[8] = 181.70;
rate_SSS[9] = 199.80;
rate_SSS[10] = 218;
rate_SSS[11] = 236.20;
rate_SSS[12] = 254.30;
rate_SSS[13] = 272.50;
rate_SSS[14] = 290.70;
rate_SSS[15] = 308.80;
rate_SSS[16] = 327;
rate_SSS[17] = 345.20;
rate_SSS[18] = 363.30;
rate_SSS[19] = 381.50;
rate_SSS[20] = 399.70;
rate_SSS[21] = 417.80;
rate_SSS[22] = 436;
rate_SSS[23] = 454.20;
rate_SSS[24] = 472.30;
rate_SSS[25] = 490.50;
rate_SSS[26] = 508.70;
rate_SSS[27] = 526.80;
rate_SSS[28] = 545;
rate_SSS[29] = 563.20;
rate_SSS[30] = 581.30;

//note: use only "<" or ">" operator for accurate_Phealth computation
function PH_Compute() {
    if (salary.value == 0) {
        phealth.value = "";
    } else if (salary.value <= 8999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[0]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[0] / 2).toFixed(2);
        }

    } else if (salary.value <= 9999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[1]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[1] / 2).toFixed(2);
        }

    } else if (salary.value <= 10999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[2]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[2] / 2).toFixed(2);
        }

    } else if (salary.value <= 11999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[3]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[3] / 2).toFixed(2);
        }

    } else if (salary.value <= 12999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[4]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[4] / 2).toFixed(2);
        }

    } else if (salary.value <= 13999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[5]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[5] / 2).toFixed(2);
        }

    } else if (salary.value <= 14999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[6]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[6] / 2).toFixed(2);
        }

    } else if (salary.value <= 15999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[7]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[7] / 2).toFixed(2);
        }

    } else if (salary.value <= 16999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[8]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[8] / 2).toFixed(2);
        }

    } else if (salary.value <= 17999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[9]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[9] / 2).toFixed(2);
        }

    } else if (salary.value <= 18999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[10]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[10] / 2).toFixed(2);
        }

    } else if (salary.value <= 19999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[11]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[11] / 2).toFixed(2);
        }

    } else if (salary.value <= 20999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[12]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[12] / 2).toFixed(2);
        }

    } else if (salary.value <= 21999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[13]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[13] / 2).toFixed(2);
        }

    } else if (salary.value <= 22999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[14]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[14] / 2).toFixed(2);
        }

    } else if (salary.value <= 23999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[15]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[15] / 2).toFixed(2);
        }

    } else if (salary.value <= 24999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[16]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[16] / 2).toFixed(2);
        }

    } else if (salary.value <= 25999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[17]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[17] / 2).toFixed(2);
        }

    } else if (salary.value <= 26999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[18]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[18] / 2).toFixed(2);
        }

    } else if (salary.value <= 27999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[19]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[19] / 2).toFixed(2);
        }

    } else if (salary.value <= 28999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[20]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[20] / 2).toFixed(2);
        }

    } else if (salary.value <= 29999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[21]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[21] / 2).toFixed(2);
        }

    } else if (salary.value <= 30999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[22]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[22] / 2).toFixed(2);
        }

    } else if (salary.value <= 31999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[23]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[23] / 2).toFixed(2);
        }

    } else if (salary.value <= 32999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[24]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[24] / 2).toFixed(2);
        }

    } else if (salary.value <= 33999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[25]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[25] / 2).toFixed(2);
        }

    } else if (salary.value <= 34999.99) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[26]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[26] / 2).toFixed(2);
        }

    } else if (salary.value >= 35000) {

        if (period.value == "monthly") {
            phealth.value = parseFloat(rate_Phealth[27]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            phealth.value = parseFloat(rate_Phealth[27] / 2).toFixed(2);
        }
    }

    return phealth;
}

function SSS_Compute() {

    if (salary.value == 0) {
        sss.value = "";
    } else if (salary.value <= 1249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[0]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[0] / 2).toFixed(2);
        }

    } else if (salary.value <= 1749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[1]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[1] / 2).toFixed(2);
        }

    } else if (salary.value <= 2249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[2]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[2] / 2).toFixed(2);
        }

    } else if (salary.value <= 2749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[3]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[3] / 2).toFixed(2);
        }

    } else if (salary.value <= 3249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[4]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[4] / 2).toFixed(2);
        }

    } else if (salary.value <= 3749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[5]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[5] / 2).toFixed(2);
        }

    } else if (salary.value <= 4249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[6]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[6] / 2).toFixed(2);
        }

    } else if (salary.value <= 4749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[7]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[7] / 2).toFixed(2);
        }

    } else if (salary.value <= 5249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[8]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[8] / 2).toFixed(2);
        }

    } else if (salary.value <= 5749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[9]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[9] / 2).toFixed(2);
        }

    } else if (salary.value <= 6249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[10]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[10] / 2).toFixed(2);
        }

    } else if (salary.value <= 6749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[11]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[11] / 2).toFixed(2);
        }

    } else if (salary.value <= 7249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[12]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[12] / 2).toFixed(2);
        }

    } else if (salary.value <= 7749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[13]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[13] / 2).toFixed(2);
        }

    } else if (salary.value <= 8249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[14]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[14] / 2).toFixed(2);
        }

    } else if (salary.value <= 8749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[15]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[15] / 2).toFixed(2);
        }

    } else if (salary.value <= 9249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[16]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[16] / 2).toFixed(2);
        }

    } else if (salary.value <= 9749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[17]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[17] / 2).toFixed(2);
        }

    } else if (salary.value <= 10249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[18]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[18] / 2).toFixed(2);
        }

    } else if (salary.value <= 10749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[19]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[19] / 2).toFixed(2);
        }

    } else if (salary.value <= 11249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[20]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[20] / 2).toFixed(2);
        }

    } else if (salary.value <= 11749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[21]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[21] / 2).toFixed(2);
        }

    } else if (salary.value <= 12249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[22]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[22] / 2).toFixed(2);
        }

    } else if (salary.value <= 12749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[23]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[23] / 2).toFixed(2);
        }

    } else if (salary.value <= 13249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[24]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[24] / 2).toFixed(2);
        }

    } else if (salary.value <= 13749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[25]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[25] / 2).toFixed(2);
        }

    } else if (salary.value <= 14249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[26]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[26] / 2).toFixed(2);
        }

    } else if (salary.value <= 14749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[27]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[27] / 2).toFixed(2);
        }

    } else if (salary.value <= 15249.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[28]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[28] / 2).toFixed(2);
        }

    } else if (salary.value <= 15749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[29]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[29] / 2).toFixed(2);
        }

    } else if (salary.value > 15749.99) {

        if (period.value == "monthly") {
            sss.value = parseFloat(rate_SSS[30]).toFixed(2);
        } else if (period.value == "semi-monthly") {
            sss.value = parseFloat(rate_SSS[30] / 2).toFixed(2);
        }

    }

    return sss;
}

function PagIbig() {

    if (period.value == "monthly" && salary.value > 0) {
        pagibig.value = parseFloat(100).toFixed(2);
    } else if (period.value == "semi-monthly" && salary.value > 0) {
        pagibig.value = parseFloat(100).toFixed(2);
        /*Note: temporarily changed pagibig.value == 100 instead of 50 on this line coz i'm following the rappler's computation. 
               source: http://www.rappler.com/business/53216-income-tax-calculator
               */
    }

    return pagibig;
}

var PhilHealth = PH_Compute(),
    SocialSecSys = SSS_Compute(),
    PagibigFunds = PagIbig();

/* RESULT TAB*/
function ResultDeduction() {

    var TOTALDEDUCTION;

    if (PhilHealth.value == "" && SocialSecSys.value && PagibigFunds.value && healthCare.value) {

        TOTALDEDUCTION =
            /*parseFloat(PhilHealth.value = "0.00") +*/
            parseFloat(SocialSecSys.value) + parseFloat(PagibigFunds.value) + parseFloat(healthCare.value);

    } else if (SocialSecSys.value == "" && PhilHealth.value && PagibigFunds.value && healthCare.value) {

        TOTALDEDUCTION =
            parseFloat(PhilHealth.value) /* + parseFloat(SocialSecSys.value = "0.00")*/ + parseFloat(PagibigFunds.value) + parseFloat(healthCare.value);

    } else if (PagibigFunds.value == "" && PhilHealth.value && SocialSecSys.value && healthCare.value) {

        TOTALDEDUCTION =
            parseFloat(PhilHealth.value) + parseFloat(SocialSecSys.value) /* + parseFloat(PagibigFunds.value = "0.00")*/ + parseFloat(healthCare.value);

    } else if (healthCare.value == "" && PhilHealth.value && SocialSecSys.value && PagibigFunds.value) {

        TOTALDEDUCTION =
            parseFloat(PhilHealth.value) + parseFloat(SocialSecSys.value) + parseFloat(PagibigFunds.value) /* + parseFloat(healthCare.value = "0.00")*/ ;

    } else if (PhilHealth.value == "" && SocialSecSys.value == "" && PagibigFunds.value == "" && healthCare.value == "") {

        /*        var a = PhilHealth.value = "0.00",
                    b = SocialSecSys.value = "0.00",
                    c = PagibigFunds.value = "0.00",
                    d = healthCare.value = "0.00";

                TOTALDEDUCTION = a + b + c + d;*/

        TOTALDEDUCTION = 0;

    } else {
        TOTALDEDUCTION =
            parseFloat(PhilHealth.value) + parseFloat(SocialSecSys.value) + parseFloat(PagibigFunds.value) + parseFloat(healthCare.value);
    }

    return TOTALDEDUCTION;
}

function ResultMisc() {
    var TOTALMISC;

    if (overTime.value == "" && holidayPay.value) {

        TOTALMISC = /*parseFloat(overTime.value = "0.00") + */ parseFloat(holidayPay.value);

    } else if (holidayPay.value == "" && overTime.value) {

        TOTALMISC = parseFloat(overTime.value) /* + parseFloat(holidayPay.value = "0.00");*/

    } else if (overTime.value == "" && holidayPay.value == "") {

        /*        var a = overTime.value = "0.00",
                    b = holidayPay.value = "0.00";

                TOTALMISC = a + b;*/

        TOTALMISC = 0;

    } else {
        TOTALMISC = parseFloat(overTime.value) + parseFloat(holidayPay.value);
    }

    return TOTALMISC;
}

function ResultTaxIncome() {

    /*    var TAXABLEINCOME = (salary.value + Result_Misc) - Result_Deduc;*/
    var TAXABLEINCOME = (parseFloat(salary.value) + parseFloat(ResultMisc())) - parseFloat(ResultDeduction());

    return TAXABLEINCOME;
}

/* ============ THE STATUS ==================== */
/*
    tax rate bracket of the Taxable income
*/
var rate_tax = []; //for monthly period
rate_tax[0] = 0;
rate_tax[1] = 41.67;
rate_tax[2] = 208.33;
rate_tax[3] = 708.33;
rate_tax[4] = 1875;
rate_tax[5] = 4166.67;
rate_tax[6] = 10416.67;

/*
    percentage to be multiplied to the excess amount based on tax rate(rate_tax) of Taxable income
*/
var rate_excess = [];
rate_excess[0] = .05;
rate_excess[1] = .10;
rate_excess[2] = .15;
rate_excess[3] = .20;
rate_excess[4] = .25;
rate_excess[5] = .30;
rate_excess[6] = .32;


//====================================================

function Stats() {

    var withTaxDeduction;

    /* 
        salary bracket for Single/Married tax payers 
    */
    if (Status.value == "single" || Status.value == "married") {

        var SME_Mon = []; //Monthly
        SME_Mon[0] = 4167;
        SME_Mon[1] = 5000;
        SME_Mon[2] = 6667;
        SME_Mon[3] = 10000;
        SME_Mon[4] = 15833;
        SME_Mon[5] = 25000;
        SME_Mon[6] = 45833;

        var SME_Sem = [] //Semi-Monthly
        SME_Sem[0] = 2083;
        SME_Sem[1] = 2500;
        SME_Sem[2] = 3333;
        SME_Sem[3] = 5000;
        SME_Sem[4] = 7917;
        SME_Sem[5] = 12500;
        SME_Sem[6] = 22917;

    } else if (Status.value == "single-1D" || Status.value == "married-1D") { //with 1 dependent

        var SME_Mon = []; //monthly
        SME_Mon[0] = 6250;
        SME_Mon[1] = 7083;
        SME_Mon[2] = 8750;
        SME_Mon[3] = 12083;
        SME_Mon[4] = 17917;
        SME_Mon[5] = 27083;
        SME_Mon[6] = 47917;

        var SME_Sem = [] //semi-monthly
        SME_Sem[0] = 3125;
        SME_Sem[1] = 3542;
        SME_Sem[2] = 4375;
        SME_Sem[3] = 6042;
        SME_Sem[4] = 8958;
        SME_Sem[5] = 13542;
        SME_Sem[6] = 23958;
    } else if (Status.value == "single-2D" || Status.value == "married-2D") { //with 2 dependent

        var SME_Mon = []; //monthly
        SME_Mon[0] = 8333;
        SME_Mon[1] = 9167;
        SME_Mon[2] = 10833;
        SME_Mon[3] = 14167;
        SME_Mon[4] = 20000;
        SME_Mon[5] = 29167;
        SME_Mon[6] = 50000;

        var SME_Sem = [] //semi-monthly
        SME_Sem[0] = 4167;
        SME_Sem[1] = 4583;
        SME_Sem[2] = 5417;
        SME_Sem[3] = 7083;
        SME_Sem[4] = 10000;
        SME_Sem[5] = 14583;
        SME_Sem[6] = 25000;
    } else if (Status.value == "single-3D" || Status.value == "married-3D") { //with 3 dependent

        var SME_Mon = []; //monthly
        SME_Mon[0] = 10417;
        SME_Mon[1] = 11250;
        SME_Mon[2] = 12917;
        SME_Mon[3] = 16250;
        SME_Mon[4] = 22083;
        SME_Mon[5] = 31250;
        SME_Mon[6] = 52083;

        var SME_Sem = [] //semi-monthly
        SME_Sem[0] = 5208;
        SME_Sem[1] = 5625;
        SME_Sem[2] = 6458;
        SME_Sem[3] = 8125;
        SME_Sem[4] = 11042;
        SME_Sem[5] = 15625;
        SME_Sem[6] = 26042;
    } else if (Status.value == "single-4D" || Status.value == "married-4D") { //with 4 or more dependent

        var SME_Mon = []; //monthly
        SME_Mon[0] = 12500;
        SME_Mon[1] = 13333;
        SME_Mon[2] = 15000;
        SME_Mon[3] = 18333;
        SME_Mon[4] = 24167;
        SME_Mon[5] = 33333;
        SME_Mon[6] = 54167;

        var SME_Sem = [] //semi-monthly
        SME_Sem[0] = 6250;
        SME_Sem[1] = 6667;
        SME_Sem[2] = 7500;
        SME_Sem[3] = 9167;
        SME_Sem[4] = 12083;
        SME_Sem[5] = 16667;
        SME_Sem[6] = 27083;
    }

    /*=======================================================*/

    /*
        period of salary /monthly or semi 
    */
    if (period.value == "monthly") {

        if (ResultTaxIncome() < SME_Mon[0]) {
            withTaxDeduction = 0;
        } else if (ResultTaxIncome() >= SME_Mon[0] && ResultTaxIncome() < SME_Mon[1]) {
            var a = ResultTaxIncome() - SME_Mon[0],
                b = a * rate_excess[0],
                c = b + rate_tax[0];
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Mon[1] && ResultTaxIncome() < SME_Mon[2]) {
            var a = ResultTaxIncome() - SME_Mon[1],
                b = a * rate_excess[1],
                c = b + rate_tax[1];
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Mon[2] && ResultTaxIncome() < SME_Mon[3]) {
            var a = ResultTaxIncome() - SME_Mon[2],
                b = a * rate_excess[2],
                c = b + rate_tax[2];
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Mon[3] && ResultTaxIncome() < SME_Mon[4]) {
            var a = ResultTaxIncome() - SME_Mon[3],
                b = a * rate_excess[3],
                c = b + rate_tax[3];
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Mon[4] && ResultTaxIncome() < SME_Mon[5]) {
            var a = ResultTaxIncome() - SME_Mon[4],
                b = a * rate_excess[4],
                c = b + rate_tax[4];
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Mon[5] && ResultTaxIncome() < SME_Mon[6]) {
            var a = ResultTaxIncome() - SME_Mon[5],
                b = a * rate_excess[5],
                c = b + rate_tax[5];
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Mon[6]) {
            var a = ResultTaxIncome() - SME_Mon[6],
                b = a * rate_excess[6],
                c = b + rate_tax[6];
            withTaxDeduction = c;
        }

    } else if (period.value == "semi-monthly") {

        if (ResultTaxIncome() < SME_Sem[0]) {
            withTaxDeduction = 0;
        } else if (ResultTaxIncome() >= SME_Sem[0] && ResultTaxIncome() < SME_Sem[1]) {
            var a = ResultTaxIncome() - SME_Sem[0],
                b = a * rate_excess[0],
                c = b + (rate_tax[0] / 2);
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Sem[1] && ResultTaxIncome() < SME_Sem[2]) {
            var a = ResultTaxIncome() - SME_Sem[1],
                b = a * rate_excess[1],
                c = b + (rate_tax[1] / 2);
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Sem[2] && ResultTaxIncome() < SME_Sem[3]) {
            var a = ResultTaxIncome() - SME_Sem[2],
                b = a * rate_excess[2],
                c = b + (rate_tax[2] / 2);
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Sem[3] && ResultTaxIncome() < SME_Sem[4]) {
            var a = ResultTaxIncome() - SME_Sem[3],
                b = a * rate_excess[3],
                c = b + (rate_tax[3] / 2);
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Sem[4] && ResultTaxIncome() < SME_Sem[5]) {
            var a = ResultTaxIncome() - SME_Sem[4],
                b = a * rate_excess[4],
                c = b + (rate_tax[4] / 2);
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Sem[5] && ResultTaxIncome() < SME_Sem[6]) {
            var a = ResultTaxIncome() - SME_Sem[5],
                b = a * rate_excess[5],
                c = b + (rate_tax[5] / 2);
            withTaxDeduction = c;
        } else if (ResultTaxIncome() >= SME_Sem[6]) {
            var a = ResultTaxIncome() - SME_Sem[6],
                b = a * rate_excess[6],
                c = b + (rate_tax[6] / 2);
            withTaxDeduction = c;
        }
    }

    return withTaxDeduction;
} // monthly and semi-monthly


function NetIncome() {
    var TOTAL = parseFloat(ResultTaxIncome()) - parseFloat(Stats());
    return TOTAL;
}