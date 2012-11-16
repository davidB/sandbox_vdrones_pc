pc.script.create('rotate', function (context) {
    var Rotate = function (entity) {
        this.entity = entity;
    };

    Rotate.prototype = {
        update: function (dt) {
            this.entity.rotate(0, dt*90, 0);
        }
    };

   return Rotate;
});