<script>

export default {
  name: "connexionAPI.service",
  methods:{
    async requete(url, json ){
      let reponse;
      if (json===""){
        reponse= await fetch(url,{
          method: 'POST',
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        });
      }else{
        reponse= await fetch(url,{
          method: 'POST',
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body: "json="+json
        });
      }

      if (!reponse.ok){
        throw new Error(`HTTP erreur. status : ${reponse.status}`)
      }
      return reponse.json();
    }
  }
}
</script>