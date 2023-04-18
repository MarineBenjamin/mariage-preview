let tapisstyle;

let tapis = new Element(DIV);
tapis.set_id("tapis");
tapis.set_width("50%");
// tapis.set_height("100%");
tapis.set_position("absolute");
tapis.set_top(parseInt(faitout.top(),10) + parseInt(faitout.height(),10) + 40 + "px");
tapis.set_left("50%");
tapis.set_margin("0px 0px 0px 0px");
tapis.set_padding("0px 0px 0px 0%");
tapis.set_parent(layer3);

let tapisImg = new Element(IMG);
tapisImg.set_id("tapisImg");
tapisImg.set_src(rpath + "../../assets/tapis.PNG");
tapisImg.set_width("75%");
// tapisImg.set_height("90%");
tapisImg.set_position("absolute");
tapisImg.set_top("0%");
tapisImg.set_left("10%");
tapisImg.set_margin("0px 0px 0px 0px");
tapisImg.set_padding("0px 0px 0px 0px");
tapisImg.set_parent(tapis);

let tapisText = new Element(DIV);
tapisText.set_id("layer2Text");
tapisText.set_position("absolute");
tapisText.set_width("75%");
tapisText.set_height("10%");
tapisText.set_left("10%");
// tapisText.set_top("90%");
tapisText.set_margin("0% 0% 0px 0px");
tapisText.set_padding("0% 0px 0px 0px");
tapisText.set_innerHTML("Tapis : 200&#8364");
tapisText.set_fontFamily("Supermercado One");
tapisText.set_fontSize("250%");
//tapisText.set_color("#FFFFFF");
tapisText.set_fontWeight("bold");
tapisText.set_textAlign("center");
tapisText.set_color("#FFFFFF");
tapisText.set_parent(tapis);

tapisstyle = getComputedStyle(tapisImg.element());
tapisImg.set_height( parseInt(tapisstyle.width, 10) + "px");
tapisText.set_top( parseInt(tapisImg.height(),10) + 10 + "px");
tapis.set_height(parseInt(tapisText.top(),10) + parseInt(tapisText.height(),10) + 40 + "px");