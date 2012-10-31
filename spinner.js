pc.script.create("spinner", function (context) {
 
    var Spinner = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };
 
    Spinner.prototype = {
        update: function (dt) {
            this.entity.rotate(0, 1, 0);
        }
    };
 
    return Spinner;
});
