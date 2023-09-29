"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[739,692],{692:function(e,t,n){n.r(t),n.d(t,{StyledTable:function(){return p}});var i=n(4942),r=n(277),s=n(1680),a=n(6015),o=n(9827),l=n(807),c=n(4390),d=n(9773),u=n(4142),h=n(135),x=n(184),p=(0,r.ZP)(s.Z)((function(e){var t=e.theme,n=e.isTiny;return{minWidth:n||700,"& th, td":(0,i.Z)({fontSize:n?"0.625rem":"0.6875rem",color:t.palette.text.secondary},t.breakpoints.down("sm"),{fontSize:n?"0.5rem":"0.6875rem"}),"& th":{fontWeight:500,color:t.palette.text.primary,lineHeight:"1rem"}}}));t.default=function(e){var t=e.isTiny,n=e.hideAQIDescription,i=(0,u.Z)(),r=[{name:"Good",color:i.palette.chart.optionsColors.aqi[0],aqi:"0 - 50",rawPM2_5:"0.0 - 12.0",description:"Air quality is satisfactory, and air pollution poses little or no risk",suggestion:"Enjoy the clean air"},{name:"Moderate",color:i.palette.chart.optionsColors.aqi[1],aqi:"51 - 100",rawPM2_5:"12.1 - 35.4",description:"Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution",suggestion:"Individuals with respiratory issues might need to reduce prolonged outdoor exertion"},{name:"Unhealthy for Sensitive Groups",color:i.palette.chart.optionsColors.aqi[2],aqi:"101 - 150",rawPM2_5:"35.5 - 55.4",description:"Members of sensitive groups may experience health effects. The general public is less likely to be affected",suggestion:"Children and individuals with respiratory issues should limit outdoor exertion"},{name:"Unhealthy",color:i.palette.chart.optionsColors.aqi[3],aqi:"151 - 200",rawPM2_5:"55.5 - 150.4",description:"Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects",suggestion:""},{name:"Very Unhealthy",color:i.palette.chart.optionsColors.aqi[4],aqi:"201 - 300",rawPM2_5:"150.5 - 250.4",description:"Health alert: The risk of health effects is increased for everyone",suggestion:""},{name:"Hazardous",color:i.palette.chart.optionsColors.aqi[5],aqi:"300 - 500",rawPM2_5:"250.5 - 550.5",description:"Health warning of emergency conditions: everyone is more likely to be affected",suggestion:""}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.Z,{overflow:"auto",children:(0,x.jsxs)(p,{size:"small",isTiny:t,children:[(0,x.jsx)(o.Z,{children:(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(c.Z,{sx:{pr:0},children:(0,x.jsx)(a.Z,{sx:{width:"1em",height:"1em"}})}),(0,x.jsx)(c.Z,{sx:{pl:1},children:"Category"}),(0,x.jsx)(c.Z,{align:"right",children:"US AQI"}),(0,x.jsxs)(c.Z,{align:"right",children:["PM2.5 Concentration (\xb5g/m",(0,x.jsx)("sup",{children:"3"}),")"]}),!n&&(0,x.jsx)(c.Z,{align:"left",children:"Description"}),!n&&(0,x.jsx)(c.Z,{align:"left",children:"CITIESair' Suggested Actions"})]})}),(0,x.jsx)(d.Z,{children:r.map((function(e){return(0,x.jsxs)(l.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,x.jsx)(c.Z,{sx:{pr:0},children:(0,x.jsx)(a.Z,{sx:{width:"1em",height:"1em",backgroundColor:e.color}})}),(0,x.jsx)(c.Z,{sx:{pl:1},children:e.name}),(0,x.jsx)(c.Z,{align:"right",children:e.aqi}),(0,x.jsx)(c.Z,{align:"right",children:e.rawPM2_5}),!n&&(0,x.jsx)(c.Z,{align:"left",children:e.description}),!n&&(0,x.jsx)(c.Z,{align:"left",children:e.suggestion})]},e.name)}))})]})}),!n&&(0,x.jsx)(h.Z,{chartHeight:"4rem",chartData:{sheetId:"157f6vu47RBEvnBnW24jGI7cz-ov1aSBUFPdkb5sDKDc",gid:1958405288,query:'SELECT * WHERE A = "US AQI"',headers:1,chartType:"BarChart",columns:[0,1,3,5,7,9,11],options:{legend:{position:"none"},enableInteractivity:!1,hAxis:{ticks:[0,50,100,150,200,300,500]},chartArea:{width:{portrait:"98%",landscape:"50%"},height:{portrait:"20%",landscape:"30%"}},isStacked:!0,colors:"aqi",bar:{groupWidth:"100%"}}}})]})}},4739:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ye}});var i=n(885),r=n(1413),s=n(5987),a=n(2791),o=n(6871),l=n(5973),c=n(229),d=n(3540),u=n(135),h=n(1745),x=n(472),p=n(5814),m=n(5209),v=n(6015),f=n(803),j=n(5953),Z=n(4565),g=n(1872),b=n(4142),y=n(604),w=n(173),D=n(5590),S=n(4162),C=n(3245),k=n(7962),I=n(286),P=n(1162),T=n(8388),z=n(7438),M=n(692),q=n(184);function A(e){var t=(0,a.useState)(null),n=(0,i.Z)(t,2),s=n[0],o=n[1],l=function(e){o(e.currentTarget),z.y(z.z.airQualityIndexLegendQuickGlance)},c=function(){o(null)},d=Boolean(s);(0,b.Z)();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(T.T,(0,r.Z)((0,r.Z)({},e),{},{distanceFromBottomOfWindow:"5.5rem",children:(0,q.jsx)(D.Z,{sx:{mt:1},"aria-owns":d?z.z.airQualityIndexLegendQuickGlance:void 0,"aria-haspopup":"true",onMouseEnter:l,onMouseLeave:c,onClick:function(e){return w.tq&&(d?c():l(e))},"aria-label":z.z.airQualityIndexLegendQuickGlance,color:"primary",children:(0,q.jsxs)(S.Z,{direction:"column",alignItems:"center",children:[(0,q.jsx)(P.Z,{fontSize:"1rem"}),(0,q.jsx)(Z.Z,{variant:"body2",fontWeight:"500",children:"AQI"})]})})})),(0,q.jsx)(C.Z,{id:z.z.airQualityIndexLegendQuickGlance,sx:{pointerEvents:"none",mt:-1},open:d,anchorEl:s,placement:"top-end",onClose:c,keepMounted:!0,disableRestoreFocus:!0,transition:!0,children:function(e){var t=e.TransitionProps;return(0,q.jsx)(k.Z,(0,r.Z)((0,r.Z)({},t),{},{timeout:350,children:(0,q.jsxs)(I.Z,{elevation:8,sx:{py:.5,mb:1},children:[(0,q.jsx)(Z.Z,{sx:{mx:2,mt:1},color:"text.disabled",variant:"body1",fontWeight:500,children:"AQI at quick glance"}),(0,q.jsx)(M.default,{isTiny:!0,hideAQIDescription:!0})]})}))}})]})}var L=n(5461),_=n(1478),O=n(501),Y=n(4281),E=n(4058),B=n(4853),Q=n(9161),U=n(2089),N=n(4942),F=n(2797),W=n(7205),H=n(5399),R=n(7248),G=n(5450),V=n(6283),K=n(1680),X=n(9827),J=n(807),$=n(4390),ee=n(9773),te=n(1803),ne=n(1898),ie=n(3057),re=n(324),se=n(3978),ae=n(230),oe=n(3518),le=n(1566),ce=n(1009),de=n(5108),ue=n(8914),he=n(7892),xe=n.n(he),pe=n(277),me=n(3634),ve=n(1652),fe=n(4639),je=n(6767),Ze=n(822),ge=n(8928),be=n(3767),ye=["versionDates","day"],we=(0,pe.ZP)(fe.H)((function(e){return{"&:after, :hover::after":{content:'"."',fontSize:"1.5rem",bottom:"-0.5rem",position:"absolute",color:e.theme.palette.primary.main,opacity:.5},"&:hover::after":{opacity:1}}}));function De(e){var t=e.versionDates,n=void 0===t?[]:t,i=e.day,a=(0,s.Z)(e,ye);return n.indexOf(xe()(i).format("YYYY-MM-DD"))>=0?(0,q.jsx)(we,(0,r.Z)((0,r.Z)({},a),{},{day:i})):(0,q.jsx)(fe.H,(0,r.Z)((0,r.Z)({},a),{},{day:i}))}function Se(e){var t=e.smallScreen,n=e.onChange,i=e.versions.filter((function(e){return 10===e.version.length})).map((function(e){return e.version}));return(0,q.jsx)(be.Z,{onClickAway:function(){return n("close")},children:(0,q.jsx)(ge.Z,{sx:!t&&{position:"absolute",right:0,zIndex:999},raised:!0,children:(0,q.jsx)(ve._,{dateAdapter:me.y,children:(0,q.jsx)(je.W,{loading:!i,format:"YYYY-MM-DD",renderLoading:function(){return(0,q.jsx)(Ze.e,{})},slots:{day:De},onChange:function(e,t){return"finish"===t?n(xe()(e).format("YYYY-MM-DD")):null},slotProps:{day:{versionDates:i}},shouldDisableDate:function(e){return t=e,!(i.indexOf(xe()(t).format("YYYY-MM-DD"))>=0);var t},disableHighlightToday:!0,minDate:xe()(i.slice(-1)[0]),maxDate:xe()(i[0])})})})})}function Ce(e){var t=e.project,n=(0,a.useContext)(ae.N),r=(0,a.useState)(),s=(0,i.Z)(r,2),o=s[0],l=s[1];(0,a.useEffect)((function(){t&&n&&l(n[null===t||void 0===t?void 0:t.id])}),[t,n]);var c=(0,b.Z)(),d=(0,F.Z)(c.breakpoints.down("sm")),u=(0,a.useState)(!1),h=(0,i.Z)(u,2),x=h[0],p=h[1],v=function(){return p(!1)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(W.Z,{onClick:function(){p(!0),z.y(z.z.rawDatasetButtonClicked,{project_id:t.id})},variant:"contained",children:[(0,q.jsx)(le.Z,{sx:{fontSize:"1rem"}}),"\xa0Raw Dataset"]}),(0,q.jsxs)(H.Z,{open:x,onClose:v,maxWidth:"lg",fullWidth:!0,fullScreen:d,keepMounted:!0,children:[d&&(0,q.jsx)(R.Z,{justifyContent:"flex-start",children:(0,q.jsxs)(W.Z,{autoFocus:!0,onClick:v,children:[(0,q.jsx)(ce.Z,{sx:{fontSize:"1rem"}}),"Back"]})}),(0,q.jsxs)(G.Z,{sx:{px:d?2:3,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",height:"100%"},children:[(0,q.jsx)(m.Z,{label:t.title,size:"small",sx:{mb:1}}),(0,q.jsx)(Z.Z,{variant:"h6",children:"Preview and download raw dataset(s)"}),(0,q.jsx)(ke,{datasets:o,smallScreen:d,project:t}),o&&(0,q.jsxs)(Z.Z,{variant:"caption",sx:{my:3,fontStyle:"italic"},children:["This dataset is provided by the CITIES Dashboard with the support of ",function(e){if(e&&0!==e.length){if(1===e.length)return e[0];if(2===e.length)return e.join(" and ");var t=e.pop(),n=e.join(", ");return"".concat(n,", and ").concat(t)}return"the relevant owners"}(t.owners),". Should you intend to utilize this dataset for your project, research, or publication, we kindly request that you notify us at ",(0,q.jsx)(V.Z,{href:"mailto:nyuad.cities@nyu.edu",children:"nyuad.cities@nyu.edu"})," to discuss citation requirements."]})]})]})]})}var ke=function(e){var t=e.datasets,n=e.smallScreen,s=e.project,o=(0,a.useState)(),l=(0,i.Z)(o,2),c=l[0],d=l[1],u=(0,a.useState)(),h=(0,i.Z)(u,2),x=h[0],p=h[1];return(0,a.useEffect)((function(){var e,n,i,s;(null===t||void 0===t?void 0:t.length)>0&&(d(null===(e=t[0])||void 0===e?void 0:e.versions[0]),p(null===(n=t[0])||void 0===n?void 0:n.id),(0,ue.m)(null===(i=t[0])||void 0===i||null===(s=i.versions[0])||void 0===s?void 0:s.rawLink,"csv").then((function(e){var n;d((0,r.Z)((0,r.Z)({},null===(n=t[0])||void 0===n?void 0:n.versions[0]),{},{fetchedDataset:e}))})))}),[t]),(0,q.jsxs)(j.ZP,{container:!0,justifyContent:"center",alignItems:"start",spacing:3,children:[(0,q.jsx)(j.ZP,{item:!0,sm:12,md:6,children:(0,q.jsx)(Ie,{datasets:t,smallScreen:n,previewingDataset:c,setPreviewingDataset:d,previewingDatasetId:x,setPreviewingDatasetId:p})}),(0,q.jsx)(j.ZP,{item:!0,sm:12,md:6,maxWidth:n?"100%":"unset",sx:{mt:1},children:(0,q.jsx)(Te,{previewingDataset:c,previewingDatasetId:x,project:s,smallScreen:n})})]})},Ie=function(e){var t=e.datasets,n=e.smallScreen,i=e.previewingDataset,r=e.setPreviewingDataset,s=e.previewingDatasetId,a=e.setPreviewingDatasetId;return(0,q.jsxs)(K.Z,{size:"small",sx:{tableLayout:"fixed","& td, div, .MuiMenuItem-root":{fontSize:n?"0.625rem":"0.8rem"}},children:[(0,q.jsx)(X.Z,{children:(0,q.jsxs)(J.Z,{children:[(0,q.jsx)($.Z,{sx:{pl:1},children:"Dataset"}),(0,q.jsx)($.Z,{sx:{width:n?"9.5rem":"11rem"},children:"Version"}),(0,q.jsx)($.Z,{sx:{width:n?"5rem":"6rem"},children:"Size"})]})}),(0,q.jsx)(ee.Z,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,q.jsx)(Pe,{smallScreen:n,dataset:e,previewingDataset:i,setPreviewingDataset:r,isPreviewing:e.id===s,setPreviewingDatasetId:a})}))})]})},Pe=function(e){var t=e.smallScreen,n=e.dataset,s=e.setPreviewingDataset,o=e.isPreviewing,l=e.previewingDatasetId,c=e.setPreviewingDatasetId,d=(0,a.useState)({}),u=(0,i.Z)(d,2),h=u[0],x=u[1],m=(null===n||void 0===n?void 0:n.versions[0])||{},v=(0,a.useState)(!1),f=(0,i.Z)(v,2),j=f[0],Z=f[1],g=(0,a.useState)(m),y=(0,i.Z)(g,2),w=y[0],D=y[1],C=null===n||void 0===n?void 0:n.versions.slice(0,3);C.find((function(e){return e==w}))||C.push((0,r.Z)((0,r.Z)({},w),{},{isOlderVersion:!0}));var k=(null===n||void 0===n?void 0:n.versions.length)>3,I=function(e){var t=e.target.value;if("Calendar"!==t){var i=null===n||void 0===n?void 0:n.versions.find((function(e){return e.version===t}));D(i),c(n.id),s(i),T(i)}else Z(!0)},P=function(e){Z(!1),"close"!==e&&I({target:{value:e}})},T=function(e){h[e.version]?s(h[e.version]):(0,ue.m)(e.rawLink,"csv").then((function(t){var n=(0,r.Z)((0,r.Z)({},e),{},{fetchedDataset:t});s(n),x((0,r.Z)((0,r.Z)({},h),{},(0,N.Z)({},n.version,n)))}))},z=function(){l!==n.id&&(c(n.id),s(w),T(w))},M=(0,b.Z)();return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(J.Z,{children:[(0,q.jsx)($.Z,{sx:{pl:1,cursor:"pointer",background:o&&M.palette.background.NYUpurpleLight},onClick:z,children:null===w||void 0===w?void 0:w.name}),(0,q.jsxs)($.Z,{sx:{position:"relative",background:o&&M.palette.background.NYUpurpleLight},children:[j&&(t?(0,q.jsx)(te.Z,{open:j,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,q.jsx)(Se,{onChange:P,smallScreen:t,versions:null===n||void 0===n?void 0:n.versions})}):(0,q.jsx)(Se,{onChange:P,versions:null===n||void 0===n?void 0:n.versions})),(0,q.jsx)(ne.Z,{size:"small",children:(0,q.jsxs)(ie.Z,{value:null===w||void 0===w?void 0:w.version,onClick:function(){n.versions.length<=1&&z()},onChange:I,variant:"standard",MenuProps:{disablePortal:!0},children:[C.map((function(e,t){return(0,q.jsx)(re.Z,{value:e.version,sx:[t===C.length-1&&{mb:-.75},e.isOlderVersion&&{marginTop:"1rem","&::before":{content:'""',borderTop:"2px dotted ".concat(M.palette.text.secondary),width:"1rem",height:"1rem",position:"absolute",top:0,left:"50%",transform:"translate(-50%, -50%)"}}],children:(0,q.jsxs)(S.Z,{direction:"row",alignItems:"center",children:[e.version,e===m&&(0,q.jsx)(p.Z,{title:"Latest version",enterDelay:0,leaveDelay:200,children:(0,q.jsx)(se.Z,{sx:{ml:.5,width:"1rem",height:"1rem",background:M.palette.success.main},children:(0,q.jsx)(E.Z,{sx:{width:"0.8rem",height:"0.8rem"}})})})]})},e.version)})),k&&(0,q.jsx)(re.Z,{value:"Calendar",sx:{pt:1,mt:1,mb:-.75,borderTop:"0.5px solid"},children:(0,q.jsxs)(S.Z,{direction:"row",alignItems:"center",children:["Older Versions",(0,q.jsx)(de.Z,{fontSize:"small",sx:{ml:.5}})]})},"Calendar")]})})]}),(0,q.jsx)($.Z,{sx:{background:o&&M.palette.background.NYUpurpleLight},children:function(e){if(e)return e<1048576?(e/1024).toFixed(1)+" KB":(e/1048576).toFixed(1)+" MB"}(null===w||void 0===w?void 0:w.sizeInBytes)})]},n.id)})},Te=function(e){var t=e.previewingDataset,n=e.previewingDatasetId,r=e.project,s=e.smallScreen,o="[".concat(r.id,"] ").concat(null===t||void 0===t?void 0:t.name,"-").concat(null===t||void 0===t?void 0:t.version,".csv"),l=(0,b.Z)(),c=(0,a.useState)(""),d=(0,i.Z)(c,2),u=d[0],h=d[1],x=(0,a.useState)(""),p=(0,i.Z)(x,2),m=p[0],f=p[1];return(0,a.useEffect)((function(){if(null!==t&&void 0!==t&&t.fetchedDataset){var e=null===t||void 0===t?void 0:t.fetchedDataset,n=e.split("\n"),i=n.length;if(i<=10)h(e),f(Array.from({length:i},(function(e,t){return t+1})).join("\n"));else{var r=n.slice(0,5),s=n.slice(i-5),a=i-10,o=["... [".concat(a," rows hidden] ...")];h(r.concat(o).concat(s).join("\n")),f(Array.from({length:11},(function(e,t){var n=t+1;return n<6?n:6==n?"":a+n-1})).join("\n"))}}}),[t]),(0,q.jsxs)(S.Z,{spacing:1,children:[(0,q.jsxs)(v.Z,{sx:{"& *":{fontFamily:"monospace !important"}},children:[(0,q.jsx)(S.Z,{direction:"row",children:(0,q.jsx)(Z.Z,{variant:"body2",gutterBottom:!0,fontWeight:600,children:t?"Previewing: ".concat(t.name," (").concat(null===t||void 0===t?void 0:t.version,")"):"Not previewing any dataset"})}),(0,q.jsx)(v.Z,{component:"pre",sx:{overflowX:"auto",color:l.palette.text.secondary,backgroundColor:l.palette.customBackground,p:2,pt:1.5,borderRadius:l.spacing(1),borderTopLeftRadius:0,minHeight:"5rem",width:s?"100%":"unset",marginTop:0},children:(0,q.jsxs)(S.Z,{direction:"row",sx:{fontSize:s?"0.625rem !important":"0.8rem !important"},children:[(0,q.jsx)(v.Z,{sx:{mr:2,userSelect:"none"},children:m}),(0,q.jsx)(v.Z,{children:u})]})})]}),(0,q.jsx)(v.Z,{textAlign:"center",children:(0,q.jsxs)(W.Z,{variant:"contained",sx:{textTransform:"none",textAlign:"left",lineHeight:1.1,px:1.5,py:1},onClick:function(){!function(){if(null!==t&&void 0!==t&&t.fetchedDataset){var e=new Blob([null===t||void 0===t?void 0:t.fetchedDataset],{type:"application/octet-stream"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=o,document.body.appendChild(i),i.click(),URL.revokeObjectURL(n),document.body.removeChild(i)}}(),z.y(z.z.rawDatasetDownloaded,{project_id:r.id,dataset_id:n,dataset_name:t.name,dataset_version:t.version})},disabled:!t,children:[(0,q.jsx)(oe.Z,{sx:{fontSize:"1.25rem",mr:.5}}),t?o:"No dataset available to download"]})})]})},ze=n(1131),Me=n(6344),qe=n(445),Ae=n(6175),Le=n(5276),_e=["tooltipTitle"],Oe=function(e){var t=e.tooltipTitle,n=(0,s.Z)(e,_e);return(0,q.jsx)(p.Z,{title:t,enterDelay:0,leaveDelay:200,children:(0,q.jsx)(m.Z,(0,r.Z)({size:"small"},n))})},Ye=function(e){var t=e.themePreference,n=(0,a.useContext)(l.F),s=(0,i.Z)(n,4),p=(s[0],s[1]),m=s[2],w=s[3],D=(0,o.UO)().id,S=(0,a.useState)({}),C=(0,i.Z)(S,2),k=C[0],I=C[1],P=(0,a.useState)(!1),T=(0,i.Z)(P,2),M=T[0],N=T[1],F=(0,a.useContext)(c.q),W=(0,i.Z)(F,2),H=W[0],R=W[1],G=(0,a.useContext)(qe.c),V=(0,i.Z)(G,1)[0],K=V[k.id],X=(0,a.useContext)(Ae.M),J=(0,i.Z)(X,1)[0][k.id];(0,a.useEffect)((function(){k.title&&(document.title="".concat(k.title," | CITIES Dashboard"))})),(0,a.useEffect)((function(){var e=[];L.map((function(t){if(t.id===D){I((0,r.Z)({},t));for(var n={},i=0;i<t.charts.length;i++)n[i]=0;R(n),N(!0),e=t.charts.map((function(e,t){return{chartTitle:e.title,chartID:"chart-".concat(t+1)}}))}})),p("project"),w(e)}),[D,p,w]);var $=(0,b.Z)();return(0,q.jsx)(q.Fragment,{children:M&&(0,q.jsxs)(v.Z,{width:"100%",children:["air-quality"===k.id&&(0,q.jsx)(A,{}),(0,q.jsx)(Me.Z,{backgroundColor:"customAlternateBackground",children:(0,q.jsxs)(f.Z,{sx:{pt:5,pb:3},children:[(0,q.jsx)(h.Z,{text:k.title}),(0,q.jsxs)(j.ZP,{container:!0,spacing:1,sx:{pb:3,mt:-3},children:[k.owners.map((function(e,t){return(0,q.jsx)(j.ZP,{item:!0,children:(0,q.jsx)(Oe,{icon:(0,q.jsx)(O.Z,{}),label:e,tooltipTitle:"Dataset Owner"},t)})})),(0,q.jsx)(j.ZP,{item:!0,children:(0,q.jsx)(Oe,{icon:(0,q.jsx)(Y.Z,{}),label:k.contact,tooltipTitle:"Contact",component:"a",href:"mailto:".concat(k.contact),clickable:!0})}),(0,q.jsx)(j.ZP,{item:!0,children:(0,q.jsx)(Oe,{icon:(0,q.jsx)(B.Z,{}),label:"".concat(k.charts.length," Chart").concat(k.charts.length>1&&"s"),tooltipTitle:"Number of Charts",onClick:function(){(0,ze.Qj)(_.O3.id),z.y(z.z.internalNavigation,{destination_id:_.O3.id,destination_label:_.project.toString(),origin_id:"chip"})}})}),J&&(0,q.jsx)(j.ZP,{item:!0,children:(0,q.jsx)(Oe,{icon:(0,q.jsx)(E.Z,{}),label:"Last update: ".concat(J),tooltipTitle:"Last Update"})}),null!=K&&(0,q.jsx)(j.ZP,{item:!0,children:(0,q.jsx)(Oe,{icon:(0,q.jsx)(Q.Z,{}),label:"".concat(K," Comment").concat(V[k.id]>1?"s":""),tooltipTitle:"Number of Comments",onClick:function(){(0,ze.Qj)(_.Sf.id),z.y(z.z.internalNavigation,{destination_id:_.Sf.id,destination_label:_.Sf.toString(),origin_id:"chip"})}})})]}),(0,q.jsx)(Z.Z,{component:"div",variant:"body1",color:"text.secondary",sx:{textAlign:"justify",pb:3,mb:0,"& table *":{color:"".concat($.palette.text.secondary)}},gutterBottom:!0,children:(0,d.ZP)(k.description,{replace:U.T})}),(0,q.jsx)(Ce,{project:k})]})}),(0,q.jsx)(v.Z,{id:_.O3.id,children:k.charts.map((function(e,n){return(0,q.jsx)(Me.Z,{id:m[n].chartID,backgroundColor:n%2!=0&&"customAlternateBackground",children:(0,q.jsxs)(f.Z,{sx:{pt:4,pb:4},height:"auto",className:t===y.Z.dark?"dark":"",children:[(0,q.jsxs)(Z.Z,{variant:"h6",color:"text.primary",children:[n+1,". ",e.title]}),e.chartSubstituteComponentName?(0,q.jsx)(Le.default,{chartSubstituteComponentName:e.chartSubstituteComponentName}):(0,q.jsx)(u.Z,{chartData:(0,r.Z)({chartIndex:n,sheetId:k.sheetId},e)}),(0,q.jsxs)(v.Z,{sx:{my:3},children:[(0,q.jsxs)(Z.Z,{component:"div",variant:"body1",color:"text.secondary",children:[e.subtitle&&(0,d.ZP)(e.subtitle,{replace:U.T}),Object.keys(H)[n]==n&&e.subcharts&&e.subcharts[Object.values(H)[n]].subchartSubtitle&&(0,d.ZP)(e.subcharts[Object.values(H)[n]].subchartSubtitle,{replace:U.T})]}),(0,q.jsxs)(Z.Z,{variant:"caption",color:"text.secondary",children:[e.reference&&(0,d.ZP)(e.reference,{replace:U.T}),Object.keys(H)[n]==n&&e.subcharts&&e.subcharts[Object.values(H)[n]].reference&&(0,d.ZP)(e.subcharts[Object.values(H)[n]].reference,{replace:U.T})]})]})]})},n)}))}),(0,q.jsx)(g.Z,{}),(0,q.jsx)(Me.Z,{id:_.Sf.id,sx:{pt:3,pb:4},children:(0,q.jsx)(x.Z,{pageID:k.id})})]})})}}}]);
//# sourceMappingURL=739.f53640bb.chunk.js.map