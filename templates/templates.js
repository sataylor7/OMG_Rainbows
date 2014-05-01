(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['rainbows'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n    <div class=\""
    + escapeExpression((helper = helpers.classes || (depth0 && depth0.classes),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "classes", (data == null || data === false ? data : data.index), options)))
    + "\" id=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></div>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.colors), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();
