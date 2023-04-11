"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[43],{4043:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(1413),a=r(9439),s=r(2791),o=r(6871),c=r(5973),i=r(229),d=r(3540),l=r(4329),h=r(1426),x=r(6015),u=r(7205),p=r(803),b=r(4565),j=r(8916),Z=r(277),f=r(4338),m=r(3671),g=r(1267),v=r(1131),y=r(184),k=(0,Z.ZP)(f.Z)((function(e){var t=e.theme,r=e.expanded;return{color:t.palette.text.secondary,backgroundImage:"none",backgroundColor:r?t.palette.background.default:"transparent",boxShadow:r?t.shadows:"none",transition:t.transitions}})),w=(0,Z.ZP)(m.Z)((function(e){var t=e.theme,r=e.expanded;return{marginTop:r?t.spacing(3):0,flexDirection:"row-reverse",paddingLeft:r?t.spacing(1):0,"& .MuiTypography-root":{color:t.palette.text.primary,textDecoration:"underline",transition:t.transitions,"&:hover":{color:t.palette.primary.main}}}})),C=function(e){var t,r=e.title,n=e.content,o=(0,s.useState)(void 0),c=(0,a.Z)(o,2),i=c[0],d=c[1];return(0,y.jsx)("div",{children:(0,y.jsxs)(k,{expanded:"panel1"===i,onChange:(t="panel1",function(e,r){d(r?t:void 0)}),children:[(0,y.jsx)(w,{expanded:i,expandIcon:(0,y.jsx)(v.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,y.jsx)(b.Z,{component:"a",variant:"body1",children:r})}),(0,y.jsx)(g.Z,{children:n})]})})},D=r(1712),O=r(5461),I=r(6856),S=function(e){var t=e.project,r=null==t.sheetId;return(0,y.jsx)(x.Z,{children:(0,y.jsx)("a",{href:r?"":"https://docs.google.com/spreadsheets/d/".concat(t.sheetId),target:"_blank",rel:"noreferrer",children:(0,y.jsxs)(u.Z,{disabled:r,variant:"contained",children:[(0,y.jsx)(I.$l_,{}),"\xa0",r?"COMING SOON":"FULL DATASET"]})})})},T=function(e){var t=e.prefersDarkMode,r=(0,s.useContext)(c.F),u=(0,a.Z)(r,2),Z=(u[0],u[1]),f=(0,o.UO)().id,m=(0,s.useState)({}),g=(0,a.Z)(m,2),v=g[0],k=g[1],w=(0,s.useState)(!1),I=(0,a.Z)(w,2),T=I[0],P=I[1],A=(0,s.useContext)(i.q),F=(0,a.Z)(A,2),M=F[0],N=F[1];return(0,s.useEffect)((function(){O.map((function(e){if(e.id===f){k((0,n.Z)({},e));for(var t={},r=0;r<e.charts.length;r++)t[r]=0;N(t),P(!0)}})),Z("project")}),[f,Z]),(0,y.jsx)(y.Fragment,{children:T&&(0,y.jsxs)(x.Z,{width:"100%",children:[(0,y.jsx)(x.Z,{children:(0,y.jsxs)(p.Z,{sx:{pt:4,pb:4},children:[(0,y.jsx)(h.Z,{text:v.title}),(0,y.jsx)(b.Z,{variant:"body1",color:"text.secondary",sx:{textAlign:"justify",pb:3,mb:0},gutterBottom:!0,children:(0,d.ZP)(v.description)}),(0,y.jsx)(b.Z,{variant:"body1",color:"text.primary",sx:{fontWeight:"medium"},children:"Dataset Owner:"}),(0,y.jsxs)(b.Z,{variant:"body1",color:"text.secondary",sx:{pb:3},children:[v.owner," - ",(0,y.jsx)(D.Z,{href:v.onwerContact,text:v.onwerContact})]}),(0,y.jsx)(S,{project:v}),(0,y.jsx)(C,{title:"Sample Data",content:(0,y.jsx)(y.Fragment,{children:v.rawDataTables.map((function(e,r){return(0,y.jsx)(x.Z,{sx:r<v.rawDataTables.length-1?{mb:3}:{mb:1},className:t?"dark-mode":"",children:(0,y.jsx)(l.Z,{chartData:(0,n.Z)({chartType:"Table",sortAscending:!0,frozenColumns:1,sheetId:v.sheetId},e),prefersDarkMode:t})},r)}))})})]})}),v.charts.map((function(e,r){return(0,y.jsx)(x.Z,{backgroundColor:r%2==0?"customAlternateBackground":"",children:(0,y.jsxs)(p.Z,{sx:{pt:4,pb:4},className:t?"dark-mode":"",height:"auto",children:[(0,y.jsxs)(b.Z,{variant:"h6",color:"text.primary",children:[r+1,". ",e.title]}),(0,y.jsx)(l.Z,{chartData:(0,n.Z)({chartIndex:r,sheetId:v.sheetId},e)}),(0,y.jsxs)(x.Z,{sx:{m:3},children:[(0,y.jsxs)(b.Z,{variant:"body1",color:"text.secondary",sx:{mb:3},children:[e.subtitle&&(0,d.ZP)(e.subtitle),Object.keys(M)[r]==r&&e.subcharts&&e.subcharts[Object.values(M)[r]].subchartSubtitle&&(0,d.ZP)(e.subcharts[Object.values(M)[r]].subchartSubtitle)]}),(0,y.jsxs)(b.Z,{variant:"caption",color:"text.secondary",children:[e.reference&&(0,d.ZP)(e.reference),Object.keys(M)[r]==r&&e.subcharts&&e.subcharts[Object.values(M)[r]].reference&&(0,d.ZP)(e.subcharts[Object.values(M)[r]].reference)]})]})]})},r)})),v.charts.length%2!=0?(0,y.jsx)(j.Z,{}):(0,y.jsx)(y.Fragment,{})]})})}}}]);
//# sourceMappingURL=43.9a7d7a70.chunk.js.map