let layer3ListeMariageContainer = new Element(DIV);
layer3ListeMariageContainer.set_id("layer3ListeMariageContainer");
//layer3ListeMariageContainer.set_backgroundColor("#A1A1A1");
layer3ListeMariageContainer.set_borderLeft("solid 2px white");
layer3ListeMariageContainer.set_width("33.333%");
layer3ListeMariageContainer.set_height("100%");
layer3ListeMariageContainer.set_position("absolute");
layer3ListeMariageContainer.set_top("0px");
layer3ListeMariageContainer.set_left("66.666%");
layer3ListeMariageContainer.set_margin("0px 0px 0px 0px");
layer3ListeMariageContainer.set_padding("0px 0px 0px 0px");
layer3ListeMariageContainer.set_overflowX("hidden");
layer3ListeMariageContainer.set_overflowY("hidden");
//layer3ListeMariageContainer.set_parent(layer3);

let Layer3ListeMariageText = new Element("layer3ListeMariageContainerItem");
Layer3ListeMariageText.set_id("Layer3ListeMariageText");
Layer3ListeMariageText.set_width("100%");
Layer3ListeMariageText.set_height("100%");
Layer3ListeMariageText.set_position("absolute");
Layer3ListeMariageText.set_top("0px");
Layer3ListeMariageText.set_left("0px");
Layer3ListeMariageText.set_margin("0px 0px 0px 0px");
Layer3ListeMariageText.set_padding("0px 0px 0px 0px");
Layer3ListeMariageText.set_parent(layer3ListeMariageContainer);

let Layer3ListeMariageTextTitle = new Element(DIV);
Layer3ListeMariageTextTitle.set_id("Layer3ListeMariageTextTitle");
//Layer3EgliseTextTitle.set_width("50%");
//Layer3EgliseTextTitle.set_height("100%");
Layer3ListeMariageTextTitle.set_innerHTML("LISTE DE MARIAGE");
Layer3ListeMariageTextTitle.set_fontFamily("Supermercado One");
Layer3ListeMariageTextTitle.set_fontWeight("bold");
Layer3ListeMariageTextTitle.set_textAlign("center");
Layer3ListeMariageTextTitle.set_width("100%");
Layer3ListeMariageTextTitle.set_fontSize("250%");
Layer3ListeMariageTextTitle.set_position("absolute");
Layer3ListeMariageTextTitle.set_top("5%");
//Layer3ListeMariageTextTitle.set_left("20%");
Layer3ListeMariageTextTitle.set_margin("0px 0px 0px 0px");
Layer3ListeMariageTextTitle.set_padding("0px 0px 0px 0px");
Layer3ListeMariageTextTitle.set_color("#FFFFFF");
Layer3ListeMariageTextTitle.set_parent(Layer3ListeMariageText);

let Layer3ListeMariageTextCore = new Element(DIV);
Layer3ListeMariageTextCore.set_width("90%");
Layer3ListeMariageTextCore.set_innerHTML("La liste des cadeaux de mariage est disponible <a href='" + rpath + "src/liste_mariage/index.html" + "' target='_blank'>ici.</a><br>\
<br>\
Pour y participer, vous pouvez contacter  Marine ou Benjamin par e-mail : <br><br>\
marinemartinj@gmail.com<br><br>\
benjaminlevavasseur@hotmail.com");
Layer3ListeMariageTextCore.set_fontFamily("Supermercado One");
Layer3ListeMariageTextCore.set_fontWeight("bold");
Layer3ListeMariageTextCore.set_textAlign("left");
Layer3ListeMariageTextCore.set_fontSize("150%");
Layer3ListeMariageTextCore.set_position("absolute");
Layer3ListeMariageTextCore.set_top("25%");
Layer3ListeMariageTextCore.set_left("5%");
Layer3ListeMariageTextCore.set_margin("0px 0px 0px 0px");
Layer3ListeMariageTextCore.set_padding("0px 0px 0px 0px");
Layer3ListeMariageTextCore.set_color("#FFFFFF");
Layer3ListeMariageTextCore.set_parent(layer3ListeMariageContainer);
