domIsReady(function () {
    document.querySelector('button').addEventListener('click', async function () {
        const value = document.querySelector('input').value;

        //BONUS : vérification du code postal
        if(value.length < 5) {
            alert('Le code postal doit contenir 5 chiffres');
            return;
        }
        const fetchData = async function(){
            const baseURL = "https://apicarto.ign.fr/api";
            const endpoint = "/codes-postaux/communes/" + value;
            const response = await fetch(baseURL + endpoint)
                .then(response => response.json())
                .catch(error => error.status === 404 ? alert('Code postal non trouvé') : alert('Une erreur est survenue'));
            return await response;
        }

        const data = await fetchData()

        const $data = {
            libelle: data[0].libelleAcheminement,
            nomCommune: data[0].nomCommune,
        }

        document.querySelector('footer > div:last-child').innerText = 'Nom de commune: '+$data.nomCommune + ' &  libellé d\'acheminement: ' + $data.libelle;
    });
});