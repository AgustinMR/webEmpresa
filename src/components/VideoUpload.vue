<template>
    <div :class="{ green:uploaded, orange:!uploaded }" class="ui basic left aligned segment" id="video"
         style="padding: 7px; background-color: #ecf0f3">
        <div class="ui basic right aligned segment" style="padding: 0px;">
            <i v-if="!uploaded" class="upload blue inverted link circular icon"></i>
            <i @click="eliminar" v-if="!uploaded" class="remove grey inverted link circular icon"></i>
            <i v-else @click="" class="remove grey inverted disabled circular icon"></i>
        </div>
        <div :class="{ green:uploaded, orange:!uploaded }" class="ui left corner tiny label" style="margin-left: 1px">
            <i :class="{ checkmark:uploaded, warning:!uploaded }" class="icon"></i>
        </div>
        <div class="ui stackable grid container">
            <div class="ui five wide column">
                <VueImgInputer size="small" v-if="!uploaded" theme="light" :imgSrc="imagen"
                               placeholder="Seleccione un video..."></VueImgInputer>
                <VueImgInputer size="small" v-else readonly="true" nhe="true" theme="light" :imgSrc="imagen"
                               placeholder="Seleccione un video..."></VueImgInputer>
            </div>
            <div class="ui eleven wide column">
                <div class="ui labeled input">
                    <div class="ui basic label">#</div>
                    <input v-model="file" type="number" v-if="!uploaded" style="width: 100px" min="1" value="1" :value="num">
                    <input type="number" v-else readonly style="width: 100px" min="1" value="1" :value="num">
                </div>
                <div class="ui fluid labeled input" style="margin-top: 16px">
                    <div class="ui basic label">T&iacute;tulo</div>
                    <input type="text" v-if="!uploaded" :value="titulo"
                           placeholder="Ingrese titulo del video o episodio...">
                    <input type="text" v-else readonly :value="titulo"
                           placeholder="Ingrese titulo del video o episodio...">
                </div>
            </div>
        </div>
        <div class="ui active inverted dimmer" v-if="uploading" style="background-color: inherit; opacity: 0.85">
            <div class="ui text loader big header grey" v-if="subiendo">Subiendo video, por favor espere...</div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                subiendo: true,
                file: ''
            }
        },
        props: ['imagen', 'num', 'titulo', 'id', 'uploaded', 'uploading'],
        methods: {
            eliminar() {
                this.$store.commit('quitarVideo', this.id);
            },
            onVideoSubido(){
                this.subiendo = false;
                this.uploading = false;
                this.uploaded = true;
            }
        }
    }
</script>
<style>

</style>