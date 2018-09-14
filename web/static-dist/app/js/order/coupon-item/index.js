webpackJsonp(["app/js/order/coupon-item/index"],{0:function(e,t){e.exports=jQuery},"9bcf1f0bd4699eb8066c":function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o("adc6e7d88332518aa1ec"),a=r(n),i=o("7ab4a89ebadbfdecc2bf"),c=r(i),u=o("4602c3f5fe7ad9e3e91d"),s=r(u),d=o("b334fd7e4c5a19234db2"),f=(r(d),function(){function e(t){(0,c.default)(this,e),(0,a.default)(this,{},t),this.$form=$(this.form),this.$couponCode=this.$form.find('input[name="couponCode"]'),this.$productType=this.$form.find('input[name="targetType"]'),this.$productId=this.$form.find('input[name="targetId"]'),this.$price=this.$form.find('input[name="price"]'),this.$errorMessage=this.$form.find("#coupon-error-message"),this.$deductAmountLabel=this.$form.find("#deduct-amount-label"),this.$couponCodeLabel=this.$form.find("#coupon-code-label"),this.$selectCouponBtn=this.$form.find("#select-coupon-btn"),this.init()}return(0,s.default)(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this,t=this.$form;t.on("click","#use-coupon-btn",function(t){return e.useCoupon(t)}),t.on("click","#cancel-use-coupon-btn",function(t){return e.cancelCoupon(t)}),t.on("change",'input[name="couponCode"]',function(t){return e.inputCode(t)}),this.selectCoupon()}},{key:"inputCode",value:function(e){$(e.currentTarget).val()&&this.errorMessage()}},{key:"useCoupon",value:function(e){var t=this,o=$(e.currentTarget),r=this.$couponCode.val();if(!r)return void this.errorMessage(this.$couponCode.data("display"));o.button("loading"),this.validate(e,function(e){if(o.button("reset"),"no"==e.useable)t.errorMessage(e.message);else{var n=t.$form.data("price-type"),a=t.$form.data("coin-rate"),i=t.$form.data("coin-name"),c="discount"==e.type?t.$price.val()*(1-e.rate/10):e.rate;c="coin"===n?parseFloat(parseFloat(c)*parseFloat(a)).toFixed(2)+" "+i:"￥"+parseFloat(c).toFixed(2),t.useCouponAfter(c,r)}})}},{key:"useCouponAfter",value:function(e,t){this.$deductAmountLabel.text(e),this.$couponCodeLabel.text(t),this.toggleShow("use"),this.$form.trigger("calculatePrice"),this.$form.trigger("addPriceItem",["coupon-price",Translator.trans("order.create.coupon_deduction"),e])}},{key:"cancelCoupon",value:function(e){this.$couponCode.val(""),this.$form.trigger("calculatePrice"),this.$form.trigger("removePriceItem",["coupon-price"]),this.toggleShow("cancel")}},{key:"errorMessage",value:function(e){if(e){this.$errorMessage.text(e).show();var t=this.$errorMessage.parent(".cd-form-group");t.hasClass("has-error")||t.addClass("has-error")}else this.$errorMessage.text("").hide().parent(".cd-form-group.has-error").removeClass("has-error")}},{key:"validate",value:function(e,t){var o=$(e.currentTarget),r={code:this.$couponCode.val(),targetType:this.$productType.val(),targetId:this.$productId.val(),price:this.$price.val()};$.ajax({url:o.data("url"),type:"POST",data:r}).done(function(e){"function"==typeof t&&t(e)})}},{key:"toggleShow",value:function(e){var t=this.$form.find("#order-center-coupon__select"),o=this.$form.find("#order-center-coupon__selected");"use"===e?(t.hide(),o.show()):"cancel"===e&&(t.show(),o.hide())}},{key:"selectCoupon",value:function(){var e=this;cd.radio({el:".js-existing-coupon"}).on("change",function(t){var o=$(t.currentTarget),r=o.data("code"),n=o.data("deductAmount");e.$couponCode.val(r),e.$selectCouponBtn.trigger("click"),e.useCouponAfter(n,r)})}}]),e}());t.default=f},dd3a34437e58d62ecce1:function(e,t,o){"use strict";var r=o("9bcf1f0bd4699eb8066c");new(function(e){return e&&e.__esModule?e:{default:e}}(r).default)({form:"#order-create-form"})}},["dd3a34437e58d62ecce1"]);