const app = {
  convertButton: document.querySelector("#convert-button"),
  copyButton: document.querySelector("#copy-button"),
  result: document.querySelector("#result"),

  convert: function (sentence) {
    // TODO : Je dois aller au magasin. => Aller au magasin, je dois.
    // Filtrer les ponctuations
    let filteredSentence = sentence
      .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
      .toLowerCase();
    // Spliter la string en array, puis filtrer les espaces excédents
    const words = filteredSentence.split(" ").filter((e) => e !== "");
    const wordsNumber = words.length;
    // Récupérer les deux derniers mots, et y ajouter une virgule
    let newSentence = [words[wordsNumber - 2], words[wordsNumber - 1] + ","];
    const result = this.result;

    // Ajouter les mots restants, à la suite des deux derniers mots
    for (let i = 0; i < wordsNumber - 2; i++) {
      newSentence.push(words[i]);
    }

    // Array to string
    newSentence = newSentence.join(" ");

    // Affichage + ajout de la ponctuation "."
    result.textContent =
      newSentence.charAt(0).toUpperCase() + newSentence.slice(1) + ".";

    return;
  },
  copy: function (copyText) {
    navigator.clipboard.writeText(copyText);

    this.copyButton.classList.add("tooltip-right");
    this.copyButton.setAttribute("data-tooltip", "Texte copié !");

    return;
  },

  init: function () {
    this.convertButton.addEventListener("click", () => {
      const sentence = document.querySelector("#text").value;
      this.convert(sentence);
    });

    this.copyButton.addEventListener("click", () => {
      const resultContent = document.querySelector("#result").textContent;
      this.copy(resultContent);
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init.bind(app));
