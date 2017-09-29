<template>
    <div>
        <div class="ui basic segment raised" style="background-color: #fafafa; padding: 22px; margin-bottom: 0px">
            <div class="ui center aligned text container">
                <img src="src/assets/plaify-cat-orange.gif" style="height: 35px">
                <div class="divider"></div>
                <img src="src/assets/plaify-greyscale.gif" style="height: 45px">
            </div>
        </div>
        <div class="ui basic segment raised" style="background-color: #5d6a7c; padding: 32px; margin: 0px">
            <div class="ui center aligned text container">
                <div class="ui header inverted grey" style="margin: 0px">
                    <div class="ui content large inverted  header" style="margin: 0px">Iniciar Sesi&oacute;n</div>
                    <div class="ui sub header large">m&oacute;dulo de administraci&oacute;n de empresas</div>
                </div>
                <div class="row" style="padding-top: 48px">
                    <div class="ui left icon inverted input" style="margin-bottom: 16px">
                        <i class="at icon"></i>
                        <input type="email" placeholder="Ingrese su email...">
                    </div>
                    <div class="divider"></div>
                    <div class="ui left icon inverted input">
                        <i class="privacy icon"></i>
                        <input type="password" placeholder="Ingrese su password...">
                    </div>
                    <div class="divider" style="padding: 16px"></div>
                    <div class="ui button large green" @click="autenticarEmpresa"><i class="sign in icon"></i>Ingresar
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {

        },
        methods: {
            autenticarEmpresa(){

            }
        }
    }
</script>
<style>

</style>