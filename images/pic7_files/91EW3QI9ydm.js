if (self.CavalryLogger) { CavalryLogger.start_js(["IvESz"]); }

__d("FBNumberInput.react",["Input","React","debounce","intlNumUtils","joinClasses"],(function(a,b,c,d,e,f){__p&&__p();var g,h=200;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);g=d&&d.prototype;function a(){"use strict";__p&&__p();g.constructor.call(this),this.$1=function(a){a!==null?(a=this.props.nonnegative?Math.abs(a):a,this.props.minValue!=null&&a<this.props.minValue?a=this.props.minValue:this.props.maxValue!=null&&a>this.props.maxValue&&(a=this.props.maxValue)):this.props.defaultValue!=null&&(a=this.props.defaultValue);return a}.bind(this),this.$2=function(a){a=b("intlNumUtils").parseNumber(a);this.props.onlyIntegers&&(a=Math.trunc(a));return a}.bind(this),this.$3=b("debounce")(function(a){a=this.$2(b("Input").getValue(a));a===this.$1(a)&&this.props.onValueChange(a)}.bind(this),h),this.$4=function(a){return this.props.formatNumber?b("intlNumUtils").formatNumberWithThousandDelimiters(a,0):""+a}.bind(this),this.$5=function(event){this.setState({focused:!1});var a=this.$1(this.$2(b("Input").getValue(event.target))),c=a!==null?this.$4(a):"";b("Input").setValue(event.target,c);this.props.triggerCallbackOnChange&&this.$3.reset();this.props.onValueChange(a)}.bind(this),this.$6=function(event){this.setState({focused:!0})}.bind(this),this.$7=function(event){var a=this.props,b=a.onChange;a=a.triggerCallbackOnChange;a?this.$3(event.target):b&&b(event)}.bind(this),this.state={focused:!1}}a.prototype.render=function(){"use strict";var a=this.props,c=a.value,d=a.className;a=babelHelpers.objectWithoutProperties(a,["value","className"]);c&&(c=this.$4(c));return b("React").createElement("input",babelHelpers["extends"]({},a,{className:b("joinClasses")(d,"inputtext"),type:"text",ref:"fb_number_input",defaultValue:c,value:this.state.focused?undefined:c,onBlur:this.$5,onFocus:this.$6,onChange:this.$7}))};a.propTypes={nonnegative:c.bool,onValueChange:c.func.isRequired,value:c.number,defaultValue:c.number,minValue:c.number,maxValue:c.number,placeholder:c.string,formatNumber:c.bool,onlyIntegers:c.bool,triggerCallbackOnChange:c.bool};e.exports=a}),null);
__d("FBOverlayBase.react",["React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";return b("React").Children.only(this.props.children)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("FBOverlayContainer.react",["cx","invariant","FBOverlayBase.react","FBOverlayElement.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_23n-")}),this.props.children)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={children:function(a,c){__p&&__p();a=a[c];var d=0;b("React").Children.forEach(a,function(a){if(a===null||a===undefined)return;switch(a.type){case b("FBOverlayBase.react"):d++;break;case b("FBOverlayElement.react"):break;default:h(0,435)}});d===1||h(0,436)}};e.exports=a}),null);
__d("GridInputLabel.react",["cx","invariant","Grid.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("Grid.react").GridItem;c=b("React").PropTypes;var k=0;function l(){return"js_grid_input_label_"+k++}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";this.props.children.length===2||h(0,143);var a=this.props.children[0],c=this.props.children[1],d=a.type==="input";a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"uiGridInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||l()});c=b("React").cloneElement(c,{className:b("joinClasses")(c.props.className,"uiInputLabelLabel"),htmlFor:a.props.id});d="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d)}),b("React").createElement(b("Grid.react"),{cols:2},b("React").createElement(j,null,a),b("React").createElement(j,null,c)))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={display:c.oneOf(["block","inline"])};a.defaultProps={display:"block"};e.exports=a}),null);
__d("InputLabel.react",["cx","invariant","HelpLink.react","React","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){__p&&__p();var a,c,d=this.props.children;Array.isArray(d)?(this.props.children.length===2||h(0,691),a=d[0],c=d[1]):a=d;d=a.type==="input";a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"uiInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||b("uniqueID")()});var e,f=this.props,g=f.label,i=f.helpText;f=babelHelpers.objectWithoutProperties(f,["label","helpText"]);if(c)e=b("React").cloneElement(c,{className:b("joinClasses")(this.props.labelClassName,this.props.flipped?"uiInputLabelLabelFlipped":"uiInputLabelLabel"),htmlFor:a.props.id});else{i=i?b("React").createElement(b("HelpLink.react"),{tooltip:i}):null;e=b("React").createElement("label",{className:b("joinClasses")(this.props.labelClassName,this.props.flipped?"uiInputLabelLabelFlipped":"uiInputLabelLabel"),htmlFor:a.props.id},g,i)}g="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").createElement("div",babelHelpers["extends"]({},f,{className:b("joinClasses")(this.props.className,g)}),this.props.flipped?e:a,this.props.flipped?a:e)};function a(){i.apply(this,arguments)}a.propTypes={display:c.oneOf(["block","inline"])};a.defaultProps={display:"block"};e.exports=a}),null);
__d("InputLabelLabel_DEPRECATED.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props,c=a.children;a=babelHelpers.objectWithoutProperties(a,["children"]);return b("React").createElement("label",a,c)};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("InputLabel_DEPRECATED.react",["cx","invariant","React","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";this.props.children.length===2||h(0,5084);var a=this.props.children[0],c=this.props.children[1],d=a.type==="input";a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"uiInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||b("uniqueID")()});c=b("React").cloneElement(c,{className:b("joinClasses")(c.props.className,"uiInputLabelLabel"),htmlFor:a.props.id});d="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d)}),a,c)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={display:c.oneOf(["block","inline"])};a.defaultProps={display:"block"};e.exports=a}),null);
__d("ContextualDialog.react",["ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f){a=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({displayName:"ReactContextualDialog"}));e.exports=a}),null);
__d("Token.react",["cx","fbt","CloseButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=null;this.props.name&&(a=[b("React").createElement("input",{type:"hidden",name:this.props.name+"[]",value:this.props.value}),b("React").createElement("input",{type:"hidden",name:"text_"+this.props.name+"[]",value:this.props.label})]);var c=null,d=h._("Retirer {item}",[h._param("item",this.props.label)]);this.props.removable&&(c=b("React").createElement(b("CloseButton.react"),{ariaLabel:d,className:"remove",size:"small",onClick:this.props.onRemove}));d="uiToken"+(this.props.removable?" removable":"");return b("React").createElement("span",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d)}),b("React").createElement("span",{className:"uiTokenText"},this.props.label),a,c)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={name:c.string,label:c.string.isRequired,value:c.string,removable:c.bool,onRemove:c.func};e.exports=a}),null);
__d("XUIOverlayButton.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="_51tl selected";return b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,a)}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIRadioInput.react",["cx","invariant","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";!this.props.children||this.props.children.length===0||h(0,1138);var a=b("joinClasses")(this.props.className,"_55sh"),c=babelHelpers["extends"]({},this.props,{className:null});c=b("React").createElement("input",babelHelpers["extends"]({},c,{type:"radio"}),undefined);return b("React").createElement("label",{className:a,"data-testid":this.props.labelDataTestID},c,b("React").createElement("span",null))};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("XUIRadioListItem.react",["cx","GridInputLabel.react","InputLabel.react","React","VirtualCursorStatus","KeyStatus","XUIRadioInput.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i=b("VirtualCursorStatus").isVirtualCursorTriggered,j=b("KeyStatus").isKeyDown;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={showFocusRing:!1},this.$1=function(){this.setState({showFocusRing:!1})}.bind(this),this.$2=function(){(j()||i())&&this.setState({showFocusRing:!0})}.bind(this),this.$3=function(event){this.props.onSelect&&this.props.onSelect(event.target.value)}.bind(this),b}a.prototype.render=function(){var a=this.props.selectedValue===this.props.value,c=!!this.props.disabled,d=this.props.centered?b("GridInputLabel.react"):b("InputLabel.react");return b("React").createElement("li",{"aria-checked":a,"aria-disabled":c,className:b("joinClasses")(this.props.className,this.state.showFocusRing?"":"_1az7"),onBlur:this.$1,onFocus:this.$2,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:"radio",tabIndex:this.props.tabIndex},b("React").createElement(d,{"aria-label":this.props["aria-label"],"data-hover":this.props["data-hover"],"data-testid":this.props["data-testid"],"data-tooltip-content":this.props["data-tooltip-content"],"data-tooltip-position":this.props["data-tooltip-position"],display:"inline"},b("React").createElement(b("XUIRadioInput.react"),{checked:a,disabled:c,name:this.props.name,onChange:this.$3,tabIndex:-1,value:this.props.value,labelDataTestID:this.props.inputLabelTestID}),b("React").createElement("label",null,this.props.children)))};a.defaultProps={centered:!1,disabled:!1};a.propTypes={centered:c.bool,"data-testid":c.string,disabled:c.bool,inputLabelTestID:c.string,name:c.string,onKeyDown:c.func,onSelect:c.func,selectedValue:c.any,setupRadioRef:c.func,tabIndex:c.number,value:c.any};e.exports=a}),null);
__d("XUIRadioList.react",["Focus","React","RTLKeys","XUIRadioListItem.react"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$4=function(a){__p&&__p();return function(event){__p&&__p();switch(event.keyCode){case b("RTLKeys").UP:case b("RTLKeys").getLeft():event.preventDefault();this.$3(a-1);break;case b("RTLKeys").DOWN:case b("RTLKeys").getRight():event.preventDefault();this.$3(a+1);break;case b("RTLKeys").SPACE:event.preventDefault();this.$3(a);break}}.bind(this)}.bind(this),c}a.prototype.UNSAFE_componentWillMount=function(){"use strict";this.$1=new Map(),this.$2=new Map()};a.prototype.$3=function(a){"use strict";a=a;a>=this.$1.size?a=0:a<0&&(a=this.$1.size-1);var c=this.$1.get(a);a=this.$2.get(a);if(!c||!a)return;c.props.disabled||a.getElementsByTagName("input")[0].click();b("Focus").set(a)};a.prototype.render=function(){"use strict";var a=b("React").Children.map(this.props.children,function(a){return a?a.props.value:null}).some(function(a){return a===this.props.selectedValue}.bind(this)),c=b("React").Children.map(this.props.children,function(c,d){return c===null?null:b("React").cloneElement(c,{name:this.props.name,onKeyDown:this.$4(d),onSelect:this.props.onValueChange,ref:function(a){this.$1.set(d,a)}.bind(this),selectedValue:this.props.selectedValue,setupRadioRef:function(a){this.$2.set(d,a)}.bind(this),tabIndex:this.props.selectedValue===c.props.value||!a&&d===0?0:-1})},this),d=this.props.selectedValue!==undefined&&!this.props.onValueChange;return b("React").createElement("ul",babelHelpers["extends"]({},this.props,{"aria-readonly":d,name:null,role:"radiogroup"}),c)};a.Item=b("XUIRadioListItem.react");e.exports=a}),null);
__d("Date.react",["DateTime","React","clearInterval","formatDate","setInterval"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;var h=1e3;d=babelHelpers.inherits(a,b("React").Component);g=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={liveDate:this.props.autoUpdate?Date.now()/1e3:null},this.$2=function(){this.setState({liveDate:Date.now()/1e3})}.bind(this),b}a.prototype.componentDidMount=function(){"use strict";this.props.autoUpdate&&(this.$1=b("setInterval")(this.$2,h))};a.prototype.componentWillUnmount=function(){"use strict";b("clearInterval")(this.$1),this.$1=null};a.prototype.render=function(){"use strict";var a=this.props.autoUpdate&&this.state.liveDate?this.state.liveDate:this.props.date;return a instanceof b("DateTime")?b("React").createElement("span",{className:this.props.className},a.format(this.props.format,this.props.options)):b("React").createElement("span",{className:this.props.className},b("formatDate")(a,this.props.format,this.props.options))};a.defaultProps={autoUpdate:!1,options:{}};a.propTypes={autoUpdate:c.bool,className:c.string,date:c.oneOfType([c.number,c.instanceOf(Date),c.instanceOf(b("DateTime"))]).isRequired,format:c.oneOfType([c.object,c.string]).isRequired,options:c.object};e.exports=a}),null);
__d("SUITableTextCell.react",["cx","React","SUIComponent","SUITableAbstractCell.react","SUITableCellTypes"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("SUITableCellTypes").DEFAULT_TABLE_CELL_PROPS;h=babelHelpers.inherits(a,b("SUIComponent"));h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.align,d=a.content;d=d===void 0?"__":d;var e=a.errorMessage,f=a.errorTooltipPosition,g=a.hasBorders,h=a.isModified,i=a.height;a=a.warningMessage;c=c&&c==="right";var j={"data-hover":"tooltip","data-tooltip-content":d,"data-tooltip-display":"overflow","data-tooltip-position":"above"};j=b("React").createElement("div",babelHelpers["extends"]({className:"ellipsis"},j),d);return b("React").createElement(b("SUITableAbstractCell.react"),{className:"_3-og"+(c?" _3-oh":""),content:j,errorMessage:e,errorTooltipPosition:f,hasBorders:!!g,height:i,isModified:!!h,warningMessage:a})};function a(){h.apply(this,arguments)}a.defaultProps=c;e.exports=a}),null);
__d("SphericalVideoGuideAnimation",["EventEmitter","SphericalVideoGuideAnimationConfig","easeInOutInterpolate","findGreatestLowerBoundGuideKeyframeIndex","normalizeDeltaYaw","requestAnimationFrame"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("SphericalVideoGuideAnimationConfig").MIN_INTERVAL_MS,i=b("SphericalVideoGuideAnimationConfig").MS_PER_SECOND;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(a,c,d,e,f){"use strict";g.constructor.call(this),this.$SphericalVideoGuideAnimation12=function(){if(!this.$SphericalVideoGuideAnimation2||!this.$SphericalVideoGuideAnimation1||!this.$SphericalVideoGuideAnimation7()){this.$SphericalVideoGuideAnimation3=null;return}this.updateViewport();b("requestAnimationFrame")(this.$SphericalVideoGuideAnimation12)}.bind(this),this.$SphericalVideoGuideAnimation3=null,this.$SphericalVideoGuideAnimation1=!1,this.$SphericalVideoGuideAnimation2=a.guideKeyframes||[],this.$SphericalVideoGuideAnimation8={yaw:a.initialHeading||0,pitch:a.initialPitch||0},this.$SphericalVideoGuideAnimation5=d,this.$SphericalVideoGuideAnimation4=c,this.$SphericalVideoGuideAnimation6=e,this.$SphericalVideoGuideAnimation7=f,this.$SphericalVideoGuideAnimation2&&this.$SphericalVideoGuideAnimation10(0)}a.prototype.isEnabled=function(){"use strict";return this.$SphericalVideoGuideAnimation1};a.prototype.setEnabledOnResume=function(a,b){"use strict";!this.$SphericalVideoGuideAnimation1&&a&&this.calculateKeyframeIntervalOnResume(),this.setEnabled(a,b)};a.prototype.setEnabled=function(a,b){"use strict";this.$SphericalVideoGuideAnimation1!==a&&this.emit("toggle",a,b),this.$SphericalVideoGuideAnimation1=a,this.resumeAnimation()};a.prototype.resumeAnimation=function(){"use strict";this.$SphericalVideoGuideAnimation1&&this.$SphericalVideoGuideAnimation11()};a.prototype.setInitialViewport=function(a,b){"use strict";this.$SphericalVideoGuideAnimation8.yaw=a,this.$SphericalVideoGuideAnimation8.pitch=b};a.prototype.setKeyframes=function(a){"use strict";this.$SphericalVideoGuideAnimation2=a};a.prototype.updateViewport=function(a){"use strict";var c=this.$SphericalVideoGuideAnimation9,d=this.$SphericalVideoGuideAnimation6()*i;(d<c.baseTime||d>c.nextTime||!!a)&&(this.$SphericalVideoGuideAnimation10(d),c=this.$SphericalVideoGuideAnimation9);a=b("easeInOutInterpolate")((d-c.baseTime)/c.deltaTime);d=c.deltaPitch*a+c.basePitch;a=c.deltaYaw*a+c.baseYaw;this.$SphericalVideoGuideAnimation1&&this.$SphericalVideoGuideAnimation4(a,d)};a.prototype.$SphericalVideoGuideAnimation11=function(){"use strict";this.$SphericalVideoGuideAnimation3===null&&(this.$SphericalVideoGuideAnimation3=b("requestAnimationFrame")(this.$SphericalVideoGuideAnimation12))};a.prototype.calculateKeyframeIntervalOnResume=function(){"use strict";__p&&__p();var a=this.$SphericalVideoGuideAnimation5(),c=a.yaw;a=a.pitch;var d=this.$SphericalVideoGuideAnimation6()*i,e=[d,a,c];if(this.$SphericalVideoGuideAnimation2.length===0)a=[Infinity,a,c];else{c=b("findGreatestLowerBoundGuideKeyframeIndex")(this.$SphericalVideoGuideAnimation2,d);this.$SphericalVideoGuideAnimation2.length>c+1?this.$SphericalVideoGuideAnimation2[c+1][0]-d>2*h?a=[d+h,c<0?this.$SphericalVideoGuideAnimation8.pitch:this.$SphericalVideoGuideAnimation2[c][1],c<0?this.$SphericalVideoGuideAnimation8.yaw:this.$SphericalVideoGuideAnimation2[c][2]]:this.$SphericalVideoGuideAnimation2[c+1][0]-d>h?a=this.$SphericalVideoGuideAnimation2[c+1]:this.$SphericalVideoGuideAnimation2.length>c+2&&this.$SphericalVideoGuideAnimation2[c+2][0]-d<2*h?a=this.$SphericalVideoGuideAnimation2[c+2]:a=[d+h,this.$SphericalVideoGuideAnimation2[c+1][1],this.$SphericalVideoGuideAnimation2[c+1][2]]:a=[d+h,c<0?this.$SphericalVideoGuideAnimation8.pitch:this.$SphericalVideoGuideAnimation2[c][1],c<0?this.$SphericalVideoGuideAnimation8.yaw:this.$SphericalVideoGuideAnimation2[c][2]]}this.$SphericalVideoGuideAnimation13(e,a)};a.prototype.$SphericalVideoGuideAnimation10=function(a){"use strict";var c,d;if(this.$SphericalVideoGuideAnimation2.length===0)c=[0,this.$SphericalVideoGuideAnimation8.pitch,this.$SphericalVideoGuideAnimation8.yaw],d=[Infinity,this.$SphericalVideoGuideAnimation8.pitch,this.$SphericalVideoGuideAnimation8.yaw];else{var e=b("findGreatestLowerBoundGuideKeyframeIndex")(this.$SphericalVideoGuideAnimation2,a);c=e===-1?[0,this.$SphericalVideoGuideAnimation8.pitch,this.$SphericalVideoGuideAnimation8.yaw]:this.$SphericalVideoGuideAnimation2[e];this.$SphericalVideoGuideAnimation2.length<=e+1?d=[Infinity,c[1],c[2]]:this.$SphericalVideoGuideAnimation2[e+1][0]-a>h?d=[this.$SphericalVideoGuideAnimation2[e+1][0]-h,c[1],c[2]]:(d=this.$SphericalVideoGuideAnimation2[e+1],c=[this.$SphericalVideoGuideAnimation2[e+1][0]-h,c[1],c[2]])}this.$SphericalVideoGuideAnimation13(c,d)};a.prototype.$SphericalVideoGuideAnimation13=function(a,c){"use strict";var d=function(){return{baseTime:a[0],nextTime:c[0],deltaTime:c[0]-a[0],basePitch:a[1],deltaPitch:c[1]-a[1],baseYaw:a[2],deltaYaw:b("normalizeDeltaYaw")(c[2]-a[2])}};this.$SphericalVideoGuideAnimation1&&this.emit("newIntervalCalculated",d());this.$SphericalVideoGuideAnimation9=d()};e.exports=a}),null);
__d("VideoWithSphericalGuide",["Run","SphericalVideoGuideAnimation","SubscriptionsHandler","VideoPlayerLoggerEvent"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){"use strict";this.$1=a,this.$2=c,this.$6=new(b("SubscriptionsHandler"))(),this.$7(),this.$1.getOption("SphericalVideoPlayer","isReady")?this.$8():this.$6.addSubscriptions(this.$1.once("SphericalVideoPlayer/ready",function(){return this.$8()}.bind(this)))}a.prototype.$7=function(){"use strict";__p&&__p();var a=function(a,b){return this.$1.setSphericalOrientation(a,b)}.bind(this),c=function(){return this.$1.getOption("SphericalVideoPlayer","getCurrentViewport")}.bind(this),d=function(){return this.$1.isState("playing")}.bind(this),e=function(a,b){return this.$1.emit("VideoWithSphericalGuide/viewportChange",a,b)}.bind(this);this.$1.registerOption("VideoWithSphericalGuide","enabled",function(){return this.$4.isEnabled()}.bind(this));this.$1.registerOption("VideoWithSphericalGuide","auto",function(){return this.$3.isEnabled()}.bind(this));var f=function(){return this.$1.getCurrentTimePosition()}.bind(this);this.$3=new(b("SphericalVideoGuideAnimation"))(this.$2,a,c,f,d);this.$4=new(b("SphericalVideoGuideAnimation"))(this.$2,e,c,f,d);this.$5=!1};a.prototype.$8=function(){"use strict";__p&&__p();this.$6.addSubscriptions(this.$1.addListener("updateViewportBegin",function(){return this.$9()}.bind(this)),this.$1.addListener("SphericalHeadingIndicator/click",function(){this.$4.isEnabled()&&!this.$3.isEnabled()&&this.setAutoEnabled(!0)}.bind(this)),this.$1.addListener("seekEnd",function(){return this.$10()}.bind(this)),this.$1.addListener("stateChange",function(){this.$1.isState("playing")&&this.$11()}.bind(this)),this.$1.addListener("SphericalVideoRecenterControl/animationStart",function(){return this.$12()}.bind(this)),this.$4.addListener("newIntervalCalculated",this.$13.bind(this)),this.$3.addListener("toggle",function(a,c){this.$1.emit("VideoWithSphericalGuide/toggle",a);var event=a?b("VideoPlayerLoggerEvent").GUIDE_ENTERED:b("VideoPlayerLoggerEvent").GUIDE_EXITED;a=c?{reason:c}:null;this.$1.logEvent(event,a)}.bind(this))),b("Run").onUnload(function(){return this.$6.release()}.bind(this)),this.$2.guideEnabled&&(this.$4.setEnabled(!0),this.setAutoEnabled(!0,"guide_auto_entered"))};a.prototype.$12=function(){"use strict";this.$5=!0};a.prototype.$13=function(a){"use strict";this.$1.emit("VideoWithSphericalGuide/intervalUpdate",a)};a.prototype.$9=function(){"use strict";var a=this.$1.once("updateViewportMove",function(){return this.setAutoEnabled(!1)}.bind(this));this.$1.once("updateViewportEnd",function(){return a.remove()})};a.prototype.$10=function(){"use strict";this.$3.isEnabled()&&this.$3.updateViewport(!0),this.$4.isEnabled()&&this.$4.updateViewport(!0)};a.prototype.$11=function(){"use strict";this.$5&&(this.$5=!1,this.$3.calculateKeyframeIntervalOnResume()),this.$3.resumeAnimation(),this.$4.resumeAnimation()};a.prototype.setInitialViewport=function(a,b){"use strict";this.$3.setInitialViewport(a,b),this.$4.setInitialViewport(a,b),this.$4.updateViewport(!0)};a.prototype.setEnabled=function(a){"use strict";this.$4.setEnabled(a),this.$3.setEnabledOnResume(a),this.$1.emit("VideoWithSphericalGuide/stateToggle",a)};a.prototype.setAutoEnabled=function(a,b){"use strict";this.$3.setEnabledOnResume(a,b)};a.prototype.setKeyframes=function(a){"use strict";this.$4.setKeyframes(a),this.$4.updateViewport(!0),this.$3.setKeyframes(a),this.$3.calculateKeyframeIntervalOnResume()};e.exports=a}),null);
__d("glyph",[],(function(a,b,c,d,e,f){e.exports=function(a){throw new Error("glyph: Unexpected glyph call.")}}),null);
__d("requiredIfPropIsTruthy",["sprintf"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){return function(d,e,f){if(!d[a])return null;if(d[e]===undefined)return new Error(b("sprintf")("Must supply %s to %s if property %s is truthy.",e,f,a));for(var g=arguments.length,h=new Array(g>3?g-3:0),i=3;i<g;i++)h[i-3]=arguments[i];return c.apply(undefined,[d,e,f].concat(h))}}e.exports=a}),null);
__d("SphericalMediaConstants",[],(function(a,b,c,d,e,f){"use strict";a={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HALF_EQUIRECT_PARTIAL_LIMIT:85,HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",stories:"stories",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};e.exports=a}),null);
__d("SphericalPhotoPartialLimits",["ImmutableRecordWithV4Types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("ImmutableRecordWithV4Types").Record;var g=a({partialLeftDegrees:null,partialRightDegrees:null,partialTopDegrees:null,partialBottomDegrees:null});e.exports={getPartialLimits:function(a){__p&&__p();var b=Number(a.croppedAreaImageHeightPixels)||0,c=Number(a.croppedAreaImageWidthPixels)||0,d=Number(a.croppedAreaLeftPixels)||0,e=Number(a.croppedAreaTopPixels)||0,f=Number(a.fullPanoHeightPixels)||0;a=Number(a.fullPanoWidthPixels)||0;var h,i,j,k;if(c!==0&&c!==a&&c+d<=a){c=360*c/a;j=180*(1-2*d/a);k=c-j}b!==0&&b!==f&&b+e<=f&&(e!==0&&(h=90*(1-2*e/f)),e+b!==f&&(i=180*(e+b-f/2)/f));return g({partialTopDegrees:h,partialBottomDegrees:i,partialLeftDegrees:j,partialRightDegrees:k})},normalizePhotoRendererViewWithPartialLimits:function(a,b){__p&&__p();var c=b.partialLeftDegrees,d=b.partialRightDegrees,e=b.partialTopDegrees;b=b.partialBottomDegrees;if(c||c===0){c=-1*c;a.yaw<c&&(a.yaw=c)}if(d||d===0){c=d;a.yaw>c&&(a.yaw=c)}d=e||e===0;c=b||b===0;e=e||0;b=-1*(b||0);d&&(a.pitch>e&&(a.pitch=e));c&&(a.pitch<b&&(a.pitch=b));d&&c&&(e<0&&e<b?a.pitch=b:b>0&&e<b&&(a.pitch=e));return a},normalizeViewWithPartialLimits:function(a,b){__p&&__p();var c=b.partialLeftDegrees,d=b.partialRightDegrees,e=b.partialTopDegrees;b=b.partialBottomDegrees;if(c){c=-1*(c-a.fov/2);a.yaw<c&&(a.yaw=c)}if(d){c=d-a.fov/2;a.yaw>c&&(a.yaw=c)}if(e){d=e-a.fov/2;a.pitch>d&&(a.pitch=d)}if(b){c=-1*(b-a.fov/2);a.pitch<c&&(a.pitch=c)}return a},makePartialLimits:g}}),null);
__d("AbstractRelaySearchSource",["AbstractAsyncSearchSource","debounceCore","RelayModern"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").fetchQuery;function i(a){return function(b,c,d,e){c=c.gen(b.value);b=c.query;c=c.variables;return h(a,b,c).then(d,e)}}c=babelHelpers.inherits(a,b("AbstractAsyncSearchSource"));g=c&&c.prototype;function a(a,c,d){g.constructor.call(this,c,b("debounceCore")(i(a),225),d)}e.exports=a}),null);
__d("CompositeSearchSource",["Promise","AbstractSearchSource","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("AbstractSearchSource"));g=c&&c.prototype;function a(a){g.constructor.call(this),this.$CompositeSearchSource1=a}a.prototype.bootstrapImpl=function(a){var c=this.$CompositeSearchSource1.map(function(a){return new(b("Promise"))(function(b){return a.bootstrap(b)})});b("promiseDone")(b("Promise").all(c),a)};a.prototype.getBootstrappedEntries=function(a){var c=this.$CompositeSearchSource1.map(function(a){return new(b("Promise"))(function(b){(!a.getBootstrappedEntries||!a.getBootstrappedEntries(b))&&b([])})});return b("Promise").all(c).then(function(b){a(this.$CompositeSearchSource2(b))}.bind(this))};a.prototype.searchImpl=function(a,b,c){__p&&__p();var d=this.sourceInfo(a),e=d.map(function(a){return[]}),f=d.map(function(a){return undefined}),g=function(){};d.forEach(function(b,d){var h=b.source,i=b.substituteQueryString,j=b.entryMapper;b=b.substituteOptions;h.search(i===undefined?a:i,function(b,a,c){e[d]=j?b.map(j):b,f[d]=c,g()},b||c)});g=function(){var d=this.$CompositeSearchSource2(e),g=this.$CompositeSearchSource3(f);if(c&&c.skipCallbackOnEmptyResults&&d.length==0&&g!="COMPLETE")return;b(d,a,g)}.bind(this);g()};a.prototype.sourceInfo=function(a){return this.$CompositeSearchSource1.map(function(a){return{source:a}})};a.prototype.$CompositeSearchSource2=function(a){var b=[],c=new Set();a.forEach(function(a){a.forEach(function(a){var d=a.getUniqueID();c.has(d)||(c.add(d),b.push(a))})});return b};a.prototype.$CompositeSearchSource3=function(a){__p&&__p();for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;if(d==="ACTIVE")return"ACTIVE";else if(d!=="COMPLETE")return undefined}return"COMPLETE"};e.exports=a}),null);
__d("XMarketplaceHomePageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketplace/{?*rest}",{rest:{type:"String"},ref:{type:"String"},ref_object_id:{type:"Int"},launch_creation:{type:"Bool",defaultValue:!1},query:{type:"String"},seller_profile:{type:"Int"}})}),null);