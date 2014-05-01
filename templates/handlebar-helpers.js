//helper function to call Handlebars.getTemplate() instead of Handlebars.templates[name]
Handlebars.getTemplate = function(name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url : 'templatesfolder/' + name + '.handlebars',
            success : function(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async : false
        });
    }
    return Handlebars.templates[name];
};

// simple handlebar helper to set up multiple class so I can target them in sass
Handlebars.registerHelper("classes", function(obj) {
  var str = '';
    str = 'arc arc-' + obj;
  return str;
});