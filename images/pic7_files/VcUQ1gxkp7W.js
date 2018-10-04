if (self.CavalryLogger) { CavalryLogger.start_js(["U23RQ"]); }

__d("HostnameRewriter",["URI","isFacebookURI","lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},h=null,i=null,j=new RegExp("^(.*(?:channel-proxy|edge-chat).*)\\.(facebook\\.com)$","i"),k=new RegExp("facebook\\.com$"),l=new RegExp("^www\\.(|.*\\.)facebook\\.com$"),m=null,n="facebook.com",o=!1,p=!1,q=new RegExp("facebookcorewwwi\\.onion$"),r=new RegExp("facebookcorewwwi\\.testonion$"),s=new RegExp("fbcdn\\.net$"),t="fbcdn23dssr3jqnq.onion",u="fbcdn23dssr3jqnq.testonion",v=new RegExp("^www\\."),w=new RegExp("(^|\\.)(facebook\\.com|workplace\\.com)$","i");function x(a){h=null;a?a="(^|\\.)":a="^";m=a+g(n)+"$";i=null}function y(){if(!m)return null;if(h)return h;h=new RegExp(m,"i");return h}function z(){if(i)return i;i=new RegExp("(^|\\.)("+g(n)+"|facebook\\.com)$","i");return i}function A(){return function(a){a=new(b("URI"))(a);var c=j.exec(a.getDomain());if(!c||c.length<3)return a;a.setDomain("edge-chat."+c[2]);return a}}function B(){return function(a){a=new(b("URI"))(a);z().test(a.getDomain())&&a.setProtocol("https");return a}}function C(){return function(a){a=new(b("URI"))(a);var c=a.getDomain();z().test(c)?a.setDomain(c.replace(k,n)):o&&c!==null?a.setDomain(c.replace(s,t)):p&&c!==null&&a.setDomain(c.replace(s,u));return a}}function D(){return function(a){a=new(b("URI"))(a);var c=a.getDomain();l.test(c)&&a.setDomain(c.replace(v,"web."));return a}}a={registerFacebookFilters:function(a,c){n=a,o=q.test(n),p=r.test(n),x(c),b("isFacebookURI").setRegex(y()),b("URI").registerFilter(A()),b("URI").registerFilter(B()),b("URI").registerFilter(C()),b("lowerFacebookDomain").setDomain(n)},registerInternetDotOrgFilters:function(a,c){n=a,b("URI").registerFilter(D())},treatWorkplaceAsFacebookURI:function(){b("isFacebookURI").setRegex(w)}};e.exports=a}),null);
__d("SearchClientFunnelTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setActionName=function(a){this.$1.action_name=a;return this};a.prototype.setLastState=function(a){this.$1.last_state=a;return this};a.prototype.setSelectedID=function(a){this.$1.selected_id=a;return this};a.prototype.setSelectedText=function(a){this.$1.selected_text=a;return this};a.prototype.setSelectedType=function(a){this.$1.selected_type=a;return this};a.prototype.setTypeaheadSid=function(a){this.$1.typeahead_sid=a;return this};a.prototype.setTypedQuery=function(a){this.$1.typed_query=a;return this};c={action_name:!0,last_state:!0,selected_id:!0,selected_text:!0,selected_type:!0,typeahead_sid:!0,typed_query:!0};e.exports=a}),null);
__d("SearchFunnelLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SEARCH_BOX_TAPPED:"search_box_tapped",TA_SUGGESTION_CLICKED:"ta_suggestion_clicked",SERP_INLINE_ACTION:"serp_inline_action",SERP_RESULTS_LOADED:"serp_results_loaded",SERP_RESULT_CLICKED:"serp_result_clicked",SERP_SEE_MORE_CLICKED:"serp_see_more_clicked",SERP_SCROLL_RESULTS:"serp_scroll_results",SERP_TAB_CLICKED:"serp_tab_clicked",VIEW_PORT_VIEWS_ON_SEARCH_RESULTS:"view_port_views_on_search_results",END_OF_SERP_RESULTS:"end_of_serp_results"})}),null);
__d("SearchFunnelLogger",["SearchClientFunnelTypedLogger","SearchFunnelLoggerConfig","SearchFunnelLoggerEvents"],(function(a,b,c,d,e,f){"use strict";a={logSearchOpen:function(){if(!b("SearchFunnelLoggerConfig").isEnabled)return;new(b("SearchClientFunnelTypedLogger"))().setActionName(b("SearchFunnelLoggerEvents").SEARCH_BOX_TAPPED).log()}};e.exports=a}),null);
__d("BrowseClientEventLogger",["csx","Banzai","DOMQuery","SearchFunnelLogger","SearchLoggingOptions","ge","gkx","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="browse_client_event_session",i="search_www_click_error",j="21.";a={logData:function(event,a,c,d){__p&&__p();d===void 0&&(d={});if(!event||!a)return;d.event=event;d.client_time=Math.floor(Date.now());d.client_time_2=Date.now()/1e3;d.session_id=a;d.vertical=c;this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(a)!==-1)return;c=d.event==="click"&&d.clicked_href!=null&&b("SearchLoggingOptions").signalLinkClicks;b("Banzai").post(h,[d],{delay:0,retry:!0,signal:c})},logClick:function(a){a.gt.event="click",this.maybeLogVisiblityEvent(a,!0),b("gkx")("678249")&&b("ifRequired")("FacebarTypeaheadRefreshNullstate",function(a){a.setIsNullstateStale(!0)})},maybeLogClientViewEvent:function(a){a.event="client_view",this.maybeLogVisiblityEvent(a)},maybeLogVisiblityEvent:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=null;c&&(d=a,a=a.gt);if(!a||!a.xt||a.xt.indexOf(j)!==0){c&&b("Banzai").post(i,[d],{delay:0,retry:!0});return}var e=JSON.parse(a.xt.substring(3));c&&(e.click_type=a.click_type,e.tn=a.tn,e.clicked_href=a.clicked_href,d&&d.bt&&d.bt.ct&&(d.bt.ct=="feedback"&&(e.feedback_score=d.bt.feedback_score,e.feedback_type=d.bt.feedback_type)));var event=a.event;c=this._getPositionForCurrentDOMNode(e.unit_id);e.position=c;if(e.display_style==="context_hscroll"&&(event==="client_view"||event==="vpvd"||event==="visible"||event==="hidden"))return;if(event==="vpvd"){if(!a.ft)return;e.vpvd_time=a.ft.vpvd_time_delta}this.logData(event,e.session_id,e.vertical,e)},_getPositionForCurrentDOMNode:function(a){__p&&__p();if(a==null||a==undefined)return null;var c=0,d=b("ge")("browse_result_area");if(d==null||d==undefined)return null;d=b("DOMQuery").scry(d,"._401d");for(var e=0;e<d.length;e++){var f=d[e];f=f.getAttribute("data-gt");if(f!==null||f!==undefined){f=JSON.parse(JSON.parse(f).xt.substring(3));if(f.item_type=="result"&&f.id!==""&&f.id!==null){if(f.unit_id==a)return c;c++}}}return null},logImpression:function(a){a.event="impression",this.maybeLogVisiblityEvent(a)}};e.exports=a}),null);
__d("ViewableImpressionUtils",["csx","CSS"],(function(a,b,c,d,e,f,g){a={isHorizontallyOffscreen:function(a,c,d){var e=Math.max(c.x,0);d=Math.min(c.x+c.width,d.width);return d-e<c.width||b("CSS").matchesSelector(a,".desktop_hscroll_offscreen")}};e.exports=a}),null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","Event","getViewportDimensions"],(function(a,b,c,d,e,f){a={getEventListeners:function(a){return[b("Event").listen(document,"DOMContentLoaded",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,a)]},getViewportInfo:function(){return b("getViewportDimensions")()}};e.exports=a}),null);
__d("FBEngagementWhiteopsFraudSensorTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setInstanceID=function(a){this.$1.instance_id=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPostID=function(a){this.$1.post_id=a;return this};a.prototype.setTqBotDetectionProductEnum=function(a){this.$1.tq_bot_detection_product_enum=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={instance_id:!0,page_id:!0,post_id:!0,tq_bot_detection_product_enum:!0,vc:!0};e.exports=a}),null);
__d("FullViewLogger",["Banzai","ScriptPath","SubscriptionsHandler","URI"],(function(a,b,c,d,e,f){__p&&__p();g.logFromViewableImpressionTracker=function(a){"use strict";var b=new g();b.subscribeToTrackerEvents(a)};g.prototype.subscribeToTrackerEvents=function(a){"use strict";this.subscriptionsHandler=new(b("SubscriptionsHandler"))(),this.subscriptionsHandler.addSubscriptions(a.addListener("full_view",this.onFullView,this))};g.prototype.onFullView=function(a){"use strict";this.$1()&&this.$2(a);a={token:a.token,fullViewType:a.fullViewType,scriptPath:b("ScriptPath").getTopViewEndpoint()};b("Banzai").post("xtrackable:full_view",a);this.$1()&&this.$3(a)};g.prototype.$1=function(){"use strict";return 0};g.prototype.$2=function(a){"use strict";!1};g.prototype.$3=function(a){"use strict";!1};function g(){"use strict"}e.exports=g}),null);
__d("PercentVisible",[],(function(a,b,c,d,e,f){e.exports={NO_VISIBLE:-1,VISIBLE_0_PCT:0,VISIBLE_50_PCT:50,VISIBLE_100_PCT:100}}),null);
__d("AdDelayedHiddenCheckConfiguration",["AdImpressionLoggingConfig"],(function(a,b,c,d,e,f){var g=null;a={getEnabled:function(){return g===null?b("AdImpressionLoggingConfig").enableDelayedHiddenCheck:g},setEnabled:function(a){g=a}};e.exports=a}),null);
__d("FBSiteWhiteOps",["ControlledReferer","FBEngagementWhiteopsFraudSensorTypedLogger","Style","URI","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={appendToWindow:function(a,c,d){__p&&__p();var e=window.document.body;try{var f="fbsbx-sig-iframe-detection";if(e.getElementsByClassName(f).length!==0)return;var g=window.document.createElement("iframe");b("Style").apply(g,{height:"1px",width:"1px",opacity:"0",position:"relative",zIndex:"-9999999"});g.id="fbsbx-sig-iframe-"+a;g.className=f;g.referrerPolicy="no-referrer";b("ControlledReferer").useFacebookReferer(g,function(){__p&&__p();g.sandbox="allow-scripts allow-same-origin";var e="https://s.update.fbsbx.com/2/843748/analytics.html?ti="+a+"&di=facebook.com&bt="+c+"&dt=8437481520966594402012";d&&(e+="&sn="+d);e=new(b("URI"))(e);var f=g.contentWindow.document,h="fbsbx-sig-iframe-form-"+a,i=e.toString();e=e.getQueryData();if(b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE Mobile")){var j="";for(var k in e)Object.prototype.hasOwnProperty.call(e,k)&&(j+="<input "+('name="'+k+'" ')+'type="hidden" autocomplete="off" '+('value="'+e[k]+'" />'));f.body.innerHTML='<form method="GET" id='+h+">"+j+"</form>";j=f.getElementById(h);j.action=i}else{f.body.innerHTML='<form method="GET" id='+h+"></form>";j=f.getElementById(h);j.action=i;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){i=f.createElement("input");i.name=l;i.value=e[l];i.autocomplete="off";i.type="hidden";j.appendChild(i)}}f.body.innerHTML+='<iframe height="100%" width="100%" onload=\'document.getElementById("'+h+"\").submit()'/>;"});e.appendChild(g)}catch(a){}},log:function(a,c,d){new(b("FBEngagementWhiteopsFraudSensorTypedLogger"))().setInstanceID(a).setTqBotDetectionProductEnum(c).log()}};e.exports=a}),null);
__d("FullViewType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTIRE_UNIT:1})}),null);
__d("GHLTestElement",["csx","Parent","containsNode","getElementPosition"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){var c=Array.from(a.querySelectorAll("img"));c=c.filter(function(a){a=b("getElementPosition")(a);return a.width>0||a.height>0});c=c.length===0;return c&&!i(a)};c=function(a){a=a.filter(function(a){var c;c=a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement;return"getBoundingClientRect"in a&&b("containsNode")(c,a)});return a.length!==0};d=function(a){if(i(a))return!1;var b=a.querySelector("._5pcr");return h(a)||h(b)};var h=function(a){return a!==null&&window.getComputedStyle(a).display==="none"},i=function(a){return!!b("Parent").bySelector(a,j)},j=[".hidden_elem","._5ds2","._i6m"].join(",");e.exports={testElementI:a,testElementD:d,testImagesCompat:c}}),null);
__d("ViewableImpressionTracker",["csx","AdDelayedHiddenCheckConfiguration","AdImpressionLoggingConfig","Banzai","BrowseClientEventLogger","DataAttributeUtils","DOM","FBSiteWhiteOps","FullViewType","GHLTestElement","NonBlockingIFrame","PercentVisible","Run","Style","URI","ViewableImpressionUtils","Visibility","ge","getElementPosition","getViewportDimensions","ghlTestUBT","mixInEventEmitter","randomInt"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d){"use strict";__p&&__p();this.checkAndLogImpressionIfPendingOnExit=function(){b("AdImpressionLoggingConfig").enableFlushDelayLogOnCleanup&&this.waitForDelayLogged&&(clearTimeout(this.delayedLoggingTimeout),this.delayLogImpression())}.bind(this),this.delayLogImpression=function(){this.waitForDelayLogged=!1;var a=b("GHLTestElement").testElementI(this.element);if(a){this.$11();b("AdImpressionLoggingConfig").logForHiddenAds&&this.logImpression(1,!0,{});return}this.logImpression(1,!1,{});this.$9()}.bind(this),this.id=a,this.element=c,this.config=d,this.iframe=null,this.viewableTimeout=null,this.delayedLoggingTimeout=null,this.clearSubsequentTimeout=null,this.waitForSubsequent=!1,this.waitForLogged=!1,this.waitForDelayLogged=!1,this.isNonViewableLogged=!1,this.isVisible=!1,this.iframeLogged=!1,this.banzaiLogged=!1,this.topLeftInViewport=!1,this.bottomRightInViewport=!1,b("Run").onUnload(this.checkAndLogImpressionIfPendingOnExit),b("Run").onLeave(this.checkAndLogImpressionIfPendingOnExit),b("ghlTestUBT")(function(a){a===!0&&b("AdDelayedHiddenCheckConfiguration").setEnabled(!0)})}a.prototype.getID=function(){"use strict";return this.id};a.prototype.getConfig=function(){"use strict";return this.config};a.prototype.getPercentInViewport=function(){"use strict";var a=b("getViewportDimensions")(),c=b("getElementPosition")(this.element);return this.$1(a,c)};a.prototype.$2=function(a,c,d){__p&&__p();d===void 0&&(d=0);if(c.x<a.width&&c.x+c.width>0&&c.y<a.height&&c.y+c.height>d&&b("Style").get(this.element,"visibility")!=="hidden"&&b("Style").get(this.element,"opacity")!=="0"){var e=Math.max(c.x,0),f=Math.min(c.x+c.width,a.width);d=Math.max(c.y,d);a=Math.min(c.y+c.height,a.height);if(c.height*c.width===0)return 100;f=100*(f-e)*(a-d)/(c.height*c.width);return f}return 0};a.prototype.$1=function(a,c){"use strict";return this.config.require_horizontally_onscreen&&b("ViewableImpressionUtils").isHorizontallyOffscreen(this.element,c,a)?0:this.$2(a,c)};a.prototype.$3=function(a,c,d){"use strict";a=this.$2(a,c,d);if(a===0)return b("PercentVisible").NO_VISIBLE;else if(a<50)return b("PercentVisible").VISIBLE_0_PCT;else if(a<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};a.prototype.$4=function(a,c,d){d===void 0&&(d=0);var e=Math.max(c.y,d);c=Math.min(c.y+c.height,a.height);c=100*(c-e)/(a.height-d);if(c<50)return b("PercentVisible").VISIBLE_0_PCT;else if(c<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};a.prototype.$5=function(a,c){"use strict";__p&&__p();var d=0,e=b("ge")("pagelet_bluebar");e&&e.offsetHeight&&(d=e.offsetHeight+e.offsetTop);if(this.config.should_log_viewport_duration){e=this.$4(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewport_viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:break}}e=this.$3(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:this.emit("hidden",{id:this.getID(),token:this.getToken()});break}};a.prototype.$6=function(a,c){"use strict";if(b("Style").get(this.element,"visibility")==="hidden"||b("Style").get(this.element,"opacity")==="0")return!1;var d=c.x,e=c.y,f=c.x+c.width;c=c.y+c.height;this.topLeftInViewport=this.topLeftInViewport||d>=0&&d<=a.width&&e>=0&&e<=a.height;this.bottomRightInViewport=this.bottomRightInViewport||f>=0&&f<=a.width&&c>=0&&c<=a.height;return this.topLeftInViewport&&this.bottomRightInViewport};a.prototype.$7=function(a,c){"use strict";if(this.hasEmittedFullViewEvent)return;this.$6(a,c)&&(this.emit("full_view",{tracker:this,id:this.getID(),token:this.getToken(),fullViewType:b("FullViewType").ENTIRE_UNIT}),this.hasEmittedFullViewEvent=!0)};a.prototype.onVisible=function(event){"use strict";__p&&__p();this.isVisible=!0;var a=b("getViewportDimensions")(),c=b("getElementPosition")(this.element),d=this.$1(a,c),e=d>this.config.pixel_in_percentage;this.emit("visible",{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:d});this.config.should_log_viewability_duration&&this.$5(a,c);this.$7(a,c);if(!e){this.$8();return}this.isLogged()?this.$9():this.$10();!this.waitForLogged&&!this.waitForDelayLogged&&!this.isLogged()&&!(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())&&(this.waitForLogged=!0,this.viewableTimeout=setTimeout(function(){__p&&__p();this.waitForLogged=!1;if(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())return;var a=this.getPercentInViewport();a=a>this.config.pixel_in_percentage;if(!a){this.$11();return}if(b("AdDelayedHiddenCheckConfiguration").getEnabled()&&this.config.should_not_delay_impression!==!0){this.waitForDelayLogged=!0;a=b("AdImpressionLoggingConfig").maxHiddenCheckDelay;a=a-this.config.duration_in_ms;a<0&&(a=0);this.delayedLoggingTimeout=setTimeout(this.delayLogImpression,a)}else this.logImpression(1,!1,{}),this.$9()}.bind(this),this.config.duration_in_ms))};a.prototype.onHidden=function(){"use strict";this.emit("hidden",{id:this.getID(),token:this.getToken()}),this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged?this.logNonViewableImpression():!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible&&this.logNonViewableImpression(),this.isVisible=!1,this.waitForLogged&&(this.waitForLogged=!1,clearTimeout(this.viewableTimeout)),this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0&&(this.waitForSubsequent=!0,this.clearSubsequentTimeout=setTimeout(function(){this.waitForSubsequent=!1,this.reset(),this.isVisible&&this.onVisible()}.bind(this),this.config.subsequent_gap_in_ms)),this.$11()};a.prototype.onRemoved=function(){"use strict";this.isVisible=!1};a.prototype.getToken=function(){"use strict";return b("DataAttributeUtils").getDataAttribute(this.element,"data-xt")};a.prototype.logImpression=function(a,c,d){"use strict";__p&&__p();if(this.isLogged())return;var e=this.getToken(),f=Math.floor(Date.now()/1e3),g=this.$12(),h=Date.now()+"_"+(b("randomInt")(0,4294967295)+1);e={xt:e,isv:a,cts:f,csp:g,hba:c,etid:h};if(b("Banzai").isEnabled("xtrackable_clientview_batch")&&this.config.should_batch||this.config.vital_mode_for_ss||this.config.signal_mode_for_ss){a=this.config.vital_mode_for_ss?b("Banzai").VITAL:{};a.signal=this.config.signal_mode_for_ss;this.logWithBanzai(e,a);b("AdImpressionLoggingConfig").runBotDetection&&b("FBSiteWhiteOps").appendToWindow(h,"FACEBOOK_WEB_ADS","IMPRESSION")}else this.logWithIFrame(Object.assign(e,d))};a.prototype.logNonViewableImpression=function(){"use strict";if(this.config.nonviewableEnabled){var a=this.getToken();b("Banzai").post("xtrackable:nonviewable",{xt:a})}this.isNonViewableLogged=!0};a.prototype.isLogged=function(){"use strict";return this.iframeLogged||this.banzaiLogged};a.prototype.reset=function(){"use strict";this.iframeLogged&&(this.iframeLogged=!1),this.iframe&&(b("DOM").remove(this.iframe),this.iframe=null),this.banzaiLogged&&(this.banzaiLogged=!1),this.isNonViewableLogged=!1,this.isVisible=!1,this.waitForLogged=!1,this.waitForDelayLogged=!1,this.waitForSubsequent=!1};a.prototype.logWithBanzai=function(a,c){"use strict";this.banzaiLogged=!0,b("BrowseClientEventLogger").maybeLogClientViewEvent(a),b("Banzai").post("xtrackable:clientview_batch",a,c)};a.prototype.logWithIFrame=function(a){"use strict";this.iframeLogged=!0,this.config.is_instream_story?b("NonBlockingIFrame").loadIFrame(new(b("URI"))(this.config.impressionURL).addQueryData(a).toString()):(this.iframe=b("DOM").create("iframe",{src:new(b("URI"))(this.config.impressionURL).addQueryData(a),width:0,height:0,frameborder:0,scrolling:"no",className:"fbEmuTracking"}),this.iframe.setAttribute("aria-hidden","true"),b("DOM").appendContent(this.element,this.iframe))};a.prototype.$12=function(){"use strict";__p&&__p();var a=b("DataAttributeUtils").getDataAttribute(this.element,"data-dedupekey");if(a===null)return null;var c=this.$13();if(c===null||c.length===0)return null;var d=c.length;while(--d>=0){var e=b("DataAttributeUtils").getDataAttribute(c[d],"data-dedupekey");if(e!==null&&a===e)break}return d+1};a.prototype.$13=function(){"use strict";__p&&__p();var a=b("ge")("contentArea");if(a){var c="._5jmm";a=b("DOM").scry(a,c);return a.filter(function(a){return b("DataAttributeUtils").getDataAttribute(a,"data-dedupekey")})}else{c=b("ge")("m_newsfeed_stream");return c===null?null:c.getElementsByTagName("article")}};a.prototype.$14=function(){"use strict";return 0};a.prototype.$8=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color","#abab9a"),b("Style").set(this.element,"outline","3px solid #abab9a"))};a.prototype.$10=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color","#e4f70a"),b("Style").set(this.element,"outline","3px solid #e4f70a"))};a.prototype.$11=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color",null),b("Style").set(this.element,"outline",null))};a.prototype.$9=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color","#047515"),b("Style").set(this.element,"outline","3px solid #047515"))};b("mixInEventEmitter")(a,{visible:!0,hidden:!0,full_view:!0,viewability:!0,viewport_viewability:!0,viewability_debug:!0});e.exports=a}),null);
__d("VisibilityUnitType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED_UNIT:"feed_unit",VIEWPORT:"viewport"})}),null);
__d("ViewabilityDurationSegmentLogger",["Banzai","PercentVisible","ViewableImpressionTracker","VisibilityUnitType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=8e3;h.logFromViewableImpressionTracker=function(a){var b=new h();b.subscribeToTrackerEvents(a)};function h(){this.$1=new Map(),this.$2=new Map(),this.$3=new Map(),this.$4=new Map(),this.$5=new Map()}h.prototype.subscribeToTrackerEvents=function(a){a.addListener("viewability",this.onViewable.bind(this)),a.addListener("viewport_viewability",this.onViewport.bind(this)),a.addListener("hidden",this.onHidden.bind(this))};h.prototype.onViewable=function(event){__p&&__p();var a=event.id,c=event.percentVisible,d=Date.now(),e;switch(c){case b("PercentVisible").VISIBLE_0_PCT:c=this.$1.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_0_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$2.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));c=this.$4.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_50_PCT:c=this.$1.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_0_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$2.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$4.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_100_PCT:c=this.$1.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_0_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$2.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);c=this.$4.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_100_PCT,d,b("VisibilityUnitType").FEED_UNIT):this.$7(c,a,d);break}};h.prototype.onViewport=function(event){__p&&__p();var a=event.id,c=event.percentVisible,d=Date.now(),e;switch(c){case b("PercentVisible").VISIBLE_0_PCT:c=this.$3.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));c=this.$5.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_50_PCT:c=this.$3.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").VIEWPORT):this.$7(c,a,d);c=this.$5.get(a);c&&(e=this.$8(c,a,d,!0),this.$9(e,a));break;case b("PercentVisible").VISIBLE_100_PCT:c=this.$3.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_50_PCT,d,b("VisibilityUnitType").VIEWPORT):this.$7(c,a,d);c=this.$5.get(a);!c?this.$6(event,b("PercentVisible").VISIBLE_100_PCT,d,b("VisibilityUnitType").VIEWPORT):this.$7(c,a,d);break}};h.prototype.onHidden=function(event){var a=event.id,b=Date.now(),c=this.$1.get(a),d=this.$2.get(a),e=this.$3.get(a),f=this.$4.get(a),g=this.$5.get(a);c&&this.$9(this.$8(c,a,b,!0),a);d&&this.$9(this.$8(d,a,b,!0),a);e&&this.$9(this.$8(e,a,b,!0),a);f&&this.$9(this.$8(f,a,b,!0),a);g&&this.$9(this.$8(g,a,b,!0),a)};h.prototype.$6=function(event,a,c,d){c={token:event.token,startedTrackingTS:c,percentVisible:a,visibilityUnit:d,intervalMs:0,cumulativeMs:0,segmentIdx:0};switch(a){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(event.id,c);break;case b("PercentVisible").VISIBLE_50_PCT:d===b("VisibilityUnitType").FEED_UNIT?this.$2.set(event.id,c):this.$3.set(event.id,c);break;case b("PercentVisible").VISIBLE_100_PCT:d===b("VisibilityUnitType").FEED_UNIT?this.$4.set(event.id,c):this.$5.set(event.id,c);break}};h.prototype.$8=function(a,c,d,e){__p&&__p();d=d-a.startedTrackingTS;var f=d-a.cumulativeMs,g=a.percentVisible;f={token:a.token,startedTrackingTS:a.startedTrackingTS,percentVisible:g,visibilityUnit:a.visibilityUnit,intervalMs:f,cumulativeMs:d,segmentIdx:++a.segmentIdx};e&&(f.duration=d);switch(g){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(c,f);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2.set(c,f):this.$3.set(c,f);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4.set(c,f):this.$5.set(c,f);break}return f};h.prototype.$7=function(a,c,d){var e=a.intervalMs,f=d-a.startedTrackingTS-a.cumulativeMs;if(this.$10(e,f)){e=this.$8(a,c,d,!1);b("Banzai").post("xtrackable:viewability",e,b("Banzai").VITAL)}};h.prototype.$10=function(a,b){if(a>=g)return!1;if(a==0)return!0;if(a<1e3)return b>=1e3;a=a/1e3;b=b/1e3;return b>=2*a};h.prototype.$9=function(a,c){var d=a.percentVisible;switch(d){case b("PercentVisible").VISIBLE_0_PCT:this.$1["delete"](c);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2["delete"](c):this.$3["delete"](c);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4["delete"](c):this.$5["delete"](c);break}b("Banzai").post("xtrackable:viewability",a,b("Banzai").VITAL)};e.exports=h}),null);
__d("ViewableImpressionDurationLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";__p&&__p();g.logFromViewableImpressionTracker=function(a){var b=new g();b.subscribeToTrackerEvents(a)};function g(){this.$1=new Map()}g.prototype.subscribeToTrackerEvents=function(a){a.addListener("visible",this.onElementVisible.bind(this)),a.addListener("hidden",this.onElementHidden.bind(this))};g.prototype.onElementVisible=function(event){if(this.$1.get(event.id))return null;var a={token:event.token,startedTrackingTS:this.getTimeNow()};this.$1.set(event.id,a);return a};g.prototype.onElementHidden=function(event){var a=this.$1.get(event.id);if(!a)return!1;a.trackingDuration=this.getTimeNow()-a.startedTrackingTS;return this.sendLog(event.id)};g.prototype.sendLog=function(a){var c=this.$1.get(a);if(!c||!c.trackingDuration)return!1;b("Banzai").post("xtrackable:duration",c);this.$1["delete"](a);return!0};g.prototype.getTimeNow=function(){return parseFloat((Date.now()/1e3).toFixed(2))};e.exports=g}),null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();g.logFromViewableImpressionTracker=function(a,b){"use strict";b=new g(b);b.subscribeToTrackerEvents(a)};function g(a){"use strict";this.loggingDurationMS=a,this.trackingEntries={}}g.prototype.subscribeToTrackerEvents=function(a){"use strict";this.visibleSubscription=a.addListener("visible",this.onElementVisible,this),this.hiddenSubscription=a.addListener("hidden",this.onElementHidden,this)};g.prototype.onElementVisible=function(a){"use strict";var b=this.getCurrentTimestamp(),c=this.trackingEntries[a.id];c||(c=this.createTrackingEntry(a),this.beginTracking(a.id,c),b=c.startedTrackingTS);c.viewportProgressEvents.push({timestamp:b,percentInViewport:a.percentInViewport.toFixed(2)})};g.prototype.onElementHidden=function(a){"use strict";var b=this.getCurrentTimestamp();a=this.trackingEntries[a.id];if(!a)return;a.viewportProgressEvents.push({timestamp:b,percentInViewport:0})};g.prototype.onTrackingCompleted=function(a){"use strict";var b=this.trackingEntries[a];b.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:b.tracker.getPercentInViewport().toFixed(2)});this.$1()&&this.$2(a,b);this.logToServer(b);delete this.trackingEntries[a]};g.prototype.logToServer=function(a){"use strict";a=a;delete a.tracker;b("Banzai").post("xtrackable:heatmap",a)};g.prototype.beginTracking=function(a,b){"use strict";this.trackingEntries[a]=b,setTimeout(function(){return this.onTrackingCompleted(a)}.bind(this),this.loggingDurationMS)};g.prototype.createTrackingEntry=function(a){"use strict";return{tracker:a.tracker,token:a.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]}};g.prototype.getCurrentTimestamp=function(){"use strict";return(Date.now()/1e3).toFixed(2)};g.prototype.$1=function(){"use strict";return 0};g.prototype.$2=function(a,b){"use strict";var c="Completed tracking for id "+a+" token="+b.token+" startedTrackingTS="+b.startedTrackingTS+"\n";b.viewportProgressEvents.forEach(function(a){c+="% in view: "+a.percentInViewport+" timestamp="+a.timestamp+"\n"});!1};e.exports=g}),null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","DataAttributeUtils","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","pageID","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g="visibility_tracking",h="[data-vistracking]",i=500,j=50,k=50,l=50,m=50,n=0;function o(a){"use strict";__p&&__p();a=a||{};if(!a.bypass_banzai_check&&!b("Banzai").isEnabled(g))return;this.visibleElementInfo={};this.getDataFromConfig(a);b("Visibility").addListener(b("Visibility").VISIBLE,b("ErrorUtils").guard(function(){return this.fireEvent("browser")}.bind(this),"VisibilityTracking:visible",this));b("Visibility").addListener(b("Visibility").HIDDEN,b("ErrorUtils").guard(function(){return this.clearAllVisibleElements("browser")}.bind(this),"VisibilityTracking:hidden",this));b("ScriptPath").subscribe(b("ErrorUtils").guard(function(){return this.updateVisibleElements()}.bind(this),"VisibilityTracking:scriptPath",this));b("Banzai").subscribe(b("Banzai").SHUTDOWN,b("ErrorUtils").guard(function(){return this.onUnload()}.bind(this),"VisibilityTracking:banzaiShutdown",this));this.fireEventCallback=b("throttle").acrossTransitions(b("ErrorUtils").guard(function(event){return this.fireEvent(event)}.bind(this),"VisibilityTracking:fireEventCallback",this),this.timeout,this);this.listeners=new(b("SubscriptionsHandler"))();b("VisibilityTrackingHelper").getEventListeners(function(){return this.fireEventCallback()}.bind(this)).forEach(function(a){this.listeners.addSubscriptions(a)},this);this.extraInit&&b("ErrorUtils").applyWithGuard(this.extraInit.bind(this))}o.prototype.getDataFromConfig=function(a){"use strict";this.config=a,this.root=a.root||document.documentElement,this.selector=a.selector||h,this.visibleEventCallBack=a.visibleEventCallBack||function(){},this.timeout=a.timeout!==undefined?a.timeout:i,this.minOffsetVisibleFromBottom=a.minOffsetVisibleFromBottom!==undefined?a.minOffsetVisibleFromBottom:j,this.minOffsetVisibleFromTop=a.minOffsetVisibleFromTop!==undefined?a.minOffsetVisibleFromTop:k,this.minOffsetVisibleFromLeft=a.minOffsetVisibleFromLeft!==undefined?a.minOffsetVisibleFromLeft:l,this.minOffsetVisibleFromRight=a.minOffsetVisibleFromRight!==undefined?a.minOffsetVisibleFromRight:m,this.handleAllHiddenEvents=a.handleAllHiddenEvents!==undefined?a.handleAllHiddenEvents:!1,this.handleAllVisibleEvents=a.handleAllVisibleEvents!==undefined?a.handleAllVisibleEvents:!1,this.cacheTrackedElements=a.cacheTrackedElements!==undefined?a.cacheTrackedElements:!1};o.prototype.getAllTrackedElements=function(){"use strict";__p&&__p();if(!this.allTrackedElements){this.allTrackedElements={};var a=[];this.config.is_xtrackable?a=b("DataAttributeUtils").getXTrackableElements():this.root&&this.root.querySelectorAll&&(a=this.root.querySelectorAll(this.selector));for(var c=0;c<a.length;c++){var d=this.getElementID(a[c]);this.allTrackedElements[d.toString()]=a[c]}}return this.allTrackedElements};o.prototype.refreshAllTrackedElements=function(){"use strict";delete this.allTrackedElements;return this.getAllTrackedElements()};o.prototype.getDataToLog=function(a){"use strict";a=Object.assign(b("collectDataAttributes")(a,["gt"]).gt,{client_time:Date.now()/1e3,time_spent_id:b("pageID"),script_path:b("ScriptPath").getScriptPath()});return a};o.prototype.getElementID=function(a){"use strict";var b=a.$1;if(b)return b;a.$1=++n;return n};o.prototype.sendDataToLog=function(a){"use strict";b("BrowseClientEventLogger").maybeLogVisiblityEvent(a),b("Banzai").post(g,a)};o.prototype.isInstreamAdStoryElement=function(a){"use strict";return!1};o.prototype.fireEvent=function(a){a===void 0&&(a="default");var c=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var d in c){var e=c[d],f=b("VisibilityTrackingHelper").getViewportInfo();f=this.isVisible(e,f);!f&&(d in this.visibleElementInfo||this.handleAllHiddenEvents)?this.handleEvent(e,{name:"hidden",cause:a}):f&&(!(d in this.visibleElementInfo)||this.handleAllVisibleEvents)&&this.handleEvent(e,{name:"visible",cause:a})}this.clearUntrackedVisibleElements()};o.prototype.isVisible=function(a,c){"use strict";if(a==null)return!1;a=b("getElementPosition")(a);return a.y+a.height>=this.minOffsetVisibleFromTop&&a.y<=c.height-this.minOffsetVisibleFromBottom&&a.x+a.width>=this.minOffsetVisibleFromLeft&&a.x<=c.width-this.minOffsetVisibleFromRight};o.prototype.handleEvent=function(a,event){"use strict";__p&&__p();var c=this.getElementID(a).toString(),d=this.getDataToLog(a),e;if(event.name==="visible"){var f=Math.floor(Date.now()/1e3);e=b("pageID").concat(":",f.toString(),":",this.getElementID(a).toString());this.visibleElementInfo[c]={visibility_id:e,elem:a}}else if(event.name==="hidden"){c in this.visibleElementInfo&&(e=this.visibleElementInfo[c].visibility_id,delete this.visibleElementInfo[c]);if(event.cause==="browser")return}this.sendDataToLog(Object.assign(d,{event:event.name,visibility_id:e}))};o.prototype.clearUntrackedVisibleElements=function(){"use strict";var a=this.getAllTrackedElements();for(var b in this.visibleElementInfo)if(!(b in a)){var c=this.visibleElementInfo[b];c.elem&&this.handleEvent(c.elem,{name:"hidden",cause:"removed"})}};o.prototype.clearAllVisibleElements=function(a){a===void 0&&(a="default");var b=this.getAllTrackedElements();for(var c in b)c in this.visibleElementInfo&&this.handleEvent(b[c],{name:"hidden",cause:a});this.clearUntrackedVisibleElements()};o.prototype.updateVisibleElements=function(){"use strict";this.clearAllVisibleElements(),this.fireEvent()};o.prototype.refreshAndFireEvent=function(event){"use strict";this.refreshAllTrackedElements(),this.fireEventCallback(event)};o.prototype.onUnload=function(){"use strict";this.clearAllVisibleElements(),this.listeners&&(this.listeners.release(),this.listeners=null),this.extraCleanup&&b("ErrorUtils").applyWithGuard(this.extraCleanup.bind(this))};o.init=function(a){"use strict";return new o(a)};e.exports=o}),null);
__d("ViewableImpressionEventHandler",["DataAttributeUtils","FullViewLogger","ViewabilityDurationSegmentLogger","ViewableImpressionDurationLogger","ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=1;g=babelHelpers.inherits(a,b("VisibilityTracking"));h=g&&g.prototype;a.prototype.extraInit=function(){this.impressionTrackers={}};a.prototype.getDataFromConfig=function(a){h.getDataFromConfig.call(this,a),this.doHeatmapLogging=a.doHeatmapLogging,this.heatmapLoggingDurationMS=a.heatmapLoggingDurationMS,a.impressionURL=a.impressionURL!==undefined?a.impressionURL:"/xti.php",a.nonviewableEnabled=a.nonviewableEnabled!==undefined?a.nonviewableEnabled:!1};a.prototype.getImpressionTracking=function(a){__p&&__p();var c=this.getElementID(a),d=this.impressionTrackers[c];if(!d){var e=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);d=new(b("ViewableImpressionTracker"))(c,a,e);this.impressionTrackers[c]=d;e.log_impression_duration&&b("ViewableImpressionDurationLogger").logFromViewableImpressionTracker(d);this.doHeatmapLogging&&b("ViewableImpressionHeatmapLogger").logFromViewableImpressionTracker(d,this.heatmapLoggingDurationMS);e.should_log_full_views&&b("FullViewLogger").logFromViewableImpressionTracker(d);e.should_log_viewability_duration&&b("ViewabilityDurationSegmentLogger").logFromViewableImpressionTracker(d)}return d};a.prototype.handleEvent=function(a,event){var b=this.getImpressionTracking(a);if(!b)return;if(event.name==="visible")b.onVisible(event),this.visibleElementInfo[b.getID()]||(this.visibleElementInfo[b.getID()]={elem:a});else if(event.name==="hidden"){a=b.getConfig();event.cause==="default"||a.log_visibility_hidden_when_browser_inactive&&event.cause==="browser"?(b.onHidden(),delete this.visibleElementInfo[b.getID()]):event.cause==="removed"&&(b.onRemoved(),delete this.visibleElementInfo[b.getID()],delete this.impressionTrackers[b.getID()])}};a.prototype.isInstreamAdStoryElement=function(a){a=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);return!!a.is_instream_story};a.prototype.getConfigFromElement=function(a){return JSON.parse(b("DataAttributeUtils").getDataAttribute(a,"data-xt-vimp"))};a.prototype.getElementID=function(a){a.getAttribute("id")||a.setAttribute("id","xt_uniq_"+i++);return a.getAttribute("id")};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnitEventConstants","ErrorUtils","LitestandMessages","Run","ViewableImpressionConfig","ViewableImpressionEventHandler"],(function(a,b,c,d,e,f){a={init:function(){b("ViewableImpressionEventHandler").instance===undefined&&(b("ViewableImpressionEventHandler").instance=new(b("ViewableImpressionEventHandler"))(b("ViewableImpressionConfig")),b("ViewableImpressionEventHandler").instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED,"AdsRefreshHandler/AdsLoaded","MPPInsights/ChartView","PhotoSnowliftAds/displayUnits","WebMessengerAdsControl/adjustAds",b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT,"WebVideoChannelAds/AdsLoaded"],b("ErrorUtils").guard(function(event){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent(event)},"ViewableImpressionTracking")))),b("Run").onLoad(function(){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent()})}};e.exports=a}),null);