let nappestyle;

let nappe = new Element(DIV);
nappe.set_id("nappe");
nappe.set_width("50%");
nappe.set_height("100%");
nappe.set_position("absolute");
nappe.set_top(parseInt(meuble2.top(),10) + parseInt(meuble2.height(),10) + 40 + "px");
nappe.set_left("50%");
nappe.set_margin("0px 0px 0px 0px");
nappe.set_padding("0px 0px 0px 0%");
nappe.set_parent(layer3);

let nappeImg = new Element(IMG);
nappeImg.set_id("nappeImg");
nappeImg.set_src(rpath + "../../assets/nappeCroix.png");
nappeImg.set_width("75%");
// nappeImg.set_height("90%");
nappeImg.set_position("absolute");
nappeImg.set_top("0%");
nappeImg.set_left("10%");
nappeImg.set_margin("0px 0px 0px 0px");
nappeImg.set_padding("0px 0px 0px 0px");
nappeImg.set_parent(nappe);

let nappeText = new Element(DIV);
nappeText.set_id("layer2Text");
nappeText.set_position("absolute");
nappeText.set_width("75%");
nappeText.set_height("10%");
nappeText.set_left("10%");
// nappeText.set_top("90%");
nappeText.set_margin("0% 0% 0px 0px");
nappeText.set_padding("0% 0px 0px 0px");
nappeText.set_innerHTML("Nappe 175x320 : 315&#8364");
nappeText.set_fontFamily("Supermercado One");
nappeText.set_fontSize("250%");
//nappeText.set_color("#FFFFFF");
nappeText.set_fontWeight("bold");
nappeText.set_textAlign("center");
nappeText.set_color("#FFFFFF");
nappeText.set_parent(nappe);

nappestyle = getComputedStyle(nappeImg.element());
nappeImg.set_height( parseInt(nappestyle.width, 10) + "px");
nappeText.set_top( parseInt(nappeImg.height(),10) + 10 + "px");
nappe.set_height(parseInt(nappeText.top(),10) + parseInt(nappeText.height(),10) + 40 + "px");
