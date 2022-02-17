const myApp = new Vue ({
    el: '#app',
    data: {
        dataAlbum: [],
    },
    mounted: function(){
                
        axios.get('http://localhost:8888/php-ajax-dischi/milestone2/api.php',{
            // params: {
            //     ID: 12345
            // }
        })
        .then((risposta) =>  {
            this.dataAlbum = risposta.data;
            })
        .catch(function (error) {
                
                console.log(error);
            })
    },
    
})

