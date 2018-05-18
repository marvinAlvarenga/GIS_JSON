//------------DESPLIEGUE DE MAPA -----------------------
var baseTree = {
    label: 'Mapa',
    noShow: true,
    children: [
        
    ]
}; 

var indicadores = [
    {label: 'Indice Desarrolo Humano', children: [
        {label: 'Desarrollo Humano - Alto', layer: idh_alto},
        {label: 'Desarrollo Humano - Medio', layer: idh_medio},
        {label: 'Desarrollo Humano - Bajo', layer: idh_bajo},
        {label: 'Desarrollo Humano - Muy Bajo', layer: idh_muy_bajo},
    ]},
    {label: 'Indice Alfabetirmos', children: [
        {label: '80 - 100 %', layer: alfa_100},
        {label: '60 - 80 %', layer: alfa_80},
        {label: '40 - 60 %', layer: alfa_60},
        {label: '20 - 40 %', layer: alfa_40},
        {label: '0 - 20 %', layer: alfa_20},
    ]},
    {label: 'Esperanza de Vida', children: [
        {label: 'Mayor 70 años', layer: esperanza_80},
        {label: 'Entre 65 y 70 años', layer: esperanza_70},
        {label: 'Entre 60 y 65 años', layer: esperanza_65},
        {label: 'Menos de 60 años', layer: esperanza_60}
    ]},
    {label: 'Indice de PIB', children: [
        {label: 'PIB Mayor', layer: pib_alto},
        {label: 'PIB Medio', layer: pib_medio},
        {label: 'PIB Bajo', layer: pib_bajo},
        {label: 'PIB Muy Bajo', layer: pib_muy_bajo}
    ]},
    {label: 'Extra', children: [
        {label: 'Departamentos', layer: departamentos}
    ]}
];

var map = L.map('contenedor_mapa', {
    center: [13.71685, -89.20933],
    zoom: 9,
    layers: [departamentos]
});

var ct1 = L.control.layers.tree(baseTree, null, {
    collapsed: false,
    namedToggle: true,
    collapseAll: 'Colapsar',
    expandAll: 'Expandir',
});

ct1.addTo(map).collapseTree().expandSelected();

ct1.setOverlayTree(indicadores).collapseTree(true).expandSelected();
