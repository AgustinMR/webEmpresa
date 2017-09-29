<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="padding: 7px;">
            <div class="ui container">
                <i class="sitemap large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Tipos de Contenido</div>
                </div>
            </div>
        </div>
        <div class="ui container" id="listado" style="padding-top: 20px; padding-bottom: 60px">
            <div class="ui center aligned text container">
                <h1 class="ui header huge text-paperviu-dark">Bienvenido!</h1>
                <div class="ui three columns stackable grid container" style="padding-top: 32px">
                    <div class="column">
                        <div class="ui fluid basic button" @click="vistaContenidos" style="padding: 32px">
                            <div class="ui icon large header text-paperviu-dark" style="margin: 0px">
                                <i class="film icon text-paperviu-sky"></i> Contenidos
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui fluid basic button" @click="vistaReportes" style="padding: 32px">
                            <div class="ui icon large header text-paperviu-dark" style="margin: 0px">
                                <i class="pie chart icon text-paperviu-sky"></i> Reportes
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui fluid basic button" @click="vistaPerfil" style="padding: 32px">
                            <div class="ui icon large header text-paperviu-dark" style="margin: 0px">
                                <i class="edit icon text-paperviu-sky"></i> Ver perfil
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            contenido() {
                return this.$store.state.contenido
            },
            reporte() {
                return this.$store.state.reporte;
            },
            perfil() {
                return this.$store.state.perfil;
            }
        },
        methods: {
            vistaContenidos(){
                this.$store.commit('verContenidos');
                this.$router.push('contenidos');
            },
            vistaReportes(){
                this.$store.commit('verReportes');
                this.$router.push('reportes');
            },
            vistaPerfil(){
                this.$store.commit('verPerfil');
                this.$router.push('perfil');
            }
        }
    }
</script>