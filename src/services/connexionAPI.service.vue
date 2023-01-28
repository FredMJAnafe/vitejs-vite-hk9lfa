<script>
export default {
  name: 'connexionAPI.service',
  methods: {
    async requete(url, obj) {
      //let f = form ? form : new FormData();
      //f = new FormData(document.getElementById('formid'));
      if(!obj) {
        obj = "{}";
      }
      return  await fetch(url, {
          headers:{
            "Content-Type": "application/x-www-form-urlencoded"
          }
          method: 'POST',
          body: encodeURIComponent(JSON.stringify(obj))
        })
        .then(async (reponse) => {
          if (!reponse.ok) {
            throw new Error(`HTTP erreur. status : ${reponse.status}`);
          }
          return reponse.json();
        })
        .catch((e) => {
          alert('Attention : ' + e.message);
        });
    },
  },
};
</script>
