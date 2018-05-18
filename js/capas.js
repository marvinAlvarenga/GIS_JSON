//-------- VENTANAS CON DATOS-------

function popup(feature, layer){
    var info = '<h3>Municipio: '+feature.properties.nom_mun+'</h3>';
    info = info + '<p><b>Codigo: '+feature.properties.cod_mun4+'</b></p>';
    info = info + '<p><b>Departamento: '+feature.properties.nom_dpto+'</b></p>';
    info = info + '<p><b>Poblacion: '+feature.properties.pob_total+'</b></p>';
    if(feature.properties.idh){
        info = info + '<p><b>IDH: '+feature.properties.idh+'</b></p>';
    }else if(feature.properties.indialf){
        info = info + '<p><b>Indice de Alfabetismo: '+feature.properties.indialf+'</b></p>';
    }else if(feature.properties.indespe){
        info = info + '<p><b>Esperanza de Vida: '+feature.properties.indespe+'</b></p>';
    }else if(feature.properties.indpib){
        info = info + '<p><b>Indice de PIB: '+feature.properties.indpib+'</b></p>';
    }
    layer.bindPopup(info);
}


//----------Capa Departamentos-------------
var departamentos = L.geoJson(json_departamentos, {
    format: 'image/png',
    transparent: true,
    style: {
        color: 'black',
    }
});
//----------Capas del IDH------------------
var idh_alto = L.geoJson(json_idh_alto, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#021c95',
        fillOpacity: 1,
    }
});
var idh_medio = L.geoJson(json_idh_medio, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#0225cc',
        fillOpacity: 0.8,
    }
});
var idh_bajo = L.geoJson(json_idh_bajo, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#254afc',
        fillOpacity: 0.7,
    }
});
var idh_muy_bajo = L.geoJson(json_idh_muy_bajo, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#516ffd',
        fillOpacity: 0.6,
    }
});
//------------Capas de ALFABETISMO----------------
var alfa_100 = L.geoJson(json_indi_alfa_100, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#021c95',
        fillOpacity: 1,
    }
});
var alfa_80 = L.geoJson(json_indi_alfa_80, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#0225cc',
        fillOpacity: 0.8,
    }
});
var alfa_60 = L.geoJson(json_indi_alfa_60, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#254afc',
        fillOpacity: 0.7,
    }
});
var alfa_40 = L.geoJson(json_indi_alfa_40, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#516ffd',
        fillOpacity: 0.6,
    }
});
var alfa_20 = L.geoJson(json_indi_alfa_20, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '7097fe',
        fillOpacity: 0.2,
    }
});
//-----CAPAS ESPERANZA DE VIDA------
var esperanza_80 = L.geoJson(json_indi_vida_80, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#021c95',
        fillOpacity: 1,
    }
});
var esperanza_70 = L.geoJson(json_indi_vida_70, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#0225cc',
        fillOpacity: 0.8,
    }
});
var esperanza_65 = L.geoJson(json_indi_vida_65, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#254afc',
        fillOpacity: 0.7,
    }
});
var esperanza_60 = L.geoJson(json_indi_vida_60, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#516ffd',
        fillOpacity: 0.6,
    }
});
// -----------CAPAS INDICE DE PIB-----------
var pib_alto = L.geoJson(json_indi_pib_alto, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#021c95',
        fillOpacity: 1,
    }
});
var pib_medio = L.geoJson(json_indi_pib_medio, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#0225cc',
        fillOpacity: 0.8,
    }
});
var pib_bajo = L.geoJson(json_indi_pib_bajo, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#254afc',
        fillOpacity: 0.7,
    }
});
var pib_muy_bajo = L.geoJson(json_indi_pib_muy_bajo, {
    format: 'image/png',
    transparent: true,
    onEachFeature: popup,
    style: {
        color: 'black',
        fillColor: '#516ffd',
        fillOpacity: 0.6,
    }
}); 
