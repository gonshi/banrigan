!function l(t,n,a){function g(o,i){if(!n[o]){if(!t[o]){var r="function"==typeof require&&require;if(!i&&r)return r(o,!0);if(e)return e(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(l){var n=t[o][1][l];return g(n?n:l)},c,c.exports,l,t,n,a)}return n[o].exports}for(var e="function"==typeof require&&require,o=0;o<a.length;o++)g(a[o]);return g}({1:[function(l,t,n){var a;new(a=function(){function t(){this.ORIGIN_URL="http://gonshi.github.io/banrigan/",this.latLngAsset=l("../../json/latlng.json"),this.social_txt=document.querySelector(".social_txt"),this.social=document.querySelector(".social"),this.social_btns={tweet:document.querySelector(".tweet"),facebook:document.querySelector(".facebook"),hatena:document.querySelector(".hatena"),gplus:document.querySelector(".gplus"),link:document.querySelector(".link")},this.social_btn=document.querySelector(".social_btn"),this.link_balloon=document.querySelector(".link_balloon"),this.exec()}return t.prototype.popup=function(l){var t,n,a,g,e,o,i,r,s;return null!=window.screenLeft?(t=window.screenLeft,n=window.screenTop):(t=window.screen.left,n=window.screen.top),null!=window.innerWidth?(r=window.innerWidth,i=window.innerHeight):null!=(null!=(s=document.documentElement)?s.clientWidth:void 0)?(r=document.documentElement.clientWidth,r=document.documentElement.clientHeight):(r=window.screen.width,r=window.screen.height),e=800,g=600,a=r/2-e/2+t,o=i/2-g/2+n,window.open(l,"popup","width="+e+", height="+g+", "+("top="+o+", left="+a))},t.prototype.getShareUrl=function(){var l;return l=this.ORIGIN_URL+"?lat="+this.map.getCenter().lat()+("&lng="+this.map.getCenter().lng()+"&heading="+this.sv.pov.heading)},t.prototype.setSocial=function(){var l,t,n;return l=0xb84e5073f349,t=document.getElementsByTagName("script")[0],n=document.createElement("script"),n.id="facebook-jssdk",n.src="//connect.facebook.net/ja_JP/sdk.js#xfbml=1&"+("appId="+l+"&version=v2.0"),t.parentNode.insertBefore(n,t),this.social_btns.facebook.addEventListener("click",function(l){return function(){return FB.ui({method:"share",href:l.getShareUrl()})}}(this)),this.social_btns.tweet.addEventListener("click",function(l){return function(){return l.social_txt.setAttribute("value",l.getShareUrl()),l.popup("http://twitter.com/share?url="+encodeURIComponent(l.getShareUrl())+"&text="+(encodeURIComponent("万里眼は、Chromeで新規タブを開く度に地球上のランダムな位置のストリートビューを観ることができるChrome拡張です。")+"&hashtags=万里眼"))}}(this)),this.social_btns.hatena.addEventListener("click",function(l){return function(){return l.popup("http://b.hatena.ne.jp/add?url="+encodeURIComponent(l.getShareUrl())+"&title="+encodeURIComponent("万里眼"))}}(this)),this.social_btns.gplus.addEventListener("click",function(l){return function(){return l.popup("https://plus.google.com/share?url="+encodeURIComponent(l.getShareUrl()))}}(this))},t.prototype.render=function(l,t){var n;return n=parseInt(t)||165,this.sv=new google.maps.StreetViewPanorama(document.getElementById("sv"),{position:l,pov:{heading:n,pitch:0},zoom:1}),this.map=new google.maps.Map(document.getElementById("map"),{center:l,scrollwheel:!1,zoom:1}),new google.maps.Marker({position:l,map:this.map,icon:"img/icon.png"}),this.social_btn.style.display="block"},t.prototype.getPlace=function(){var l;return l=Math.floor(Math.random()*this.latLngAsset.length),this.render(new window.google.maps.LatLng(this.latLngAsset[l].lat,this.latLngAsset[l].lng))},t.prototype.searchPlace=function(){var l;return this.sv=new google.maps.StreetViewService,l=new window.google.maps.LatLng(120*(Math.random()-.5),360*(Math.random()-.5)),this.sv.getPanoramaByLocation(l,4e5,function(l){return function(t){return t?l.render(t.location.latLng):l.getPlace()}}(this))},t.prototype.exec=function(){var l;return window.initMap=function(l){return function(){var t;return location.search.match("lat")?(t=location.search.match(/(\&|＆)heading=(.*?)(\&|$)/)?location.search.match(/(\&|＆)heading=(.*?)(\&|$)/)[2]:null,l.render(new window.google.maps.LatLng(location.search.match(/\?lat=(.*?)\&/)[1],location.search.match(/(\&|＆)lng=(.*?)(\&|$)/)[2]),t)):l.searchPlace()}}(this),this.social_btn.addEventListener("click",function(l){return function(){return l.social_txt.setAttribute("value",l.getShareUrl()),l.social.getAttribute("class").match("is_show")?l.social.classList.remove("is_show"):(l.social.classList.add("is_show"),l.social_txt.select())}}(this)),this.social_btns.link.addEventListener("click",function(l){return function(){var t,n,a;if(l.social_btns.link.getAttribute("class").match("is_active"))l.social_btns.link.classList.remove("is_active");else{l.social_btns.link.classList.add("is_active"),l.social_btns.link.innerHTML=l.getShareUrl(),t=document.createRange(),t.selectNode(l.social_btns.link),window.getSelection().addRange(t);try{document.execCommand("copy"),l.link_balloon.classList.add("is-show"),clearTimeout(l.balloon_timer),l.balloon_timer=setTimeout(function(){return l.link_balloon.classList.remove("is-show")},3e3)}catch(a){n=a,console.log(n)}window.getSelection().removeAllRanges()}return l.social_txt.select()}}(this)),l=window.navigator.userLanguage||window.navigator.language||window.navigator.browserLanguage,this.lang=l.match("ja")?"ja":"en","en"===this.lang&&document.body.classList.add("is_en"),this.setSocial(),window===parent?document.querySelector(".toStore").style.display="block":void 0},t}())},{"../../json/latlng.json":2}],2:[function(l,t,n){t.exports=[{lat:"-32.28011322",lng:"115.727425"},{lat:"-30.98139381",lng:"150.292038"},{lat:"-20.65745735",lng:"140.890656"},{lat:"-32.04616165",lng:"145.999771"},{lat:"-16.74074173",lng:"135.088196"},{lat:"-26.59829330",lng:"118.466286"},{lat:"-16.75357246",lng:"145.342834"},{lat:"-38.35156250",lng:"144.748993"},{lat:"-27.06512642",lng:"151.440247"},{lat:"-20.39753914",lng:"118.747795"},{lat:"-38.63222504",lng:"146.720123"},{lat:"-34.64176559",lng:"139.254059"},{lat:"-30.70959282",lng:"152.912262"},{lat:"-33.74122620",lng:"151.014709"},{lat:"-34.42768860",lng:"150.899506"},{lat:"31.32838249",lng:"-89.334785"},{lat:"27.66866684",lng:"128.924255"},{lat:"29.80572701",lng:"-95.786995"},{lat:"61.99554825",lng:"24.392164"},{lat:"42.03402328",lng:"-80.248154"},{lat:"55.70214844",lng:"8.493442"},{lat:"55.81739807",lng:"10.637795"},{lat:"46.38259125",lng:"13.762549"},{lat:"51.64422989",lng:"17.385450"},{lat:"52.27193069",lng:"-8.265394"},{lat:"34.30747223",lng:"-79.465752"},{lat:"-39.61245346",lng:"176.913223"},{lat:"57.68857193",lng:"40.076542"},{lat:"27.24673080",lng:"90.052177"},{lat:"40.71519089",lng:"-111.844376"},{lat:"47.18226242",lng:"19.776176"},{lat:"52.04449844",lng:"4.588583"},{lat:"-28.03211212",lng:"151.886673"},{lat:"51.57754898",lng:"-0.695455"},{lat:"41.85959244",lng:"1.015908"},{lat:"43.85728836",lng:"7.667779"},{lat:"42.60815811",lng:"27.384743"},{lat:"31.76354027",lng:"35.204468"},{lat:"55.89289474",lng:"36.922150"},{lat:"36.79404449",lng:"139.276642"},{lat:"11.10107613",lng:"104.622772"},{lat:"-2.85414600",lng:"-54.485065"},{lat:"50.82842255",lng:"3.938400"},{lat:"45.42412949",lng:"15.127758"},{lat:"50.89853287",lng:"15.680122"},{lat:"42.59793472",lng:"1.528799"},{lat:"42.53408432",lng:"1.586120"},{lat:"42.46765518",lng:"1.492996"},{lat:"42.57596588",lng:"1.480048"},{lat:"42.56453705",lng:"1.596456"},{lat:"-31.68463516",lng:"152.284073"},{lat:"-12.72409344",lng:"131.542603"},{lat:"-34.11699295",lng:"119.023659"},{lat:"-26.40774727",lng:"152.849670"},{lat:"-30.20173454",lng:"153.155533"},{lat:"-33.34327698",lng:"138.632477"},{lat:"-33.89596558",lng:"151.212997"},{lat:"-41.26441956",lng:"145.782089"},{lat:"-25.82959747",lng:"151.212631"},{lat:"-34.83592224",lng:"138.660370"},{lat:"-37.87225342",lng:"144.655151"},{lat:"-34.33114243",lng:"117.923363"},{lat:"-35.13314056",lng:"139.294464"},{lat:"-32.12636948",lng:"115.804726"},{lat:"-32.44672394",lng:"117.819290"},{lat:"-31.36247253",lng:"115.828728"},{lat:"-31.63326836",lng:"129.016037"},{lat:"-16.99744987",lng:"145.438919"},{lat:"-35.19083405",lng:"138.476028"},{lat:"-43.08462906",lng:"147.737564"},{lat:"-31.27517891",lng:"149.213654"},{lat:"-41.44458771",lng:"147.140335"},{lat:"-33.66216660",lng:"117.501541"},{lat:"-33.87457657",lng:"120.127571"},{lat:"-12.73008060",lng:"131.448700"},{lat:"-36.46953964",lng:"145.150421"},{lat:"-31.90223503",lng:"152.465729"},{lat:"-35.43698883",lng:"149.110657"},{lat:"-36.17273712",lng:"140.488968"},{lat:"-33.37483215",lng:"148.003342"},{lat:"22.32501221",lng:"114.036118"},{lat:"22.54472542",lng:"114.126877"},{lat:"64.08289337",lng:"-21.833879"},{lat:"66.07241058",lng:"-23.135126"},{lat:"64.13392639",lng:"-21.903788"},{lat:"65.72353363",lng:"-14.780252"},{lat:"65.77474213",lng:"-23.443666"},{lat:"65.61469269",lng:"-18.078487"},{lat:"65.61324310",lng:"-22.815348"},{lat:"65.05768585",lng:"-14.346701"},{lat:"65.79537964",lng:"-17.240118"},{lat:"65.66411591",lng:"-18.190794"},{lat:"65.63944244",lng:"-16.877611"},{lat:"65.01567078",lng:"-21.699047"},{lat:"65.40683746",lng:"-14.399545"},{lat:"64.51173401",lng:"-14.505408"},{lat:"64.59091949",lng:"-21.577282"},{lat:"-6.98641586",lng:"112.446716"},{lat:"-7.22320080",lng:"112.726349"},{lat:"-6.95588303",lng:"110.461304"},{lat:"-6.31111717",lng:"106.775436"},{lat:"-7.68922901",lng:"112.893867"},{lat:"1.19569302",lng:"104.087921"},{lat:"52.10689163",lng:"-9.788139"},{lat:"54.35718918",lng:"-7.027206"},{lat:"54.97616196",lng:"-8.074305"},{lat:"51.79418945",lng:"-9.052066"},{lat:"54.30940247",lng:"-7.980526"},{lat:"52.42212677",lng:"-7.074827"},{lat:"52.29373550",lng:"-6.578530"},{lat:"51.51907730",lng:"-9.266304"},{lat:"52.45745468",lng:"-6.801784"},{lat:"52.07384491",lng:"-9.461674"},{lat:"52.14604950",lng:"-10.262785"},{lat:"52.23900986",lng:"-7.337449"},{lat:"53.51575089",lng:"-8.850365"},{lat:"52.45568848",lng:"-8.557410"},{lat:"53.76306534",lng:"-7.258048"},{lat:"41.36660004",lng:"14.859181"},{lat:"46.29545212",lng:"9.888199"},{lat:"46.61825943",lng:"10.702165"},{lat:"44.93083572",lng:"7.252788"},{lat:"45.45059967",lng:"10.894613"},{lat:"43.70527649",lng:"11.085341"},{lat:"43.99903870",lng:"7.849715"},{lat:"41.33144379",lng:"13.183004"},{lat:"41.63552856",lng:"14.474746"},{lat:"46.45680237",lng:"11.343571"},{lat:"43.50296021",lng:"13.055398"},{lat:"43.19274902",lng:"12.869177"},{lat:"45.32660675",lng:"10.727938"},{lat:"39.41910553",lng:"9.022754"},{lat:"45.22275543",lng:"9.204809"},{lat:"31.38059425",lng:"34.791515"},{lat:"32.79702377",lng:"35.141769"},{lat:"32.52239990",lng:"35.419952"},{lat:"32.31399918",lng:"34.848034"},{lat:"31.77027321",lng:"35.164494"},{lat:"32.63898087",lng:"34.964729"},{lat:"32.83589554",lng:"35.064289"},{lat:"32.05833435",lng:"34.787216"},{lat:"32.31700516",lng:"34.887230"},{lat:"32.32128143",lng:"34.885220"},{lat:"32.27498627",lng:"34.895065"},{lat:"32.19458008",lng:"34.881207"},{lat:"32.41258240",lng:"35.016258"},{lat:"32.16966248",lng:"34.918312"},{lat:"32.81371307",lng:"34.980762"},{lat:"28.46076393",lng:"129.717545"},{lat:"35.22470474",lng:"134.694580"},{lat:"26.54962158",lng:"128.108276"},{lat:"28.38051033",lng:"129.464355"},{lat:"42.05252838",lng:"139.451111"},{lat:"36.02626419",lng:"140.067627"},{lat:"34.47113037",lng:"134.899323"},{lat:"26.74002838",lng:"128.162338"},{lat:"36.00716400",lng:"139.321243"},{lat:"35.32474899",lng:"133.474884"},{lat:"41.22598267",lng:"141.131226"},{lat:"36.06884384",lng:"138.054352"},{lat:"42.99874878",lng:"141.395157"},{lat:"34.11050034",lng:"129.226288"},{lat:"56.47064209",lng:"26.013926"},{lat:"57.29160690",lng:"23.053368"},{lat:"56.47249603",lng:"22.225481"},{lat:"56.61497879",lng:"21.479816"},{lat:"56.92414093",lng:"22.138876"},{lat:"57.05310822",lng:"22.045238"},{lat:"56.76528168",lng:"23.319218"},{lat:"55.97240829",lng:"27.441305"},{lat:"56.96867752",lng:"23.772757"},{lat:"57.26753235",lng:"26.413509"},{lat:"56.43195343",lng:"27.459936"},{lat:"57.43585205",lng:"25.863432"},{lat:"56.62081528",lng:"23.419140"},{lat:"55.87154388",lng:"26.518066"},{lat:"56.00436020",lng:"25.948149"},{lat:"55.76186371",lng:"21.214445"},{lat:"54.57925415",lng:"25.743271"},{lat:"54.90061951",lng:"24.040257"},{lat:"56.07326126",lng:"23.295671"},{lat:"56.02950287",lng:"24.442303"},{lat:"54.35208511",lng:"24.826393"},{lat:"55.95520782",lng:"23.293894"},{lat:"55.73058319",lng:"21.225908"},{lat:"55.57230377",lng:"23.760498"},{lat:"54.05039597",lng:"24.183874"},{lat:"54.80182648",lng:"25.349045"},{lat:"55.81039047",lng:"22.327339"},{lat:"56.06912231",lng:"22.212185"},{lat:"54.86916733",lng:"24.478024"},{lat:"55.23526382",lng:"21.724339"},{lat:"4.03687286",lng:"114.829048"},{lat:"4.41665792",lng:"101.609047"},{lat:"5.09277010",lng:"100.496742"},{lat:"3.04275203",lng:"101.426331"},{lat:"3.00590491",lng:"101.481071"},{lat:"1.51418197",lng:"104.033745"},{lat:"2.62773991",lng:"101.888855"},{lat:"2.62300205",lng:"101.704536"},{lat:"20.74910355",lng:"-101.259422"},{lat:"20.76621056",lng:"-89.031883"},{lat:"19.11272430",lng:"-96.258820"},{lat:"19.92253113",lng:"-99.127274"},{lat:"19.58552551",lng:"-98.982002"},{lat:"24.03908730",lng:"-104.632805"},{lat:"20.57752037",lng:"-99.883598"},{lat:"19.43133736",lng:"-99.483307"},{lat:"19.93177223",lng:"-99.096519"},{lat:"16.35771561",lng:"-95.074829"},{lat:"19.84536171",lng:"-102.099976"},{lat:"18.14874840",lng:"-93.130371"},{lat:"25.76937294",lng:"-108.978912"},{lat:"31.71982574",lng:"-106.510078"},{lat:"18.98328400",lng:"-97.904938"},{lat:"52.27539825",lng:"5.241171"},{lat:"51.84414291",lng:"4.084112"},{lat:"51.92107391",lng:"6.403871"},{lat:"53.23738861",lng:"6.769987"},{lat:"52.27479172",lng:"6.127562"},{lat:"51.77232742",lng:"4.925022"},{lat:"51.97317123",lng:"4.620877"},{lat:"50.83738708",lng:"5.752047"},{lat:"51.81682968",lng:"4.262858"},{lat:"53.13591003",lng:"6.805116"},{lat:"51.71603394",lng:"5.357976"},{lat:"53.01974869",lng:"5.644516"},{lat:"52.49924850",lng:"6.211957"},{lat:"51.58585358",lng:"5.034940"},{lat:"53.14071274",lng:"6.013195"},{lat:"-35.58134079",lng:"173.836716"},{lat:"-35.07948303",lng:"173.511612"},{lat:"-35.70802689",lng:"173.976089"},{lat:"-44.97474289",lng:"168.016769"},{lat:"-37.75659180",lng:"175.183060"},{lat:"-43.44762039",lng:"172.070602"},{lat:"-38.04183578",lng:"176.487366"},{lat:"-35.30607986",lng:"173.906235"},{lat:"-46.16070175",lng:"167.690414"},{lat:"-38.08346176",lng:"176.196960"},{lat:"-40.95783615",lng:"175.614899"},{lat:"-37.36822891",lng:"175.244888"},{lat:"-44.09331131",lng:"171.245438"},{lat:"-39.95947266",lng:"176.579239"},{lat:"-37.94031143",lng:"175.211319"},{lat:"59.42263412",lng:"6.455241"},{lat:"58.51911163",lng:"6.931033"},{lat:"68.58093262",lng:"19.397282"},{lat:"59.49196243",lng:"6.518189"},{lat:"68.98104858",lng:"17.508589"},{lat:"60.82815933",lng:"9.461845"},{lat:"64.86264801",lng:"11.238649"},{lat:"59.92635727",lng:"10.608619"},{lat:"64.90056610",lng:"10.809552"},{lat:"60.41810608",lng:"5.633328"},{lat:"64.23244476",lng:"10.402815"},{lat:"64.65188599",lng:"13.160849"},{lat:"58.93659973",lng:"5.679287"},{lat:"68.98405457",lng:"19.175945"},{lat:"58.80902481",lng:"5.610226"},{lat:"-17.17556763",lng:"-71.767555"},{lat:"-6.08381891",lng:"-78.735497"},{lat:"-9.58845615",lng:"-77.177956"},{lat:"-16.48185921",lng:"-73.003426"},{lat:"53.51189804",lng:"20.774399"},{lat:"52.15349579",lng:"18.381916"},{lat:"50.44994736",lng:"18.969727"},{lat:"52.02842331",lng:"16.319115"},{lat:"51.10395050",lng:"17.150698"},{lat:"50.07265472",lng:"18.155279"},{lat:"53.53079224",lng:"18.112745"},{lat:"52.39445877",lng:"17.225601"},{lat:"52.81259537",lng:"21.873625"},{lat:"51.07461548",lng:"22.691511"},{lat:"49.67575455",lng:"19.208984"},{lat:"50.97467041",lng:"16.646214"},{lat:"51.54722977",lng:"15.106130"},{lat:"50.64387894",lng:"21.901655"},{lat:"50.15625000",lng:"22.571091"},{lat:"40.78243256",lng:"-8.544686"},{lat:"40.20035172",lng:"-7.452084"},{lat:"38.84469986",lng:"-7.605185"},{lat:"37.82355118",lng:"-25.705990"},{lat:"37.75094223",lng:"-25.659037"},{lat:"38.72214890",lng:"-27.092552"},{lat:"37.76330185",lng:"-25.413189"},{lat:"32.74738693",lng:"-17.201492"},{lat:"45.21387482",lng:"24.984047"},{lat:"47.91819763",lng:"23.346539"},{lat:"46.12745285",lng:"21.436623"},{lat:"44.07027435",lng:"24.997662"},{lat:"44.42216873",lng:"27.595831"},{lat:"44.69715500",lng:"23.043638"},{lat:"46.79830551",lng:"23.878420"},{lat:"45.81855392",lng:"25.602682"},{lat:"44.97377014",lng:"24.597996"},{lat:"44.28242111",lng:"24.065798"},{lat:"47.72399902",lng:"22.475910"},{lat:"46.23068237",lng:"27.760416"},{lat:"47.48015594",lng:"26.619246"},{lat:"47.63073730",lng:"26.272568"},{lat:"47.83456802",lng:"22.959579"},{lat:"55.63421249",lng:"36.858044"},{lat:"54.97755432",lng:"83.031578"},{lat:"45.02840805",lng:"38.998554"},{lat:"45.26272202",lng:"38.117313"},{lat:"55.71535492",lng:"37.463997"},{lat:"55.35757065",lng:"86.124023"},{lat:"56.37565613",lng:"44.022003"},{lat:"55.65238571",lng:"37.851440"},{lat:"57.50997543",lng:"42.085224"},{lat:"54.95865631",lng:"82.834076"},{lat:"59.85906982",lng:"30.393227"},{lat:"58.49853516",lng:"49.910320"},{lat:"56.34583282",lng:"30.510193"},{lat:"56.02012253",lng:"35.421310"},{lat:"61.36071014",lng:"73.444389"},{lat:"1.32949805",lng:"103.635330"},{lat:"1.39943898",lng:"103.730385"},{lat:"1.46331298",lng:"103.816109"},{lat:"1.40204597",lng:"103.970871"},{lat:"1.27991104",lng:"103.850716"},{lat:"1.40472305",lng:"103.808701"},{lat:"1.29669797",lng:"103.630569"},{lat:"49.30319214",lng:"18.724619"},{lat:"48.09090424",lng:"19.292784"},{lat:"47.90953445",lng:"17.541895"},{lat:"48.75568008",lng:"21.320074"},{lat:"49.19658661",lng:"21.743093"},{lat:"48.68059921",lng:"17.442566"},{lat:"49.08339691",lng:"18.417364"},{lat:"48.84622192",lng:"17.883570"},{lat:"49.37398911",lng:"18.592129"},{lat:"48.54242325",lng:"21.862968"},{lat:"48.50981522",lng:"21.616995"},{lat:"48.92982483",lng:"21.926722"},{lat:"48.24972153",lng:"17.059731"},{lat:"48.62699127",lng:"20.060358"},{lat:"48.78617477",lng:"17.401249"},{lat:"46.01448441",lng:"14.545607"},{lat:"46.26382065",lng:"15.083412"},{lat:"46.02258301",lng:"14.497039"},{lat:"45.89880371",lng:"14.570684"},{lat:"45.47232819",lng:"15.099358"},{lat:"46.52402115",lng:"16.512814"},{lat:"46.08872604",lng:"14.636039"},{lat:"46.45828247",lng:"15.834044"},{lat:"46.60017395",lng:"15.166595"},{lat:"45.77923584",lng:"14.773031"},{lat:"46.50026703",lng:"15.562263"},{lat:"46.57413864",lng:"16.441584"},{lat:"46.05754852",lng:"14.523995"},{lat:"46.22341156",lng:"15.720805"},{lat:"45.69272232",lng:"14.202780"},{lat:"-28.73044205",lng:"31.825703"},{lat:"-29.94409561",lng:"30.992899"},{lat:"-27.98025703",lng:"26.741213"},{lat:"-34.01210785",lng:"22.452076"},{lat:"-34.07998276",lng:"18.899429"},{lat:"-26.22212601",lng:"27.859894"},{lat:"-29.94428253",lng:"30.995056"},{lat:"-28.73003387",lng:"24.773230"},{lat:"-26.20969772",lng:"28.035847"},{lat:"-26.10197830",lng:"30.019985"},{lat:"-32.92460251",lng:"18.763029"},{lat:"-32.19148254",lng:"22.857742"},{lat:"-23.51144600",lng:"29.913738"},{lat:"-25.86981583",lng:"29.010452"},{lat:"-25.87747765",lng:"28.412067"},{lat:"37.60052872",lng:"126.936165"},{lat:"35.09671402",lng:"128.860001"},{lat:"37.54529953",lng:"127.074707"},{lat:"37.52246094",lng:"127.137505"},{lat:"35.27461624",lng:"129.090973"},{lat:"37.47395325",lng:"126.872643"},{lat:"35.16685486",lng:"128.994049"},{lat:"35.06544495",lng:"128.825882"},{lat:"37.69802856",lng:"127.047104"},{lat:"37.55638123",lng:"127.069763"},{lat:"38.38051987",lng:"141.065414"},{lat:"37.39499664",lng:"127.040649"},{lat:"37.23683548",lng:"-5.135782"},{lat:"42.41970825",lng:"-6.100464"},{lat:"38.46273804",lng:"-6.392617"},{lat:"41.42171860",lng:"0.580908"},{lat:"40.35704803",lng:"-0.453740"},{lat:"38.69886780",lng:"-0.764960"},{lat:"41.56107712",lng:"1.955839"},{lat:"37.01924896",lng:"-4.336401"},{lat:"38.54454041",lng:"-2.114979"},{lat:"41.28491211",lng:"-2.319930"},{lat:"39.45478821",lng:"-5.330959"},{lat:"41.25996399",lng:"-0.533802"},{lat:"42.11227798",lng:"-1.822601"},{lat:"28.06502151",lng:"-14.507715"},{lat:"28.30324936",lng:"-13.971035"},{lat:"-26.42339897",lng:"31.189508"},{lat:"-26.98213196",lng:"31.283234"},{lat:"-27.23269653",lng:"31.408026"},{lat:"-26.20383835",lng:"31.985294"},{lat:"-26.39650536",lng:"31.182014"},{lat:"-26.98219299",lng:"31.035957"},{lat:"-26.21496773",lng:"30.995262"},{lat:"-26.60171700",lng:"31.388027"},{lat:"-26.92015266",lng:"30.983513"},{lat:"-26.11141396",lng:"31.126345"},{lat:"-26.10744095",lng:"31.169136"},{lat:"-26.40461159",lng:"31.083094"},{lat:"-26.97511482",lng:"31.028648"},{lat:"-26.71927452",lng:"31.309277"},{lat:"-26.20301437",lng:"31.921894"},{lat:"65.81599426",lng:"14.365581"},{lat:"58.13027573",lng:"13.922780"},{lat:"57.71089554",lng:"11.647895"},{lat:"55.52986526",lng:"12.942154"},{lat:"65.66552734",lng:"21.940622"},{lat:"60.99880981",lng:"14.670268"},{lat:"58.32293320",lng:"14.990909"},{lat:"56.21194458",lng:"13.735992"},{lat:"58.34688568",lng:"12.348450"},{lat:"66.65412903",lng:"20.052872"},{lat:"59.06438828",lng:"15.981979"},{lat:"65.10487366",lng:"14.544595"},{lat:"58.67615891",lng:"17.039459"},{lat:"59.48123932",lng:"13.836004"},{lat:"64.87362671",lng:"21.028851"},{lat:"46.22114563",lng:"6.140723"},{lat:"46.89119339",lng:"7.523619"},{lat:"46.70035553",lng:"7.799520"},{lat:"46.28929520",lng:"6.135651"},{lat:"47.37205124",lng:"8.424210"},{lat:"47.38903809",lng:"8.541389"},{lat:"47.01861191",lng:"6.977545"},{lat:"46.50375366",lng:"6.481861"},{lat:"47.09903336",lng:"7.044664"},{lat:"46.52144623",lng:"6.413873"},{lat:"46.95008850",lng:"7.331684"},{lat:"46.21574402",lng:"6.180647"},{lat:"46.69268417",lng:"7.086657"},{lat:"47.52709961",lng:"8.710206"},{lat:"47.39604568",lng:"8.462983"},{lat:"23.07983780",lng:"120.041130"},{lat:"24.78332329",lng:"121.800438"},{lat:"24.20371437",lng:"120.815208"},{lat:"23.97002411",lng:"120.537880"},{lat:"25.11916351",lng:"121.661720"},{lat:"24.19493294",lng:"120.684494"},{lat:"23.55715179",lng:"120.277779"},{lat:"25.10049820",lng:"121.696701"},{lat:"24.69184303",lng:"120.995995"},{lat:"25.07308578",lng:"121.546951"},{lat:"23.49364281",lng:"120.120491"},{lat:"24.40658760",lng:"120.778198"},{lat:"15.93314838",lng:"105.342148"},{lat:"18.70203590",lng:"97.837212"},{lat:"17.77249718",lng:"98.974190"},{lat:"15.60174656",lng:"99.420876"},{lat:"8.34549713",lng:"99.938141"},{lat:"17.66644478",lng:"99.183655"},{lat:"15.58344173",lng:"101.390671"},{lat:"17.64426422",lng:"102.521797"},{lat:"17.18381310",lng:"100.650398"},{lat:"15.65915394",lng:"100.583900"},{lat:"15.02311802",lng:"103.497559"},{lat:"16.23185158",lng:"99.715126"},{lat:"14.60123825",lng:"99.736923"},{lat:"6.61073208",lng:"100.064377"},{lat:"26.64190674",lng:"128.213943"},{lat:"50.45106125",lng:"30.519283"},{lat:"50.43751907",lng:"30.528582"},{lat:"46.36122513",lng:"30.702032"},{lat:"50.46445465",lng:"30.478584"},{lat:"49.98561478",lng:"36.229649"},{lat:"46.49536896",lng:"30.700029"},{lat:"50.42632294",lng:"30.656637"},{lat:"49.96047211",lng:"36.266243"},{lat:"48.01520920",lng:"37.794533"},{lat:"50.40546036",lng:"30.513222"},{lat:"50.44322586",lng:"30.653084"},{lat:"49.82079697",lng:"23.880972"},{lat:"50.48408127",lng:"30.456749"},{lat:"49.96622849",lng:"36.196957"},{lat:"49.99501801",lng:"36.170540"},{lat:"52.43422318",lng:"-2.334393"},{lat:"50.65230942",lng:"-3.470087"},{lat:"56.47024536",lng:"-2.880676"},{lat:"55.91110611",lng:"-3.048853"},{lat:"51.86898422",lng:"-2.310359"},{lat:"51.87520218",lng:"-0.440250"},{lat:"55.50694275",lng:"-4.378154"},{lat:"55.84157562",lng:"-3.113482"},{lat:"52.66004181",lng:"-0.992791"},{lat:"52.37716293",lng:"-1.996860"},{lat:"51.42614365",lng:"-0.098622"},{lat:"52.61346436",lng:"0.563555"},{lat:"51.33352661",lng:"-2.794225"},{lat:"52.76113129",lng:"-2.925423"},{lat:"51.95000839",lng:"-4.447325"},{lat:"32.02433014",lng:"-89.277924"},{lat:"32.74086761",lng:"-116.974922"},{lat:"35.95835114",lng:"-85.543221"},{lat:"42.24806595",lng:"-71.318047"},{lat:"33.58666611",lng:"-86.295723"},{lat:"37.30364227",lng:"-85.250641"},{lat:"36.13418579",lng:"-95.960770"},{lat:"61.62684631",lng:"-149.042542"},{lat:"45.59622574",lng:"-113.453926"},{lat:"39.70431519",lng:"-76.007355"},{lat:"41.36591339",lng:"-76.057587"},{lat:"45.93054581",lng:"-84.744720"},{lat:"45.55790710",lng:"-122.605553"},{lat:"34.30801010",lng:"-78.150307"},{lat:"30.85139847",lng:"-93.749390"},{lat:"30.248434",lng:"-97.750376"},{lat:"37.0625",lng:"-95.677068"},{lat:"35.096991",lng:"132.44663"},{lat:"-3.137442",lng:"-60.493984"},{lat:"-77.636089",lng:"166.417945"},{lat:"46.388309",lng:"10.03177"},{lat:"33.742817",lng:"-117.8166"},{lat:"35.898476",lng:"-81.547742"},{lat:"52.116484",lng:"-1.938563"},{lat:"38.897627",lng:"-77.036508"},{lat:"34.059202",lng:"-118.453217"},{lat:"36.965019",lng:"-122.013795"},{lat:"38.140091",lng:"-122.233408"},{lat:"28.408015",lng:"-81.46222"},{lat:"33.1281",lng:"-117.311105"},{lat:"34.395579",lng:"132.453489"},{lat:"-77.553339",lng:"166.170294"},{lat:"-84.999999",lng:"-44.656312"},{lat:"-85.00001",lng:"-54.150796"},{lat:"-23.442794",lng:"151.915555"},{lat:"-24.117644",lng:"152.710487"},{lat:"6.489983",lng:"125.90332"},{lat:"69.114571",lng:"-105.04406"},{lat:"69.116647",lng:"-105.044498"},{lat:"69.11621",lng:"-105.045665"},{lat:"49.275515",lng:"-123.121364"},{lat:"52.364718",lng:"4.881515"},{lat:"39.287216",lng:"-76.60798"},{lat:"40.424847",lng:"-3.691326"},{lat:"40.717571",lng:"-73.963103"},{lat:"31.77101",lng:"35.203961"},{lat:"31.773455",lng:"35.202931"},{lat:"46.675649",lng:"9.68609"},{lat:"41.931824",lng:"-87.657423"},{lat:"53.765132",lng:"-2.770868"},{lat:"53.799596",lng:"-1.545136"},{lat:"-37.776541",lng:"144.826841"},{lat:"34.228844",lng:"131.303884"},{lat:"-2.945071",lng:"-60.676237"},{lat:"51.507881",lng:"-0.123446"},{lat:"51.533264",lng:"-0.110118"},{lat:"51.533234",lng:"-0.109917"},{lat:"51.535783",lng:"-0.140062"},{lat:"51.537223",lng:"-0.141087"},{lat:"49.268057",lng:"-123.155657"},{lat:"-27.94141",lng:"24.78368"},{lat:"42.477283",lng:"-83.160825"},{lat:"28.413356",lng:"-81.460469"},{lat:"41.890091",lng:"12.492672"},{lat:"53.482653",lng:"-2.200306"},{lat:"25.83382",lng:"-80.120469"},{lat:"25.833797",lng:"-80.12053"},{lat:"46.547593",lng:"7.985391"},{lat:"70.546727",lng:"29.075467"},{lat:"44.081481",lng:"1.032929"},{lat:"35.673535",lng:"139.708055"},{lat:"35.689736",lng:"139.702417"},{lat:"35.7044",lng:"139.747623"},{lat:"35.710886",lng:"139.774406"},{lat:"36.73826",lng:"139.50339"},{lat:"36.757414",lng:"139.451601"},{lat:"36.756993",lng:"139.555896"},{lat:"35.245565",lng:"139.027044"},{lat:"35.01922",lng:"135.679994"},{lat:"32.804978",lng:"130.70691"},{lat:"26.139807",lng:"127.74993"},{lat:"43.052991",lng:"141.496375"},{lat:"51.490542",lng:"-0.127319"},{lat:"17.425072",lng:"78.421315"},{lat:"30.248449",lng:"-97.750475"},{lat:"36.732487",lng:"138.461723"},{lat:"36.734564",lng:"138.43312"},{lat:"46.393007",lng:"10.033268"},{lat:"46.349506",lng:"10.05869"},{lat:"-62.598476",lng:"-59.896517"},{lat:"36.057426",lng:"-112.144489"},{lat:"36.100781",lng:"-112.089193"},{lat:"35.030488",lng:"-111.026974"},{lat:"44.883017",lng:"6.624978"},{lat:"69.11817",lng:"-105.054692"},{lat:"50.114583",lng:"-122.957182"},{lat:"50.119508",lng:"-122.956367"},{lat:"39.063249",lng:"141.722839"},{lat:"39.015166",lng:"141.629809"},{lat:"39.084238",lng:"141.714674"},{lat:"40.769671",lng:"-111.890173"},{lat:"35.72893",lng:"139.717201"},{lat:"34.382821",lng:"133.819034"},{lat:"35.155846",lng:"137.079163"},{lat:"35.708721",lng:"139.721632"},{lat:"33.875003",lng:"133.835546"},{lat:"34.069849",lng:"134.551615"},{lat:"39.760668",lng:"-86.163003"},{lat:"53.234361",lng:"-0.537156"},{lat:"51.064864",lng:"-1.797946"},{lat:"40.75845",lng:"-73.976111"},{lat:"35.702576",lng:"139.579113"},{lat:"50.824282",lng:"-0.139982"},{lat:"50.722479",lng:"-3.529251"},{lat:"48.804557",lng:"2.120141"},{lat:"49.896549",lng:"-97.14563"},{lat:"18.003458",lng:"79.57479"},{lat:"51.588783",lng:"4.776081"},{lat:"52.039914",lng:"0.744098"},{lat:"-16.88904",lng:"145.752772"},{lat:"51.380192",lng:"-2.360322"}]},{}]},{},[1]);