import{_,o as r,G as d,w as p,a as e,H as n,t as l,x as f,c as o,F as g,y,e as h}from"./entry.cc0ad062.js";import{a as x}from"./useCalcPercent.5d23ad59.js";const v={class:"card-top"},z=["src"],S={class:"row"},k={class:"platform-list"},w={__name:"GameCard",props:{size:{type:String,default:"m"},screenshots:{type:Array,default:null},name:{type:String,default:null},rating:{type:String,default:null},platforms:{type:String,default:null}},setup(t){const s=t;function m(a){return a>3.5?"rgb(50 255 50 / 70%)":a>2.5?"rgb(255 255 50 / 70%)":"rgb(255 50 50 / 70%)"}return(a,C)=>{const u=h;return r(),d(u,{class:"card game-item",style:n({width:(t.size==="m"?328:224)+"px"})},{default:p(()=>{var c;return[e("div",v,[e("div",{class:"wrap-img",style:n({width:(t.size==="m"?328:224)+"px",height:(t.size==="m"?180:126)+"px"})},[e("img",{src:(c=s.screenshots[0])==null?void 0:c.image,alt:""},null,8,z)],4),e("div",S,[e("span",{class:"name",style:n({fontSize:(t.size==="m"?18:16)+"px"})},l(s.name),5),e("span",{class:"rating",style:n({background:m(s.rating)})},l(("useCalcPercent"in a?a.useCalcPercent:f(x))(s.rating,5)),5)])]),e("div",k,[(r(!0),o(g,null,y(s.platforms,i=>(r(),o("span",{key:i,class:"platform-item"},l(i.platform.name),1))),128))])]}),_:1},8,["style"])}}},G=_(w,[["__scopeId","data-v-def16ae2"]]);export{G as _};