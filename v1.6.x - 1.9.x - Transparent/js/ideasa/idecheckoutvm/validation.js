if(!Translator){var Translator=new Translate()}Validation.add("idecheckoutvm-custom-field-option",'Informe: "req" para Obrigatório, "opt" para Opcional',function(a){return"req"==a.toLowerCase()||"opt"==a.toLowerCase()});Validation.add("idecheckoutvm-cpf",Translator.translate("CPF Inválido."),function(a){return a.isCPF()});Validation.add("idecheckoutvm-cnpj",Translator.translate("CNPJ Inválido."),function(a){return a.isCNPJ()});String.prototype.isCPF=function(){var e=this;if(e==""){return true}if((e=e.replace(/[^\d]/g,"").split("")).length!=11){return false}if(new RegExp("^"+e[0]+"{11}$").test(e.join(""))){return false}for(var b=10,d=0,a=0;b>=2;d+=e[a++]*b--){}if(e[9]!=(((d%=11)<2)?0:11-d)){return false}for(var b=11,d=0,a=0;b>=2;d+=e[a++]*b--){}if(e[10]!=(((d%=11)<2)?0:11-d)){return false}return true};String.prototype.isCNPJ=function(){var f=this;if(f==""){return true}var a=[6,5,4,3,2,9,8,7,6,5,4,3,2];if((f=f.replace(/[^\d]/g,"").split("")).length!=14){return false}for(var d=0,e=0;d<12;e+=f[d]*a[++d]){}if(f[12]!=(((e%=11)<2)?0:11-e)){return false}for(var d=0,e=0;d<=12;e+=f[d]*a[d++]){}if(f[13]!=(((e%=11)<2)?0:11-e)){return false}return true};var IdeCheckoutvmValidation=Class.create();IdeCheckoutvmValidation.prototype={initialize:function(a){this.form=(a!="undefined"?a:null)},fillFormErrors:function(c){if(c instanceof Array){c.each(function(j){var k=$(j.inputId);var i=null;if(k){if(typeof j.message=="string"){i=j.message}else{if(typeof j.message=="object"){i=j.message[0]}}var h=j.inputId;var g=Validation.createAdvice(h,k,false,i);Validation.insertAdvice(k,g);Validation.showAdvice(k,g,h)}})}else{var d=c;var f=$(d.inputId);if(f){if(typeof d.message=="string"){errorMsg=d.message}else{if(typeof d.message=="object"){errorMsg=d.message[0]}}var b=d.inputId;var a=Validation.createAdvice(b,f,false,errorMsg);Validation.insertAdvice(f,a);Validation.showAdvice(f,a,b)}}},showErrorMessage:function(d,c){var b=d.id;var a=Validation.createAdvice(b,d,false,c);Validation.insertAdvice(d,a);Validation.showAdvice(d,a,b)}};