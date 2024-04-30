const extractData = data => {
    let formatedData = [];

    data.map((item, key) => {
        const $data = { commune: item.record.fields.nom_commune, nom: item.record.fields.nom_etablissement, mail: item.record.fields.mail }
        formatedData.push($data);
    })

    return formatedData;
}
domIsReady(async () => {
    const baseURL = "https://data.education.gouv.fr/api/v2/";
    const endpoint = "catalog/datasets/fr-en-annuaire-education/records?limit=25&offset=0";

    // on récupère les données
    const data = await fetch(baseURL + endpoint)
        .then(data => {
            return data.json();
        })
        .then(data => data.records)
        .catch(err => {
            alert("Une erreur est survenue lors de la récupération des données");
        })

    // on formate les données
    const $data = extractData(data);

    // on récupère le 3ème div
    const element = document.getElementsByTagName("div")[2];

    // pour chaque element du tableau $data, on crée un div avec les infos
    $data.map((item, key) => {
        const $div = document.createElement("div");
        $div.innerHTML = `<p>${item.commune}</p><p>${item.nom}</p><p>${item.mail}</p>`;
        element.appendChild($div);
    })
});