/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"actividades_result.js",
            js+"r6.js",
            js+"scramble.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SCRABBLE_SLIDE_1',
                            symbolName: 'SCRABBLE_SLIDE_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_SLIDE_2',
                            symbolName: 'SCRABBLE_SLIDE_2',
                            type: 'rect',
                            rect: ['-1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_SLIDE_3',
                            symbolName: 'SCRABBLE_SLIDE_3',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_SLIDE_4',
                            symbolName: 'SCRABBLE_SLIDE_4',
                            display: 'block',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_RESPUESTAS',
                            symbolName: 'SCRABBLE_RESPUESTAS',
                            display: 'none',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy2',
                            display: 'none',
                            type: 'text',
                            rect: ['84px', '66px', '1180px', '81px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​Los sufijos se ubican al final de las palabras y son letras del abecedario, por ejemplo: finalizado en o, e, or  para masculino; a, dad, sión para femenino. <span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['84px', '146px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Los géneros de las palabras se crean a partir de elementos pequeños que se llaman sufijos.</p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['84px', '192px', '1602px', '94px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: seleccione y arrastre las letras necesarias para conformar la palabra correspondiente a la imagen. Tenga en cuenta que no todas las letras se van a utilizar. Tiene dos intentos y dos minutos para esta actividad.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", ""],
                            textStyle: ["", "", "34px", "", ""]
                        },
                        {
                            id: 'vineta_lila',
                            display: 'none',
                            type: 'image',
                            rect: ['55px', '155px', '14px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila.png",'0px','0px']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1556px', '696px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Skills',
                            symbolName: 'Skills',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '617px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'portada_scrabble',
                            symbolName: 'portada_scrabble',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '-159px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'correctocontenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'correcto',
                                type: 'image',
                                rect: ['840px', '273px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correcto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['784px', '475px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Excelente trabajo!</p>",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", "nowrap"]
                            },
                            {
                                id: 'cerrar_corr',
                                symbolName: 'cerrar_corr',
                                type: 'rect',
                                rect: ['1032px', '219px', '53', '54', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'incorrecto_1_contenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRectCopy',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'volver',
                                symbolName: 'volver',
                                type: 'rect',
                                rect: ['808px', '502px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'incorrecto',
                                type: 'image',
                                rect: ['840px', '269px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['752px', '433px', '326px', '54px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Respuesta incorrecta!</p><p style=\"margin: 0px;\">​1 intento restante</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""],
                                textStyle: ["", "", "30px", "", ""]
                            }]
                        },
                        {
                            id: 'incorrecto_2_contenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRectCopy2',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'incorrectoCopy',
                                type: 'image',
                                rect: ['840px', '269px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy5',
                                type: 'text',
                                rect: ['752px', '433px', '326px', '31px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Respuesta incorrecta!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""],
                                textStyle: ["", "", "30px", "", ""]
                            },
                            {
                                id: 'volver2',
                                symbolName: 'volver2',
                                type: 'rect',
                                rect: ['808px', '502px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'no_tiempo_contenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRectCopy3',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'volver23',
                                symbolName: 'volver2',
                                type: 'rect',
                                rect: ['808px', '502px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'incorrectoCopy2',
                                type: 'image',
                                rect: ['840px', '269px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"timeout.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy6',
                                type: 'text',
                                rect: ['752px', '431px', '326px', '31px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Se acabó el tiempo!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""],
                                textStyle: ["", "", "30px", "", ""]
                            }]
                        },
                        {
                            id: 'precarga_gif',
                            display: 'none',
                            type: 'image',
                            rect: ['834px', '546px', '161px', '12px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"precarga_gif.gif",'0px','0px']
                        },
                        {
                            id: 'btn_inicio_scrabble',
                            symbolName: 'btn_inicio_scrabble',
                            display: 'none',
                            type: 'rect',
                            rect: ['802px', '524px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8500,
                    autoPlay: true,
                    labels: {
                        "slide1": 2000,
                        "slide2": 2500,
                        "slide3": 3000,
                        "slide4": 3500,
                        "correcto": 4250,
                        "incorrecto1": 5000,
                        "incorrecto2": 6000,
                        "timeout": 7000,
                        "respuestas": 8000
                    },
                    data: [
                        [
                            "eid109",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Skills}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${Skills}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "scaleY",
                            7000,
                            500,
                            "linear",
                            "${no_tiempo_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid286",
                            "scaleY",
                            5000,
                            500,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid285",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid254",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_4}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid270",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${SCRABBLE_SLIDE_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid260",
                            "scaleX",
                            4250,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid110",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${vineta_lila}",
                            'none',
                            'block'
                        ],
                        [
                            "eid271",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${vineta_lila}",
                            'block',
                            'none'
                        ],
                        [
                            "eid311",
                            "opacity",
                            7000,
                            500,
                            "linear",
                            "${no_tiempo_contenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid196",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_1}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid197",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_1}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid218",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_3}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid252",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_3}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid296",
                            "scaleY",
                            6000,
                            500,
                            "linear",
                            "${incorrecto_2_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid193",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SCRABBLE_SLIDE_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid297",
                            "scaleX",
                            6000,
                            500,
                            "linear",
                            "${incorrecto_2_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid332",
                            "left",
                            8000,
                            500,
                            "linear",
                            "${SCRABBLE_RESPUESTAS}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid212",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_2}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid213",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_2}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid166",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${portada_scrabble}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${no_tiempo_contenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid314",
                            "display",
                            7649,
                            0,
                            "linear",
                            "${no_tiempo_contenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid381",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_inicio_scrabble}",
                            'none',
                            'none'
                        ],
                        [
                            "eid310",
                            "scaleX",
                            7000,
                            500,
                            "linear",
                            "${no_tiempo_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid294",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${incorrecto_2_contenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "display",
                            6649,
                            0,
                            "linear",
                            "${incorrecto_2_contenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid262",
                            "scaleY",
                            4250,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid361",
                            "display",
                            0,
                            0,
                            "linear",
                            "${precarga_gif}",
                            'none',
                            'none'
                        ],
                        [
                            "eid362",
                            "display",
                            1876,
                            0,
                            "linear",
                            "${precarga_gif}",
                            'none',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${precarga_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid295",
                            "opacity",
                            6000,
                            500,
                            "linear",
                            "${incorrecto_2_contenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid330",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${SCRABBLE_RESPUESTAS}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid284",
                            "scaleX",
                            5000,
                            500,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid263",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid261",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "oral": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_HABLA',
                            type: 'image',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '109px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "auditiva": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_ESCUCHA',
                            type: 'image',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['0px', '-9px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Skills": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            id: 'Skills',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            display: 'none',
                            id: 'B_ESCRITURA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            id: 'B_ESCUCHA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            id: 'B_HABLA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            id: 'B_LECTURA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'escrita',
                            symbolName: 'escrita',
                            display: 'block',
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'oral',
                            symbolName: 'oral',
                            display: 'none',
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'lectora',
                            symbolName: 'lectora',
                            display: 'none',
                            rect: ['0px', '0px', '117', '113', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            display: 'none',
                            rect: ['112px', '2px', '117', '104', 'auto', 'auto']
                        },
                        {
                            rect: ['23px', '50px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['192px', '72px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(45,110,51,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '283px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_HABLA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCUCHA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTURA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
                            'block',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lectora}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oral}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "lectora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'V_LECTURA',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-13px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "escrita": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'V_ESCRITURA',
                            type: 'image',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '108px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "clock_circle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TIMER_CONTAINER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '2px', '70', '70', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '70px', '70px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['32px', '2px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['55px', '14px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['8px', '14px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['55px', '50px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['8px', '50px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['62px', '32px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['2px', '32px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['32px', '62px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            }]
                        },
                        {
                            id: 'clock_circle3',
                            rect: ['2px', '2px', '70', '70', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'clock_circle'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'segundero',
                            rect: ['34px', '6px', '6', '33', 'auto', 'auto'],
                            id: 'segundero'
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            rect: ['4px', '22px', '67px', '38px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '298px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "12": 1000,
                        "2": 2250
                    },
                    data: [
                        [
                            "eid1136",
                            "background-color",
                            1000,
                            500,
                            "linear",
                            "${Ellipse}",
                            'rgba(79,45,110,1)',
                            'rgba(79,45,110,0.61)'
                        ],
                        [
                            "eid1147",
                            "background-color",
                            1500,
                            500,
                            "linear",
                            "${Ellipse}",
                            'rgba(79,45,110,0.61)',
                            'rgba(79,45,110,1.00)'
                        ],
                        [
                            "eid1613",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${segundero}",
                            'block',
                            'none'
                        ],
                            [ "eid1709", "trigger", 2250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${segundero}', [] ] ]
                    ]
                }
            },
            "segundero": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '4px', '33px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(150,111,190,0.81)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid273",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid382",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid383",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid384",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid390",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid391",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid274",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${RoundRect3}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "portada_scrabble": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['286px', '0px', '144px', '142px', 'auto', 'auto'],
                            id: 'img_s',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_s.png', '0px', '0px']
                        },
                        {
                            rect: ['456px', '0px', '144px', '142px', 'auto', 'auto'],
                            id: 'img_c',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_c.png', '0px', '0px']
                        },
                        {
                            rect: ['626px', '0px', '144px', '142px', 'auto', 'auto'],
                            id: 'img_r',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_r.png', '0px', '0px']
                        },
                        {
                            rect: ['796px', '0px', '144px', '142px', 'auto', 'auto'],
                            id: 'img_a',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_a.png', '0px', '0px']
                        },
                        {
                            rect: ['966px', '0px', '144px', '156px', 'auto', 'auto'],
                            id: 'img_b',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_m.png', '0px', '0px']
                        },
                        {
                            rect: ['1136px', '0px', '144px', '142px', 'auto', 'auto'],
                            id: 'img_b2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_b.png', '0px', '0px']
                        },
                        {
                            rect: ['1306px', '0px', '144px', '142px', 'auto', 'auto'],
                            id: 'img_l',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_l.png', '0px', '0px']
                        },
                        {
                            rect: ['1476px', '0px', '144px', '142px', 'auto', 'auto'],
                            id: 'img_e',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_e.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'linea01',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '560px', '1830px', '8px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'linea02',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['188px', '573px', '1400px', '8px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '581px']
                        }
                    }
                },
                timeline: {
                    duration: 1876,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "top",
                            126,
                            250,
                            "easeInOutQuad",
                            "${img_c}",
                            '0px',
                            '368px'
                        ],
                        [
                            "eid34",
                            "top",
                            1626,
                            250,
                            "easeInOutQuad",
                            "${img_e}",
                            '0px',
                            '368px'
                        ],
                        [
                            "eid31",
                            "top",
                            876,
                            250,
                            "easeInOutQuad",
                            "${img_b}",
                            '0px',
                            '368px'
                        ],
                        [
                            "eid32",
                            "top",
                            1126,
                            250,
                            "easeInOutQuad",
                            "${img_b2}",
                            '0px',
                            '368px'
                        ],
                        [
                            "eid30",
                            "top",
                            626,
                            250,
                            "easeInOutQuad",
                            "${img_a}",
                            '0px',
                            '368px'
                        ],
                        [
                            "eid225",
                            "height",
                            0,
                            0,
                            "linear",
                            "${img_b}",
                            '156px',
                            '156px'
                        ],
                        [
                            "eid29",
                            "top",
                            376,
                            250,
                            "easeInOutQuad",
                            "${img_r}",
                            '0px',
                            '368px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            250,
                            "easeInOutQuad",
                            "${img_s}",
                            '0px',
                            '368px'
                        ],
                        [
                            "eid33",
                            "top",
                            1376,
                            250,
                            "easeInOutQuad",
                            "${img_l}",
                            '0px',
                            '368px'
                        ]
                    ]
                }
            },
            "btn_inicio_scrabble": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '225px', '50px', 'auto', 'auto'],
                            borderRadius: ['25px', '25px', '25px', '25px 25px'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(214,219,65,1.00)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]]
                        },
                        {
                            rect: ['14px', '11px', '200px', '36px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 28px;\">Iniciar</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '225px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SCRABBLE_SLIDE_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(122,28,28,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SCRABBLE_SLIDE_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,28,122,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SCRABBLE_SLIDE_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(28,122,113,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SCRABBLE_SLIDE_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(57,122,28,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cerrar_corr": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
                            id: 'cerrar',
                            transform: [[], [], [], ['0.35', '0.35']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "volver": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Volver a intentar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SCRABBLE_RESPUESTAS": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(221,119,17,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "volver2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '-1px', '213px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​Ver respuestas</p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contenedor_externo_edgeActions.js");
})("EDGE-61332511");