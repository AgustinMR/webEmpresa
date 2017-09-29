<template>
    <div>
        <div class="ui basic segment secondary paperviu-sky" style="padding: 7px;">
            <div class="ui container">
                <i class="film large inverted icon"></i>
                <div class="ui breadcrumb">
                    <div class="ui header inverted section">Contenido</div>
                    <div class="divider"><i class="right chevron inverted icon"></i></div>
                    <div class="ui small header large inverted section">Existentes en la Plataforma</div>
                </div>
            </div>
        </div>
        <div class="ui basic segment secondary" id="menu2"
             style="background-color: #e0e7eb; margin-top: -14px; margin-left: -3px">
            <div class="ui secondary menu">
                <div class="ui container">
                    <div class="ui search icon input">
                        <i class="search text-paperviu-sky link icon"></i>
                        <input type="text" placeholder="Buscar por titulo...">
                    </div>
                    <div class="right menu">
                        <button class="ui active basic button" @click="mostrarNuevo"><i class="upload icon"></i>Publicar Contenido
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui container" id="listado" style="padding-top: 20px; padding-bottom: 60px">
            <table class="ui very basic selectable table" style="padding: 17px">
                <thead>
                <tr class="ui small header">
                    <th class="ui header grey centered small">T&iacute;tulo</th>
                    <th class="ui header grey centered small">Tipo</th>
                    <th class="ui header grey centered small">Estado</th>
                    <th class="ui header grey centered small">Pay-Per-View</th>
                </tr>
                </thead>
                <tbody id="usuariosList"></tbody>
            </table>
            <div class="ui bottom fixed pointing secondary menu" style="border-top: 0px">
                <div class="ui basic center aligned segment"
                     style="width: 100%; background-color: #ecf0f3">
                    <div class="ui basic buttons">
                        <button class="ui labeled basic active icon button"><i class="left chevron icon"></i>Anterior
                        </button>
                        <h3 class="ui basic active header"
                            style="background-color: inherit; border: 0px; margin: 5px; padding-left: 7px; padding-right: 7px">
                            1</h3>
                        <button class="ui basic active right labeled icon button">Siguiente<i
                                class="right chevron icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui container" id="nuevo" style="padding-top: 20px; padding-bottom: 60px; display: none">
            <div class="ui center aligned text container">
                <h1 class="ui header huge text-paperviu-dark">Contenido Nuevo</h1>
                <div class="row" style="padding: 16px">
                    <div class="ui four item stackable secondary pointing big menu" style="border: 0px">
                        <div class="ui item" :class="{active: infoBasicaNuevo, 'text-paperviu-dark': infoBasicaNuevo, 'border-bottom-paperviu-sky': infoBasicaNuevo}">
                            <i :class="{'text-paperviu-sky': infoBasicaNuevo}" class="info icon"></i>Info. B&aacute;sica
                        </div>
                        <div class="ui grey item" :class="{active: atributosNuevo, 'text-paperviu-dark': atributosNuevo, 'border-bottom-paperviu-sky': atributosNuevo}">
                            <i :class="{'text-paperviu-sky': atributosNuevo}" class="tags grey icon"></i>Atributos
                        </div>
                        <div class="ui grey item" :class="{active: videosNuevo, 'text-paperviu-dark': videosNuevo, 'border-bottom-paperviu-sky': videosNuevo}">
                            <i :class="{'text-paperviu-sky': videosNuevo}" class="ui film grey icon"></i>Videos
                        </div>
                    </div>
                </div>
                <div class="ui left aligned basic segment" id="infoNuevo"
                     style="padding: 26px; margin: 0px; display: none">
                    <div class="ui toggle checkbox" style="margin-top: 16px">
                        <input type="checkbox">
                        <label class="ui header small" style="margin: 0px">Estado <span
                                class="ui grey very tiny header">(Deshabilitado / Habilitado)</span></label>
                    </div>
                    <div class="divider"></div>
                    <div class="ui toggle checkbox" style="margin-top: 16px">
                        <input type="checkbox">
                        <label class="ui header small" style="margin: 0px">Destacado <span
                                class="ui grey very tiny header">(No / Si)</span></label>
                    </div>
                    <div class="divider"></div>
                    <div class="ui toggle checkbox" style="margin-top: 16px">
                        <input type="checkbox">
                        <label class="ui header small" style="margin: 0px">Disponible como contenido Pay-Per-View <span
                                class="ui grey very tiny header">(No / Si)</span></label>
                    </div>
                    <div class="ui fluid labeled input" style="margin-top: 16px">
                        <div class="ui basic label">T&iacute;tulo</div>
                        <input type="text" id="tituloNuevo" placeholder="Ingrese el T&iacute;tulo del contenido...">
                    </div>
                    <div class="ui reply form" style="margin-top: 16px">
                        <div class="field">
                            <textarea id="descripcionNuevo" cols="30"
                                      style="min-height: 100px; max-width: 100%; min-width: 100%" maxlength="1024"
                                      placeholder="Escriba aqu&iacute; una descripci&oacute;n para el contenido..."></textarea>
                        </div>
                    </div>
                    <div class="ui fluid labeled input" style="margin-top: 16px">
                        <div class="ui basic label" style="margin-right: -1px">Categorias</div>
                        <select id="categoriasNuevo" multiple="" class="ui fluid search dropdown">
                            <option value="" selected disabled>Seleccione una o m&aacute;s categorias de la lista...
                            </option>
                        </select>
                    </div>
                    <div class="ui fluid labeled input" style="margin-top: 16px">
                        <div class="ui basic label" style="margin-right: -1px">Elenco</div>
                        <select id="elencoNuevo" multiple="" class="ui fluid search dropdown"></select>
                    </div>
                    <div class="ui fluid labeled input" style="margin-top: 16px">
                        <div class="ui basic label" style="margin-right: -1px">Directores</div>
                        <select id="directoresNuevo" multiple="" class="ui fluid search dropdown"></select>
                    </div>
                </div>
                <div class="ui right aligned basic segment" id="videosNuevo"
                     style="padding: 26px; margin: 0px; display: none">
                    <button class="ui circular icon button blue" @click="agregarVideo"><i class="add large icon"></i>
                    </button>
                    <div class="ui row" id="videosListNuevo" style="padding: 16px; margin-top: 20px">
                        <paperviu-video-upload
                                v-for="video in $store.state.videosNuevoList"
                                :key="video.id"
                                :id="video.id"
                                :imagen="video.img"
                                :num="video.num"
                                :titulo="video.titulo"
                                :uploaded="video.uploaded"
                                :uploading="video.uploading"
                        ></paperviu-video-upload>
                    </div>
                </div>
                <div class="ui center aligned basic segment" id="atributosNuevo"
                     style="padding: 26px; margin: 0px; display: block">
                    <select class="ui fluid dropdown" id="tipoNuevo" v-model="tipoNuevo">
                        <option value="" selected disabled>Seleccione un Tipo de Contenido de la lista...</option>
                    </select>
                    <div class="row" style="padding: 16px;">
                        <paperviu-atributo
                                v-for="atributo in $store.state.atributosNuevoList"
                                :key="atributo.id"
                                :clave="atributo.clave"
                                :valor="atributo.valor"
                        ></paperviu-atributo>
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
                    <button class="ui left attached grey button" @click="mostrarListado"><i class="remove icon"></i>Cancelar
                    </button>
                    <button class="ui right attached button positive">Siguiente<i
                            class="right chevron icon"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            videosNuevoList() {
                return this.$store.state.videosNuevoList;
            }
        },
        data() {
            return {
                tipoNuevo: '',
                atributosNuevoList: [],
                infoBasicaNuevo: true,
                atributosNuevo: false,
                videosNuevo: false
            }
        },
        mounted() {
            $('#menuBtn').popup({
                popup: $('#popup'),
                on: 'click'
            });
            $('#filtroBtn').popup({
                popup: $('#popupFiltro'),
                on: 'click',
                position: 'bottom left'
            });
            $('.ui.rating').rating({
                interactive: false
            });
            $('#elencoNuevo').dropdown({
                allowAdditions: true
            });
            $('#directoresNuevo').dropdown({
                allowAdditions: true
            });
            $('#categoriasNuevo').dropdown();
            $('#tipoNuevo').dropdown();
            if (this.$store.state.videosNuevoList.length === 0) {
                this.agregarVideo();
            }
            if (this.$store.state.atributosNuevoList.length === 0) {
                this.agregarAtributo();
            }
        },
        methods: {
            mostrarNuevo() {
                $('#listado').transition({
                    animation: 'fade',
                    onComplete: function () {
                        $('#nuevo').transition('fade');
                    }
                });
                $('#menu2').transition('fade');
            },
            mostrarListado() {
                var _this = this;
                $('#nuevo').transition({
                    animation: 'fade',
                    onComplete: function () {
                        $('#listado').transition('fade');
                        _this.$store.commit('resetVideoNuevoList');
                        _this.agregarVideo();
                    }
                });
                $('#menu2').transition('fade');
            },
            agregarVideo() {
                this.$store.commit('agregarVideo', {
                    'src': '',
                    'num': 1,
                    'titulo': '',
                    'uploaded': false,
                    'uploading': false
                });
            },
            agregarAtributo() {
                this.$store.commit('agregarAtributo', {
                    'clave': '',
                    'valor': ''
                });
            },
            verAtributosNuevo() {
                $('#loaderContenido').transition({
                    animation: 'fade',
                    onComplete: function () {
                        $('#atributosNuevo').transition('fade');
                    }
                });
            }
        }
    }
</script>
<style>

</style>