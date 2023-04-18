let nocestyle;

let noce = new Element(DIV);
noce.set_id("noce");
noce.set_width("50%");
noce.set_height("100%");
noce.set_position("absolute");
noce.set_top(parseInt(nappe.top(),10) + parseInt(nappe.height(),10) + 40 + "px");
noce.set_left("25%");
noce.set_margin("0px 0px 0px 0px");
noce.set_padding("0px 0px 0px 0%");
noce.set_parent(layer3);

let noceImg = new Element(IMG);
noceImg.set_id("noceImg");
noceImg.set_src(rpath + "../../assets/noce.jpeg");
noceImg.set_width("75%");
// noceImg.set_height("90%");
noceImg.set_position("absolute");
noceImg.set_top("0%");
noceImg.set_left("10%");
noceImg.set_margin("0px 0px 0px 0px");
noceImg.set_padding("0px 0px 0px 0px");
noceImg.set_parent(noce);

let noceText = new Element(DIV);
noceText.set_id("layer2Text");
noceText.set_position("absolute");
noceText.set_width("75%");
noceText.set_height("15%");
noceText.set_left("10%");
// noceText.set_top("90%");
noceText.set_margin("0% 0% 0px 0px");
noceText.set_padding("0% 0px 0px 0px");
noceText.set_innerHTML("Voyage de Noce");
noceText.set_fontFamily("Supermercado One");
noceText.set_fontSize("250%");
//noceText.set_color("#FFFFFF");
noceText.set_fontWeight("bold");
noceText.set_textAlign("center");
noceText.set_color("#FFFFFF");
noceText.set_parent(noce);

nocestyle = getComputedStyle(noceImg.element());
noceImg.set_height( parseInt(nocestyle.width, 10) + "px");
noceText.set_top( parseInt(noceImg.height(),10) + 10 + "px");
noce.set_height(parseInt(noceText.top(),10) + parseInt(noceText.height(),10) + 40 + "px");