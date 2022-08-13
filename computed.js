var app = new Vue({
  el: "#app",
  data: {
    slugText: "!@$@#%& the quickly #^^",
  },
  computed: {
    now : function () {
        var date = new Date();
        return (
            String(date.getHours()) + 
            String(date.getMinutes()) +
            String(date.getSeconds())
        );
    },
    slugetize: function () {
      return this.slugText
        .toLowerCase()
        .replace(/[^\w ]+/g, "") 
        .replace(/ +/g, "-") + '-' + this.now;
        // simbol akan ditiadakan dan spasi akan diganti min
    },
  },
  methods : {
    // now : function () {
    //     var date = new Date();
    //     return (
    //         String(date.getHours()) + 
    //         String(date.getMinutes()) +
    //         String(date.getSeconds())
    //     );
    // }
  } 
})
// perbedaan computed dan method ialah ketika memakai method ia akan mempebaharui data ketika terjadi aksi. sedang computed memiliki kemampuan cache yang mana menyimpan variable yang tersimpan sebelumnya dan tidak akan mengubahnya jika tidak ada perubahan