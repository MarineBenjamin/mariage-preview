let layer3ReceptionText = new Element("layer3PlanningContainerItem");
layer3ReceptionText.set_id("layer3ReceptionText");
layer3ReceptionText.set_width("100%");
layer3ReceptionText.set_height("100%");
layer3ReceptionText.set_position("absolute");
layer3ReceptionText.set_top("0px");
layer3ReceptionText.set_left("100%");
Layer3EgliseText.set_display("flex");
Layer3EgliseText.set_justify_content("center");
Layer3EgliseText.set_align_items("center");
layer3ReceptionText.set_margin("0px 0px 0px 0px");
layer3ReceptionText.set_padding("0px 0px 0px 0px");
layer3ReceptionText.set_parent(layer3PlanningContainer);

let layer3ReceptionTextTitle = new Element(DIV);
layer3ReceptionTextTitle.set_id("layer3ReceptionTextTitle");
//layer3ReceptionTextTitle.set_width("50%");
//layer3ReceptionTextTitle.set_height("100%");
layer3ReceptionTextTitle.set_innerHTML("LA R&EacuteCEPTION");
layer3ReceptionTextTitle.set_fontFamily("Supermercado One");
layer3ReceptionTextTitle.set_fontWeight("bold");
layer3ReceptionTextTitle.set_textAlign("center");
layer3ReceptionTextTitle.set_fontSize("250%");
layer3ReceptionTextTitle.set_position("absolute");
layer3ReceptionTextTitle.set_width("100%");
layer3ReceptionTextTitle.set_top("5%");
//layer3ReceptionTextTitle.set_left("17.5%");
layer3ReceptionTextTitle.set_margin("0px 0px 0px 0px");
layer3ReceptionTextTitle.set_padding("0px 0px 0px 0px");
layer3ReceptionTextTitle.set_color("#FFFFFF");
layer3ReceptionTextTitle.set_parent(layer3ReceptionText);

let layer3ReceptionTextCore = new Element(DIV);
layer3ReceptionTextCore.set_id("layer3ReceptionTextCore");
layer3ReceptionTextCore.set_width("90%");
//layer3ReceptionTextTitle.set_height("100%");

layer3ReceptionTextCore.set_innerHTML("<p>La r&eacuteception aura lieu apr&egraves la C&eacuter&eacutemonie &agrave la Ferme Sainte Anne de Langres.<br/><br/><br/> \
Adresse : 380 chemin de la ferme Sainte Anne 52200 Langres.<br/><br/><br/> \
Coordonn&eacutees GPS : 47.860365285669985, 5.313605032819924.</p>");
layer3ReceptionTextCore.set_fontFamily("Supermercado One");
layer3ReceptionTextCore.set_fontWeight("bold");
layer3ReceptionText.set_display("flex");
layer3ReceptionText.set_justify_content("center");
layer3ReceptionText.set_align_items("center");
layer3ReceptionTextCore.set_textAlign("center");
layer3ReceptionTextCore.set_fontSize("150%");
layer3ReceptionTextCore.set_position("absolute");
layer3ReceptionTextCore.set_top("20%");
// layer3ReceptionTextCore.set_left("5%");
layer3ReceptionTextCore.set_margin("0px 0px 0px 0px");
layer3ReceptionTextCore.set_padding("0px 0px 0px 0px");
layer3ReceptionTextCore.set_color("#FFFFFF");
layer3ReceptionTextCore.set_parent(layer3ReceptionText);
