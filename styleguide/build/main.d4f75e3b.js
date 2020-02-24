(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(t,i,r){"use strict";r.r(i),r.d(i,"TextInput",(function(){return s}));var n=r(2),e=r.n(n);function s(t){var i=t.placeholder,r=void 0===i?"Input placeholder":i,n=t.value,s=void 0===n?void 0:n,a=t.error,o=void 0!==a&&a,p=t.errorTip,c=void 0===p?"Something went wrong":p,_=t.onChange,j=void 0===_?function(){console.error("onChange callback missed!")}:_,S=t.customStylesContainer,l=void 0===S?{}:S,y=o?e.a.createElement("div",{className:"text-input__error-container"},c):null;return e.a.createElement("div",{className:"text-input",style:l},e.a.createElement("div",{className:"text-input__inner".concat(o?" text-input__inner--error":"")},e.a.createElement("input",{className:"text-input__tag".concat(o?" text-input__tag--error":""),type:"text",placeholder:" ",defaultValue:s,onInput:function(t){return j(t.target.value)}}),e.a.createElement("span",{className:"text-input__placeholder".concat(o?" text-input__placeholder--error":"")},r)),y)}r(753)},178:function(t,i,r){t.exports=r(758)},330:function(t,i,r){var n={"./Binary_Property/ASCII.js":331,"./Binary_Property/ASCII_Hex_Digit.js":332,"./Binary_Property/Alphabetic.js":333,"./Binary_Property/Any.js":334,"./Binary_Property/Assigned.js":335,"./Binary_Property/Bidi_Control.js":336,"./Binary_Property/Bidi_Mirrored.js":337,"./Binary_Property/Case_Ignorable.js":338,"./Binary_Property/Cased.js":339,"./Binary_Property/Changes_When_Casefolded.js":340,"./Binary_Property/Changes_When_Casemapped.js":341,"./Binary_Property/Changes_When_Lowercased.js":342,"./Binary_Property/Changes_When_NFKC_Casefolded.js":343,"./Binary_Property/Changes_When_Titlecased.js":344,"./Binary_Property/Changes_When_Uppercased.js":345,"./Binary_Property/Dash.js":346,"./Binary_Property/Default_Ignorable_Code_Point.js":347,"./Binary_Property/Deprecated.js":348,"./Binary_Property/Diacritic.js":349,"./Binary_Property/Emoji.js":350,"./Binary_Property/Emoji_Component.js":351,"./Binary_Property/Emoji_Modifier.js":352,"./Binary_Property/Emoji_Modifier_Base.js":353,"./Binary_Property/Emoji_Presentation.js":354,"./Binary_Property/Extended_Pictographic.js":355,"./Binary_Property/Extender.js":356,"./Binary_Property/Grapheme_Base.js":357,"./Binary_Property/Grapheme_Extend.js":358,"./Binary_Property/Hex_Digit.js":359,"./Binary_Property/IDS_Binary_Operator.js":360,"./Binary_Property/IDS_Trinary_Operator.js":361,"./Binary_Property/ID_Continue.js":362,"./Binary_Property/ID_Start.js":363,"./Binary_Property/Ideographic.js":364,"./Binary_Property/Join_Control.js":365,"./Binary_Property/Logical_Order_Exception.js":366,"./Binary_Property/Lowercase.js":367,"./Binary_Property/Math.js":368,"./Binary_Property/Noncharacter_Code_Point.js":369,"./Binary_Property/Pattern_Syntax.js":370,"./Binary_Property/Pattern_White_Space.js":371,"./Binary_Property/Quotation_Mark.js":372,"./Binary_Property/Radical.js":373,"./Binary_Property/Regional_Indicator.js":374,"./Binary_Property/Sentence_Terminal.js":375,"./Binary_Property/Soft_Dotted.js":376,"./Binary_Property/Terminal_Punctuation.js":377,"./Binary_Property/Unified_Ideograph.js":378,"./Binary_Property/Uppercase.js":379,"./Binary_Property/Variation_Selector.js":380,"./Binary_Property/White_Space.js":381,"./Binary_Property/XID_Continue.js":382,"./Binary_Property/XID_Start.js":383,"./General_Category/Cased_Letter.js":384,"./General_Category/Close_Punctuation.js":385,"./General_Category/Connector_Punctuation.js":386,"./General_Category/Control.js":387,"./General_Category/Currency_Symbol.js":388,"./General_Category/Dash_Punctuation.js":389,"./General_Category/Decimal_Number.js":390,"./General_Category/Enclosing_Mark.js":391,"./General_Category/Final_Punctuation.js":392,"./General_Category/Format.js":393,"./General_Category/Initial_Punctuation.js":394,"./General_Category/Letter.js":395,"./General_Category/Letter_Number.js":396,"./General_Category/Line_Separator.js":397,"./General_Category/Lowercase_Letter.js":398,"./General_Category/Mark.js":399,"./General_Category/Math_Symbol.js":400,"./General_Category/Modifier_Letter.js":401,"./General_Category/Modifier_Symbol.js":402,"./General_Category/Nonspacing_Mark.js":403,"./General_Category/Number.js":404,"./General_Category/Open_Punctuation.js":405,"./General_Category/Other.js":406,"./General_Category/Other_Letter.js":407,"./General_Category/Other_Number.js":408,"./General_Category/Other_Punctuation.js":409,"./General_Category/Other_Symbol.js":410,"./General_Category/Paragraph_Separator.js":411,"./General_Category/Private_Use.js":412,"./General_Category/Punctuation.js":413,"./General_Category/Separator.js":414,"./General_Category/Space_Separator.js":415,"./General_Category/Spacing_Mark.js":416,"./General_Category/Surrogate.js":417,"./General_Category/Symbol.js":418,"./General_Category/Titlecase_Letter.js":419,"./General_Category/Unassigned.js":420,"./General_Category/Uppercase_Letter.js":421,"./Script/Adlam.js":422,"./Script/Ahom.js":423,"./Script/Anatolian_Hieroglyphs.js":424,"./Script/Arabic.js":425,"./Script/Armenian.js":426,"./Script/Avestan.js":427,"./Script/Balinese.js":428,"./Script/Bamum.js":429,"./Script/Bassa_Vah.js":430,"./Script/Batak.js":431,"./Script/Bengali.js":432,"./Script/Bhaiksuki.js":433,"./Script/Bopomofo.js":434,"./Script/Brahmi.js":435,"./Script/Braille.js":436,"./Script/Buginese.js":437,"./Script/Buhid.js":438,"./Script/Canadian_Aboriginal.js":439,"./Script/Carian.js":440,"./Script/Caucasian_Albanian.js":441,"./Script/Chakma.js":442,"./Script/Cham.js":443,"./Script/Cherokee.js":444,"./Script/Common.js":445,"./Script/Coptic.js":446,"./Script/Cuneiform.js":447,"./Script/Cypriot.js":448,"./Script/Cyrillic.js":449,"./Script/Deseret.js":450,"./Script/Devanagari.js":451,"./Script/Dogra.js":452,"./Script/Duployan.js":453,"./Script/Egyptian_Hieroglyphs.js":454,"./Script/Elbasan.js":455,"./Script/Elymaic.js":456,"./Script/Ethiopic.js":457,"./Script/Georgian.js":458,"./Script/Glagolitic.js":459,"./Script/Gothic.js":460,"./Script/Grantha.js":461,"./Script/Greek.js":462,"./Script/Gujarati.js":463,"./Script/Gunjala_Gondi.js":464,"./Script/Gurmukhi.js":465,"./Script/Han.js":466,"./Script/Hangul.js":467,"./Script/Hanifi_Rohingya.js":468,"./Script/Hanunoo.js":469,"./Script/Hatran.js":470,"./Script/Hebrew.js":471,"./Script/Hiragana.js":472,"./Script/Imperial_Aramaic.js":473,"./Script/Inherited.js":474,"./Script/Inscriptional_Pahlavi.js":475,"./Script/Inscriptional_Parthian.js":476,"./Script/Javanese.js":477,"./Script/Kaithi.js":478,"./Script/Kannada.js":479,"./Script/Katakana.js":480,"./Script/Kayah_Li.js":481,"./Script/Kharoshthi.js":482,"./Script/Khmer.js":483,"./Script/Khojki.js":484,"./Script/Khudawadi.js":485,"./Script/Lao.js":486,"./Script/Latin.js":487,"./Script/Lepcha.js":488,"./Script/Limbu.js":489,"./Script/Linear_A.js":490,"./Script/Linear_B.js":491,"./Script/Lisu.js":492,"./Script/Lycian.js":493,"./Script/Lydian.js":494,"./Script/Mahajani.js":495,"./Script/Makasar.js":496,"./Script/Malayalam.js":497,"./Script/Mandaic.js":498,"./Script/Manichaean.js":499,"./Script/Marchen.js":500,"./Script/Masaram_Gondi.js":501,"./Script/Medefaidrin.js":502,"./Script/Meetei_Mayek.js":503,"./Script/Mende_Kikakui.js":504,"./Script/Meroitic_Cursive.js":505,"./Script/Meroitic_Hieroglyphs.js":506,"./Script/Miao.js":507,"./Script/Modi.js":508,"./Script/Mongolian.js":509,"./Script/Mro.js":510,"./Script/Multani.js":511,"./Script/Myanmar.js":512,"./Script/Nabataean.js":513,"./Script/Nandinagari.js":514,"./Script/New_Tai_Lue.js":515,"./Script/Newa.js":516,"./Script/Nko.js":517,"./Script/Nushu.js":518,"./Script/Nyiakeng_Puachue_Hmong.js":519,"./Script/Ogham.js":520,"./Script/Ol_Chiki.js":521,"./Script/Old_Hungarian.js":522,"./Script/Old_Italic.js":523,"./Script/Old_North_Arabian.js":524,"./Script/Old_Permic.js":525,"./Script/Old_Persian.js":526,"./Script/Old_Sogdian.js":527,"./Script/Old_South_Arabian.js":528,"./Script/Old_Turkic.js":529,"./Script/Oriya.js":530,"./Script/Osage.js":531,"./Script/Osmanya.js":532,"./Script/Pahawh_Hmong.js":533,"./Script/Palmyrene.js":534,"./Script/Pau_Cin_Hau.js":535,"./Script/Phags_Pa.js":536,"./Script/Phoenician.js":537,"./Script/Psalter_Pahlavi.js":538,"./Script/Rejang.js":539,"./Script/Runic.js":540,"./Script/Samaritan.js":541,"./Script/Saurashtra.js":542,"./Script/Sharada.js":543,"./Script/Shavian.js":544,"./Script/Siddham.js":545,"./Script/SignWriting.js":546,"./Script/Sinhala.js":547,"./Script/Sogdian.js":548,"./Script/Sora_Sompeng.js":549,"./Script/Soyombo.js":550,"./Script/Sundanese.js":551,"./Script/Syloti_Nagri.js":552,"./Script/Syriac.js":553,"./Script/Tagalog.js":554,"./Script/Tagbanwa.js":555,"./Script/Tai_Le.js":556,"./Script/Tai_Tham.js":557,"./Script/Tai_Viet.js":558,"./Script/Takri.js":559,"./Script/Tamil.js":560,"./Script/Tangut.js":561,"./Script/Telugu.js":562,"./Script/Thaana.js":563,"./Script/Thai.js":564,"./Script/Tibetan.js":565,"./Script/Tifinagh.js":566,"./Script/Tirhuta.js":567,"./Script/Ugaritic.js":568,"./Script/Vai.js":569,"./Script/Wancho.js":570,"./Script/Warang_Citi.js":571,"./Script/Yi.js":572,"./Script/Zanabazar_Square.js":573,"./Script_Extensions/Adlam.js":574,"./Script_Extensions/Ahom.js":575,"./Script_Extensions/Anatolian_Hieroglyphs.js":576,"./Script_Extensions/Arabic.js":577,"./Script_Extensions/Armenian.js":578,"./Script_Extensions/Avestan.js":579,"./Script_Extensions/Balinese.js":580,"./Script_Extensions/Bamum.js":581,"./Script_Extensions/Bassa_Vah.js":582,"./Script_Extensions/Batak.js":583,"./Script_Extensions/Bengali.js":584,"./Script_Extensions/Bhaiksuki.js":585,"./Script_Extensions/Bopomofo.js":586,"./Script_Extensions/Brahmi.js":587,"./Script_Extensions/Braille.js":588,"./Script_Extensions/Buginese.js":589,"./Script_Extensions/Buhid.js":590,"./Script_Extensions/Canadian_Aboriginal.js":591,"./Script_Extensions/Carian.js":592,"./Script_Extensions/Caucasian_Albanian.js":593,"./Script_Extensions/Chakma.js":594,"./Script_Extensions/Cham.js":595,"./Script_Extensions/Cherokee.js":596,"./Script_Extensions/Common.js":597,"./Script_Extensions/Coptic.js":598,"./Script_Extensions/Cuneiform.js":599,"./Script_Extensions/Cypriot.js":600,"./Script_Extensions/Cyrillic.js":601,"./Script_Extensions/Deseret.js":602,"./Script_Extensions/Devanagari.js":603,"./Script_Extensions/Dogra.js":604,"./Script_Extensions/Duployan.js":605,"./Script_Extensions/Egyptian_Hieroglyphs.js":606,"./Script_Extensions/Elbasan.js":607,"./Script_Extensions/Elymaic.js":608,"./Script_Extensions/Ethiopic.js":609,"./Script_Extensions/Georgian.js":610,"./Script_Extensions/Glagolitic.js":611,"./Script_Extensions/Gothic.js":612,"./Script_Extensions/Grantha.js":613,"./Script_Extensions/Greek.js":614,"./Script_Extensions/Gujarati.js":615,"./Script_Extensions/Gunjala_Gondi.js":616,"./Script_Extensions/Gurmukhi.js":617,"./Script_Extensions/Han.js":618,"./Script_Extensions/Hangul.js":619,"./Script_Extensions/Hanifi_Rohingya.js":620,"./Script_Extensions/Hanunoo.js":621,"./Script_Extensions/Hatran.js":622,"./Script_Extensions/Hebrew.js":623,"./Script_Extensions/Hiragana.js":624,"./Script_Extensions/Imperial_Aramaic.js":625,"./Script_Extensions/Inherited.js":626,"./Script_Extensions/Inscriptional_Pahlavi.js":627,"./Script_Extensions/Inscriptional_Parthian.js":628,"./Script_Extensions/Javanese.js":629,"./Script_Extensions/Kaithi.js":630,"./Script_Extensions/Kannada.js":631,"./Script_Extensions/Katakana.js":632,"./Script_Extensions/Kayah_Li.js":633,"./Script_Extensions/Kharoshthi.js":634,"./Script_Extensions/Khmer.js":635,"./Script_Extensions/Khojki.js":636,"./Script_Extensions/Khudawadi.js":637,"./Script_Extensions/Lao.js":638,"./Script_Extensions/Latin.js":639,"./Script_Extensions/Lepcha.js":640,"./Script_Extensions/Limbu.js":641,"./Script_Extensions/Linear_A.js":642,"./Script_Extensions/Linear_B.js":643,"./Script_Extensions/Lisu.js":644,"./Script_Extensions/Lycian.js":645,"./Script_Extensions/Lydian.js":646,"./Script_Extensions/Mahajani.js":647,"./Script_Extensions/Makasar.js":648,"./Script_Extensions/Malayalam.js":649,"./Script_Extensions/Mandaic.js":650,"./Script_Extensions/Manichaean.js":651,"./Script_Extensions/Marchen.js":652,"./Script_Extensions/Masaram_Gondi.js":653,"./Script_Extensions/Medefaidrin.js":654,"./Script_Extensions/Meetei_Mayek.js":655,"./Script_Extensions/Mende_Kikakui.js":656,"./Script_Extensions/Meroitic_Cursive.js":657,"./Script_Extensions/Meroitic_Hieroglyphs.js":658,"./Script_Extensions/Miao.js":659,"./Script_Extensions/Modi.js":660,"./Script_Extensions/Mongolian.js":661,"./Script_Extensions/Mro.js":662,"./Script_Extensions/Multani.js":663,"./Script_Extensions/Myanmar.js":664,"./Script_Extensions/Nabataean.js":665,"./Script_Extensions/Nandinagari.js":666,"./Script_Extensions/New_Tai_Lue.js":667,"./Script_Extensions/Newa.js":668,"./Script_Extensions/Nko.js":669,"./Script_Extensions/Nushu.js":670,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":671,"./Script_Extensions/Ogham.js":672,"./Script_Extensions/Ol_Chiki.js":673,"./Script_Extensions/Old_Hungarian.js":674,"./Script_Extensions/Old_Italic.js":675,"./Script_Extensions/Old_North_Arabian.js":676,"./Script_Extensions/Old_Permic.js":677,"./Script_Extensions/Old_Persian.js":678,"./Script_Extensions/Old_Sogdian.js":679,"./Script_Extensions/Old_South_Arabian.js":680,"./Script_Extensions/Old_Turkic.js":681,"./Script_Extensions/Oriya.js":682,"./Script_Extensions/Osage.js":683,"./Script_Extensions/Osmanya.js":684,"./Script_Extensions/Pahawh_Hmong.js":685,"./Script_Extensions/Palmyrene.js":686,"./Script_Extensions/Pau_Cin_Hau.js":687,"./Script_Extensions/Phags_Pa.js":688,"./Script_Extensions/Phoenician.js":689,"./Script_Extensions/Psalter_Pahlavi.js":690,"./Script_Extensions/Rejang.js":691,"./Script_Extensions/Runic.js":692,"./Script_Extensions/Samaritan.js":693,"./Script_Extensions/Saurashtra.js":694,"./Script_Extensions/Sharada.js":695,"./Script_Extensions/Shavian.js":696,"./Script_Extensions/Siddham.js":697,"./Script_Extensions/SignWriting.js":698,"./Script_Extensions/Sinhala.js":699,"./Script_Extensions/Sogdian.js":700,"./Script_Extensions/Sora_Sompeng.js":701,"./Script_Extensions/Soyombo.js":702,"./Script_Extensions/Sundanese.js":703,"./Script_Extensions/Syloti_Nagri.js":704,"./Script_Extensions/Syriac.js":705,"./Script_Extensions/Tagalog.js":706,"./Script_Extensions/Tagbanwa.js":707,"./Script_Extensions/Tai_Le.js":708,"./Script_Extensions/Tai_Tham.js":709,"./Script_Extensions/Tai_Viet.js":710,"./Script_Extensions/Takri.js":711,"./Script_Extensions/Tamil.js":712,"./Script_Extensions/Tangut.js":713,"./Script_Extensions/Telugu.js":714,"./Script_Extensions/Thaana.js":715,"./Script_Extensions/Thai.js":716,"./Script_Extensions/Tibetan.js":717,"./Script_Extensions/Tifinagh.js":718,"./Script_Extensions/Tirhuta.js":719,"./Script_Extensions/Ugaritic.js":720,"./Script_Extensions/Vai.js":721,"./Script_Extensions/Wancho.js":722,"./Script_Extensions/Warang_Citi.js":723,"./Script_Extensions/Yi.js":724,"./Script_Extensions/Zanabazar_Square.js":725,"./index.js":726,"./unicode-version.js":727};function e(t){var i=s(t);return r(i)}function s(t){if(!r.o(n,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n[t]}e.keys=function(){return Object.keys(n)},e.resolve=s,t.exports=e,e.id=330},753:function(t,i,r){},754:function(t,i,r){t.exports={doclets:{},displayName:"TextInput",description:"Simple text input component with flow-placeholder and mobile-ready\n",methods:[],props:[{type:{name:"object"},required:!1,description:"custom styles for main container, example: `{ maxWidth: 'unset' }`",defaultValue:{value:"{}",computed:!1},tags:{},name:"customStylesContainer"},{type:{name:"bool"},required:!1,description:"If passed in props, input will be marked as errored",defaultValue:{value:"false",computed:!1},tags:{},name:"error"},{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Error text, can be string or another component",defaultValue:{value:"'Something went wrong'",computed:!1},tags:{},name:"errorTip"},{type:{name:"func"},required:!1,description:"Callback, will be used as onInput at input-tag",defaultValue:{value:"() => { console.error('onChange callback missed!') }",computed:!1},tags:{},name:"onChange"},{type:{name:"string"},required:!1,description:"Placeholder; not input-tag attribute!",defaultValue:{value:"'Input placeholder'",computed:!1},tags:{},name:"placeholder"},{type:{name:"string"},required:!1,description:"Value; will be used in input-tag as defaultValue",defaultValue:{value:"undefined",computed:!0},tags:{},name:"value"}],tags:{},examples:r(755)}},755:function(t,i,r){var n={react:r(2),"./TextInput.js":r(164)},e=r(756).default.bind(null,n),s=r(757).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst TextInput$0 = require('./TextInput.js');\nconst TextInput = TextInput$0['TextInput'] || (TextInput$0.default || TextInput$0);",e);t.exports=[{type:"markdown",content:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"},{type:"code",content:"<TextInput\n  placeholder='\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430'\n  value='\u0410\u043d\u0434\u0440\u0435\u0439'\n  onChange={ () => {} }\n/>",settings:{},evalInContext:s},{type:"markdown",content:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043e\u0448\u0438\u0431\u043a\u0438:"},{type:"code",content:"<TextInput\n  placeholder='\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430'\n  error\n  errorTip='\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a'\n  onChange={ () => {} }\n/>",settings:{},evalInContext:s},{type:"markdown",content:"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 (`errorTip`) \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0442\u0438\u043f string \u0438\u043b\u0438 React.Component \u0434\u043b\u044f \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0439 \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438:"},{type:"code",content:"<TextInput\n  placeholder='\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430'\n  error\n  errorTip={ (\n    <span><b>\u0412\u044b \u0447\u0442\u043e!!!</b> \u0418\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0435!</span>\n  ) }\n  onChange={ () => {} }\n/>",settings:{},evalInContext:s},{type:"markdown",content:"\u041c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u0441\u0442\u0438\u043b\u0438 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0443\u044e \u0448\u0438\u0440\u0438\u043d\u0443:"},{type:"code",content:"<TextInput\n  placeholder='480 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 \u0448\u0438\u0440\u0438\u043d\u0443'\n  customStylesContainer={ { maxWidth: '480px' } }\n  onChange={ () => {} }\n/>",settings:{},evalInContext:s}]}},[[178,1,2]]]);