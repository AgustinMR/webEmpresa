<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="padding: 7px;">
            <div class="ui container">
                <i class="edit large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Editar Perfil</div>
                    <div class="divider"><i class="right chevron inverted icon"></i></div>
                    <div class="ui small header large inverted section">Informaci&oacute;n de la Empresa.</div>
                </div>
            </div>
        </div>
        <div class="ui container" style="padding-top: 20px; padding-bottom: 60px">
            <div class="ui center aligned text container">
                <h1 class="ui header huge grey">HBO</h1>
                <div class="ui center aligned basic segment" id="infoNuevo" style="padding: 26px; margin: 0px">
                    <div class="ui fluid labeled input" style="margin-top: 16px">
                        <div class="ui basic label">Link</div>
                        <input type="text" id="tituloNuevo"
                               placeholder="Ingrese un enlace al sitio web de la empresa...">
                    </div>
                    <div class="row" style="margin-top: 25px">
                        <VueImgInputer :srcSrc="portada" theme="material" style="background-color: #e9eef1" size="large" bottomText="Click para cambiar la imagen de portada." placeholder="Ingrese una imagen de portada de la empresa..."></VueImgInputer>
                    </div>
                </div>
                <div class="ui left aligned basic blurring segment" id="loaderContenido"
                     style="padding: 150px; margin: 0px; display: none">
                    <div class="ui text loader active big">
                        <div class="ui header grey small">Por favor, espere...</div>
                    </div>
                </div>
            </div>
            <div class="ui bottom fixed pointing secondary menu" style="border-top: 0px">
                <div class="ui basic center aligned segment"
                     style="width: 100%; background-color: #ecf0f3; border: 0px">
                    <button class="ui button positive"><i class="save icon"></i>Guardar cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                portada: ''
            }
        }
    }
</script>
<style>

</style>