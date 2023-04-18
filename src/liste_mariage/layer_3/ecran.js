let ecranstyle;

let ecran = new Element(DIV);
ecran.set_id("ecran");
ecran.set_width("50%");
ecran.set_height("100%");
ecran.set_position("absolute");
ecran.set_top(parseInt(tapis.top(),10) + parseInt(tapis.height(),10) + 40 + "px");
ecran.set_left("50%");
ecran.set_margin("0px 0px 0px 0px");
ecran.set_padding("0px 0px 0px 0%");
ecran.set_parent(layer3);

let ecranImg = new Element(IMG);
ecranImg.set_id("ecranImg");
ecranImg.set_src(rpath + "../../assets/ecranCroix.png");
ecranImg.set_width("75%");
// ecranImg.set_height("90%");
ecranImg.set_position("absolute");
ecranImg.set_top("0%");
ecranImg.set_left("10%");
ecranImg.set_margin("0px 0px 0px 0px");
ecranImg.set_padding("0px 0px 0px 0px");
ecranImg.set_parent(ecran);

let ecranText = new Element(DIV);
ecranText.set_id("layer2Text");
ecranText.set_position("absolute");
ecranText.set_width("75%");
ecranText.set_height("10%");
ecranText.set_left("10%");
// ecranText.set_top("90%");
ecranText.set_margin("0% 0% 0px 0px");
ecranText.set_padding("0% 0px 0px 0px");
ecranText.set_innerHTML("Ecran : 509&#8364");
ecranText.set_fontFamily("Supermercado One");
ecranText.set_fontSize("250%");
//ecranText.set_color("#FFFFFF");
ecranText.set_fontWeight("bold");
ecranText.set_textAlign("center");
ecranText.set_color("#FFFFFF");
ecranText.set_parent(ecran);

ecranstyle = getComputedStyle(ecranImg.element());
ecranImg.set_height( parseInt(ecranstyle.width, 10) + "px");
ecranText.set_top( parseInt(ecranImg.height(),10) + 10 + "px");
ecran.set_height(parseInt(ecranText.top(),10) + parseInt(ecranText.height(),10) + 40 + "px");