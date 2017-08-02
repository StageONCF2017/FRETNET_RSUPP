function GetSelectedValue(DDL, Text) {
    var Txt = document.getElementById(Text);
    if (DDL.value == "-1") { Txt.value = ""; } else { Txt.value = DDL.value; }
}
function GetValue(Text, DDL) {
    var DLLL = document.getElementById(DDL);
    DLLL.value = Text.value;
    if (DLLL.value == "") { DLLL.value = "-1"; } else { DLLL.value = Text.value; }
}
function RemoveChecked(Check) {
    var Checkbox = document.getElementById(Check).checked = false;
}
function RemoveCheckedAll(Check, Check1) {
    document.getElementById(Check).checked = false;
    document.getElementById(Check1).checked = false;
}
function CalculeMontant(TM, PR, PE, PU, R) {
    var Modele = document.getElementById(TM);
    var Realiser = document.getElementById(PR);
    var Exiger = document.getElementById(PE);
    var Punitaire = document.getElementById(PU);
    var Resultat = document.getElementById(R);
    if (Modele.value == "PayantPour") Resultat.value = (Exiger.value.replace(",", ".") - Realiser.value.replace(",", ".")) * Punitaire.value.replace(",", ".");
}
//function HeaderCheckBoxClick(checkbox) {
//    //
//    var modele = document.getElementById("DDLTypeAvoire");
//    var gridView = document.getElementById("Gdv_RPPCR");
//    var Montant = document.getElementById("txt_recetteCompelem");
//    var NBtc = document.getElementById("txt_NbtcCompelemnt");
//    var TR = document.getElementById("txt_PoidComplement");
//    var TT = document.getElementById("txt_PoidComplement");
//    var Complement = document.getElementById("DDL_ComplementaireSur");
//    var Avoire = document.getElementById("DDLAvoiresur");
//    if (Montant != null) Montant.value = 0;
//    if (NBtc != null) NBtc.value = 0;
//    if (TR != null) TT.value = 0;
//    if (TT != null) TR.value = 0;
//    if (modele == null) modele = document.getElementById("DDL_ComplementaireSur");
//    for (i = 1; i < gridView.rows.length; i++) {
//        gridView.getElementsByTagName("input").item(i).checked = checkbox.checked;
//        if (checkbox.checked) {
//            if (Complement != null) CalculeMontantComplementaire('DDLModele', 'DDL_ComplementaireSur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
//            if (Avoire != null) CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
//            gridView.rows[i].style.background = "rgb(0, 0, 0)";
//            if (modele.value == "ErreurTaxe") {
//                if (Avoire.value == "APOIDR") {
//                    TR.value = parseFloat(TR.value) + parseFloat(gridView.rows[i].cells[5].innerHTML);
//                }
//                if (Avoire.value == "APOIDT") {
//                    TT.value = parseFloat(TT.value) + parseFloat(gridView.rows[i].cells[6].innerHTML);
//                }
//                if (Avoire.value == "ANBTC") {
//                    NBtc.value = parseFloat(NBtc.value) + parseFloat(gridView.rows[i].cells[7].innerHTML);
//                }
//            }
//            else {
//                if (Complement.value == "CPOIDR") {
//                    TR.value = parseFloat(TR.value) + parseFloat(gridView.rows[i].cells[5].innerHTML);
//                }
//                if (Complement.value == "CPOIDT") {
//                    TT.value = parseFloat(TT.value) + parseFloat(gridView.rows[i].cells[6].innerHTML);
//                }
//                if (Complement.value == "CNBTC") {
//                    NBtc.value = parseFloat(NBtc.value) + parseFloat(gridView.rows[i].cells[7].innerHTML);
//                }
//                if (Complement.value == "CRECETTE") {
//                    Montant.value = parseFloat(Montant.value) + parseFloat(gridView.rows[i].cells[8].innerHTML);
//                }
//            }
//        }
//        else {
//            gridView.rows[i].style.background = "rgba(249, 249, 249, 0.77)";
//        }
//    }
//}

//function ChangeColorCheckBoxClick(checkbox) {
//    var modele = document.getElementById("DDLTypeAvoire");
//    var gridView = document.getElementById("Gdv_RPPCR");
//    var Montant = document.getElementById("txt_recetteCompelem");
//    var NBtc = document.getElementById("txt_NbtcCompelemnt");
//    var TR = document.getElementById("txt_PoidComplement");
//    var TT = document.getElementById("txt_PoidComplement");
//    var Complement = document.getElementById("DDL_ComplementaireSur");
//    var Avoire = document.getElementById("DDLAvoiresur");
//    if (Montant != null) Montant.value = 0;
//    if (NBtc != null) NBtc.value = 0;
//    if (TR != null) TT.value = 0;
//    if (TT != null) TR.value = 0;
//    for (i = 1; i < gridView.rows.length; i++) {
//        if (Complement != null) CalculeMontantComplementaire('DDLModele', 'DDL_ComplementaireSur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
//        if (Avoire != null) CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
//        if (gridView.getElementsByTagName("input").item(i).checked) {
//            gridView.rows[i].style.background = "rgb(0, 0, 0)";
//            if (modele.value == "ErreurTaxe") {
//                if (Avoire.value == "APOIDR") {
//                    TR.value = parseFloat(TR.value) + parseFloat(gridView.rows[i].cells[5].innerHTML);
//                }
//                if (Avoire.value == "APOIDT") {
//                    TT.value = parseFloat(TT.value) + parseFloat(gridView.rows[i].cells[6].innerHTML);
//                }
//                if (Avoire.value == "ANBTC") {
//                    NBtc.value = parseFloat(NBtc.value) + parseFloat(gridView.rows[i].cells[7].innerHTML);
//                }
//            }
//            else {
//                if (Complement.value == "CPOIDR") {
//                    TR.value = parseFloat(TR.value) + parseFloat(gridView.rows[i].cells[5].innerHTML);
//                }
//                if (Complement.value == "CPOIDT") {
//                    TT.value = parseFloat(TT.value) + parseFloat(gridView.rows[i].cells[6].innerHTML);
//                }
//                if (Complement.value == "CNBTC") {
//                    NBtc.value = parseFloat(NBtc.value) + parseFloat(gridView.rows[i].cells[7].innerHTML);
//                }
//                if (Complement.value == "CRECETTE") {
//                    Montant.value = parseFloat(Montant.value) + parseFloat(gridView.rows[i].cells[8].innerHTML);
//                }
//            }
//        }
//        else {
//            gridView.rows[i].style.background = "rgba(249, 249, 249, 0.77)";
//        }
//    }
//}

function Clear() {
    var selectedCount = 0;
    var element;

    for (var i = 0; i < document.forms[0].elements.length; i++) {
        element = document.forms[0].elements[i];
        switch (element.type) {
            case 'text':
                element.value = "";
                break;
            case 'select-one':
                element.value = "-1";
                break;
        }
    }
}

function CalculeMontantComplementaire(Modele, Compelemet, sur, PU1, PU2, R) {
    var Modele = document.getElementById(Modele);
    var Type = document.getElementById(Compelemet);
    var Sur = document.getElementById(sur);
    var APU = document.getElementById(PU1);
    var NPU = document.getElementById(PU2);
    var Resultat = document.getElementById(R);
    if (Modele.value == "Complementaire") {
        if (Type.value == "CPOIDR" || Type.value == "CPOIDT") {
            var poid = document.getElementById("txt_PoidComplement");
            Resultat.value = parseFloat(poid.value.replace(',', '.')) * (parseFloat(NPU.value) - parseFloat(APU.value.replace(',', '.')));
        }
        if (Type.value == "CNBTC") {
            var tc = document.getElementById("txt_NbtcCompelemnt");
            Resultat.value = parseFloat(tc.value.replace(',', '.')) * (parseFloat(NPU.value.replace(',', '.')) - parseFloat(APU.value.replace(',', '.')));
        }
    }
    if (Modele.value == "FAvoire") {
        if (Sur.value == "ErreurTaxe") {
            if (Type.value == "APOIDR" || Type.value == "APOIDT") {
                var poid = document.getElementById("txt_PoidComplement");
                Resultat.value = parseFloat(poid.value.replace(',', '.')) * (parseFloat(NPU.value.replace(',', '.')) - parseFloat(APU.value.replace(',', '.')));
            }
            if (Type.value == "ANBTC" || Type.value == "ANBV") {
                var tc = document.getElementById("txt_NbtcCompelemnt");
                Resultat.value = parseFloat(tc.value.replace(',', '.')) * (parseFloat(NPU.value) - parseFloat(APU.value.replace(',', '.')));
            }
        }
        if (Sur.value == "ErreurTonnage") {
            if (Type.value == "APOIDR" || Type.value == "APOIDT") {
                var poid = document.getElementById("txt_PU");
                Resultat.value = parseFloat(poid.value.replace(',', '.')) * (parseFloat(NPU.value.replace(',', '.')) - parseFloat(APU.value.replace(',', '.')));
            }
            if (Type.value == "ANBTC" || Type.value == "ANBV") {
                var tc = document.getElementById("txt_PU");
                Resultat.value = parseFloat(tc.value.replace(',', '.')) * (parseFloat(NPU.value.replace(',', '.')) - parseFloat(APU.value.replace(',', '.')));
            }
           
        }
    }
    if (Resultat.value == "NaN") { Resultat.value = "0"; }
    if (parseFloat(Resultat.value) < 0) { Resultat.value = parseFloat(Resultat.value.replace(',', '.')) * (-1); }
}

function Initialiser() {
    var TR = document.getElementById("txt_PoidComplement");
    var TT = document.getElementById("txt_PoidComplement");
    //var NBtc = document.getElementById("txt_NbtcCompelemnt");
    var Montant = document.getElementById("txt_recetteCompelem");
    var realiser = document.getElementById("Txt_PoidRealiser");
    var Re = document.getElementById("Txt_Montant");
    if (Re != null) Re.value = 0;
    if (Montant != null) Montant.value = 0;
    //if (NBtc != null) NBtc.value = 0;
    if (TR != null) TT.value = 0;
    if (TT != null) TR.value = 0;
    if (realiser != null) realiser.value = 0;
}
function HeaderCheckBoxClick(checkbox) {
    var modele = document.getElementById("DDLModele");
    var gridView = document.getElementById("Gdv_RPPCR");
    Initialiser();
    for (i = 1; i < gridView.rows.length; i++) {
        gridView.getElementsByTagName("input").item(i).checked = checkbox.checked;
        if (checkbox.checked) {
            gridView.rows[i].style.background = "rgb(0, 0, 0)";
            if (modele.value == "FAvoire") {
                var Montant = document.getElementById("Txt_Montant");
                var TypeAvoir = document.getElementById("DDLTypeAvoire");
                if (TypeAvoir.value == "ErreurTaxe") {
                    var Avoire = document.getElementById("DDLAvoiresur");
                    if (Avoire.value == "APOIDR") {
                        var TR = document.getElementById("txt_PoidComplement");
                        TR.value = parseFloat(TR.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[5].innerHTML.replace(',', '.'));
                        CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
                    }
                    if (Avoire.value == "APOIDT") {
                        var TT = document.getElementById("txt_PoidComplement");
                        TT.value = parseFloat(TT.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[6].innerHTML.replace(',', '.'));
                        CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
                    }
                    if (Avoire.value == "ANBTC" || Avoire.value == "ANBV") {
                        var NBtc = document.getElementById("txt_NbtcCompelemnt");
                        NBtc.value = parseFloat(NBtc.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[7].innerHTML.replace(',', '.'));
                        CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
                    }

                    
                }
                if (TypeAvoir.value == "ErreurTonnage") {
                    var Avoire = document.getElementById("DDLAvoiresur");
                    if (Avoire.value == "APOIDR") {
                        var TR = document.getElementById("Txt_PoidRealiser");
                        TR.value = parseFloat(TR.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[5].innerHTML.replace(',', '.'));
                    }
                    if (Avoire.value == "APOIDT") {
                        var TT = document.getElementById("Txt_PoidRealiser");
                        TT.value = parseFloat(TT.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[6].innerHTML.replace(',', '.'));
                    }
                    if (Avoire.value == "ANBTC" || Avoire.value == "ANBV") {
                        var NBtc = document.getElementById("txt_NbtcCompelemnt");
                        NBtc.value = parseFloat(NBtc.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[7].innerHTML.replace(',', '.'));
                    }
                    CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'Txt_PoidRealiser', 'txt_poidExige', 'Txt_Montant');
                }
            }
            else if (modele.value == "Complementaire") {
                var Complement = document.getElementById("DDL_ComplementaireSur");
                var check = document.getElementById("ErreurTexe");
                var Montant = document.getElementById("txt_recetteCompelem");
                if (Complement.value == "CPOIDR") {
                    var TR = document.getElementById("txt_PoidComplement");
                    TR.value = parseFloat(TR.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[5].innerHTML.replace(',', '.'));
                }
                if (Complement.value == "CPOIDT") {
                    var TT = document.getElementById("txt_PoidComplement");
                    TT.value = parseFloat(TT.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[6].innerHTML.replace(',', '.'));
                }
                if (Complement.value == "CNBTC" || Complement.value == "ANBV") {
                    var NBtc = document.getElementById("txt_NbtcCompelemnt");
                    NBtc.value = parseFloat(NBtc.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[7].innerHTML.replace(',', '.'));
                } 0
                if (Complement.value == "CRECETTE") {
                    Montant.value = parseFloat(Montant.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[8].innerHTML.replace(',', '.'));
                }
                if (check.checked) {

                    CalculeMontantComplementaire('DDLModele', 'DDL_ComplementaireSur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant'); 
                }
                else
                { CalculeMontantComplementaire('DDLModele', 'DDL_ComplementaireSur', 'DDLTypeAvoire', 'txt_APU', 'txt_NPU', 'Txt_Montant'); }
            }
        }
        else
            gridView.rows[i].style.background = "rgba(249, 249, 249, 0.77)";

    }
}

function ChangeColorCheckBoxClick(checkbox) {
    var modele = document.getElementById("DDLModele");
    var gridView = document.getElementById("Gdv_RPPCR");
    var check = document.getElementById("ErreurTexe");
    Initialiser();
    for (i = 1; i < gridView.rows.length; i++) {

        if (gridView.getElementsByTagName("input").item(i).checked) {
            gridView.rows[i].style.background = "rgb(0, 0, 0)";
            if (modele.value == "FAvoire") {
                var Montant = document.getElementById("Txt_Montant");
                var TypeAvoir = document.getElementById("DDLTypeAvoire");
                if (TypeAvoir.value == "ErreurTaxe") {
                    var Avoire = document.getElementById("DDLAvoiresur");
                    if (Avoire.value == "APOIDR") {
                        var TR = document.getElementById("txt_PoidComplement");
                        TR.value = parseFloat(TR.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[5].innerHTML.replace(',', '.'));
                    }
                    if (Avoire.value == "APOIDT") {
                        var TT = document.getElementById("txt_PoidComplement");
                        TT.value = parseFloat(TT.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[6].innerHTML.replace(',', '.'));
                    }
                    if (Avoire.value == "ANBTC" || Avoire.value == "ANBV") {
                        var NBtc = document.getElementById("txt_NbtcCompelemnt");
                        NBtc.value = parseFloat(NBtc.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[7].innerHTML.replace(',', '.'));
                    }
                    CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant');
                }
                if (TypeAvoir.value == "ErreurTonnage") {
                    var Avoire = document.getElementById("DDLAvoiresur");
                    if (Avoire.value == "APOIDR") {
                        var TR = document.getElementById("Txt_PoidRealiser");
                        TR.value = parseFloat(TR.value) + parseFloat(gridView.rows[i].cells[5].innerHTML.replace(',', '.'));
                    }
                    if (Avoire.value == "APOIDT") {
                        var TT = document.getElementById("Txt_PoidRealiser");
                        TT.value = parseFloat(TT.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[6].innerHTML.replace(',', '.'));
                    }
                    if (Avoire.value == "ANBTC" || Avoire.value == "ANBV") {
                        var NBtc = document.getElementById("txt_NbtcCompelemnt");
                        NBtc.value = parseFloat(NBtc.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[7].innerHTML.replace(',', '.'));
                    }
                    CalculeMontantComplementaire('DDLModele', 'DDLAvoiresur', 'DDLTypeAvoire', 'Txt_PoidRealiser', 'txt_poidExige', 'Txt_Montant');
                }
            }
            else if (modele.value == "Complementaire") {
                var Complement = document.getElementById("DDL_ComplementaireSur");
                var Montant = document.getElementById("txt_recetteCompelem");
                if (Complement.value == "CPOIDR") {
                    var TR = document.getElementById("txt_PoidComplement");
                    TR.value = parseFloat(TR.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[5].innerHTML.replace(',', '.'));
                }
                if (Complement.value == "CPOIDT") {
                    var TT = document.getElementById("txt_PoidComplement");
                    TT.value = parseFloat(TT.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[6].innerHTML.replace(',', '.'));
                }
                if (Complement.value == "CNBTC" || Complement.value == "ANBV") {
                    var NBtc = document.getElementById("txt_NbtcCompelemnt");
                    NBtc.value = parseFloat(NBtc.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[7].innerHTML.replace(',', '.'));
                }
                if (Complement.value == "CRECETTE") {
                    Montant.value = parseFloat(Montant.value.replace(',', '.')) + parseFloat(gridView.rows[i].cells[8].innerHTML.replace(',', '.'));
                }
                if (!check.checked)
                { CalculeMontantComplementaire('DDLModele', 'DDL_ComplementaireSur', 'DDLTypeAvoire', 'txt_APU', 'txt_NPU', 'Txt_Montant'); }
                else
                { CalculeMontantComplementaire('DDLModele', 'DDL_ComplementaireSur', 'DDLTypeAvoire', 'txt_APUErreurTaxe', 'txt_NPUErreurTaxe', 'Txt_Montant'); }
            }
        }
        else
            gridView.rows[i].style.background = "rgba(249, 249, 249, 0.77)";

    }
}

function HideShowDiv(DivId, LbllSign) {
    var mydiv = document.getElementById(DivId);
    var LblSign = document.getElementById(LbllSign);
    if (mydiv != null && LblSign != null) {

        if ($(mydiv).is(':hidden')) {

            $(mydiv).slideDown(500);
            $(mydiv).display = "block";

            //   LblSign.src = "../Images/treeMinus.gif";
        }
        else {
            $(mydiv).slideUp(500);
            // LblSign.src = "../Images/treeMinus.gif";
        }


        //        if (mydiv.style.display != "block") {
        //            mydiv.style.display = "block";
        //            // LblSign.src = "../Images/treeMinus.gif";
        //        }
        //        else {
        //            mydiv.style.display = "none";
        //            //LblSign.src = "../Images/treePlus.gif";
        //        }
    }
}


function HideTranche(btn, txt) {
    var ok = document.getElementById(btn);
    var tranche = document.getElementById(txt);
    if (tranche.value == "" || tranche.value <= "1") {
        ok.style.display = "none";
    }
    else {
        ok.style.display = "";
    }
}


function Gare(SeulGare, PlusGare, check) {
    var mydiv = document.getElementById(SeulGare);
    var mydiv1 = document.getElementById(PlusGare);
    var LblSign = document.getElementById(check);
    if (mydiv != null && LblSign != null) {
        if ($(mydiv).is(':hidden')) {
            $(mydiv).slideDown(400);
            //mydiv.style.display = "block";
            LblSign.checked = false;
            if ($(mydiv1).is(':visible')) {
                $(mydiv1).slideUp(400);
                //.style.display = "none";
            }
        }
        else {
            $(mydiv).slideUp(400);
            //mydiv.style.display = "none";
            LblSign.checked = false;
        }
        //        if ($(mydiv1).is(':visible')) {
        //            $(mydiv1).slideDown(1000);
        //        }
        //        else {
        //            $(mydiv1).slideUp(1000);
        //        }
    }
}
function GareGrid(SeulGare, PlusGare, checkPgare, chechGare) {
    var mydiv = document.getElementById(SeulGare);
    var mydiv1 = document.getElementById(PlusGare);
    var checkPgare = document.getElementById(checkPgare);
    var chechGare = document.getElementById(chechGare);
    if (mydiv != null && checkPgare != null && chechGare != null) {
        if (chechGare.checked == true) {
            mydiv1.style.display = "block";
        }
        else if (checkPgare) {
            mydiv.style.display = "block";
        }
    }
}


function HideDivGare(Div) {
    var mydiv = document.getElementById(Divw);
    if (mydiv != null && LblSign != null) {

        mydiv.style.display = "block";
    }
}


function Operation(DivListe, DivConvention) {
    var Liste = document.getElementById(DivListe);
    var Convention = document.getElementById(DivConvention);
    if (Liste != null || Convention != null) {

        $(Liste).slideUp(400)
        $(Convention).slideDown(400)
        Liste.style.visibility = "hidden";
        Convention.style.visibility = "visible";

    }
}
function Operation1(DivListe, DivConvention) {
    var Liste = document.getElementById(DivListe);
    var Convention = document.getElementById(DivConvention);
    if (Liste != null || Convention != null) {
        $(Convention).slideUp(400)
        $(Liste).slideDown(400)
        Liste.style.visibility = "visible";
        Convention.style.visibility = "hidden";
    }
}



function getvalue() {
    var combo = RadComboBox1.ClientID;
    alert(combo.SelectedItem);
    alert(document.getElementById(combo.UniqueID + "_value").value);
}  