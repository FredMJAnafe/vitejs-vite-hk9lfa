<script>
export default {
  name: 'connexionAPI.service',
  methods: {
    async requete(url, objJSON) {
      let reponse;
      if (!objJSON) {
        reponse = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
      } else {
        reponse = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'json=' + JSON.stringify(objJSON),
        });
      }

      if (!reponse.ok) {
        throw new Error(`HTTP erreur. status : ${reponse.status}`);
      }
      let r = reponse.json();
      return r;
    },
  },
};
</script>
