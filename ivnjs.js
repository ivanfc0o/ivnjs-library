((function () {
   var a, b;
   b = b || {}, a = {
      fly: function (a) {
         return b.library.fly(a)
      },
      hide: function (a) {
         return b.library.hide(a)
      },
      show: function (a) {
         return b.library.show(a)
      },
      ui: b.library.ui,
      on: function (a, c) {
         return b.library.on(a, c)
      }
   }, b.library = {
      on: function (a, b) {
         switch(a) {
         case "ready":
            return window.onload = b;
         default:
            return !1
         }
      },
      fly: function (a) {
         return document.getElementById(a)
      },
      getRandomId: function (a, b) {
         var c, d;
         a == null && (a = 6), b == null && (b = "id"), c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = 0;
         while(d < a) return id += c.charAt(Math.floor(Math.random() * c.length)), d++, b + id
      },
      hide: function (a) {
         return this.fly(a).style.display = "none"
      },
      show: function (a) {
         return this.fly(a).style.display = "block"
      },
      ui: {
         searchList: function () {
            function a(a) {
               var b, c, d;
               b = this, c = this.s = {}, c.input_default = a.input || "ui-search", c.ts = a.toSearch, c.text_input_default = a.InputText || "Buscar..", c.input = document.getElementById(c.input_default), c.input.value = c.text_input_default, c.input.onfocus = function () {
                  if(this.value === c.text_input_default) return this.value = ""
               }, c.input.onblur = function () {
                  if(this.value === "") return this.value = c.text_input_default
               }, a.type === "list" && (c.getObjects = document.getElementById(c.ts), c.li_array = c.getObjects.getElementsByTagName("li"), d = setInterval(function () {
                  b.search(b)
               }, 500))
            }
            return a.prototype.search = function () {
               var a, b, c, d, e, f, g;
               c = this.s.input.value;
               if(c === this.s.text_input_default || this.s.input.disabled) return !1;
               c = new RegExp(c, "gi"), f = this.s.li_array, g = [];
               for(d = 0, e = f.length; d < e; d++) b = f[d], a = b.innerHTML, c.test(a) ? g.push(b.style.display = "block") : g.push(b.style.display = "none");
               return g
            }, a.prototype.disable = function () {
               return this.s.input.disabled = !0, this.s.input.value = "Deshabilidado"
            }, a.prototype.enable = function () {
               return this.s.input.disabled = !1, this.s.input.value = this.s.text_input_default
            }, a
         }()
      }
   }
})).call(this);
