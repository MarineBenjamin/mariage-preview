let layer3YallerSeLogerContainer = new Element(DIV);
layer3YallerSeLogerContainer.set_id("layer3YallerSeLogerContainer");
//layer3YallerSeLogerContainer.set_backgroundColor("#A1A1A1");
layer3YallerSeLogerContainer.set_borderLeft("solid 2px white");
layer3YallerSeLogerContainer.set_width("33.333%");
layer3YallerSeLogerContainer.set_height("100%");
layer3YallerSeLogerContainer.set_position("absolute");
layer3YallerSeLogerContainer.set_top("0px");
layer3YallerSeLogerContainer.set_left("33.333%");
layer3YallerSeLogerContainer.set_margin("0px 0px 0px 0px");
layer3YallerSeLogerContainer.set_padding("0px 0px 0px 0px");
layer3YallerSeLogerContainer.set_overflowX("hidden");
layer3YallerSeLogerContainer.set_overflowY("hidden");
layer3YallerSeLogerContainer.set_parent(layer3);

let Layer3YallerSeLogerText = new Element("layer3YallerSeLogerContainerItem");
Layer3YallerSeLogerText.set_id("Layer3YallerSeLogerText");
Layer3YallerSeLogerText.set_width("100%");
Layer3YallerSeLogerText.set_height("100%");
Layer3YallerSeLogerText.set_position("absolute");
Layer3YallerSeLogerText.set_top("0px");
Layer3YallerSeLogerText.set_left("0px");
Layer3YallerSeLogerText.set_margin("0px 0px 0px 0px");
Layer3YallerSeLogerText.set_padding("0px 0px 0px 0px");
Layer3YallerSeLogerText.set_parent(layer3YallerSeLogerContainer);

let Layer3YallerSeLogerTextTitle = new Element(DIV);
Layer3YallerSeLogerTextTitle.set_id("Layer3YallerSeLogerTextTitle");
//Layer3EgliseTextTitle.set_width("50%");
//Layer3EgliseTextTitle.set_height("100%");
Layer3YallerSeLogerTextTitle.set_innerHTML("Y ALLER & SE LOGER");
Layer3YallerSeLogerTextTitle.set_fontFamily("Supermercado One");
Layer3YallerSeLogerTextTitle.set_fontWeight("bold");
Layer3YallerSeLogerTextTitle.set_textAlign("center");
Layer3YallerSeLogerTextTitle.set_width("100%");
Layer3YallerSeLogerTextTitle.set_fontSize("250%");
Layer3YallerSeLogerTextTitle.set_position("absolute");
Layer3YallerSeLogerTextTitle.set_top("5%");
//Layer3YallerSeLogerTextTitle.set_left("20%");
Layer3YallerSeLogerTextTitle.set_margin("0px 0px 0px 0px");
Layer3YallerSeLogerTextTitle.set_padding("0px 0px 0px 0px");
Layer3YallerSeLogerTextTitle.set_color("#FFFFFF");
Layer3YallerSeLogerTextTitle.set_parent(Layer3YallerSeLogerText);

let Layer3YallerSeLogerTextCore = new Element(DIV);
Layer3YallerSeLogerTextCore.set_id("Layer3YallerSeLogerTextCore");
Layer3YallerSeLogerTextCore.set_width("90%");
//Layer3YallerSeLogerTextCore.set_height("100%");

Layer3YallerSeLogerTextCore.set_innerHTML("Y aller : <br>\
- En voiture (Un parking est disponible sur place, &agrave la ferme Ste Anne),<br>\
- En train (Gare de Langres), il sera cependant n&eacutecessaire que quelqu'un vienne vous chercher &agrave la gare.<br/><br/>\
Se loger :<br/>\
H&ocirctels, g&icirctes disponibles sur Langres et dans les villages aux alentours.");
Layer3YallerSeLogerTextCore.set_fontFamily("Supermercado One");
Layer3YallerSeLogerTextCore.set_fontWeight("bold");
Layer3YallerSeLogerTextCore.set_textAlign("left");
Layer3YallerSeLogerTextCore.set_fontSize("150%");
Layer3YallerSeLogerTextCore.set_position("absolute");
Layer3YallerSeLogerTextCore.set_top("25%");
Layer3YallerSeLogerTextCore.set_left("5%");
Layer3YallerSeLogerTextCore.set_margin("0px 0px 0px 0px");
Layer3YallerSeLogerTextCore.set_padding("0px 0px 0px 0px");
Layer3YallerSeLogerTextCore.set_color("#FFFFFF");
Layer3YallerSeLogerTextCore.set_parent(layer3YallerSeLogerContainer);