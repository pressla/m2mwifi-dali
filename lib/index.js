// Declare internals

var internals = {};

// Defaults

internals.defaults = {};

exports.register = function (plugin, options, next) {

    
    plugin.hapi.utils.assert(typeof plugin.state === 'function', 'Plugin permissions must allow state');
    plugin.hapi.utils.assert(typeof plugin.helper === 'function', 'Plugin permissions must allow helper');
    plugin.hapi.utils.assert(typeof plugin.events === 'object', 'Plugin permissions must allow events');
    plugin.hapi.utils.assert(typeof plugin.ext === 'function', 'Plugin permissions must allow ext');

    var settings = plugin.hapi.utils.applyToDefaults(internals.defaults, options);

    // Set any plugin dependent api properties here
    plugin.api({ });

    next();
};