// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {insertSemicolon, trackNewline} from "./substanceTokens.js"
const spec_Identifier = {__proto__:null,for:14, in:16, where:22, Let:60, AutoLabel:64, All:66, Label:68, NoLabel:72}
export const parser = LRParser.deserialize({
  version: 14,
  states: "/lQ`QPOOPqOPOOOvQPO'#C`OOQS'#Da'#DaO!RQTO'#DSQ`QPOOO!ZQPO'#CyO!`QPO'#C{O!hQPO'#C{O!mQPO'#C{P!rOWO'#C^POOO)C?O)C?OO!}QTO,59eO#`QTO,58zO#kQPO'#CwO$PQTO,59bO$[QPO,59eOOQO'#Dy'#DyOOQO,59n,59nOOQO-E7Q-E7QO$aQPO,59eO$fQTO'#DbOOQS,59g,59gO$tQPO,59gO$|QTO,59gPOOO'#DR'#DRP%XOWO,58xPOOO,58x,58xO%dQPO'#DTO%iQTO,59|O%wQPO1G/POOQS1G.f1G.fO%|QPO'#CbOOQO'#Co'#CoO&RQPO'#DwO&ZQPO'#DwO&cQPO,59cOOQS1G.|1G.|O&hQPO1G/PO&mQTO1G/ROOQS1G/R1G/RPOOO-E7P-E7PPOOO1G.d1G.dOOQS,59o,59oOOQS-E7R-E7RO&hQPO7+$kO&xQPO'#DdO&}QTO,58|O'YQPO'#DVO'kQPO,5:cO'kQPO,5:cOOQS1G.}1G.}O'sQTO7+$kOOQS7+$m7+$mO(OQTO<<HVO(ZQPO,5:OO(`QPO1G.hOOQO,59q,59qO(wQPO,59qOOQO-E7T-E7TO)PQPO1G/}OOQS<<HV<<HVOOQSAN=qAN=qO)XQPO'#CeO)^QTO1G/jOOQO'#Cj'#CjOOQS'#Cm'#CmO)lQPO'#CmO)}QQO'#ChO(`QPO'#CmOOQS'#Ch'#ChO(`QPO'#ChO*oQTO7+$SOOQO1G/]1G/]O*}QPO,59PO+SQTO7+%UO+bQPO'#DUO,OQQO,59XO)lQPO'#CmOOQO'#Cp'#CpOOQO'#Cq'#CqOOQO'#Cr'#CrOOQO'#Cs'#CsOOQO'#Ct'#CtO)lQPO,59XO)lQPO,59XO,`QPO'#CuO)lQPO,59SO,tQQO,59XO,{QPO,59SOOQS,59S,59SOOQO'#Ck'#CkOOQO'#Cl'#ClO(`QPO,59SO-WQPO1G.kOOQS-E7S-E7SO-]QPO,59pO-vQPO,59XOOQS1G.s1G.sO.fQQO1G.sOOQO,59a,59aO.vQTO1G.nOOQS1G.n1G.nO/ZQPO7+$VO(ZQPO1G/[O/`QTO,59XOOQS<<Gq<<GqOOQS7+$v7+$vO/pQTO1G.sO)lQPO'#CmO)lQPO,59XO)lQPO,59X",
  stateData: "0Y~O}OS!OOSPOS!PPQ~OTQOnUOpVOrWOtXO~O!PYO~OT[O!d^O!l`O~O{aO!naO~OTdO~OTeOqfO~OTgO~OTeO~O!QiO!RiO!SkO~O!VlO!lnOV!UX{!UX!n!UX~OVpO{Sa!nSa~OTrOYrObrOlrO!^qO!e!kP~OVpO{ja!nja~OTvO~O!lnO~O!VlO{!UX!n!UXV!UX~OlwOswO~OVpO{oa!noa~O!QiO!RiO!SzO~OT{O~O!VlOV!Ua{!Ua!n!Ua~OT}O~OT!OO~O!V!QO!e!kX~OY!SOb!SO~O!e!TO~O!d^O~OVpO{oi!noi~OW!XO~OZ!YO{Ua!nUa~OT!ZOY!ZOb!ZOl!ZO!^qO~O!V!QO!e!ka~OVpO{mq!nmq~OVpO{my!nmy~O!Y!aO~OT!dOY!dO]!hOb!dO!Z!cO!^qO!d!gO~OY!kOb!kO~O!V!QO!e!ki~OY!lO~O!V!nOZ!Wi{!Wi!n!Wi~OT!dOY!dOb!dO!^qO!d!pO~O!^!uO!_!qO!`!rO!a!sO!b!tO!c!uO!f!xO!g!xO!h!xO!i!xO~O![!}O!]#OO{Uq!nUq~O!V#QO~O!V!nOZ!Wq{!Wq!n!Wq~OT#SO~O!^!uO!_!qO!`!rO!a!sO!b!tO!c!uO!eaa~O!faa!gaa!haa!iaa~P+gO!j#WOTiXYiXbiX!^iX!diX~O!e#UO~P)}O![!}O!]#OO!e#YO~OY#ZO~OW#[O~O!^!uO!_!qO!`!rO!a!sO!b!tO!c!uO~O!e#UO~P-bO!_!qO!`!rO!a!sO!b!tO!^ai!cai!eai~O!fai!gai!hai!iai~P-}O{[i![[i!][i!n[i!e[i~P-bO!X#^O~O{aa![aa!]aa!naa~P+gO{ai![ai!]ai!nai~P-}ObYP!^]T]~",
  goto: "&|!nPP!oP!rP!vPP#YPP#`P#l#r#r#vP$f$|$|$|$|%Y%d!r%hP!rP!rPPPPP%q%w%}&U&[PPPPPPPPP&f&jP&sPPPPPPPPPPPPPPPPPP&vP&yRZPTROTQo]Qu_QxhQ!VwQ!_!UR!`!WQ!b!XR#_#[Q!j!YQ!{!gQ!|!iR#Y#PX!i!Y!g!i#PT#P!j!{U!f!Y!i#PQ!o!eQ!z!gQ#T!pS#U!v#bQ#V!wQ#X!yQ#]#aR#`#cQs^Q![!Q^!e!Y!e!g!i!v!w#PZ#a!p!y#a#b#cW!v!f!o!z#VX#b#T#X#]#`U!w!f!o!zV#c#T#X#]T!y!f!zQ_QQ!UvR!W}QjYRyjQTORcTSm[eR|mQ!m!bR#R!mQ!RrS!]!R!^R!^!STSOTQ]QQfVRhXR!PpRt^RbS",
  nodeNames: "⚠ LineComment BlockComment Program TypeApp Identifier IndexedStatement for in Range Number where BooleanExpression Boolean BoolOp BoolOp BoolOp NumericExpression Float ArithOp ArithOp ArithOp ArithOp ArithOp ArithOp CompareOp PredicateApp ArgList String Fn_ConsApp Let Labeling AutoLabel All Label TeX NoLabel",
  maxTerm: 76,
  context: trackNewline,
  skippedNodes: [0,1,2,37],
  repeatNodeCount: 5,
  tokenData: ".d~RsXY#`YZ#qZ[#`]^#qpq#`qr#vrs$Ttu%quv&ovw&txy'Pyz'Uz{'Z{|'`|}'e}!O'j!P!Q(Z!Q![(h![!])o!]!^)z!^!_*P!_!`*U!`!a*c!c!})^!}#O*h#P#Q*m#Q#R*r#R#S)^#T#Y)^#Y#Z*w#Z#h)^#h#i-X#i#o)^#p#q.X$f$g#`~#eS}~XY#`Z[#`pq#`$f$g#`~#vO!O~U#{P!ZQ!_!`$OS$TO!iS~$WVOr$Trs$ms#O$T#O#P$r#P;'S$T;'S;=`%k<%lO$T~$rOl~~$uRO;'S$T;'S;=`%O;=`O$T~%RWOr$Trs$ms#O$T#O#P$r#P;'S$T;'S;=`%k;=`<%l$T<%lO$T~%nP;=`<%l$T~%tSOt&Qu;'S&Q;'S;=`&i<%lO&Q~&TTOt&Qtu&du;'S&Q;'S;=`&i<%lO&Q~&iOs~~&lP;=`<%l&Q~&tO!`~~&wPvw&z~'PO![~~'UO!d~~'ZO!e~~'`O!a~~'eO!c~~'jO!V~~'oP!^~}!O'r~'wSP~OY'rZ;'S'r;'S;=`(T<%lO'r~(WP;=`<%l'r~(`P!_~z{(c~(hO!P~~(oTY~T~!O!P)O!Q![(h!c!})^#R#S)^#T#o)^~)RP!Q![)U~)ZPb~!Q![)U~)cST~!Q![)^!c!})^#R#S)^#T#o)^~)rP!_!`)u~)zO!l~~*PO!n~~*UO!f~U*ZP!jQ!_!`*^S*cO!hS~*hO!g~~*mO!Y~~*rO!X~~*wO!b~~*|TT~!Q![)^!c!})^#R#S)^#T#U+]#U#o)^~+bUT~!Q![)^!c!})^#R#S)^#T#`)^#`#a+t#a#o)^~+yUT~!Q![)^!c!})^#R#S)^#T#g)^#g#h,]#h#o)^~,bUT~!Q![)^!c!})^#R#S)^#T#X)^#X#Y,t#Y#o)^~,{S]~T~!Q![)^!c!})^#R#S)^#T#o)^~-^UT~!Q![)^!c!})^#R#S)^#T#f)^#f#g-p#g#o)^~-uUT~!Q![)^!c!})^#R#S)^#T#i)^#i#j,]#j#o)^~.[P#p#q._~.dO!]~",
  tokenizers: [1, 2, insertSemicolon, new LocalTokenGroup("j~RQYZXz{^~^O!R~~aP!P!Qd~iO!S~~", 25, 48)],
  topRules: {"Program":[0,3]},
  specialized: [{term: 5, get: (value) => spec_Identifier[value] || -1}],
  tokenPrec: 692
})
