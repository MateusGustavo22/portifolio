(function(g){var window=this;'use strict';var Emb=function(a){g.X.call(this,{I:"div",T:"ytp-inline-preview-ui"});this.vg=!1;this.player=a;this.V(a,"onStateChange",this.WQ);this.V(a,"videodatachange",this.nx);this.V(a,"onInlinePreviewModeChange",this.f6);this.yf=new g.$q(this.Fw,null,this);g.H(this,this.yf)},J6=function(a){g.xT.call(this,a);
this.j=new Emb(this.player);g.H(this,this.j);this.j.hide();g.wS(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.kr(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.x(Emb,g.X);g.k=Emb.prototype;
g.k.ON=function(){this.tooltip=new g.ZV(this.player,this);g.H(this,this.tooltip);g.wS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.bd=new g.dU(this.player);g.H(this,this.bd);this.xk=new g.X({I:"div",Na:["ytp-inline-preview-scrim"]});g.H(this,this.xk);this.xk.Ka(this.element);this.V(this.xk.element,"click",this.DI);this.Mj=new g.SV(this.player,this,300);g.H(this,this.Mj);this.Mj.Ka(this.xk.element);this.controls=new g.X({I:"div",T:"ytp-inline-preview-controls"});g.H(this,this.controls);
this.controls.Ka(this.element);var a=new g.gV(this.player,this,!1);g.H(this,a);a.Ka(this.controls.element);a=new g.QV(this.player,this);g.H(this,a);a.Ka(this.controls.element);this.Qc=new g.nV(this.player,this);g.H(this,this.Qc);g.wS(this.player,this.Qc.element,4);this.V(this.player,"appresize",this.Lb);this.V(this.player,"fullscreentoggled",this.Lb);this.Lb()};
g.k.show=function(){g.ar(this.yf);this.vg||(this.ON(),this.vg=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Qc.show();this.player.Ra("onInlinePreviewUiReady")};
g.k.hide=function(){this.yf.stop();g.X.prototype.hide.call(this);this.player.isInline()||this.vg&&this.Qc.hide()};
g.k.ya=function(){g.X.prototype.ya.call(this)};
g.k.DI=function(a){a.target===this.xk.element&&this.player.Ra("onExpandInlinePreview",a)};
g.k.f6=function(){g.nr(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.bf=function(){this.Qc.Cc();this.Mj.Cc()};
g.k.Fw=function(){this.bf();g.ar(this.yf)};
g.k.Lb=function(){g.CV(this.Qc,0,this.player.qb().getPlayerSize().width,!1);g.oV(this.Qc)};
g.k.WQ=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.nx=function(a,b){if(this.player.isInline()){g.nr(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.AB);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.nr(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
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
g.k.Nw=function(a,b,c,d,e){var f=d=0,h=0,l=g.Jo(a);if(b){c=g.ir(b,"ytp-mute-button");var m=g.ir(b,"ytp-subtitles-button"),n=g.Ho(b,this.element);b=g.Jo(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.qb().getPlayerSize().width;h=g.pe(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.Xp=function(){};
g.k.mm=function(){return!1};
g.k.cF=function(){};
g.k.QA=function(){};
g.k.Sr=function(){};
g.k.Rr=function(){};
g.k.By=function(){};
g.k.Zs=function(){};
g.k.ME=function(){};g.x(J6,g.xT);J6.prototype.Bl=function(){return!1};
J6.prototype.load=function(){this.player.hideControls();this.j.show()};
J6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.wT("inline_preview",J6);})(_yt_player);
