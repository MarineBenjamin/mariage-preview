let Layer3BrunchText = new Element("layer3PlanningContainerItem");
Layer3BrunchText.set_id("Layer3BrunchText");
Layer3BrunchText.set_width("100%");
Layer3BrunchText.set_height("100%");
Layer3BrunchText.set_position("absolute");
Layer3BrunchText.set_top("0px");
Layer3BrunchText.set_left("100%");
Layer3BrunchText.set_display("flex");
Layer3BrunchText.set_justify_content("center");
Layer3BrunchText.set_align_items("center");
Layer3BrunchText.set_margin("0px 0px 0px 0px");
Layer3BrunchText.set_padding("0px 0px 0px 0px");
Layer3BrunchText.set_parent(layer3PlanningContainer);

let Layer3BrunchTextTitle = new Element(DIV);
Layer3BrunchTextTitle.set_id("Layer3BrunchTextTitle");
//Layer3BrunchTextTitle.set_width("50%");
//Layer3BrunchTextTitle.set_height("100%");
Layer3BrunchTextTitle.set_innerHTML("LE BRUNCH");
Layer3BrunchTextTitle.set_fontFamily("Supermercado One");
Layer3BrunchTextTitle.set_fontWeight("bold");
Layer3BrunchTextTitle.set_textAlign("center");
Layer3BrunchTextTitle.set_fontSize("250%");
Layer3BrunchTextTitle.set_position("absolute");
Layer3BrunchTextTitle.set_width("100%");
Layer3BrunchTextTitle.set_top("5%");
//Layer3BrunchTextTitle.set_left("25%");
Layer3BrunchTextTitle.set_color("#FFFFFF");
Layer3BrunchTextTitle.set_margin("0px 0px 0px 0px");
Layer3BrunchTextTitle.set_padding("0px 0px 0px 0px");
Layer3BrunchTextTitle.set_parent(Layer3BrunchText);

let Layer3BrunchTextCore = new Element(DIV);
Layer3BrunchTextCore.set_id("Layer3BrunchTextCore");
Layer3BrunchTextCore.set_width("90%");
//Layer3EgliseTextTitle.set_height("100%");

Layer3BrunchTextCore.set_innerHTML("<p>Le brunch aura lieu le lendemain, &agrave 11h30 &agrave la Ferme Sainte Anne de Langres.<br/><br/><br/> \
Adresse : 380 chemin de la ferme Sainte Anne 52200 Langres.<br/><br/><br/> \
Coordonn&eacutees GPS : 47.860365285669985, 5.313605032819924.</p>");
Layer3BrunchTextCore.set_fontFamily("Supermercado One");
Layer3BrunchTextCore.set_fontWeight("bold");
Layer3BrunchTextCore.set_display("flex");
Layer3BrunchTextCore.set_justify_content("center");
Layer3BrunchTextCore.set_align_items("center");
Layer3BrunchTextCore.set_textAlign("center");
Layer3BrunchTextCore.set_fontSize("150%");
Layer3BrunchTextCore.set_position("absolute");
Layer3BrunchTextCore.set_top("20%");
// Layer3BrunchTextCore.set_left("5%");
Layer3BrunchTextCore.set_color("#FFFFFF");
Layer3BrunchTextCore.set_margin("0px 0px 0px 0px");
Layer3BrunchTextCore.set_padding("0px 0px 0px 0px");
Layer3BrunchTextCore.set_parent(Layer3BrunchText);
