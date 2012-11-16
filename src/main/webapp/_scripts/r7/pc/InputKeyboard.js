//an alternative can be to add this component to vdrone entity instead of to gameplay
pc.script.create('InputKeyboard', function (context) {
    var _keysNone = [];

    // use http://www.quirksmode.org/js/keys.html to test
    var _keysUser = [
      {
        code : 38, // up arrow
        state : 0,
        start : function(entity, vdroneEntity){ return entity.script.send('Rules', 'boostShipStart', vdroneEntity); },
        stop : function(entity, vdroneEntity){ return entity.script.send('Rules', 'boostShipStop', vdroneEntity); }
      },
      {
        code : 37, // left arrow
        state : 0,
        start : function(entity, vdroneEntity){ return entity.script.send('Rules', 'rotateShipStart', vdroneEntity, 1); },
        stop : function(entity, vdroneEntity) { return entity.script.send('Rules', 'rotateShipStop', vdroneEntity); }
      },
      {
        code : 39, //right arrow
        state : 0,
        start : function(entity, vdroneEntity){ return entity.script.send('Rules', 'rotateShipStart', vdroneEntity, -1); },
        stop : function(entity, vdroneEntity) { return entity.script.send('Rules', 'rotateShipStop', vdroneEntity); }
      },
      {
        code :  32,//space
        state : 0,
        start : function(entity, vdroneEntity){ return entity.script.send('Rules', 'shootingStart', vdroneEntity); },
        stop :  function(entity, vdroneEntity){ return entity.script.send('Rules', 'shootingStop', vdroneEntity); }
      }
    ];

    var InputKeyboard = function (entity) {
        this.entity = entity;
        this.keys = _keysNone;
        this.vdroneEntity = null;
        this.container = window.document.getElementById('application-container');
//        console.log("contructor", this, _keysUser, this.keys);
    };

    InputKeyboard.prototype = {
        update: function (dt) {
          this.keys.forEach(function(key){
            if (key.state === 1) {
              key.state = 0;
              key.start(this.entity, this.vdroneEntity);
            } else if (key.state === -1) {
              key.state = 0;
              key.stop(this.entity, this.vdroneEntity);
            }
          }.bind(this));
        },
        
        bindControl : function(vdroneId) {
          //TODO handle case where entity is not yet available (memoize/promise a function instead)
          this.vdroneEntity = context.root.findByName(vdroneId);
          this.keys = _keysUser;
          this.keys.forEach(function(key){ key.state = 0; });
          console.log("bindControl", this, _keysUser, this.keys);
          //container.onkeypress= this.onKeyDown;
          //container.onkeyup = this.onKeyUp;
          //Lib.document.onkeypress = onKeyDown;
          //var t : Dynamic = Lib.document; //_container;
          this.container.addEventListener("keydown", this.onKeyDown.bind(this), false);    
          this.container.addEventListener("keyup", this.onKeyUp.bind(this), false);    
        },
        
        //unbind shoud be postponed to next update, else update will failed
        unbindControl : function() {
          this.keys.forEach(function(key){
            if (key.state < 0) {
              key.stop(this.entity, this.vdroneEntity);
            }
          }.bind(this));
          this.keys = _keysNone;
        },

        onKeyDown : function(e) {
          this.keys.forEach(function(key){
            if (key.code === e.keyCode) {
              key.state = 1;
            }
          });
        },
    
        onKeyUp : function(e) {
          this.keys.forEach(function(key){
            if (key.state === - e.keyCode) {
              key.code = -1;
            }
          });
        }
    };

   return InputKeyboard;
});