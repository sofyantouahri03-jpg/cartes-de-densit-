var wms_layers = [];

var format_DensitdhabitantsparIRIS_0 = new ol.format.GeoJSON();
var features_DensitdhabitantsparIRIS_0 = format_DensitdhabitantsparIRIS_0.readFeatures(json_DensitdhabitantsparIRIS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensitdhabitantsparIRIS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensitdhabitantsparIRIS_0.addFeatures(features_DensitdhabitantsparIRIS_0);
var lyr_DensitdhabitantsparIRIS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensitdhabitantsparIRIS_0, 
                style: style_DensitdhabitantsparIRIS_0,
                popuplayertitle: 'Densité d\'habitants par IRIS',
                interactive: true,
    title: 'Densité d\'habitants par IRIS<br />\
    <img src="styles/legend/DensitdhabitantsparIRIS_0_0.png" /> 0 - 1623<br />\
    <img src="styles/legend/DensitdhabitantsparIRIS_0_1.png" /> 1623 - 5482<br />\
    <img src="styles/legend/DensitdhabitantsparIRIS_0_2.png" /> 5482 - 10341<br />\
    <img src="styles/legend/DensitdhabitantsparIRIS_0_3.png" /> 10341 - 17252<br />\
    <img src="styles/legend/DensitdhabitantsparIRIS_0_4.png" /> 17252 - 57453<br />' });
var format_Tramway_1 = new ol.format.GeoJSON();
var features_Tramway_1 = format_Tramway_1.readFeatures(json_Tramway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramway_1.addFeatures(features_Tramway_1);
var lyr_Tramway_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramway_1, 
                style: style_Tramway_1,
                popuplayertitle: 'Tramway',
                interactive: true,
                title: '<img src="styles/legend/Tramway_1.png" /> Tramway'
            });
var format_Mtro_2 = new ol.format.GeoJSON();
var features_Mtro_2 = format_Mtro_2.readFeatures(json_Mtro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mtro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mtro_2.addFeatures(features_Mtro_2);
var lyr_Mtro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mtro_2, 
                style: style_Mtro_2,
                popuplayertitle: 'Métro',
                interactive: true,
                title: '<img src="styles/legend/Mtro_2.png" /> Métro'
            });
var lyr_mtroettramwaydeLyon_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'métro et tramway de Lyon<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/mtroettramwaydeLyon_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [498458.734200, 5696561.602744, 583266.957632, 5782427.683511]
        })
    });

lyr_DensitdhabitantsparIRIS_0.setVisible(true);lyr_Tramway_1.setVisible(true);lyr_Mtro_2.setVisible(true);lyr_mtroettramwaydeLyon_3.setVisible(true);
var layersList = [lyr_DensitdhabitantsparIRIS_0,lyr_Tramway_1,lyr_Mtro_2,lyr_mtroettramwaydeLyon_3];
lyr_DensitdhabitantsparIRIS_0.set('fieldAliases', {'fid': 'fid', 'codeiris': 'codeiris', 'libelle': 'libelle', 'type': 'type', 'typelibell': 'typelibell', 'commune': 'commune', 'insee': 'insee', 'gid': 'gid', 'surface': 'surface', 'pop.2021 — baseicevolstructpop2021_P21_POP': 'pop.2021 — baseicevolstructpop2021_P21_POP', 'densité': 'densité', });
lyr_Tramway_1.set('fieldAliases', {'fid': 'fid', 'ligne': 'ligne', 'code_trace': 'code_trace', 'code_ligne': 'code_ligne', 'type_trace': 'type_trace', 'nom_trace': 'nom_trace', 'sens': 'sens', 'origine': 'origine', 'destinatio': 'destinatio', 'nom_origin': 'nom_origin', 'nom_destin': 'nom_destin', 'famille_tr': 'famille_tr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'code_type_': 'code_type_', 'nom_type_l': 'nom_type_l', 'pmr': 'pmr', 'code_tri_l': 'code_tri_l', 'nom_versio': 'nom_versio', 'last_updat': 'last_updat', 'last_upda0': 'last_upda0', 'gid': 'gid', 'couleur': 'couleur', });
lyr_Mtro_2.set('fieldAliases', {'fid': 'fid', 'ligne': 'ligne', 'code_trace': 'code_trace', 'code_ligne': 'code_ligne', 'type_trace': 'type_trace', 'nom_trace': 'nom_trace', 'sens': 'sens', 'origine': 'origine', 'destinatio': 'destinatio', 'nom_origin': 'nom_origin', 'nom_destin': 'nom_destin', 'famille_tr': 'famille_tr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'code_type_': 'code_type_', 'nom_type_l': 'nom_type_l', 'pmr': 'pmr', 'code_tri_l': 'code_tri_l', 'nom_versio': 'nom_versio', 'last_updat': 'last_updat', 'last_upda0': 'last_upda0', 'gid': 'gid', 'couleur': 'couleur', });
lyr_DensitdhabitantsparIRIS_0.set('fieldImages', {'fid': 'TextEdit', 'codeiris': 'Range', 'libelle': 'TextEdit', 'type': 'TextEdit', 'typelibell': 'TextEdit', 'commune': 'TextEdit', 'insee': 'TextEdit', 'gid': 'Range', 'surface': 'TextEdit', 'pop.2021 — baseicevolstructpop2021_P21_POP': 'TextEdit', 'densité': 'TextEdit', });
lyr_Tramway_1.set('fieldImages', {'fid': 'TextEdit', 'ligne': 'TextEdit', 'code_trace': 'TextEdit', 'code_ligne': 'TextEdit', 'type_trace': 'TextEdit', 'nom_trace': 'TextEdit', 'sens': 'TextEdit', 'origine': 'TextEdit', 'destinatio': 'TextEdit', 'nom_origin': 'TextEdit', 'nom_destin': 'TextEdit', 'famille_tr': 'TextEdit', 'date_debut': 'TextEdit', 'date_fin': 'TextEdit', 'code_type_': 'TextEdit', 'nom_type_l': 'TextEdit', 'pmr': 'CheckBox', 'code_tri_l': 'TextEdit', 'nom_versio': 'TextEdit', 'last_updat': 'DateTime', 'last_upda0': 'DateTime', 'gid': 'Range', 'couleur': 'TextEdit', });
lyr_Mtro_2.set('fieldImages', {'fid': 'TextEdit', 'ligne': 'TextEdit', 'code_trace': 'TextEdit', 'code_ligne': 'TextEdit', 'type_trace': 'TextEdit', 'nom_trace': 'TextEdit', 'sens': 'TextEdit', 'origine': 'TextEdit', 'destinatio': 'TextEdit', 'nom_origin': 'TextEdit', 'nom_destin': 'TextEdit', 'famille_tr': 'TextEdit', 'date_debut': 'TextEdit', 'date_fin': 'TextEdit', 'code_type_': 'TextEdit', 'nom_type_l': 'TextEdit', 'pmr': 'CheckBox', 'code_tri_l': 'TextEdit', 'nom_versio': 'TextEdit', 'last_updat': 'DateTime', 'last_upda0': 'DateTime', 'gid': 'Range', 'couleur': 'TextEdit', });
lyr_DensitdhabitantsparIRIS_0.set('fieldLabels', {'fid': 'no label', 'codeiris': 'no label', 'libelle': 'no label', 'type': 'no label', 'typelibell': 'no label', 'commune': 'no label', 'insee': 'no label', 'gid': 'no label', 'surface': 'no label', 'pop.2021 — baseicevolstructpop2021_P21_POP': 'no label', 'densité': 'no label', });
lyr_Tramway_1.set('fieldLabels', {'fid': 'no label', 'ligne': 'no label', 'code_trace': 'no label', 'code_ligne': 'no label', 'type_trace': 'no label', 'nom_trace': 'no label', 'sens': 'no label', 'origine': 'no label', 'destinatio': 'no label', 'nom_origin': 'no label', 'nom_destin': 'no label', 'famille_tr': 'no label', 'date_debut': 'no label', 'date_fin': 'no label', 'code_type_': 'no label', 'nom_type_l': 'no label', 'pmr': 'no label', 'code_tri_l': 'no label', 'nom_versio': 'no label', 'last_updat': 'no label', 'last_upda0': 'no label', 'gid': 'no label', 'couleur': 'no label', });
lyr_Mtro_2.set('fieldLabels', {'fid': 'no label', 'ligne': 'no label', 'code_trace': 'no label', 'code_ligne': 'no label', 'type_trace': 'no label', 'nom_trace': 'no label', 'sens': 'no label', 'origine': 'no label', 'destinatio': 'no label', 'nom_origin': 'no label', 'nom_destin': 'no label', 'famille_tr': 'no label', 'date_debut': 'no label', 'date_fin': 'no label', 'code_type_': 'no label', 'nom_type_l': 'no label', 'pmr': 'no label', 'code_tri_l': 'no label', 'nom_versio': 'no label', 'last_updat': 'no label', 'last_upda0': 'no label', 'gid': 'no label', 'couleur': 'no label', });
lyr_Mtro_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});