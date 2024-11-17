let toastBox = document.getElementById('toastBox');
let successMsg = "Success";
let errorMsg = "Error";
let invalidMsg = "Invalid";

function showToast(msg,classToast="toast") {
    // Créer l'élément du toast
    let toast = document.createElement('div');
    toast.classList.add(classToast); // Classe pour le style
    toast.innerHTML = msg;

    // Ajouter le toast au conteneur
    toastBox.appendChild(toast);
    // Supprimer le toast après un délai

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
