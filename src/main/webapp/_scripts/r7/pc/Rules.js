
//console.log(pc.resources.ScriptResourceHandler());
//require([], function(_) {
    pc.script.create('Rules', function (context) {
//pc.debug.display(context);
var Rules = function (entity) {
            this.entity = entity;
//pc.debug.display(entity);
console.log(entity);
};
    
        Rules.prototype = {
            initialize : function() {
                //console.log("initialize Rules", this.entity.script);
                //window.entity2 = this.entity.script;  //HACK for debug/explore 
                //context.systems.script.send(this.entity, 'InputKeyboard', 'bindControl', 'drone');
                this.entity.script.send('InputKeyboard', 'bindControl', 'drone');
    
            },
            update: function (dt) {
            },
            boostShipStart : function(vdroneEntity){ console.log('booststart'); t(vdroneEntity); },
            boostShipStop : function(vdroneEntity){ console.log('booststop', vdroneEntity); },
            rotateShipStart : function(vdroneEntity, rotSpeed){ console.log('rotatestart', vdroneEntity); },
            rotateShipStop : function(vdroneEntity){ console.log('rotatestop', vdroneEntity); },
            shootingStart : function(vdroneEntity){ console.log('shootingstart', vdroneEntity); },
            shootingStop : function(vdroneEntity){ console.log('shootingstop', vdroneEntity); }
        };
    
    var t = function(entity) {
        var model = entity.model.model;
        var mesh = _.find(model.getMeshes(), function(x) { return x.name.indexOf('_2d') > 0 ;});
    
            var geometry = mesh.getGeometry();
            var ib = geometry.getIndexBuffer();
            var vb = geometry.getVertexBuffers()[0];
    
            var format = vb.getFormat();
            var stride = format.size / 4;
            var positions;
            for (var i = 0; i < format.elements.length; i++) {
                var element = format.elements[i];
                if (element.scopeId.name === 'vertex_position') {
                    positions = new Float32Array(vb.lock(), element.offset);
                }
            }
    
            var indices = new Uint16Array(ib.lock());
            var numTriangles = indices.length / 3;
            
            console.log(indices);
    };
       return Rules;
    });
//});