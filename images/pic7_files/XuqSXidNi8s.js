if (self.CavalryLogger) { CavalryLogger.start_js(["8\/Gp3"]); }

__d("NotificationCounter",["Arbiter","CrossWindowEventEmitter","DocumentTitle","JSLogger","MessengerEnvironment"],(function(a,b,c,d,e,f){__p&&__p();var g=new(b("CrossWindowEventEmitter"))("JewelBase"),h={messages:0,notifications:0,requests:0};a={init:function(){b("Arbiter").subscribe("update_title",this._handleUpdate.bind(this)),b("Arbiter").subscribe("jewel/count-updated",this._handleCountUpdate.bind(this)),g.addListener("count-updated",function(a){this._handleCountUpdate("",a)}.bind(this))},getCount:function(){__p&&__p();var a=0;for(var c in h){var d=Number(h[c]);if(typeof h[c]==="string"&&isNaN(d))return h[c];if(isNaN(d)||d<0){b("JSLogger").create("jewels").error("bad_count",{jewel:c,count:h[c]});continue}a+=d}return a},updateTitle:function(){if(b("MessengerEnvironment").messengerui)return;var a=this.getCount();b("DocumentTitle").badge(a)},_handleCountUpdate:function(a,b){h[b.jewel]=b.count,this.updateTitle()},_handleUpdate:function(a,b){this.updateTitle()}};e.exports=a}),null);
__d("NotificationJewelController",["Arbiter","Bootloader","Event","EventProfiler","FunnelLogger","NotificationConstants","NotificationCounter","NotificationJewelFunnelLoggingConstants","NotificationListConfig","NotificationSeenState","NotificationStore","NotificationUpdates","XWorkHubController","clearTimeout","createObjectFrom","curry","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType,h=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,i=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME,j=0,k=!1,l=!1,m=null;function n(a){var c=b("NotificationSeenState").getUnseenCount();b("Arbiter").inform("jewel/count-updated",{jewel:a,count:c,animation:k&&c>0?"heart":"none"},"state")}function a(a,c){"use strict";__p&&__p();var d=c.badgeAnimationData,e=c.endPoint,f=c.list;c.startTime;c=c.unseenNotifs;e&&b("NotificationStore").registerEndpoint({endpointControllerName:e});b("NotificationCounter").init();var l=b("Event").listen(a.getRoot(),"mouseover",function(){b("FunnelLogger").startFunnel(i),l&&l.remove(),l=null,b("FunnelLogger").appendAction(i,h.MOUSE_OVER_ON_JEWEL),this.eagerRender(f)}.bind(this));b("NotificationListConfig").eagerRenderJewel&&this.eagerRender(f);var o=null;b("Event").listen(a.getRoot(),"mouseover",function(){o=b("setTimeoutAcrossTransitions")(function(){b("Bootloader").loadModules(["QE2Logger"],function(a){a.logExposureForUser("www_jewel_tooltip_experiment")},"NotificationJewelController"),o=null},500)});b("Event").listen(a.getRoot(),"mouseout",function(){o&&b("clearTimeout")(o)});b("gkx")("678265")&&b("Event").listen(a.getButton(),"click",function(a){if(a.metaKey||a.ctrlKey){a=b("XWorkHubController").getURIBuilder().setString("ref","jewel").setString("tab","all").getURI();window.open(a,"notification_hub_tab_identifier")}});var p=!1,q=a.subscribe("opened",function(){p||(p=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstNotificationJewelOpen")),m&&m(),q&&q.unsubscribe(),q=null,f.open()}),r=f.pause.bind(f);a.subscribe("opened",function(){setTimeout(r,0),n(a.name),b("Bootloader").loadModules(["NotificationVPVs"],function(a){return a.clearImpressions()},"NotificationJewelController"),b("Arbiter").inform("notificationJewel/opened")});a.subscribe("closed",function(){f.unpause(),n(a.name),b("Arbiter").inform("notificationJewel/closed"),f.setFlyoutOpenState(!1)});a.subscribe("user-open",function(event,a){f.setFlyoutOpenState(!0)});a.isOpen()&&f.setFlyoutOpenState(!0);(b("NotificationListConfig").eagerOnBadgeUpdate||b("NotificationListConfig").eagerOnBadgeIncreaseFromZero&&a.initialCount===0)&&a.subscribe("updated",function(b,c){c&&c.count>a.initialCount&&this.eagerRender(f)}.bind(this));b("NotificationUpdates").subscribe("seen-state-updated",b("curry")(n,a.name));d&&(d.logWithQEUniverse&&b("Bootloader").loadModules(["QE2Logger"],function(a){return a.logExposureForUser(d.logWithQEUniverse)},"NotificationJewelController"),d.injectWithAnimation&&b("Bootloader").loadModules(["RelationshipDelightsBadge"],function(b){return b.inject(a,d.injectWithAnimation)},"NotificationJewelController"),b("Bootloader").loadModules(["RelationshipDelightUtils"],function(a){b("NotificationUpdates").subscribe("update-notifications",function(b,c){b=c.nodes;c=c.payloadsource;b=b&&b.length?b.filter(a.shouldHeartBadge):null;b&&b.length?(k=!0,d.injectWithAnimation&&((c===g.INITIAL_LOAD||c===g.INITIAL_SEND)&&a.logBadgeAnimation(b[0].alert_id))):k=!1}),d.logWithAlertID&&a.logBadgeAnimation(d.logWithAlertID)},"NotificationJewelController"));b("NotificationUpdates").handleUpdate(g.INITIAL_LOAD,{seenState:b("createObjectFrom")(c,j)});n(a.name)}a.prototype.eagerRender=function(a){"use strict";l||(l=!0,m=b("EventProfiler").notifyRunningEagerInteraction(["Notifications_Jewel_Button"],"click"),a.open())};e.exports=a}),null);
__d("NotificationBucketUtils",["JSResource"],(function(a,b,c,d,e,f){"use strict";a={getCustomModuleForType:function(a){switch(a){case"TICKER":return b("JSResource")("NotificationBucketTicker.react").__setRef("NotificationBucketUtils");default:return null}}};e.exports=a}),null);
__d("NotificationAsyncWrapper",["NotificationListConfig","React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationListConfig").reactFiberAsyncNotifications?b("React").unstable_ConcurrentMode:b("React").Fragment}),null);
__d("NotificationJewelListBucketHeader.react",["cx","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("React").createElement("div",{className:"_fyy"},a.title.toUpperCase())}e.exports=a}),null);
__d("NotificationBucketGeneric.react",["cx","NotificationJewelListBucketHeader.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.title,d=a.ids,e=a.listRenderer;a=a.startIndex;if(d.length===0)return null;e=e(d,a);return b("React").createElement("div",{className:"_32hm"},c?b("React").createElement(b("NotificationJewelListBucketHeader.react"),{title:c}):null,b("React").createElement("ul",null,e))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("NotificationBucket.react",["cx","BootloadedComponent.react","NotificationBucketGeneric.react","NotificationBucketUtils","NotificationJewelListBucketHeader.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.$1=function(){var a=this.props.bucket,c=a.bucketType;a=a.title;return b("React").createElement("div",null,b("React").createElement(b("NotificationJewelListBucketHeader.react"),{title:a,bucketType:c}),b("React").createElement(b("XUISpinner.react"),{className:"_1e00"}))};a.prototype.render=function(){var a=this.props,c=a.bucket,d=a.listRenderer;a=a.startIndex;var e=c.bucketType;e=b("NotificationBucketUtils").getCustomModuleForType(e);return!e?b("React").createElement(b("NotificationBucketGeneric.react"),babelHelpers["extends"]({},c,{listRenderer:d,startIndex:a})):b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:e,bootloadPlaceholder:this.$1()},c))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("WebNotificationsBottomCollisionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={vc:!0};e.exports=a}),null);
__d("NotificationJewelList.react",["ix","cx","fbt","AbstractButton.react","Animation","ErrorBoundary.react","Event","FunnelLogger","Image.react","JewelLogger","LogicalGrid.react","NotificationBucket.react","NotificationJewelFunnelLoggingConstants","NotificationListConfig","NotificationListItem.react","NotificationListPropTypes","NotificationVPVs","NotifTestIDs","React","ReactDOM","ScrollableArea.react","SubscriptionsHandler","TimeSlice","TrackingNodes","Vector","WebNotificationsBottomCollisionsTypedLogger","XUISpinner.react","asset","debounce","getObjectValues","gkx","isEmpty","performanceNowNoFallback","throttle"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,l=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME;c=b("NotificationListConfig").numStoriesFromEndBeforeAFetchIsTriggered;var m=160,n=530,o=61,p=Math.ceil(o*c),q=430,r;function s(a){r!=a&&(new(b("WebNotificationsBottomCollisionsTypedLogger"))().log(),r=a)}d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={lastMeasuredHeight:null},this.$2=[],this.$6=new(b("SubscriptionsHandler"))(),this.$7=!1,this.$8=!1,this.$11=function(){__p&&__p();if(!this.$3||!this.$5)return;var a=b("ReactDOM").findDOMNode(this.$3);if(!a)return;var c=b("ReactDOM").findDOMNode(this.$5);if(!c)return;var d=b("NotificationVPVs").getValidatedRectangle(c);if(this.props.afterScroll){var e=function(){this.props.afterScroll(this.$9(),a,d)}.bind(this);c=b("Vector").getElementDimensions(c).y;var f=this.$5&&this.$5.getArea();f&&f.getContentHeight()>0&&this.$7===!1&&b("performanceNowNoFallback")&&b("getObjectValues")(this.props.notifs).length>0&&(this.$7=!0,b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_population_initial",timestamp:b("performanceNowNoFallback")()}));f&&c>0&&f.getContentHeight()>=c?((b("gkx")("678282")||this.$8===!1)&&b("performanceNowNoFallback")&&(this.$8=!0,b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_populated",timestamp:b("performanceNowNoFallback")()})),b("TimeSlice").guard(e,"NotificationJewelList afterScrollCallback",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()):e()}}.bind(this),this.$12=function(){return b("getObjectValues")(this.props.notifs).map(function(a){return JSON.stringify(a)})}.bind(this),this.$16=function(a,c){var d=this.$13(c);if(a.ids&&a.ids.length){var e=this.props.notifs,f=a.ids.filter(function(a){return!!e[a]});if(f.length===0)return null}return b("React").createElement("li",{key:c},b("React").createElement(b("NotificationBucket.react"),{bucket:a,listRenderer:this.$17,startIndex:d}))}.bind(this),this.$17=function(a,b){b=b||0;return a.map(function(a,c){a=this.props.notifs[a];if(!a)return null;c=c+b;return this.$18(a,c,c)}.bind(this))}.bind(this),this.$19=function(){this.setState(function(a){return babelHelpers["extends"]({},a,{lastMeasuredHeight:this.$10()})}.bind(this))}.bind(this),this.$20=function(){var a=b("debounce")(this.$19);this.$6.addSubscriptions(a);return a}.bind(this)(),this.$23=function(){this.props.onResetRetryCount&&this.props.onResetRetryCount()}.bind(this),this.$24=function(){b("FunnelLogger").appendAction(l,k.SCROLL_TO_FETCH),this.$11()}.bind(this),this.$25=b("throttle").acrossTransitionsWithBlocking(this.$24),c}a.prototype.$9=function(){"use strict";__p&&__p();if(!this.$4||!this.$5)return!1;var a=b("ReactDOM").findDOMNode(this.$5);if(!a)return!1;var c=b("ReactDOM").findDOMNode(this.$4);if(!c)return!1;var d=b("Vector").getElementDimensions(a).y;if(d===0)return!1;a=b("Vector").getElementPosition(a).y+d;d=b("Vector").getElementPosition(c).y;c=this.$5&&this.$5.getArea();c&&c.getScrollTop()>0&&d<a&&s(b("getObjectValues")(this.props.notifs).length);return d-p<a};a.prototype.$10=function(){"use strict";var a=b("Vector").getViewportDimensions().y;a=Math.min(this.props.maxHeight||n,a-m);return a};a.prototype.$13=function(a){"use strict";return this.$2.slice(0,a).reduce(function(a,b){return a+b},0)};a.prototype.$14=function(a){"use strict";this.$2=a?a.map(function(a){return a.ids.length}):[]};a.prototype.$15=function(){"use strict";return!this.props.buckets?null:this.props.buckets.map(this.$16)};a.prototype.$18=function(a,c,d){"use strict";var e=a.alert_id;return b("React").createElement(b("ErrorBoundary.react"),{key:e},b("React").createElement(b("NotificationListItem.react"),{getDebugData:this.$12,isRead:this.props.readState[e],onChevronHide:this.props.onChevronHide,onChevronShow:this.props.onChevronShow,onClick:this.props.onClick,onRead:this.props.onRead,parent:this,paused:this.props.paused,row:c,rowIndex:d,shortenTimestamp:this.props.shortenTimestamp,sourceView:this.props.sourceView,target:this.props.target,visible:!this.props.hiddenState[e],notification:a}))};a.prototype.$21=function(a){"use strict";this.props.onNumNotificationsViewableChange&&this.props.onNumNotificationsViewableChange(a/o)};a.prototype.UNSAFE_componentWillMount=function(){"use strict";this.$14(this.props.buckets),this.$6.addSubscriptions(b("Event").listen(window,"resize",this.$20)),this.$19()};a.prototype.componentDidMount=function(){"use strict";var a=this.state.lastMeasuredHeight;a!=null&&this.$21(a);b("performanceNowNoFallback")&&b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_did_mount",timestamp:b("performanceNowNoFallback")()})};a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";if(a.buckets===this.props.buckets)return;this.$14(a.buckets)};a.prototype.componentDidUpdate=function(a,c){"use strict";__p&&__p();if(this.props.paused&&!a.paused&&(this.props.shouldScroll&&this.$5)){a=this.$5.getArea();a&&a.scrollToTop(!1)}this.props.retryLimitReached&&b("JewelLogger").logJewelFail();a=this.state.lastMeasuredHeight;if(a!=null&&a!==c.lastMeasuredHeight){this.$21(a);this.$1&&(this.$1.stop(),delete this.$1);if(!b("isEmpty")(this.props.notifs)){c=b("ReactDOM").findDOMNode(this.$5);c&&(this.$1=new(b("Animation"))(c).to("height",a+"px").duration(100).go())}}var d=setTimeout(this.$11,0);this.$6.addSubscriptions({remove:function(){clearTimeout(d)}})};a.prototype.componentWillUnmount=function(){"use strict";this.$6.release(),this.$1&&(this.$1.stop(),delete this.$1)};a.prototype.$22=function(a,b){"use strict";return b.indexOf(a)};a.prototype.$26=function(){"use strict";if(this.props.buckets&&this.props.buckets.length)return this.$15();var a=b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(a){return a.alert_id});return b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(b,c){var d=b.alert_id;d=this.$22(d,a);return this.$18(b,d,c)}.bind(this))};a.prototype.render=function(){"use strict";__p&&__p();var a=this.props.notifs,c=null,d=null,e=q,f=null,h=b("React").createElement("ul",{"data-ft":b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.NOTIFICATION_JEWEL),"data-gt":this.props.tracking,"data-testid":b("NotifTestIDs").REACT_NOTIF_LIST});!b("isEmpty")(a)?(c=b("React").createElement(b("LogicalGrid.react"),{ref:function(a){return this.$3=a}.bind(this),component:h},this.$26()),d=this.state.lastMeasuredHeight):this.props.canFetchMore||(c=b("React").createElement("div",{className:"_572e","data-testid":b("NotifTestIDs").REACT_NOTIF_LIST},i._("Pas de nouvelle notification")));this.props.canFetchMore&&(this.props.retryLimitReached&&this.props.onResetRetryCount!=null?f=b("React").createElement(b("AbstractButton.react"),{className:"_3heb","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":i._("Un probl\u00e8me temporaire a emp\u00each\u00e9 le chargement de vos notifications. Cliquez pour r\u00e9essayer."),"data-tooltip-delay":!0,image:b("React").createElement(b("Image.react"),{className:"_3hec",src:g("458300")}),label:i._("R\u00e9essayer"),labelIsHidden:!0,onClick:this.$23}):f=b("React").createElement(b("XUISpinner.react"),{ref:function(a){return this.$4=a}.bind(this),paused:!this.props.currentlyFetching,className:"jewelLoading"}));a=null;if(this.props.upsell){h=this.props.upsell.module;a=b("React").createElement(h,this.props.upsell.props)}h="_50-t"+(this.props.showingChevron?" _2iy1":"");e=b("React").createElement(b("ScrollableArea.react"),{ref:function(a){return this.$5=a}.bind(this),width:e,fade:!0,persistent:!0,onScroll:this.$25},c,f);return b("React").createElement("div",{style:d?{height:d+"px"}:{},className:h},e,a)};a.defaultProps={retryLimitExceeded:!1};a.propTypes=b("NotificationListPropTypes");e.exports=a}),null);