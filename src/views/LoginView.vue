<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Inscription -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Inscription</h5>
            <div class="form-group">
              <label for="signupId">Identifiant :</label>
              <input type="text" class="form-control" id="signupId" placeholder="identifiant ...">
            </div>
            <div class="form-group">
              <label for="signupEmail">Mail :</label>
              <input type="email" class="form-control" id="signupEmail" placeholder="mail...">
            </div>
            <div class="form-group">
              <label for="signupPassword">Mot de passe :</label>
              <input type="password" class="form-control" id="signupPassword" placeholder="mot de passe ...">
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirmer mot de passe :</label>
              <input type="password" class="form-control" id="confirmPassword" placeholder="confirmation...">
            </div>
            <button type="submit" class="btn btn-primary">Inscription</button>
          </div>
        </div>
      </div>

      <!-- Connexion -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Connexion</h5>
            <div class="form-group">
              <label for="loginEmailOrId">Mail ou identifiant :</label>
              <input type="text" class="form-control" id="loginEmailOrId" placeholder="identifiant ...">
            </div>
            <div class="form-group">
              <label for="loginPassword">Mot de passe :</label>
              <input type="password" class="form-control" id="loginPassword" placeholder="mot de passe ...">
            </div>
            <button type="submit" class="btn btn-primary">Connexion</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
