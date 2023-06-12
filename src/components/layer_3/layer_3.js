let layer3 = new Element(DIV);
layer3.set_id("layer3");
layer3.set_width("100%");
layer3.set_height("50%");
layer3.set_position("absolute");
//layer3.set_backgroundColor("#FFFFFF");
layer3.set_top("100%");
layer3.set_left("0px");
layer3.set_margin("0px 0px 0px 0px");
layer3.set_padding("0px 0px 0px 0px");
//layer3.set_innerHTML("Se marient<br/>le<br/>10 Juin 2023 !");
//layer3.set_fontFamily("Supermercado One");
//layer3.set_fontSize("250%");
//layer3.set_color("#FFFFFF");
//layer3.set_fontWeight("bold");
//layer3.set_textAlign("center");
document.body.appendChild(layer3.element());

let layer3Text = new Element(DIV);
layer3Text.set_id("layer3Text");
layer3Text.set_width("90%");
layer3Text.set_position("absolute");
layer3Text.set_left("5%");
layer3Text.set_margin("0% 0% 0px 0px");
layer3Text.set_padding("0% 0px 0px 0px");
layer3Text.set_innerHTML("<p> Merci &agrave tous et &agrave toutes pour votre participation. Ce fut un grand bonheur de vous avoir parmis nous. <br><br>\
Les photos du mariage sont disponibles ici:<br>\
<a style=\"color:white\" href=https://1drv.ms/u/s!Ah3IXYPmz59HjXZ1THHwHhbWvoNE?e=HgQIq1 target='_blank'>photos mariage (mise &agrave jour le 12/06/23).</a><br><br>\
Si vous m&ecircme avez des photos que vous souhaitez partager, merci de les envoyer &agrave Thomas &agrave l'adresse suivante: foucrier.t@hotmail.fr. Il pourra ainsi mettre &agrave jour le site pour y inclure vos photos (La date changera &agrave chaque mise &agrave jour pour indiquer les changements). </p>");
layer3Text.set_fontFamily("Supermercado One");
layer3Text.set_fontSize("250%");
layer3Text.set_color("#FFFFFF");
layer3Text.set_fontWeight("bold");
layer3Text.set_textAlign("center");
layer3Text.set_parent(layer3);