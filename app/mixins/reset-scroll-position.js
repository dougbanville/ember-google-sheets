import Mixin from '@ember/object/mixin';

const ResetScrollPositionMixin = Mixin.create({

    activate: function() {
        this._super();
        window.scrollTo(0,0);
      }
});
