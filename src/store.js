import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// const actual = state.videosNuevoList.find( v => { v.<<atributo>> = <<variable>>.<<atributo>> });

export const store = new Vuex.Store({
    state: {
        autenticado: true,
        username: '',
        inicio: true,
        perfil: false,
        contenido: false,
        reporte: false,
        videosCount: 1,
        atributosCount: 1,
        videosNuevoList: [],
        atributosNuevoList: []
    },
    getters: {
        isAutenticado(state) {
            return state.autenticado;
        }
    },
    mutations: {
        verContenidos(state) {
            state.inicio = false;
            state.perfil = false;
            state.contenido = true;
            state.reporte = false;
        },
        verReportes(state) {
            state.inicio = false;
            state.perfil = false;
            state.contenido = false;
            state.reporte = true;
        },
        verInicio(state) {
            state.inicio = true;
            state.perfil = false;
            state.contenido = false;
            state.reporte = false;
        },
        verPerfil(state) {
            state.inicio = false;
            state.perfil = true;
            state.contenido = false;
            state.reporte = false;
        },
        agregarVideo(state, video) {
            state.videosCount++;
            state.videosNuevoList.push({
                'id': state.videosCount,
                'img': video.src,
                'num': Number(video.num),
                'titulo': video.titulo,
                'uploaded': video.uploaded,
                'uploading': video.uploading
            });
        },
        agregarAtributo(state, atributo) {
            state.atributosCount++;
            state.atributosNuevoList.push({
                'id': state.atributosCount,
                'clave': atributo.clave,
                'valor': atributo.valor
            });
        },
        quitarVideo(state, id) {
            state.videosNuevoList = state.videosNuevoList.filter(function (item) {
                return item.id !== id;
            })
        },
        resetVideoNuevoList(state) {
            state.videosNuevoList.splice(0, state.videosNuevoList.length);
        }
    }
});