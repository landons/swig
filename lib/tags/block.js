/**
 * Defines a block in a template that can be overridden by a template extending this one and/or will override the current template's parent template block of the same name.
 *
 * See <a href="#inheritance">Template Inheritance</a> for more information.
 *
 * @alias block
 *
 * @example
 * {% block body %}...{% endblock %}
 *
 * @param {literal}  name   Name of the block for use in parent and extended templates.
 */
exports.compile = function (compiler, args, content, parent, options) {
  return compiler(content, parent, options, args.join(''));
};

exports.parse = function (str, line, parser, types) {
  parser.on('*', function (token) {
    this.out.push(token.match);
  });
  return true;
};

exports.ends = true;
