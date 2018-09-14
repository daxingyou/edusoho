webpackJsonp(["app/js/testpaper-manage/create/index"],{a41ed839d324b3dcacf1:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t){var e=$('[name="ranges[courseId]"]').val(),i=$('[name="ranges[lessonId]"]').val();$.post(t,{courseId:e,lessonId:i},function(t){$('[role="questionNum"]').text(0),$.each(t,function(t,e){$("[type='"+t+"']").text(e.questionNum)})})}var r=i("7ab4a89ebadbfdecc2bf"),s=n(r),o=i("4602c3f5fe7ad9e3e91d"),l=n(o),c=i("8f840897d9471c8c1fbd"),d=n(c),u=i("9181c6995ae8c5c94b7a"),m=i("1be2a74362f00ba903a0"),f=n(m);new(function(){function t(e){(0,s.default)(this,t),this.$form=e,this.$description=this.$form.find('[name="description"]'),this.validator=null,this.difficultySlider=null,this._initEvent(),this._initValidate(),this._initSortList(),this.scoreSlider=null}return(0,l.default)(t,[{key:"_initEvent",value:function(){var t=this;this.$form.on("click",'[data-role="submit"]',function(e){return t._submit(e)}),this.$form.on("click",'[name="mode"]',function(e){return t.changeMode(e)}),this.$form.on("click",'[name="range"]',function(e){return t.changeRange(e)}),this.$form.on("blur",'[data-role="count"]',function(e){return t.changeCount(e)})}},{key:"initScoreSlider",value:function(t,e){var i=document.getElementById("score-slider"),n={start:t,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:e}};this.scoreSlider?this.scoreSlider.updateOptions(n):(this.scoreSlider=noUiSlider.create(i,n),i.noUiSlider.on("update",function(t,i){$(".noUi-tooltip").text((t[i]/e*100).toFixed(0)+"%"),$(".js-passScore").text(parseInt(t[i]))})),$(".noUi-handle").attr("data-placement","top").attr("data-original-title",Translator.trans("activity.testpaper_manage.pass_score_hint",{passScore:t})).attr("data-container","body"),$(".noUi-handle").tooltip({html:!0}),$(".noUi-tooltip").text((t/e*100).toFixed(0)+"%")}},{key:"changeMode",value:function(t){"difficulty"==$(t.currentTarget).val()?(this.$form.find("#difficulty-form-group").removeClass("hidden"),this.initDifficultySlider()):this.$form.find("#difficulty-form-group").addClass("hidden")}},{key:"changeRange",value:function(t){"course"==$(t.currentTarget).val()?this.$form.find("#testpaper-range-selects").addClass("hidden"):this.$form.find("#testpaper-range-selects").removeClass("hidden")}},{key:"initDifficultySlider",value:function(){if(!this.difficultySlider){var t=document.getElementById("difficulty-percentage-slider");this.difficultySlider=noUiSlider.create(t,{start:[30,70],margin:30,range:{min:0,max:100},step:1,connect:[!0,!0,!0],serialization:{resolution:1}}),t.noUiSlider.on("update",function(t){var e=parseInt(t[0]),i=t[1]-t[0],n=100-t[1];$(".js-simple-percentage-text").html(Translator.trans("activity.testpaper_manage.simple_percentage",{simplePercentage:e})),$(".js-normal-percentage-text").html(Translator.trans("activity.testpaper_manage.normal_percentage",{normalPercentage:i})),$(".js-difficulty-percentage-text").html(Translator.trans("activity.testpaper_manage.difficulty_percentage",{difficultyPercentage:n})),$('input[name="percentages[simple]"]').val(e),$('input[name="percentages[normal]"]').val(i),$('input[name="percentages[difficulty]"]').val(n)})}}},{key:"_initEditor",value:function(t){var e=this,i=CKEDITOR.replace(this.$description.attr("id"),{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$description.data("imageUploadUrl"),height:100});i.on("change",function(){e.$description.val((0,u.delHtmlTag)(i.getData()))}),i.on("blur",function(){e.$description.val((0,u.delHtmlTag)(i.getData())),t.form()})}},{key:"changeCount",value:function(){var t=0;this.$form.find('[data-role="count"]').each(function(e,i){t+=parseInt($(i).val())}),this.$form.find('[name="questioncount"]').val(t>0?t:null)}},{key:"_initValidate",value:function(){this.validator=this.$form.validate({rules:{name:{required:!0,maxlength:50,trim:!0},description:{maxlength:500,trim:!0},limitedTime:{min:0,max:1e4,digits:!0},mode:{required:!0},range:{required:!0},questioncount:{required:!0}},messages:{questioncount:Translator.trans("activity.testpaper_manage.question_required_error_hint"),name:{required:Translator.trans("activity.testpaper_manage.input_title_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:50})},description:{required:Translator.trans("activity.testpaper_manage.input_description_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:500})},mode:Translator.trans("activity.testpaper_manage.generate_mode_hint"),range:Translator.trans("activity.testpaper_manage.question_scope")}}),this.$form.find(".testpaper-question-option-item").each(function(){var t=$(this);t.find('[data-role="count"]').rules("add",{min:0,max:function(){return parseInt(t.find('[role="questionNum"]').text())},digits:!0}),t.find('[data-role="score"]').rules("add",{min:0,max:1e3,es_score:!0}),t.find('[data-role="missScore"]').length>0&&t.find('[data-role="missScore"]').rules("add",{min:0,max:function(){return parseInt(t.find('[data-role="score"]').val())},es_score:!0})}),this._initEditor(this.validator)}},{key:"_initSortList",value:function(){(0,d.default)({element:"#testpaper-question-options",itemSelector:".testpaper-question-option-item",handle:".question-type-sort-handler",ajax:!1})}},{key:"_submit",value:function(t){var e=this,i=$(t.currentTarget);this.validator.form()&&$.post(i.data("checkUrl"),this.$form.serialize(),function(t){"no"==t.status?$(".js-build-check").html(Translator.trans("activity.testpaper_manage.question_num_error")):($(".js-build-check").html(""),i.button("loading").addClass("disabled"),e.$form.submit())})}}]),t}())($("#testpaper-form")),new f.default($('[name="ranges[courseId]"]'),$('[name="ranges[lessonId]"]')),$('[name="ranges[courseId]"]').change(function(){a($(this).data("checkNumUrl"))}),$('[name="ranges[lessonId]"]').change(function(){a($(this).data("checkNumUrl"))})}},["a41ed839d324b3dcacf1"]);