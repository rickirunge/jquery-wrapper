/*!
 * jQuery Function Wrapper 1.0
 *
 * Copyright 2012, Ricki Runge (ricki@ricki.dk)
 * Dual licensed under the MIT or GPL licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * http://ricki.dk/jquery/wrapper
 */

$.fn.extend({

    wrapper: function (orgFn, fn, context) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(orgFn);
            return fn.apply(context, args);
        };
    }

});