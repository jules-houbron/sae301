<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Header',
    components: {
        RouterLink
    }
};
</script>

<template>
    <nav class="navbar navbar-expand-lg nav_bg nav_full_width d-flex justify-content-between">

        <RouterLink class="navbar-brand" to="/">
            <h1>TaVue</h1>
        </RouterLink>

        <button class="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation -->
        <div class="collapse navbar-collapse justify-content-end mr-5" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link nav_item" to="/">Accueil</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link nav_item" to="/APropos">A propos</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link nav_item" to="/Personnalisation">Personnalisation</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link nav_item" to="/Login">
                        <i class="fa fa-user"></i>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
