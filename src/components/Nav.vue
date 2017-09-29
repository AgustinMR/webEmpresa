<template>
    <div>
        <div class="ui secondary pointing inverted large menu paperviu-dark"
             style="padding: 0px;border: 0px; margin: 0px">
            <a class="toc icon item" id="menuBtn"><i class="sidebar large icon"></i></a>
            <img src="src/assets/paperviu-darkblue.gif" class="ui item"
                 style="height: 37px; padding: 0px; margin-left: 7px; margin-bottom: 5px">
        </div>
        <div class="ui segments raised popup bottom left pointing transition hidden" id="popup"
             style="padding: 0px; margin-top: 0px">
            <div class="ui segment center aligned" style="padding: 7px">
                <div class="ui icon grey header" style="padding: 10px; margin: 0px">
                    <div class="ui image icon">
                        <img src="src/assets/plaify-cat-orange.gif" style="height: 50px">
                    </div>
                    HBO
                </div>
            </div>
            <div class="ui center aligned segment"
                 style="background-color: #f6f9f9; padding: 0px; border: 0px">
                <div class="ui vertical small secondary menu" style="margin: 0px">
                    <a :class="{active: inicio}" @click="vistaInicio" id="homeBtn" class="ui item grey header">
                        <i :class="{'text-paperviu-sky': inicio}" class="home icon" style="margin-top: -5px"></i>Inicio
                    </a>
                    <a :class="{active: contenido}" @click="vistaContenido" class="ui item header grey">
                        <i :class="{'text-paperviu-sky': contenido}" class="film icon" style="margin-top: -5px"></i>Contenidos
                    </a>
                    <a :class="{active: reporte}" @click="vistaReporte" class="ui item header grey">
                        <i :class="{'text-paperviu-sky': reporte}" class="pie chart icon" style="margin-top: -5px"></i>Reportes
                    </a>
                    <a :class="{active: perfil}" @click="vistaPerfil" class="ui item header grey">
                        <i :class="{'text-paperviu-sky': perfil}" class="edit icon" style="margin-top: -5px"></i>Ver Perfil
                    </a>
                    <a @click="logout" class="ui item header grey" style="margin-bottom: 0px">
                        <i class="sign out red icon" style="margin-top: -5px"></i>Salir
                    </a>
                </div>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        computed: {
            inicio(){
                return this.$store.state.inicio;
            },
            reporte(){
                return this.$store.state.reporte;
            },
            contenido(){
                return this.$store.state.contenido;
            },
            perfil(){
                return this.$store.state.perfil;
            }
        },
        methods: {
            logout() {

            },
            vistaInicio() {
                this.$store.commit('verInicio');
                $('#menuBtn').popup('hide');
                this.$router.push('/');
            },
            vistaReporte() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verReportes');
                this.$router.push('reportes');
            },
            vistaContenido() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verContenidos');
                this.$router.push('contenidos');
            },
            vistaPerfil() {
                $('#menuBtn').popup('hide');
                this.$store.commit('verPerfil');
                this.$router.push('perfil');
            }
        },
        mounted() {
            $('#menuBtn').popup({
                popup: $('#popup'),
                on: 'click'
            });
        }
    }
</script>
<style scoped>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 0.300s ease;
    }

    .fade-leave {
    }

    .fade-leave-active {
        transition: opacity 0.300s ease;
        opacity: 0;
    }
</style>