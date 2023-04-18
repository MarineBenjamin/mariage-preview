let meuble2style;

let meuble2 = new Element(DIV);
meuble2.set_id("meuble2");
meuble2.set_width("50%");
meuble2.set_height("100%");
meuble2.set_position("absolute");
meuble2.set_top(parseInt(ecran.top(),10) + parseInt(ecran.height(),10) + 40 + "px");
meuble2.set_left("50%");
meuble2.set_margin("0px 0px 0px 0px");
meuble2.set_padding("0px 0px 0px 0%");
meuble2.set_parent(layer3);

let meuble2Img = new Element(IMG);
meuble2Img.set_id("meuble2Img");
meuble2Img.set_src(rpath + "../../assets/meuble2.PNG");
meuble2Img.set_width("75%");
// meuble2Img.set_height("90%");
meuble2Img.set_position("absolute");
meuble2Img.set_top("0%");
meuble2Img.set_left("10%");
meuble2Img.set_margin("0px 0px 0px 0px");
meuble2Img.set_padding("0px 0px 0px 0px");
meuble2Img.set_parent(meuble2);

let meuble2Text = new Element(DIV);
meuble2Text.set_id("layer2Text");
meuble2Text.set_position("absolute");
meuble2Text.set_width("75%");
meuble2Text.set_height("10%");
meuble2Text.set_left("10%");
// meuble2Text.set_top("90%");
meuble2Text.set_margin("0% 0% 0px 0px");
meuble2Text.set_padding("0% 0px 0px 0px");
meuble2Text.set_innerHTML("Meuble : 158&#8364");
meuble2Text.set_fontFamily("Supermercado One");
meuble2Text.set_fontSize("250%");
//meuble2Text.set_color("#FFFFFF");
meuble2Text.set_fontWeight("bold");
meuble2Text.set_textAlign("center");
meuble2Text.set_color("#FFFFFF");
meuble2Text.set_parent(meuble2);

meuble2style = getComputedStyle(meuble2Img.element());
meuble2Img.set_height( parseInt(meuble2style.width, 10) + "px");
meuble2Text.set_top( parseInt(meuble2Img.height(),10) + 10 + "px");
meuble2.set_height(parseInt(meuble2Text.top(),10) + parseInt(meuble2Text.height(),10) + 40 + "px");
