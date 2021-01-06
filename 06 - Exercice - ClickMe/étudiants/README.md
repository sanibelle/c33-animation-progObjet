# Premier jeu : Click me

Le but de jeu est de cliquer le plus de fois possible sur l'extraterrestre en 10 secondes.

- Le temps restant est affiché en haut à gauche
- Le nombre de clics est affiché en haut à droite
- À chaque fois que l'extraterrestre est cliqué, il est repositionné dans la page.
- À chaque tick, l'extraterrestre montre de 2 pixels.

## Pour repositionner l'extraterrestre.

Voici une méthode que vous pourriez ajouter à votre classe "Alien" et que vous pourriez utiliser pour le déplacer après un clic.

````javascript
move() {
    this.element.style.left = 100 + Math.random() * (window.innerWidth - 200) + "px";
    this.element.style.top = "400px";
}
````