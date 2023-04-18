let mouchoirsstyle;

let mouchoirs = new Element(DIV);
mouchoirs.set_id("mouchoirs");
mouchoirs.set_width("50%");
mouchoirs.set_height("100%");
mouchoirs.set_position("absolute");
mouchoirs.set_top(parseInt(literie.top(),10) + parseInt(literie.height(),10) + 40 + "px");
mouchoirs.set_left("0%");
mouchoirs.set_margin("0px 0px 0px 0px");
mouchoirs.set_padding("0px 0px 0px 0%");
mouchoirs.set_parent(layer3);

let mouchoirsImg = new Element(IMG);
mouchoirsImg.set_id("mouchoirsImg");
mouchoirsImg.set_src(rpath + "../../assets/mouchoirs.png");
mouchoirsImg.set_width("75%");
// mouchoirsImg.set_height("90%");
mouchoirsImg.set_position("absolute");
mouchoirsImg.set_top("0%");
mouchoirsImg.set_left("10%");
mouchoirsImg.set_margin("0px 0px 0px 0px");
mouchoirsImg.set_padding("0px 0px 0px 0px");
mouchoirsImg.set_parent(mouchoirs);

let mouchoirsText = new Element(DIV);
mouchoirsText.set_id("layer2Text");
mouchoirsText.set_position("absolute");
mouchoirsText.set_width("75%");
mouchoirsText.set_height("10%");
mouchoirsText.set_left("10%");
// mouchoirsText.set_top("90%");
mouchoirsText.set_margin("0% 0% 0px 0px");
mouchoirsText.set_padding("0% 0px 0px 0px");
mouchoirsText.set_innerHTML("Mouchoirs : 24&#8364");
mouchoirsText.set_fontFamily("Supermercado One");
mouchoirsText.set_fontSize("250%");
//mouchoirsText.set_color("#FFFFFF");
mouchoirsText.set_fontWeight("bold");
mouchoirsText.set_textAlign("center");
mouchoirsText.set_color("#FFFFFF");
mouchoirsText.set_parent(mouchoirs);

mouchoirsstyle = getComputedStyle(mouchoirsImg.element());
mouchoirsImg.set_height( parseInt(mouchoirsstyle.width, 10) + "px");
mouchoirsText.set_top( parseInt(mouchoirsImg.height(),10) + 10 + "px");
mouchoirs.set_height(parseInt(mouchoirsText.top(),10) + parseInt(mouchoirsText.height(),10) + 40 + "px");