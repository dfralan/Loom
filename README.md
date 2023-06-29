# loom.js
Loom is a language translation library that allows you to easily translate content on your website into different languages. It provides a simple way to integrate multilingual support and dynamically update the content based on the user's language preference.

** Updates 🤖 **

- Translates content dynamically without page reloads
- Supports multiple languages
- Easy integration into existing websites
- Automatically detects user's language preference
- Provides language selector for users to switch languages

** Comenzando 🚀 **

- Include the loom CDN in your HTML file:

```bash
<script src="https://cdn.jsdelivr.net/gh/dfralan/loom@main/src/js/loom.js"></script>
```

- Add the loom HTML markup to your page:

```bash
<!-- Language Selector -->
<!-- You can add the flag by adding the attribute 'flag', and modify the shape by setting its value to circular ('circular'), rounded ('rounded'), or squared by leaving the attribute blank -->
<loom flag>
  <a loom-indicator></a>
  <ul loom-list>
    <li loom-language="us"></li>
    <li loom-language="ar"></li>
    <li loom-language="br"></li>
    <li loom-language="fr"></li>
    <li loom-language="it"></li>
  </ul>
</loom>

<!-- Plain Label Application -->
<h1 loom="Hello ?? Hola ?? Ola ?? Bonjour ? Ciao"></h1>
   
<!-- Attribute Content Applications -->
<!-- Add 'loom-' as prefix to any attribute you want to set, it will react on changes or even on its creation. (Always add the 'loom' attribute first so 'loom' can observe it.) -->
<input loom-placeholder="Enter email ?? Ingrese su correo ?? Digite seu e-mail" loom>
<input loom-value="abc@example.com ?? abc@ejemplo.com ?? abc@exemplo.com abc@exemple.com ?? abc@esempio.com ??" loom>
   
<!-- Advance Applications -->
<!-- In case you deal with a large amount of code, or even are working with a team of translators, you can always fall back on loom matching, just set the default or global phrase, and loom will match the translated phrase based on the browser language, or the selected one by the user, if it doesn't find a match, it will keep the default phrase. -->
<h1 loom="Hello Dora"></h1>
    
<script>
  const loomTranslations = {
    "Hello Dora": {
      "us": "Hello Dora",
      "ar": "Hola Dora",
      "br": "Alô Dora",
      "fr": "Bonjour Dora",
      "it": "Ciao Dora"
    },
  }
</script>

```

** And you're ready to go! 🔧 **

Just observe the magic

- Selector if you're using Bootstrap (Latest version):

```bash
<loom class="nav-link dropdown align-items-center d-flex" flag="circular">
  <a class="nav-link dropdown-toggle btn btn-secondary p-1 align-items-center" role="button"
    data-bs-toggle="dropdown" aria-expanded="false" loom-indicator>
  </a>
  <ul class="dropdown-menu" loom-list>
    <li role="button" class="dropdown-item" loom-language="us"></li>
    <li role="button" class="dropdown-item" loom-language="ar"></li>
    <li role="button" class="dropdown-item" loom-language="br"></li>
    <li role="button" class="dropdown-item" loom-language="fr"></li>
    <li role="button" class="dropdown-item" loom-language="it"></li>
  </ul>
</loom>
```

** Construido con 🛠️ **

* Pure Javascript.

** Contribuyendo 🖇️ **

Por ahora solo ETH, sorry not sorry por el spanglish 🦧

** Autores ✒️ **

https://github.com/dfralan

**dfralan** - *Trabajo Inicial* - [dfralan](https://github.com/dfralan)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/dfralan/loom/contributors) quíenes han participado en este proyecto.

** Licencia 📄 **

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](https://github.com/dfralan/loom/blob/main/LICENSE) para detalles

** Expresiones de Gratitud 🎁 **

* Suma tu destreza al proyecto 📢
* Realiza feedback de tu resultado en ejecución 🤓.
* Deja volar tu imaginación 💫 (0x87C35820fe988e73c54f71fB69da61Ac05474d26) ETH wallet.

---

# ⌨️ con ❤️

https://github.com/dfralan 💁‍♂️
