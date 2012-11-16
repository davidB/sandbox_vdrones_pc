pc.script.create('LightSettings', function (context) {
    var LightSettings = function (entity) {
        this.entity = entity;
    };

    LightSettings.prototype = {
        initialize: function () {
            //window.entity = this.entity; //HACK for debug/explore 
            console.log(context.systems.spotlight, this.entity.spotlight, this.entity.spotlight.light);
            var light = this.entity.spotlight.light;
            light.setShadowResolution(2048, 2048);
            light.setShadowBias(-0.00002);
        },
        
        update: function (dt) {
        }
    };
   return LightSettings;
});