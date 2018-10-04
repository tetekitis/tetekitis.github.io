if (self.CavalryLogger) { CavalryLogger.start_js(["C0MZe"]); }

__d("ChatOpenTab",["csx","Bootloader","ContextualThing","CurrentUser","Event","MercuryIDs","MercuryParticipantTypes","Parent","WorkplaceChatHelper","gkx","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null;b("requireWeak")("FantaTabsReactApp",function(a){return h=a});b("requireWeak")("FantaTabsSlimApp",function(a){return h=a});function i(a,c,d,e){b("Event").listen(a,"click",function(f){(l.canOpenTab()||b("CurrentUser").isWorkUser()&&b("WorkplaceChatHelper").suppressChatIfActiveOnDesktop()&&b("gkx")("678256"))&&(e(c,d),a.removeAttribute("ajaxify"),a.removeAttribute("rel"),f.preventDefault())})}function j(a,c,d,e){b("Event").listen(a,"click",function(a){l.canOpenTab()&&e(c,d)})}function k(a){a=b("ContextualThing").getContext(a);return a&&b("Parent").bySelector(a,"._3qw")!==null}var l={canOpenTab:function(){return h&&!h.isHidden()},listenOpenEmptyTabDEPRECATED:function(a,b){i(a,null,b,this._loadAndOpenEmptyFantaTab)},listenOpenThreadDEPRECATED:function(a,b,c){i(a,b,c,function(a,b){return this.loadAndOpenFantaTab(a,b,c)}.bind(this))},listenOpenUserTabDEPRECATED:function(a,c,d){k(a)||i(a,c,d,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").USER,d)}.bind(this))},listenOpenUserTabPersistentEventDEPRECATED:function(a,c,d){k(a)||j(a,c,d,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").USER,d)}.bind(this))},listenOpenPageTabDEPRECATED:function(a,c,d,e){k(a)||i(a,c,e,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").PAGE,e)}.bind(this))},listenOpenPageTabPersistentEventDEPRECATED:function(a,c,d,e){k(a)||j(a,c,e,function(a){return this.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").PAGE,e)}.bind(this))},loadAndOpenFantaTab:function(a,c,d){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions"],function(e,f){if(c===b("MercuryParticipantTypes").USER||c===b("MercuryParticipantTypes").PAGE){var g=b("MercuryIDs").getThreadIDFromUserID(a);f.openTab(g,[d]);e.logUserClickOpen(d,a)}else f.openTab(a,[d]),e.logClickOpen(d,a)},"ChatOpenTab")},_loadAndOpenEmptyFantaTab:function(){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions","MessengerState.bs"],function(a,c,d){d=d.createNewLocalThreadGenerateID(b("CurrentUser").getID());c.openNewMessageTab(d,"jewel_new_message");a.logClickOpen("EmptyTab")},"ChatOpenTab")}};e.exports=l}),null);
__d("QuickLogConfigHelper",["QuickLogConfig"],(function(a,b,c,d,e,f){a.prototype.getEventDetails=function(a){"use strict";var c=null;b("QuickLogConfig").qpl_events?c=b("QuickLogConfig").qpl_events[a]:b("QuickLogConfig").qpl_events_static&&(c=b("QuickLogConfig").qpl_events_static[a]);return c};function a(){"use strict"}e.exports=new a()}),null);
__d("QuickPerformanceLoggerBase",["Banzai","Bootloader","Env","PerfXSharedFields","QuickLogConfig","QuickLogConfigHelper","Random","performanceAbsoluteNow","performanceNavigationStart","requireCond","cr:682175"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("cr:682175").v,h=b("performanceAbsoluteNow")();function a(a){a===void 0&&(a={}),this.$1={},this.$2={},this.$3=100,this.loomProviderId="QPL",this.$4=a,g&&g.addProvider(this)}a.prototype.$6=function(a,c){if(b("QuickLogConfig").killswitch)return null;a=this.$1[a];if(!a)return null;a=a[c];return!a?null:a};a.prototype.markerStart=function(a,c,d){__p&&__p();c===void 0&&(c=0);d===void 0&&(d=this.currentTimestamp());if(b("QuickLogConfig").killswitch)return;var e=b("QuickLogConfigHelper").getEventDetails(a);if(!e)return;if(g&&!this.$5){var f=a+"_"+c,h=new Set(["QPL"]);g.startTrace(f,h)}this.$5&&this.$5.buffer.addEvent({type:"QPL_START",action:"START",markerId:a,instanceKey:c},d);f=this.$2[a]||e.sampleRate||this.$3;if(!b("Env").enable_qplinspector&&!b("Random").coinflip(f))return;h=this.$1[a];h||(this.$1[a]={});this.$1[a][c]={timestamp:d,sampleRate:f,points:{}};e=this.$4.onMarkerStart;e&&e(a,c,d)};a.prototype.markerStartFromNavStart=function(a,c){c===void 0&&(c=0);var d=b("performanceNavigationStart")();this.markerStart(a,c,d);if(b("performanceNavigationStart").isPolyfilled){d=this.$6(a,c);d&&(d.timestampIsApproximate=!0)}};a.prototype.annotateMarkerString=function(a,b,c,d){d===void 0&&(d=0);var e=this.$5;e&&e.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c});e=this.$6(a,d);if(!e)return;a=e.annotations||{};a[b]=c;e.annotations=a};a.prototype.annotateMarkerStringArray=function(a,b,c,d){d===void 0&&(d=0);var e=this.$5;e&&e.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c});e=this.$6(a,d);if(!e)return;a=e.annotationsStringArray||{};a[b]=c;e.annotationsStringArray=a};a.prototype.annotateMarkerInt=function(a,b,c,d){d===void 0&&(d=0);var e=this.$5;e&&e.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c});e=this.$6(a,d);if(!e)return;a=e.annotationsInt||{};a[b]=c;e.annotationsInt=a};a.prototype.annotateMarkerIntArray=function(a,b,c,d){d===void 0&&(d=0);var e=this.$5;e&&e.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c});e=this.$6(a,d);if(!e)return;a=e.annotationsIntArray||{};a[b]=c;e.annotationsIntArray=a};a.prototype.annotateMarkerDouble=function(a,b,c,d){d===void 0&&(d=0);var e=this.$5;e&&e.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c});e=this.$6(a,d);if(!e)return;a=e.annotationsDouble||{};a[b]=c;e.annotationsDouble=a};a.prototype.annotateMarkerDoubleArray=function(a,b,c,d){d===void 0&&(d=0);var e=this.$5;e&&e.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c});e=this.$6(a,d);if(!e)return;a=e.annotationsDoubleArray||{};a[b]=c;e.annotationsDoubleArray=a};a.prototype.markerPoint=function(a,b,c,d,e){d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());a=this.$6(a,d);if(!a)return;a.points[b]={data:c,timeSinceStart:e-a.timestamp}};a.prototype.markerEnd=function(a,c,d,e){__p&&__p();d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());var f=Date.now(),i=b("QuickLogConfigHelper").getEventDetails(a);if(!i)return;var j=this.$5;if(j){j.buffer.addEvent({type:"QPL_END",action:c,markerId:a,instanceKey:d},e);var k=a+"_"+d;g&&j.triggerId===k&&g.endTraceWithTimeout(k,3e4)}j=this.$6(a,d);if(!j)return;k=this.$4.onMarkerEnd;k&&k(a,d,e);k=e-j.timestamp;f=f-k;var l=j.points;this.$7({event_is_intermediate_marker:"false",instance_id:d,quicklog_module:i.moduleName,quicklog_event:i.name,quicklog_action:c,sample_rate:j.sampleRate,trace_tags:"",value:j.timestampIsApproximate?null:k,annotations:j.annotations,annotations_double:j.annotationsDouble,annotations_double_array:j.annotationsDoubleArray,annotations_int:j.annotationsInt,annotations_int_array:j.annotationsIntArray,annotations_string_array:j.annotationsStringArray,points:Object.keys(l).map(function(a){return{data:l[a].data,name:a,timeSinceStart:l[a].timeSinceStart}}),metadata:{application_analytics:{time_since_qpl_module_init:e-h}}},f);delete this.$1[a][d]};a.prototype.markerDrop=function(a,b){b===void 0&&(b=0);a=this.$1[a];a&&delete a[b]};a.prototype.dropAllMarkers=function(){this.$1={}};a.prototype.setAlwaysOnSampleRate=function(a,b){this.$2[a]=b};a.prototype.setSampleRateForInstance=function(a,b,c){c===void 0&&(c=0);a=this.$1[a][c];a&&(a.sampleRate=b)};a.prototype.currentTimestamp=function(){return b("performanceAbsoluteNow")()};a.prototype.$7=function(event,a){event=this.$8(event);var c=this.$9(event,a);b("Env").enable_qplinspector&&b("Bootloader").loadModules(["QPLInspector"],function(a){a.appendLog(c)},"QuickPerformanceLoggerBase");b("Banzai").post("perf",c)};a.prototype.$8=function(event){var a=b("PerfXSharedFields").getCommonData();event.metadata=babelHelpers["extends"]({},event.metadata,{memory_stats:{total_mem:a.ram_gb?a.ram_gb*1073741824:null},network_stats:{downlink_megabits:a.downlink_megabits,network_subtype:a.effective_connection_type,rtt_ms:a.rtt_ms}});return event};a.prototype.$9=function(event,a){a=Math.floor(a/1e3);return{appversion:"0 (web)",clienttime:a,rawclienttime:a,deviceid:"0",extra:event}};a.prototype.loomTraceDidBegin=function(a){this.$5=a};a.prototype.loomTraceWillEnd=function(){this.$5=null};e.exports=a}),null);
__d("QuickPerformanceLoggerImpl",["EventProfiler","QuickLogConfig","QuickPerformanceLoggerBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={},i={onMarkerStart:function(a,c,d){var e=b("QuickLogConfig").qpl_to_interaction[a];if(e){a=a+" : "+c;h[a]=b("EventProfiler").markManualStart([e.name],e.eventType,d)}},onMarkerEnd:function(a,b,c){a=a+" : "+b;h[a]&&h[a].markManualEnd(c)}};c=babelHelpers.inherits(a,b("QuickPerformanceLoggerBase"));g=c&&c.prototype;function a(){g.constructor.call(this,i)}e.exports=new a()}),null);
__d("XRelayBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/relay/bootload/",{component:{type:"String",required:!0},params:{type:"String",required:!0},route:{type:"String",required:!0},uri:{type:"String",required:!0}})}),null);