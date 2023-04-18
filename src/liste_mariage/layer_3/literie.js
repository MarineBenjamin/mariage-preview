let literiestyle;

let literie = new Element(DIV);
literie.set_id("literie");
literie.set_width("50%");
literie.set_height("100%");
literie.set_position("absolute");
literie.set_top(parseInt(tableau.top(),10) + parseInt(tableau.height(),10) + 40 + "px");
literie.set_left("0%");
literie.set_margin("0px 0px 0px 0px");
literie.set_padding("0px 0px 0px 0%");
literie.set_parent(layer3);

let literieImg = new Element(IMG);
literieImg.set_id("literieImg");
literieImg.set_src(rpath + "../../assets/literie.png");
literieImg.set_width("75%");
//literieImg.set_height("90%");
literieImg.set_position("absolute");
literieImg.set_top("0%");
literieImg.set_left("10%");
literieImg.set_margin("0px 0px 0px 0px");
literieImg.set_padding("0px 0px 0px 0px");
literieImg.set_parent(literie);

let literieText = new Element(DIV);
literieText.set_id("layer2Text");
literieText.set_position("absolute");
literieText.set_width("75%");
literieText.set_height("10%");
literieText.set_left("10%");
//literieText.set_top("90%");
literieText.set_margin("0% 0% 0px 0px");
literieText.set_padding("0% 0px 0px 0px");
literieText.set_innerHTML("Literie : 236&#8364");
literieText.set_fontFamily("Supermercado One");
literieText.set_fontSize("250%");
//literieText.set_color("#FFFFFF");
literieText.set_fontWeight("bold");
literieText.set_textAlign("center");
literieText.set_color("#FFFFFF");
literieText.set_parent(literie);

literiestyle = getComputedStyle(literieImg.element());
literieImg.set_height( parseInt(literiestyle.width, 10) + "px");
literieText.set_top( parseInt(literieImg.height(),10) + 10 + "px");
literie.set_height(parseInt(literieText.top(),10) + parseInt(literieText.height(),10) + 40 + "px");