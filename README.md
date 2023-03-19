# M413 - TD2 : Réponses aux Questions

## Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?

document.body.addEventListener("click», select).

## Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?

currentTarget va modifier la couleur de fond du body, ce qui veut dire que cela modifie l'objet qui a l'écouteur d'évènement.

## Comment avez-vous ajouté l’élément ?

L’element est ajouté avec un insertBefore ().

## Comment avez-vous fait pour que la fonction select2() ignore les évèments de la <div> donnée ci-dessus ?

Avec un if qui vérifie que l'id de la target ou de son parent ne soit pas égale à l'id de la div.
