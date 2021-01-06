# Le mur hanté

Au démarrage de la page, les photos "diabloliques" sont transparentes. Plus le temps avance, plus l'opacité des ces photos augmente.

Lorsque la souris est sur une photo, elle redevient progressivement "non-diabolique".

## Les étapes

### Étape 1
Créer la logique habituelle des animations (fonction tick, qui est démarré après le chargement de la page).

### Étape 2
Créer la classe `Frame`. Le constructeur doit recevoir l'ID de l'image diabolique que l'instance doit gérer (ex: frame-1-evil). Toujours dans le constructeur, changer l'opacité de l'image à 0.

Dans le tick de la classe, augmenter l'opacité de l'image de `0.002` (à chaque tick).

### Étape 3
Dans l'événement `load`, il s'agit d'ajouter 6 instances de la classe Frame dans la liste de sprites. Chaque instance doit gérer une image diabolique différente (1 à 6).

À ce point-ci, l'effet devrait fonctionner et une image devrait devenir de plus en plus diabolique.

### Étape 4
Il s'agit d'ajouter deux événements sur chaque image : `onmouseover`, `onmouseout`. Ajoutez ces 2 événements dans le constructeur de la classe `Frame`.

Une bonne stratégie serait d'avoir la variable de `this.speed`. Dans le `onmouseover`, la variable devient positive. Dans le `onmouseout`, elle devient négative. Ensuite, dans le tick, modifier l'opacité selon `this.speed`.