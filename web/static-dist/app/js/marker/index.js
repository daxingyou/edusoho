!function(l){function e(e){for(var t,i,a=e[0],n=e[1],r=e[2],o=0,s=[];o<a.length;o++)i=a[o],Object.prototype.hasOwnProperty.call(u,i)&&u[i]&&s.push(u[i][0]),u[i]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t]);for(m&&m(e);s.length;)s.shift()();return c.push.apply(c,r||[]),d()}function d(){for(var e,t=0;t<c.length;t++){for(var i=c[t],a=!0,n=1;n<i.length;n++){var r=i[n];0!==u[r]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=i[0]))}return e}var i={},u={215:0},c=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=i,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var m=a;c.push([813,0]),d()}({397:function(e,t){var i="<iframe src='"+$("#task-dashboard").data("media-player")+"' name='viewerIframe' id='viewerIframe' width='100%'allowfullscreen webkitallowfullscreen height='100%' style='border:0px'></iframe>";$("#task-video-content").html(i)},813:function(e,t,i){"use strict";i.r(t);var a=i(6),l=i.n(a),n=i(0),b=i.n(n),r=i(1),o=i.n(r),s=(i(397),new(i(95).a)({name:"parent",project:"PlayerProject",children:[document.getElementById("viewerIframe")],type:"parent"})),f=i(16),d=function(){function y(e){var t=e.element,i=e.initMarkerArry,a=void 0===i?[]:i,n=e._video_time,r=void 0===n?"18":n,o=e.messenger,s=void 0===o?{}:o,l=e.editbox,d=void 0===l?".editbox":l,u=(e.scalebox,e.timepartnum),c=void 0===u?"6":u,m=e.markers_array,h=void 0===m?new Array:m,f=e.addScale,v=e.mergeScale,p=e.updateScale,g=e.deleteScale,k=e.updateSeq;b()(this,y),this.$element=$(t),this.initMarkerArry=a,this.markers_array=h,this._video_time=r,this.messenger=s,this.editbox=d,this.timepartnum=c,this.courseId=this.$element.data("course-id"),this.addScale=f,this.mergeScale=v,this.updateScale=p,this.deleteScale=g,this.updateSeq=k,this.init()}return o()(y,[{key:"init",value:function(){this.initSortable(),this.initeditbox(!1),this.initMarker(this.initMarkerArry),this.lisentresize(),this.initPlayer(),this.initEvent()}},{key:"initEvent",value:function(){var t=this;this.$element.on("mousedown",".gruop-lesson-list .drag",function(e){return t.itemDraggable(e)}),this.$element.on("click",'.lesson-list [data-role="question-remove"]',function(e){return t.itemRmove(e)}),this.$element.on("click","#subject-lesson-list .item-lesson",function(e){return t.stopEvent(e)}),this.$element.on("mousedown",".scale-blue",function(e){return t.slideScale(e)}),this.$element.on("mouseenter",".scale-blue",function(e){return t.hoverScale(e)}),this.$element.on("mousedown",".js-question-preview",function(e){return t.previewMouseDown(e)})}},{key:"initPlayer",value:function(){var a=this.messenger,n=this,t=!0,r=$("#editbox-lesson-list");a.on("timechange",function(e){t&&$(".scale-white").css("left",n.getleft(e.currentTime))}),$(".scale-white").on("mousedown",function(e){t=!1,$(document).on("mousemove.playertime",function(e){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();var t=e.pageX>r.width()+20?r.width()+20:e.pageX&&e.pageX<=20?20:e.pageX;$(".scale-white").css("left",t);var i=n.gettime(t);a.sendToChild({id:"viewerIframe"},"setCurrentTime",{time:i})}).on("mouseup.playertime",function(e){$(document).off("mousemove.playertime"),$(document).off("mousedown.playertime"),t=!0})})}},{key:"initSortable",value:function(){var n=this;$("#subject-lesson-list").sortable({group:"no-drop",drop:!1,delay:500,handle:".drag",onDrop:function(e,t,i){var a;e.hasClass("item-lesson")&&(i(e,t),0<(a=e.closest(".scale.blue")).find(".lesson-list .item-lesson").length&&(n.sortList(a.find(".lesson-list")),n.addScale(a,a.find(".time").html(),a.css("left"),a.find(".lesson-list").children().length)))}}),$("#editbox-lesson-list").sortable({group:"no-drop",drag:!1})}},{key:"sortList",value:function(e){var t=1;e.find(".item-lesson").each(function(){$(this).find('[data-role="sqe-number"]').text(t),t++})}},{key:"addScale",value:function(e,t,i,a){var n=e.find("li:last"),r={id:e.attr("id"),second:t,questionMarkers:[{id:n.attr("id"),seq:i,questionId:n.attr("question-id")}]};$.extend(this.addScale(r,e,a))}},{key:"initeditbox",value:function(e){var t=this,i=$(t.editbox);if(e)i.find(".scale.scale-default:visible").each(function(){$(this).css("left",t.getleft(f.k($(this).find('[data-role="scale-time"]').text())))}),i.find(".scale.scale-blue:visible").each(function(){$(this).css("left",t.getleft(f.k($(this).find('[data-role="scale-blue-time"]').text())))});else for(var a=t.timepartnum,n=t._video_time/a,r=0;r<=a;r++){var o=$('[data-role="scale-default"]').clone().css("left",t.getleft(n*r)).removeClass("hidden").removeAttr("data-role");o.find('[data-role="scale-time"]').text(f.i(Math.round(n*r))),$('[data-role="scale-default"]').before(o)}}},{key:"initMarker",value:function(e){if(0<e.length){for(var t=$('[data-role="scale-blue"]'),i=0;i<e.length;i++){for(var a=t.clone().css("left",this.getleft(e[i].second)).removeAttr("data-role").removeClass("hidden").attr("id",e[i].id),n=(a.find('[data-role="scale-blue-time"]').text(f.i(e[i].second)),e[i].questionMarkers),r=a.find('[data-role="scale-blue-item"]'),o=0;o<n.length;o++){var s=r.clone().removeAttr("data-role").attr({"question-id":n[o].questionId,id:n[o].id});console.log("new_scale_blue_item",s),s.data("url","/course/".concat(this.courseId,"/question/").concat(n[o].questionId,"/marker/preview")).find('[data-role="sqe-number"]').text(o+1).end().find('[data-role="question-type"]').text(Translator.trans("course.question.type.single_choice")).end().find('[data-role="question-info"]').text(n[o].question.stem.replace(/<.*?>/gi,"")),r.before(s)}t.after(a),r.remove(),this.markers_array.push({id:e[i].id,time:e[i].second})}this.newSortList($(this.scalebox).find('[data-role="scale-blue-list"]'))}}},{key:"lisentresize",value:function(){var e=this;$(window).resize(function(){e.initeditbox(!0)})}},{key:"getleft",value:function(e){return 20+e*$("#editbox-lesson-list").width()/l()(this._video_time)}},{key:"newSortList",value:function(e){var r=this;e.sortable({delay:500,itemSelector:".item-lesson",onDrop:function(e,t,i){i(e,t),r.maskShow(!1);var a=e.closest(".scale-blue"),n={id:"",questionMarkers:[]};n.id=a.attr("id"),r.sortList(a.find('[data-role="scale-blue-list"]')),a.find("li").each(function(){var e={id:$(this).attr("id"),seq:$(this).find('[data-role="sqe-number"]').html()};n.questionMarkers.push(e)}),r._updateSeq(a,n),a.removeClass("moveing")},serialize:function(e,t,i){return i?t:e.attr("id")},isValidTarget:function(e){return r.maskShow(!0),e.closest(".scale-blue").addClass("moveing"),!0}})}},{key:"maskShow",value:function(e){e?$('[data-role="player-mask"]').removeClass("hidden"):$('[data-role="player-mask"]').addClass("hidden")}},{key:"gettime",value:function(e){return Math.round((e-20)*this._video_time/$("#editbox-lesson-list").width())}},{key:"itemDraggable",value:function(e){var o=this,s=[],l=null,d=null,u=null,t=$(e.currentTarget),c=$("#editbox-lesson-list"),m=$('[data-role="scale-red"]'),i=m.find('[data-role="scale-red-details"]'),h=t.clone().removeClass("drag").addClass("disdragg");t.after(h),o.maskShow(!0),$(document).on("mousemove.dragitem",function(e){if(c.find(".placeholder").length<=0)return m.addClass("hidden"),void c.removeClass("highlight");if(c.addClass("highlight"),d=e.pageX>c.width()+20?c.width()+20:e.pageX&&e.pageX<=20?20:e.pageX,u=o.gettime(d),i.text(f.i(u)),m.removeClass("hidden").css("left",d),0<o.markers_array.length)for(var t in $(".scale-blue").removeClass("highlight"),s=[],l=null,o.markers_array)if(Math.abs(o.markers_array[t].time-u)<=5)return s=[{id:o.markers_array[t].id,time:o.markers_array[t].time}],void(l=$(".scale-blue[id="+o.markers_array[t].id+"]").addClass("highlight"))}).on("mouseup.dragitem",function(e){$(document).off("mousemove.dragitem"),$(document).off("mouseup.dragitem"),o.maskShow(!1),m.addClass("hidden"),c.removeClass("highlight");var t,i,a,n,r=c.find(".item-lesson");if(r.length<=0)return m.addClass("hidden"),c.removeClass("highlight"),void h.remove();0<s.length?(t=l.find('[data-role="scale-blue-list"]'),r.appendTo(t).find('[data-role="sqe-number"]').text(t.children().length),o._addScale(l,s[0].time,t.children().length,o.markers_array),l.removeClass("highlight"),o.newSortList(t)):(n=(a=(i=$('[data-role="scale-blue"]')).clone().css("left",d).removeAttr("data-role")).find('[data-role="scale-blue-list"]'),a.find('[data-role="scale-blue-time"]').text(f.i(u)),n.children().remove(),n.append(r),i.after(a),o._addScale(a,u,1,o.markers_array))})}},{key:"itemRmove",value:function(e){e.stopPropagation();var t=$(e.currentTarget),i=t.closest('[data-role="scale-blue-list"]'),a=t.closest("li"),n=t.closest(".scale-blue");this._deleteScale(n,a,i.children().length,this.markers_array)}},{key:"stopEvent",value:function(e){e.stopPropagation()}},{key:"slideScale",value:function(e){var i,a=this,n=[],r=null,o=null,s=$(e.currentTarget),l=$("#editbox-lesson-list");s.css("left");a.maskShow(!0),$(".marker-manage").addClass("slideing"),s.addClass("moveing"),$(document).on("mousemove.slide",function(e){if(window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),i=e.pageX>l.width()+20?l.width()+20:e.pageX&&e.pageX<=20?20:e.pageX,o=Math.round((i-20)*a._video_time/l.width()),s.css("left",i),s.find('[data-role="scale-blue-time"]').text(f.i(o)),0<a.markers_array.length)for(var t in $(".scale-blue").removeClass("highlight"),n=[],r=null,a.markers_array)if(Math.abs(a.markers_array[t].time-o)<=5&&s.attr("id")!=a.markers_array[t].id)return n=[{id:a.markers_array[t].id,time:a.markers_array[t].time}],void(r=$(".scale-blue[id="+a.markers_array[t].id+"]").addClass("highlight"))}).on("mouseup.slide",function(e){var t;$(document).off("mousemove.slide"),$(document).off("mouseup.slide"),a.maskShow(!1),s.removeClass("moveing"),$(".marker-manage").removeClass("slideing"),0<n.length?((t=r.find('[data-role="scale-blue-list"]')).append(s.find('[data-role="scale-blue-list"]').children()),a.sortList(t),r.removeClass("highlight"),a._mergeScale(s,r,a.markers_array)):a._updateScale(s,o)})}},{key:"hoverScale",value:function(e){var t=$(e.currentTarget);t.offset().left-20<110?t.find(".scale-details").css("margin-left","-"+(t.offset().left-20)+"px"):t.find(".scale-details").css("margin-left","-110px")}},{key:"previewMouseDown",value:function(e){e.stopPropagation()}},{key:"_addScale",value:function(e,t,i,a){var n=e.find("li:last"),r={id:e.attr("id"),second:t,questionMarkers:[{id:n.attr("id"),seq:i,questionId:n.attr("question-id")}]};$.extend(this.addScale(r,e,a))}},{key:"_mergeScale",value:function(e,t,i){var a={id:e.attr("id"),merg_id:t.attr("id")};$.extend(this.mergeScale(a,e,t,i))}},{key:"_updateScale",value:function(e,t){var i={id:e.attr("id"),second:t};$.extend(this.updateScale(i,e))}},{key:"_deleteScale",value:function(e,t,i,a){console.log("id",e,e.attr("id"));var n={id:e.attr("id"),questionMarkers:[{id:t.attr("id"),seq:t.find('[data-role="sqe-number"]').html(),questionId:t.attr("question-id")}]};$.extend(this.deleteScale(n,e,t,i,a))}},{key:"_updateSeq",value:function(e,t){$.extend(this.updateSeq(e,t))}}]),y}(),u=i(67),c=i.n(u),m=i(94);new(function(){function t(e){b()(this,t),this.$form=$(e.formSelect),this.$marker=$(e.markerSelect),this.questionBankSelector=$("#mark-form-bankId"),this.questionCategorySelector=$("#mark-form-categoryId"),this.init()}return o()(t,[{key:"init",value:function(){this.initData(),this.initEvent(),this.initQuestionBankSelector(),this.disableQuestionCategorySelector()}},{key:"initData",value:function(){var t=this,i=0<l()((document.body.clientHeight-350)/50)?l()((document.body.clientHeight-350)/50):1;$.post(this.$form.attr("action"),this.$form.serialize()+"&pageSize="+i,function(e){$("#subject-lesson-list").html(e),$('[data-toggle="popover"]').popover(),c.a.get("MARK-MANGE-GUIDE")?(t.initDrag(),$("#step-1").removeClass("introhelp-icon-help")):t.initIntro(),c.a.set("MARK-MANGE-GUIDE","true",{expires:360,path:"/"}),t.$form.data("pageSize",i)})}},{key:"initIntro",value:function(){$(".js-introhelp-overlay").removeClass("hidden"),$(".show-introhelp").addClass("show");var e=$(".js-introhelp-img img"),t=document.createElement("img"),i=$(window).height()-e.offset().top-80;t.src=e.attr("src");var a=i*t.width/t.height/2+50;e.height(i),$(".js-introhelp-img").css("margin-left","-"+a+"px")}},{key:"initEvent",value:function(){var t=this;this.$marker.on("click",".js-question-preview",function(e){return t.onQuestionPreview(e)}),this.$marker.on("click",".js-more-questions",function(e){return t.onMoreQuestion(e)}),this.$marker.on("click",".js-close-introhelp",function(e){return t.onCloseHelp(e)}),this.$marker.on("click","#mark-form-submit",function(e){return t.onFormSubmit(e)}),this.$marker.on("change","#mark-form-bankId",function(e){return t.onChangeSelect(e)}),this.$marker.on("change","#mark-form-categoryId",function(e){return t.onChangeSelect(e)}),this.$marker.on("keydown","#mark-form-keyword",function(e){return t.onFormAutoSubmit(e)})}},{key:"initQuestionBankSelector",value:function(){this.questionBankSelector.select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first",formatResult:function(e){var t=Object(m.b)(e.text);return e.id?'<div class="select2-result-text"><span class="select2-match"></span><span><i class="es-icon es-icon-tiku"></i>'.concat(t,"</span></div>"):t},dropdownCss:{width:""}})}},{key:"disableQuestionCategorySelector",value:function(){this.questionCategorySelector.select2({disable:!0})}},{key:"enableQuestionCategorySelector",value:function(){this.questionCategorySelector.select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first"})}},{key:"onFormAutoSubmit",value:function(e){13===e.keyCode&&(e.preventDefault(),this.onFormSubmit(e))}},{key:"onFormSubmit",value:function(e){if(this.$form.validate().form()){var t=this.$form.data("pageSize");$.post(this.$form.attr("action"),this.$form.serialize()+"&pageSize="+t,function(e){$("#subject-lesson-list").html(e)});var i=$(e.target),a=i.data("url");if(void 0===a)return;var n=$("#mark-form-categoryId"),r='<option value="0">'.concat(Translator.trans("question.marker_question.select_question_category"),"</option>"),o=i.val();if(!l()(o))return n.html(r),void this.disableQuestionCategorySelector();var s=this;$.post(a,{bankId:o},function(e){r+='<option value="0">无</option>',$.each(e,function(e,t){var i=1<t.depth?"　".repeat(t.depth-1):"";r+='<option value="'.concat(t.id,'">').concat(i).concat(t.name,"</option>")}),n.html(r),s.enableQuestionCategorySelector()})}}},{key:"onChangeSelect",value:function(e){this.onFormSubmit(e)}},{key:"onQuestionPreview",value:function(e){$.get($(e.currentTarget).data("url"),function(e){$(".modal").modal("show").html(e)})}},{key:"onMoreQuestion",value:function(e){var t=$(e.currentTarget).hide().parent().addClass("loading"),i=$("#subject-lesson-list").css("max-height",$("#subject-lesson-list").height()),a=l()(t.data("current-page"))+1,n=l()(t.data("last-page")),r={bankId:$("select[name=bankId]").val(),categoryId:$("select[name=categoryId]").val(),keyword:$("[name=keyword]").val(),pageSize:this.$form.data("pageSize")};$.post(t.data("url")+a,r,function(e){t.remove(),i.append(e).animate({scrollTop:40*(i.find(".item-lesson").length+1)}),a===n&&$(".js-more-questions").parent().remove()})}},{key:"onCloseHelp",value:function(e){$(e.currentTarget).closest(".show-introhelp").removeClass("show-introhelp"),$(".show-introhelp").length<=0&&($(".js-introhelp-overlay").addClass("hidden"),this.initDrag())}},{key:"initDrag",value:function(){var o,t=[],i=30;$.ajax({type:"get",url:$(".js-pane-question-content").data("marker-metas-url"),cache:!1,async:!1,success:function(e){t=e.markersMeta,i=e.videoTime}}),o=new d({element:"#task-dashboard",initMarkerArry:t,_video_time:i,messenger:s,addScale:function(t,i,a){var e=$(".js-pane-question-content").data("queston-marker-add-url"),n={markerId:t.id,second:t.second,questionId:t.questionMarkers[0].questionId,seq:t.questionMarkers[0].seq};return $.post(e,n,function(e){void 0!==e.id&&(void 0===t.id&&(i.attr("id",e.markerId),a.push({id:e.markerId,time:t.second})),i.removeClass("hidden"),i.find(".item-lesson[question-id="+t.questionMarkers[0].questionId+"]").attr("id",e.id))}),t},mergeScale:function(i,a,e,n){var t=$(".js-pane-question-content").data("marker-merge-url");return $.post(t,{sourceMarkerId:i.id,targetMarkerId:i.merg_id},function(e){for(var t in a.remove(),n)if(n[t].id==i.id){n.splice(t,1);break}}),i},updateScale:function(e){var t=$(".js-pane-question-content").data("marker-update-url"),i={id:e.id,second:e.second};return e.second?$.post(t,i,function(e){}):console.log("do not need upgrade scale..."),e},deleteScale:function(i,a,n,e,r){var t=$(".js-pane-question-content").data("queston-marker-delete-url");$.post(t,{questionId:i.questionMarkers[0].id},function(e){if(n.remove(),console.log(i.questionMarkers[0].questionId,"questionId"),$("#subject-lesson-list").find(".item-lesson[question-id="+i.questionMarkers[0].questionId+"]").removeClass("disdragg").addClass("drag"),a.find('[data-role="scale-blue-list"]').children().length<=0){for(var t in a.remove(),r)if(r[t].id==a.attr("id")){r.splice(t,1);break}}else console.log("drag",o),o.sortList(a.find('[data-role="scale-blue-list"]'))})},updateSeq:function(e,t){if(void 0!==t&&void 0!==t.questionMarkers&&0!==t.questionMarkers.length){for(var i=$(".js-pane-question-content").data("queston-marker-sort-url"),a=[],n=0;n<t.questionMarkers.length;n++)a.push(t.questionMarkers[n].id);$.post(i,{questionIds:a})}}})}}]),t}())({formSelect:".js-mark-form",markerSelect:".js-marker-manage-content"})}});