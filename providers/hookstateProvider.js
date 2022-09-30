import { createState, useState } from "@hookstate/core";

let d = new Date()
d.setTime(d.getTime() - d.getTimezoneOffset()*60*1000)

const initialState = createState({
    tipoBusqueda: null,
    tipoMascota: null,
    sexo: null,
    tamano: null,
    edadAparente: null,
    raza: null,
    region: null,
    comuna: null,
    fecha: d,
});

export const useGlobalState = () => {
    const state = useState(initialState);
    return {
        getTipoBusqueda: () => state.tipoBusqueda.value,
        getTipoMascota: () => state.tipoMascota.value,
        getSexo: () => state.sexo.value,
        getTamano: () => state.tamano.value,
        getEdadAparente: () => state.edadAparente.value,
        getRaza: () => state.raza.value,
        getRegion: () => state.region.value,
        getComuna: () => state.comuna.value,
        getFecha: () => state.fecha.value,
        setTipoBusqueda: (tipo) => {
            state.tipoBusqueda.set(tipo);
        },
        setTipoMascota: (tipo) => {
            state.tipoMascota.set(tipo);
        },
        setSexo: (sex) => {
            state.sexo.set(sex);
        },
        setTamano: (tamano) => {
            state.tamano.set(tamano);
        },
        setEdadAparente: (edad) => {
            state.edadAparente.set(edad);
        },
        setRaza: (raza) => {
            state.raza.set(raza);
        },
        setRegion: (region) => {
            state.region.set(region);
        },
        setComuna: (comuna) => {
            state.comuna.set(comuna);
        },
        setFecha: (fecha) => {
            state.fecha.set(fecha);
        }
    }
}