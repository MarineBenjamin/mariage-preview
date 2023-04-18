let bibliothequestyle;

let bibliotheque = new Element(DIV);
bibliotheque.set_id("bibliotheque");
bibliotheque.set_width("50%");
bibliotheque.set_height("100%");
bibliotheque.set_position("absolute");
bibliotheque.set_top("0%");
bibliotheque.set_left("0%");
bibliotheque.set_margin("0px 0px 0px 0px");
bibliotheque.set_padding("0px 0px 0px 0px");
bibliotheque.set_parent(layer3);

let bibliothequeImg = new Element(IMG);
bibliothequeImg.set_id("bibliothequeImg");
bibliothequeImg.set_src(rpath + "../../assets/Bibliotheque.png");
bibliothequeImg.set_width("75%");
bibliothequeImg.set_position("absolute");
bibliothequeImg.set_top("0%");
bibliothequeImg.set_left("10%");
bibliothequeImg.set_margin("0px 0px 0px 0px");
bibliothequeImg.set_padding("0px 0px 0px 0px");
bibliothequeImg.set_parent(bibliotheque);

let bibliothequeText = new Element(DIV);
bibliothequeText.set_id("bibliothequeText");
bibliothequeText.set_position("absolute");
bibliothequeText.set_width("75%");
bibliothequeText.set_height("10%");
bibliothequeText.set_left("10%");
bibliothequeText.set_margin("0% 0% 0px 0px");
bibliothequeText.set_padding("0% 0px 0px 0px");
bibliothequeText.set_innerHTML("biblioth&egraveque : 1100&#8364");
bibliothequeText.set_fontFamily("Supermercado One");
bibliothequeText.set_fontSize("250%");
//bibliothequeText.set_color("#FFFFFF");
bibliothequeText.set_fontWeight("bold");
bibliothequeText.set_textAlign("center");
bibliothequeText.set_color("#FFFFFF");
bibliothequeText.set_parent(bibliotheque);

bibliothequestyle = getComputedStyle(bibliothequeImg.element());
bibliothequeImg.set_height( parseInt(bibliothequestyle.width, 10) + "px");
bibliothequeText.set_top( parseInt(bibliothequeImg.height(),10) + 10 + "px");
bibliotheque.set_height(parseInt(bibliothequeText.top(),10) + parseInt(bibliothequeText.height(),10) + 40 + "px");