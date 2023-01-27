<script>
export default {
  name: 'connexionAPI.service',
  methods: {
    async requete(url, objJSON) {
      if (!objJSON) {
        objJSON = {};
      }
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'json=' + JSON.stringify( JSON.stringify(objJSON) ),
      }).then(async (reponse) => {
        if (!reponse.ok) {
          throw new Error(`HTTP erreur. status : ${reponse.status}`);
        }
        let r = reponse.json();
        return r;
      });
    },
  },
};
</script>
