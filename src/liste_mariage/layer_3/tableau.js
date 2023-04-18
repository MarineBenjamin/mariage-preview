let tableaustyle;

let tableau = new Element(DIV);
tableau.set_id("tableau");
tableau.set_width("50%");
tableau.set_height("100%");
tableau.set_position("absolute");
tableau.set_top(parseInt(bibliotheque.top(),10) + parseInt(bibliotheque.height(),10) + 40 + "px");
tableau.set_left("0%");
tableau.set_margin("0px 0px 0px 0px");
tableau.set_padding("0px 0px 0px 0px");
tableau.set_parent(layer3);

let tableauImg = new Element(IMG);
tableauImg.set_id("tableauImg");
tableauImg.set_src(rpath + "../../assets/tableauCroix.PNG");
tableauImg.set_width("75%");
tableauImg.set_position("absolute");
tableauImg.set_top("0%");
tableauImg.set_left("10%");
tableauImg.set_margin("0px 0px 0px 0px");
tableauImg.set_padding("0px 0px 0px 0px");
tableauImg.set_parent(tableau);

let tableauText = new Element(DIV);
tableauText.set_id("layer2Text");
tableauText.set_position("absolute");
tableauText.set_width("75%");
tableauText.set_height("10%");
tableauText.set_left("10%");
tableauText.set_margin("0% 0% 0px 0px");
tableauText.set_padding("0% 0px 0px 0px");
tableauText.set_innerHTML("Tableau : 480&#8364");
tableauText.set_fontFamily("Supermercado One");
tableauText.set_fontSize("250%");
//tableauText.set_color("#FFFFFF");
tableauText.set_fontWeight("bold");
tableauText.set_textAlign("center");
tableauText.set_color("#FFFFFF");
tableauText.set_parent(tableau);

tableaustyle = getComputedStyle(tableauImg.element());
tableauImg.set_height( parseInt(tableaustyle.width, 10) + "px");
tableauText.set_top( parseInt(tableauImg.height(),10) + 10 + "px");
tableau.set_height(parseInt(tableauText.top(),10) + parseInt(tableauText.height(),10) + 40 + "px");