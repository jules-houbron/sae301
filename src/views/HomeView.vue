<template>
  <div style="display: flex; height: 100vh; justify-content: center; align-items: flex-start; padding-top: 20vh;">

      <div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 150px;">
          <div style="font-size: 4em; font-weight: 800; line-height: 0.9; color: blue; white-space: nowrap;">
              MODELE PAUL
          </div>
          <div class="mt-2" style="font-size: 2em; font-weight: 500; color: red; display: flex; align-items: center;">
            <span style="white-space: nowrap;">A Partir de 199,99€</span>
            <span style="white-space: nowrap; margin-left: 10px; color: grey;">7 Exemplaires restants</span>
          </div>
          <p class="mt-2" style= "color: black;">
            Les lunettes "Paul" sont le parfait exemple d'un design épuré. Leurs lignes simples et leur monture légère en font un choix idéal pour ceux qui recherchent une esthétique minimaliste. La simplicité du design met en valeur la personnalisation, vous permettant de créer un style unique qui vous ressemble.

            La qualité est au cœur de notre engagement. Les lunettes "Paul" sont fabriquées avec soin à partir de matériaux de première qualité, assurant un ajustement confortable et une durabilité exceptionnelle. Leur légèreté les rend parfaites pour un port au quotidien, sans compromettre le style.

            Le modèle est un choix unisexe, conçu pour convenir à tous, quels que soient l'âge ou le genre. Son style polyvalent le rend parfait pour toutes les occasions, que ce soit au bureau, en soirée ou en escapade en ville.
          </p>
      </div>

      <div style="display: flex; flex-direction: column; align-items: center;">
          <img src="@/assets/lunnetes.svg" alt="lunettes" style="width: 600px; margin-bottom: 50px;" />
          <RouterLink class="footer-link" style="display: inline-block; padding: 10px 30px; border: none; background-color: #1d1e56; color: #fff; cursor: pointer; font-size: 18px; text-decoration: none;" to="/login">
              Connexion
          </RouterLink>
      </div>
  </div>
</template>
