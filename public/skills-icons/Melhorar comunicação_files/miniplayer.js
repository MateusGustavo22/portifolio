(function(g){var window=this;'use strict';var Nmb=function(a,b){g.X.call(this,{I:"button",Na:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Z:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},Y:[{I:"svg",Z:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},Y:[{I:"g",Z:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},Y:[{I:"g",Z:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
Y:[{I:"path",Z:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Ua("click",this.onClick,this);this.updateValue("title",g.QS(a,"Expandir","i"));this.update({"data-title-no-tooltip":"Expandir"});g.tb(this,g.KS(b.Ec(),this.element))},Omb=function(a){g.X.call(this,{I:"div",
T:"ytp-miniplayer-ui"});this.vg=!1;this.player=a;this.V(a,"minimized",this.Bh);this.V(a,"onStateChange",this.WQ)},Pmb=function(a){g.xT.call(this,a);
this.B=new g.OJ(this);this.j=new Omb(this.player);this.j.hide();g.wS(this.player,this.j.element,4);a.wg()&&(this.load(),g.nr(a.getRootNode(),"ytp-player-minimized",!0))};
g.x(Nmb,g.X);Nmb.prototype.onClick=function(){this.J.Ra("onExpandMiniplayer")};g.x(Omb,g.X);g.k=Omb.prototype;
g.k.ON=function(){this.tooltip=new g.ZV(this.player,this);g.H(this,this.tooltip);g.wS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.bd=new g.dU(this.player);g.H(this,this.bd);this.xk=new g.X({I:"div",T:"ytp-miniplayer-scrim"});g.H(this,this.xk);this.xk.Ka(this.element);this.V(this.xk.element,"click",this.DI);var a=new g.X({I:"button",Na:["ytp-miniplayer-close-button","ytp-button"],Z:{"aria-label":"Fechar"},Y:[g.DQ()]});g.H(this,a);a.Ka(this.xk.element);this.V(a.element,"click",this.Lp);
a=new Nmb(this.player,this);g.H(this,a);a.Ka(this.xk.element);this.Dv=new g.X({I:"div",T:"ytp-miniplayer-controls"});g.H(this,this.Dv);this.Dv.Ka(this.xk.element);this.V(this.Dv.element,"click",this.DI);var b=new g.X({I:"div",T:"ytp-miniplayer-button-container"});g.H(this,b);b.Ka(this.Dv.element);a=new g.X({I:"div",T:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ka(this.Dv.element);var c=new g.X({I:"div",T:"ytp-miniplayer-button-container"});g.H(this,c);c.Ka(this.Dv.element);this.EY=new g.iV(this.player,
this,!1);g.H(this,this.EY);this.EY.Ka(b.element);b=new g.hV(this.player,this);g.H(this,b);b.Ka(a.element);this.nextButton=new g.iV(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ka(c.element);this.Mj=new g.SV(this.player,this);g.H(this,this.Mj);this.Mj.Ka(this.xk.element);this.Qc=new g.nV(this.player,this);g.H(this,this.Qc);g.wS(this.player,this.Qc.element,4);this.mI=new g.X({I:"div",T:"ytp-miniplayer-buttons"});g.H(this,this.mI);g.wS(this.player,this.mI.element,4);a=new g.X({I:"button",
Na:["ytp-miniplayer-close-button","ytp-button"],Z:{"aria-label":"Fechar"},Y:[g.DQ()]});g.H(this,a);a.Ka(this.mI.element);this.V(a.element,"click",this.Lp);a=new g.X({I:"button",Na:["ytp-miniplayer-replay-button","ytp-button"],Z:{"aria-label":"Fechar"},Y:[g.VFa()]});g.H(this,a);a.Ka(this.mI.element);this.V(a.element,"click",this.W8);this.V(this.player,"presentingplayerstatechange",this.Nd);this.V(this.player,"appresize",this.Lb);this.V(this.player,"fullscreentoggled",this.Lb);this.Lb()};
g.k.show=function(){this.yf=new g.$q(this.Fw,null,this);this.yf.start();this.vg||(this.ON(),this.vg=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Qc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.yf&&(this.yf.dispose(),this.yf=void 0);g.X.prototype.hide.call(this);this.player.wg()||(this.vg&&this.Qc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.yf&&(this.yf.dispose(),this.yf=void 0);g.X.prototype.ya.call(this)};
g.k.Lp=function(){this.player.stopVideo();this.player.Ra("onCloseMiniplayer")};
g.k.W8=function(){this.player.playVideo()};
g.k.DI=function(a){if(a.target===this.xk.element||a.target===this.Dv.element)g.BP(this.player.Kb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Bh=function(){g.nr(this.player.getRootNode(),"ytp-player-minimized",this.player.wg())};
g.k.bf=function(){this.Qc.Cc();this.Mj.Cc()};
g.k.Fw=function(){this.bf();this.yf&&this.yf.start()};
g.k.Nd=function(a){g.WO(a.state,32)&&this.tooltip.hide()};
g.k.Lb=function(){g.CV(this.Qc,0,this.player.qb().getPlayerSize().width,!1);g.oV(this.Qc)};
g.k.WQ=function(a){this.player.wg()&&(0===a?this.hide():this.show())};
g.k.Ec=function(){return this.tooltip};
g.k.Jg=function(){return!1};
g.k.Ug=function(){return!1};
g.k.ym=function(){return!1};
g.k.EJ=function(){};
g.k.uq=function(){};
g.k.cz=function(){};
g.k.qn=function(){return null};
g.k.ZG=function(){return null};
g.k.dN=function(){return new g.ve(0,0)};
g.k.Uk=function(){return new g.vo(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Nw=function(a,b,c,d,e){var f=0,h=d=0,l=g.Jo(a);if(b){c=g.ir(b,"ytp-prev-button")||g.ir(b,"ytp-next-button");var m=g.ir(b,"ytp-play-button"),n=g.ir(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ho(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ir(b,"ytp-miniplayer-button-top-left"),f=g.Ho(b,this.element),b=g.Jo(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.pe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Xp=function(){};
g.k.mm=function(){return!1};
g.k.cF=function(){};
g.k.QA=function(){};
g.k.Sr=function(){};
g.k.Rr=function(){};
g.k.By=function(){};
g.k.Zs=function(){};
g.k.ME=function(){};g.x(Pmb,g.xT);g.k=Pmb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.nr(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.xT.prototype.create.call(this);this.B.V(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Bl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.wT("miniplayer",Pmb);})(_yt_player);
