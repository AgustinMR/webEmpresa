<template>
    <div class="ui labeled fluid input">
        <div class="ui basic label">{{ clave }}</div>
        <input type="text" placeholder="Ingrese el valor del atributo..." :value="valor" @input="valorCambiado">
    </div>
</template>
<script>
    export default {
        props: ['clave', 'valor'],
        methods: {
            valorCambiado(event){
                this.$store.commit();
            }
        }
    }
</script>