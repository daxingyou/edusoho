!function(o){function e(e){for(var t,a,n=e[0],i=e[1],r=e[2],l=0,s=[];l<n.length;l++)a=n[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&s.push(u[a][0]),u[a]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(o[t]=i[t]);for(m&&m(e);s.length;)s.shift()();return d.push.apply(d,r||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var a=d[t],n=!0,i=1;i<a.length;i++){var r=a[i];0!==u[r]&&(n=!1)}n&&(d.splice(t--,1),e=l(l.s=a[0]))}return e}var a={},u={188:0},d=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=o,l.c=a,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var m=n;d.push([613,0]),c()}({148:function(e,t,a){"use strict";var n=a(16),i=a.n(n);t.a=function(e,t,a){var n={};"remote"===t&&(n={ajax:{url:$(e).data("url"),dataType:"json",quietMillis:100,data:function(e){return{q:e,page_limit:10}},results:function(e){var a=[];return $.each(e,function(e,t){a.push({id:t.name,name:t.name})}),{results:a}}},initSelection:function(e,t){var a=[];$(e.val().split(",")).each(function(){a.push({id:this,name:this})}),t(a)},formatSelection:function(e){return e.name},formatResult:function(e){return e.name},width:400,multiple:!0,placeholder:Translator.trans("validate.tag_required_hint"),createSearchChoice:function(){return null},maximumSelectionSize:20}),$(e).select2(i()(n,a))}},17:function(e,t){e.exports=jQuery},313:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),l=a.n(r),s=function(){function t(e){i()(this,t),this.$element=e,this.initEvent()}return l()(t,[{key:"initEvent",value:function(){var t=this;this.$element.on("click",'[data-role="batch-select"]',function(e){return t._batch2Item(e)}),this.$element.on("click",'[data-role="batch-item"]',function(e){return t._item2Batch(e)})}},{key:"_batch2Item",value:function(e){var t=$(e.currentTarget).prop("checked");this.$element.find('[data-role="batch-select"]').prop("checked",t),this.$element.find('[data-role="batch-item"]:visible').prop("checked",t),t?$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!1):0==this.$element.find('[data-role="batch-item"]:checked').length&&$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!0)}},{key:"_item2Batch",value:function(){var e=this.$element.find('[data-role="batch-item"]:visible').length,t=this.$element.find('[data-role="batch-item"]:checked').length;0!==t?$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!1):$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!0),e==t?this.$element.find('[data-role="batch-select"]').prop("checked",!0):this.$element.find('[data-role="batch-select"]').prop("checked",!1)}}]),t}();t.a=s},324:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),i=a.n(n),r=a(1),l=a.n(r),s=a(4),o=a(148),c=function(){function t(e){i()(this,t),this.element=e.element,this.callback=e.callback,this.init()}return l()(t,[{key:"init",value:function(){this.initEvent(),this._initTag()}},{key:"initEvent",value:function(){var t=this;$("#info-form").on("submit",function(e){t.onSubmitInfoForm(e)})}},{key:"_initTag",value:function(){Object(o.a)("#infoTags","remote",{width:"off"})}},{key:"onSubmitInfoForm",value:function(e){var t=$(e.currentTarget);t.find("#info-save-btn").button("loading"),$.ajax({type:"POST",url:t.attr("action"),data:$("#info-form").serialize()}).done(function(){Object(s.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(){Object(s.a)("danger",Translator.trans("site.save_error_hint"))}).always(function(){t.find("#info-save-btn").button("reset")}),e.preventDefault()}}]),t}(),u=a(89),d=function(){function t(e){i()(this,t),this.callback=e.callback,this.element=e.element,this.init()}return l()(t,[{key:"init",value:function(){this.initEvent(),this._initPlayer()}},{key:"initEvent",value:function(){var t=this;$(".js-img-set").on("click",function(e){t.onClickChangePic(e)}),$(".js-reset-btn").on("click",function(e){t.onClickReset(e)}),$(".js-set-default").on("click",function(e){t.onClickDefault(e)}),$(".js-set-select").on("click",function(e){t.onClickSelect(e)}),$(".js-screenshot-btn").on("click",function(e){t.onClickScreenshot(e)}),$("#cover-form").on("submit",function(e){t.onSubmitCoverForm(e)})}},{key:"onClickChangePic",value:function(e){var t=$(e.currentTarget),a=t.closest("#cover-tab");a.find(".js-cover-img").attr("src",t.attr("src")),a.find("#thumbNo").val(t.data("no"))}},{key:"onClickReset",value:function(){$("#thumbNo").val(""),$(".js-cover-img").attr("src",$("#orignalThumb").val())}},{key:"onClickDefault",value:function(e){this._changePane($(e.currentTarget))}},{key:"onClickSelect",value:function(e){this._changePane($(e.currentTarget))}},{key:"onClickScreenshot",value:function(){var t=$(event.currentTarget),a=this;t.button("loading");var n=a.second;$.ajax({type:"get",url:t.data("url"),data:{second:n}}).done(function(e){"success"==e.status?a._successGeneratePic(t,e):"waiting"==e.status?a.intervalId=setInterval(function(){$.get(t.data("url"),{second:n},function(e){"success"==e.status&&(a._successGeneratePic(t,e),clearInterval(a.intervalId))})},3e3):(t.button("reset"),Object(s.a)("danger",Translator.trans("meterial_lib.generate_screenshots_error_hint")))}).fail(function(){t.button("reset"),Object(s.a)("danger",Translator.trans("meterial_lib.generate_screenshots_error_hint"))})}},{key:"onSubmitCoverForm",value:function(e){var t=$(e.currentTarget);t.find("#save-btn").button("loading"),t.find("#thumbNo").val()?$.ajax({type:"POST",url:t.attr("action"),data:t.serialize()}).done(function(){Object(s.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(){Object(s.a)("danger",Translator.trans("site.save_error_hint"))}).always(function(){t.find("#save-btn").button("reset")}):(Object(s.a)("success",Translator.trans("site.save_success_hint")),t.find("#save-btn").button("reset")),e.preventDefault()}},{key:"destroy",value:function(){clearInterval(this.intervalId)}},{key:"_initPlayer",value:function(){var t=this;0<$("#viewerIframe").length&&($("#viewerIframe"),new u.a({name:"parent",project:"PlayerProject",children:[document.getElementById("viewerIframe")],type:"parent"}).on("video.timeupdate",function(e){t.second=Math.floor(e.currentTime)}))}},{key:"_successGeneratePic",value:function(e,t){e.button("reset"),Object(s.a)("success",Translator.trans("meterial_lib.generate_screenshots_success_hint"));var a=e.closest("#cover-tab");a.find(".js-cover-img").attr("src",t.url),a.find("#thumbNo").val(t.no)}},{key:"_changePane",value:function(e){e.closest(".nav").find("li.active").removeClass("active"),e.addClass("active");var t=$(".tab-content-img");t.find(".tab-pane-img.active").removeClass("active"),t.find(e.data("target")).addClass("active")}}]),t}(),m=function(){function t(e){i()(this,t),this.callback=e.callback,this.element=e.element,this.init()}return l()(t,[{key:"init",value:function(){this.initEvent(),0<$("#cover-tab").length&&(this.cover=new d({element:$("#cover-tab")})),this.info=new c({element:$("#info-tab")})}},{key:"initEvent",value:function(){var t=this;$(".js-back").on("click",function(e){t.onClickBack(e)}),$(".js-cover").on("click",function(e){t.onClickCover(e)}),$(".js-info").on("click",function(e){t.onClickInfo(e)})}},{key:"onClickInfo",value:function(e){var t=$(e.currentTarget);this._changePane(t)}},{key:"onClickCover",value:function(e){var t=$(e.currentTarget);this._changePane(t)}},{key:"onClickBack",value:function(){this.back()}},{key:"back",value:function(){this.callback(),this.element.remove(),$(".panel-heading").html(Translator.trans("material_lib.content_title"))}},{key:"_changePane",value:function(e){e.closest(".nav").find("li.active").removeClass("active"),e.addClass("active");var t=e.closest(".content").find(".tab-content");t.find(".tab-pane.active").removeClass("active"),t.find(e.data("target")).addClass("active")}}]),t}()},613:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(1),l=a.n(r),s=a(324),o=a(313),c=a(148),u=new(function(){function t(e){i()(this,t),this.model="normal",this.renderUrl=$("#material-item-list").data("url"),this.attribute="mine",this.element=$("#material-search-form"),this.init()}return l()(t,[{key:"init",value:function(){this.initEvent(),this._initHeader(),this._initSelect2(),this.initTagForm(),this.renderTable(),new o.a(this.element)}},{key:"initEvent",value:function(){var t=this;this.element.on("click",".js-search-btn",function(e){t.onClickSearchBtn(e)}),this.element.on("click",".js-cd-modal",function(e){t.codeErrorTip(e)}),this.element.on("click",".js-source-btn",function(e){t.onClickSourseBtn(e)}),this.element.on("click",".js-type-btn",function(e){t.onClickTabs(e)}),this.element.on("click",".js-material-tag .label",function(e){t.onClickTag(e)}),this.element.on("click",".js-delete-btn",function(e){t.onClickDeleteBtn(e)}),this.element.on("click",".js-download-btn",function(e){t.onClickDownloadBtn(e)}),this.element.on("click",".js-collect-btn",function(e){t.onClickCollectBtn(e)}),this.element.on("click",".js-manage-batch-btn",function(e){t.onClickManageBtn(e)}),this.element.on("click",".js-batch-delete-btn",function(e){t.onClickDeleteBatchBtn(e)}),this.element.on("click",".js-batch-share-btn",function(e){t.onClickShareBatchBtn(e)}),this.element.on("click",".js-batch-tag-btn",function(e){t.onClickTagBatchBtn(e)}),this.element.on("click",".js-detail-btn",function(e){t.onClickDetailBtn(e)}),this.element.on("click",".js-reconvert-btn",function(e){t.onClickReconvertBtn(e)}),this.element.on("click",".js-share-btn",function(e){t.onClickShareBtn(e)}),this.element.on("click",".js-unshare-btn",function(e){t.onClickUnshareBtn(e)}),this.element.on("click",".pagination li",function(e){t.onClickPagination(e)}),this.element.on("click",".js-batch-download",function(e){t.batchDownload(e)})}},{key:"downloadFile",value:function(e){var t=document.createElement("iframe");t.style.display="none",t.style.height=0,t.src=e,document.body.appendChild(t),setTimeout(function(){t.remove()},3e5)}},{key:"batchDownload",value:function(){var t=[];$("#material-lib-items-panel").find("[data-role=batch-item]:checked").each(function(){var e=$(this).closest(".js-tr-item").find(".js-download-btn").data("url");console.log(e),t.push(e)});for(var e=0;e<t.length;e++){var a=t[e];this.downloadFile(a)}}},{key:"codeErrorTip",value:function(){$("#cd-modal").on("show.bs.modal",function(e){var t=$(e.relatedTarget),a=t.data("title"),n=t.data("reason"),i=t.data("solution"),r=t.data("status");$(".js-error-tip").html('<div class="mbl clearfix"><span class="pull-left error-label">'.concat(Translator.trans("material.common_table.file_name"),'：</span><span class="pull-left error-content">').concat(a,'</span></div><div class="mbl clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.transcoding"),'：</span><span class="pull-left error-content">').concat(r,'</span></div><div class="mbl clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.error_reason"),'：</span><span class="cd-text-danger error-content pull-left">').concat(n,'</span></div><div class="clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.solution_way"),'：</span><span class="cd-text-info error-content pull-left">').concat(i,"</span></div>"))})}},{key:"onClickTabs",value:function(e){var t=$(e.currentTarget);t.closest(".js-material-tabs").find(".active").removeClass("active"),t.addClass("active"),t.closest(".js-material-tabs").find("[name=type]").val(t.data("value")),this.renderTable(),e.preventDefault()}},{key:"onClickTag",value:function(e){var t=$(e.currentTarget),a=t.closest(".js-material-tag"),n=a.find(".label-primary");t.html()==n.html()?(t.removeClass("label-primary").addClass("label-default"),a.find("[name=tagId]").val("")):(n.removeClass("label-primary").addClass("label-default"),t.addClass("label-primary").removeClass("label-default"),a.find("[name=tagId]").val(t.data("id"))),this.renderTable()}},{key:"onClickSearchBtn",value:function(e){this.renderTable(),e.preventDefault()}},{key:"onClickDetailBtn",value:function(e){var t,a;this.DetailBtnActive||(t=this,a=$(e.currentTarget),this.DetailBtnActive=!0,$.ajax({type:"GET",url:a.data("url")}).done(function(e){t.element.hide(),t.element.prev().hide(),t.element.parent().prev().html(Translator.trans("material_lib.detail.content_title")),t.element.parent().append(e),0<$(".nav.nav-tabs").length&&!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)&&$(".nav.nav-tabs").lavaLamp(),Object(c.a)("#tags","remote"),new s.a({element:$("#material-detail"),callback:function(){var e=$("#material-search-form");e.show(),e.prev().show(),t.renderTable()}})}).fail(function(){cd.message({type:"danger",message:Translator.trans("material_lib.have_no_permission_hint")})}).always(function(){t.DetailBtnActive=!1}))}},{key:"onClickDeleteBtn",value:function(e){var t=$(e.currentTarget),a=[];a.push(t.data("id")),$("#modal").html(""),$("#modal").load(t.data("url"),{ids:a}),$("#modal").modal("show")}},{key:"onClickDownloadBtn",value:function(e){var t=$(e.currentTarget);window.open(t.data("url"))}},{key:"onClickSourseBtn",value:function(e){var t=$(e.currentTarget);t.closest("ul").find("li.active").removeClass("active"),t.parent().addClass("active"),t.closest("ul").siblings('input[name="sourceFrom"]').val(t.parent().data("value")),"my"==t.closest("ul").siblings('input[name="sourceFrom"]').val()?(this.attribute="mine",$("#myShare").removeClass("hide"),$(".js-material-btn-group").removeClass("hide"),$("#shareMaterials").removeClass("hide"),$(".js-manage-batch-btn").removeClass("hide"),$(".js-upload-file-btn").removeClass("hide"),"edit"==this.model&&$("#material-lib-batch-btn-bar").show()):(this.attribute="others",$("#myShare").addClass("hide"),$(".js-material-btn-group").addClass("hide"),$("#shareMaterials").addClass("hide"),$(".js-manage-batch-btn").addClass("hide"),$(".js-upload-file-btn").addClass("hide"),$("#material-lib-batch-btn-bar").hide()),this.renderTable()}},{key:"onClickCollectBtn",value:function(e){var t=$(e.currentTarget);$.get(t.data("url"),function(e){e?(t.addClass("material-collection"),cd.message({type:"success",message:Translator.trans("site.collect_cuccess_hint")})):(t.removeClass("material-collection"),cd.message({type:"success",message:Translator.trans("site.uncollect_cuccess_hint")}))})}},{key:"onClickManageBtn",value:function(e){var t,a;"normal"==this.model?(this.model="edit",t=$(e.currentTarget),$("#material-lib-batch-btn-bar").show(),$("#material-lib-items-panel").find("[data-role=batch-item]").show(),$(".materials-ul").addClass("batch-hidden"),t.html(Translator.trans("meterial_lib.complete_manage"))):(this.model="normal",a=$(e.currentTarget),$("#material-lib-batch-btn-bar").hide(),$("#material-lib-items-panel").find("[data-role=batch-item]").hide(),$(".materials-ul").removeClass("batch-hidden"),a.html(Translator.trans("meterial_lib.batch_manage")))}},{key:"onClickDeleteBatchBtn",value:function(e){var t=$(e.currentTarget),a=[];$("#material-lib-items-panel").find("[data-role=batch-item]:checked").each(function(){a.push(this.value)}),""!=a?($("#modal").html(""),$("#modal").load(t.data("url"),{ids:a}),$("#modal").modal("show")):cd.message({type:"danger",message:Translator.trans("meterial_lib.select_resource_delete_hint")})}},{key:"onClickShareBatchBtn",value:function(a){var n=this;cd.confirm({title:"共享",content:Translator.trans("meterial_lib.confirm_share_resource_hint"),okText:"确定",cancelText:"取消",className:""}).on("ok",function(){var e=$(a.currentTarget),t=[];$("#material-lib-items-panel").find("[data-role=batch-item]:checked").each(function(){t.push(this.value)}),n._fileShare(t,e.data("url")),$("#material-lib-items-panel").find("[data-role=batch-item]").show(),console.log("点击确定按钮后的回调函数")}).on("cancel",function(){console.log("点击取消按钮后的回调函数")})}},{key:"onClickTagBatchBtn",value:function(e){$(e.currentTarget);var t=[];this.element.find("[data-role=batch-item]:checked").each(function(){t.push(this.value)}),""!=t?($("#select-tag-items").val(t),$("#tag-modal").modal("show")):cd.message({type:"danger",message:Translator.trans("meterial_lib.select_resource_operate_hint")})}},{key:"onClickShareBtn",value:function(a){var n=this;cd.confirm({title:"共享",content:Translator.trans("meterial_lib.confirm_share_resource_hint_single"),okText:"确定",cancelText:"取消",className:""}).on("ok",function(){var e=$(a.currentTarget),t=[];t.push(e.data("fileId")),n._fileShare(t,e.data("url")),console.log("点击确定按钮后的回调函数")}).on("cancel",function(){console.log("点击取消按钮后的回调函数")})}},{key:"onClickUnshareBtn",value:function(a){var n=this;cd.confirm({title:"取消共享",content:Translator.trans("meterial_lib.confirm_unshare_resource_hint"),okText:"确定",cancelText:"取消",className:""}).on("ok",function(){var t=n,e=$(a.currentTarget);$.post(e.data("url"),function(e){e&&(cd.message({type:"success",message:Translator.trans("meterial_lib.unshare_resource_success_hint")}),t.renderTable())}),console.log("点击确定按钮后的回调函数")}).on("cancel",function(){console.log("点击取消按钮后的回调函数")})}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.element.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"onClickReconvertBtn",value:function(e){var t=$(e.currentTarget);t.button("loading"),$.ajax({type:"POST",url:t.data("url")}).done(function(e){cd.message({type:"success",message:Translator.trans("subtitle.status.success")}),t.parents(".materials-list").replaceWith($(e))}).fail(function(){cd.message({type:"danger",message:Translator.trans("subtitle.status.error")})}).always(function(){t.button("reset")})}},{key:"renderTable",value:function(e){e||this._resetPage();var i=this,r=$("#material-item-list");this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:this.element.find(':visible,input[type="hidden"]').serialize()}).done(function(e){r.html(e),$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!0),$('[data-toggle="tooltip"]').tooltip();var t=i.model,a=i.attribute;"edit"==t&&"mine"==a?($("#material-lib-batch-bar").show(),$("#material-lib-items-panel").find("[data-role=batch-item]").show(),$("[data-role=batch-select]").attr("checked",!1)):"normal"==t&&$("#material-lib-batch-bar").hide();var n=r.find(".js-paginator");i.element.find("[data-role=paginator]").html(n.html()),$(".js-table-popover").popover({placement:"top",trigger:"manual",html:!0,animation:!1,title:'<div class="clearfix material-table-popover">'.concat(Translator.trans("material.common_table.transcoding_intro"),'<a class="pull-right cd-text-sm" href="http://www.qiqiuyu.com/faq/868/detail" target="_blank">').concat(Translator.trans("material.common_table.transcoding_more"),"</a></div>"),content:'\n        <div class="cd-text-sm">\n          <p class="mb0"><strong>'.concat(Translator.trans("subtitle.status.error"),"：</strong>").concat(Translator.trans("material.common_table.fail_error_tip"),'</p>\n          <p class="mb0"><strong>').concat(Translator.trans("material.common_table.fail_not_support"),"：</strong>").concat(Translator.trans("material.common_table.not_support_error_tip"),"</p>\n        </div>")}).on("mouseenter",function(){var e=this;$(this).popover("show"),$(".popover").on("mouseleave",function(){$(e).popover("hide")})}).on("mouseleave",function(){var e=this;setTimeout(function(){$(".popover:hover").length||$(e).popover("hide")},300)})}).fail(function(){i._loaded_error()})}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";$("#material-item-list").html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";$("#material-item-list").html(e)}},{key:"_resetPage",value:function(){this.element.find(".js-page").val(1)}},{key:"_fileShare",value:function(e,t){var a=this;""!=e?$.post(t,{ids:e},function(e){e?cd.message({type:"success",message:Translator.trans("meterial_lib.share_resource_success_hint")}):cd.message({type:"danger",message:Translator.trans("meterial_lib.share_resource_erroe_hint")}),a.renderTable()}):cd.message({type:"danger",message:Translator.trans("meterial_lib.select_share_resource_hint")})}},{key:"_initHeader",value:function(){$("#startDate").datetimepicker({autoclose:!0,language:document.documentElement.lang}).on("changeDate",function(){$("#endDate").datetimepicker("setStartDate",$("#startDate").val().substring(0,16))}),$("#startDate").datetimepicker("setEndDate",$("#endDate").val().substring(0,16)),$("#endDate").datetimepicker({autoclose:!0,language:document.documentElement.lang}).on("changeDate",function(){$("#startDate").datetimepicker("setEndDate",$("#endDate").val().substring(0,16))}),$("#endDate").datetimepicker("setStartDate",$("#startDate").val().substring(0,16))}},{key:"_initSelect2",value:function(){Object(c.a)("#modal-tags","remote")}},{key:"initTagForm",value:function(){$("#tag-form").validate({rules:{tags:{required:!0}},messages:{tags:{required:Translator.trans("course_set.manage.tag_required_hint")}}})}}]),t}());$("#modal").on("click",".file-delete-form-btn",function(e){var t=$("#file-delete-form");$(this).button("loading").addClass("disabled"),$.post(t.attr("action"),t.serialize(),function(e){e&&($("#modal").modal("hide"),cd.message({type:"success",message:Translator.trans("meterial_lib.delete_resource_success_hint")}),u.renderTable(!0)),$("#material-lib-items-panel").find("[data-role=batch-item]").show(),$("#material-lib-items-panel").find("[data-role=batch-select]").attr("checked",!1)})})}});