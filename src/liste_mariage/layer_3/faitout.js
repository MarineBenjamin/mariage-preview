let faitoutstyle;

let faitout = new Element(DIV);
faitout.set_id("faitout");
faitout.set_width("50%");
// faitout.set_height("100%");
faitout.set_position("absolute");
faitout.set_top("0%");
faitout.set_left("50%");
faitout.set_margin("0px 0px 0px 0px");
faitout.set_padding("0px 0px 0px 0%");
faitout.set_parent(layer3);

let faitoutImg = new Element(IMG);
faitoutImg.set_id("faitoutImg");
faitoutImg.set_src(rpath + "../../assets/Faitout.png");
faitoutImg.set_width("75%");
// faitoutImg.set_height("90%");
faitoutImg.set_position("absolute");
faitoutImg.set_top("0%");
faitoutImg.set_left("10%");
faitoutImg.set_margin("0px 0px 0px 0px");
faitoutImg.set_padding("0px 0px 0px 0px");
faitoutImg.set_parent(faitout);

let faitoutText = new Element(DIV);
faitoutText.set_id("layer2Text");
faitoutText.set_position("absolute");
faitoutText.set_width("75%");
faitoutText.set_height("10%");
faitoutText.set_left("10%");
// faitoutText.set_top("90%");
faitoutText.set_margin("0% 0% 0px 0px");
faitoutText.set_padding("0% 0px 0px 0px");
faitoutText.set_innerHTML("faitout : 315&#8364");
faitoutText.set_fontFamily("Supermercado One");
faitoutText.set_fontSize("250%");
//faitoutText.set_color("#FFFFFF");
faitoutText.set_fontWeight("bold");
faitoutText.set_textAlign("center");
faitoutText.set_color("#FFFFFF");
faitoutText.set_parent(faitout);

faitoutstyle = getComputedStyle(faitoutImg.element());
faitoutImg.set_height( parseInt(faitoutstyle.width, 10) + "px");
faitoutText.set_top( parseInt(faitoutImg.height(),10) + 10 + "px");
faitout.set_height(parseInt(faitoutText.top(),10) + parseInt(faitoutText.height(),10) + 40 + "px");