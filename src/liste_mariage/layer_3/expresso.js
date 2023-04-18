let expressostyle;

let expresso = new Element(DIV);
expresso.set_id("expresso");
expresso.set_width("50%");
expresso.set_height("100%");
expresso.set_position("absolute");
expresso.set_top(parseInt(mouchoirs.top(),10) + parseInt(mouchoirs.height(),10) + 40 + "px");
expresso.set_left("0%");
expresso.set_margin("0px 0px 0px 0px");
expresso.set_padding("0px 0px 0px 0%");
expresso.set_parent(layer3);

let expressoImg = new Element(IMG);
expressoImg.set_id("expressoImg");
expressoImg.set_src(rpath + "../../assets/expresso.PNG");
expressoImg.set_width("75%");
// expressoImg.set_height("90%");
expressoImg.set_position("absolute");
expressoImg.set_top("0%");
expressoImg.set_left("10%");
expressoImg.set_margin("0px 0px 0px 0px");
expressoImg.set_padding("0px 0px 0px 0px");
expressoImg.set_parent(expresso);

let expressoText = new Element(DIV);
expressoText.set_id("layer2Text");
expressoText.set_position("absolute");
expressoText.set_width("75%");
expressoText.set_height("10%");
expressoText.set_left("10%");
// expressoText.set_top("90%");
expressoText.set_margin("0% 0% 0px 0px");
expressoText.set_padding("0% 0px 0px 0px");
expressoText.set_innerHTML("Expresso : 300&#8364");
expressoText.set_fontFamily("Supermercado One");
expressoText.set_fontSize("250%");
//expressoText.set_color("#FFFFFF");
expressoText.set_fontWeight("bold");
expressoText.set_textAlign("center");
expressoText.set_color("#FFFFFF");
expressoText.set_parent(expresso);

expressostyle = getComputedStyle(expressoImg.element());
expressoImg.set_height( parseInt(expressostyle.width, 10) + "px");
expressoText.set_top( parseInt(expressoImg.height(),10) + 10 + "px");
expresso.set_height(parseInt(expressoText.top(),10) + parseInt(expressoText.height(),10) + 40 + "px");