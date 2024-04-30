domIsReady(function() {
    const link = document.querySelector("button");

    link.addEventListener("click", async event => {
        event.preventDefault();

        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
                alert("Une erreur est survenue");
                return false;
        });

        try {
            const blob = new Blob([JSON.stringify(data)], {type: "application/json"});

            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "ex_14.txt";
            a.click();

            // Libérer l'URL objet utilisé pour le lien de téléchargement
            URL.revokeObjectURL(a.href);
        } catch(e) {
            alert("Une erreur est survenue")
        }
    });
});