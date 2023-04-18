let Layer3EgliseText = new Element("layer3PlanningContainerItem");
Layer3EgliseText.set_id("Layer3EgliseText");
Layer3EgliseText.set_width("100%");
Layer3EgliseText.set_height("100%");
Layer3EgliseText.set_position("absolute");
Layer3EgliseText.set_top("0px");
Layer3EgliseText.set_left("0px");
Layer3EgliseText.set_margin("0px 0px 0px 0px");
Layer3EgliseText.set_padding("0px 0px 0px 0px");
Layer3EgliseText.set_parent(layer3PlanningContainer);

let Layer3EgliseTextTitle = new Element(DIV);
Layer3EgliseTextTitle.set_id("Layer3EgliseTextTitle");
//Layer3EgliseTextTitle.set_width("50%");
//Layer3EgliseTextTitle.set_height("100%");
Layer3EgliseTextTitle.set_innerHTML("LA C&EacuteR&EacuteMONIE");
Layer3EgliseTextTitle.set_fontFamily("Supermercado One");
Layer3EgliseTextTitle.set_fontWeight("bold");
Layer3EgliseTextTitle.set_textAlign("center");
Layer3EgliseTextTitle.set_width("100%");
Layer3EgliseTextTitle.set_fontSize("250%");
Layer3EgliseTextTitle.set_position("absolute");
Layer3EgliseTextTitle.set_top("5%");
Layer3EgliseTextTitle.set_color("#FFFFFF");
//Layer3EgliseTextTitle.set_left("20%");
Layer3EgliseTextTitle.set_margin("0px 0px 0px 0px");
Layer3EgliseTextTitle.set_padding("0px 0px 0px 0px");
Layer3EgliseTextTitle.set_parent(Layer3EgliseText);

let Layer3EgliseTextCore = new Element(DIV);
Layer3EgliseTextCore.set_id("Layer3EgliseTextCore");
Layer3EgliseTextCore.set_width("90%");
//Layer3EgliseTextTitle.set_height("100%");

Layer3EgliseTextCore.set_innerHTML("<p>La C&eacuter&eacutemonie religieuse se d&eacuteroulera &agrave 15h30, &agrave l'&eacuteglise Saint Gervais - Saint Protais de Vieux Moulins.<br/><br/><br/> \
	Adresse : Rue de La Roche Belin, 52200, Perrancey-les-Vieux-Moulins.<br/><br/><br/> \
	Coordonn&eacutees GPS : 47.848812, 5.258236.</p>");
Layer3EgliseTextCore.set_fontFamily("Supermercado One");
Layer3EgliseTextCore.set_fontWeight("bold");
Layer3EgliseTextCore.set_textAlign("center");
Layer3EgliseTextCore.set_display("flex");
Layer3EgliseTextCore.set_justify_content("center");
Layer3EgliseTextCore.set_align_items("center");
Layer3EgliseTextCore.set_fontSize("150%");
Layer3EgliseTextCore.set_position("absolute");
Layer3EgliseTextCore.set_top("20%");
// Layer3EgliseTextCore.set_left("5%");
Layer3EgliseTextCore.set_color("#FFFFFF");
Layer3EgliseTextCore.set_margin("0px 0px 0px 0px");
Layer3EgliseTextCore.set_padding("0px 0px 0px 0px");
Layer3EgliseTextCore.set_parent(Layer3EgliseText);
