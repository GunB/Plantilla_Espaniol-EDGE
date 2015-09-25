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
            js+"pickManyUtilities.js",
            js+"timerUtilities.js",
            js+"interactionUtilities.js",
            js+"utility.js",
            js+"audioUtilities.js",
            js+"zoomUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'box_pregunta',
                            type: 'image',
                            rect: ['503px', '320px', '823px', '73px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"box_pregunta.png",'0px','0px']
                        },
                        {
                            id: 'texto_6',
                            type: 'text',
                            rect: ['656px', '336px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">4.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(79,45,110,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['469px', '419px', '401', '57', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['960px', '419px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['469', '511px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['960', '511px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'btn_audio_2',
                            type: 'rect',
                            rect: ['854px', '335px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.1784','1.1784']]
                        },
                        {
                            id: 'publico',
                            symbolName: 'publico',
                            display: 'none',
                            type: 'rect',
                            rect: ['1384px', '156px', '399', '509', 'auto', 'auto'],
                            transform: [[],[],[],['0.6','0.6']]
                        },
                        {
                            id: 'llamada',
                            symbolName: 'llamada',
                            display: 'none',
                            type: 'rect',
                            rect: ['1384', '124', '399', '574', 'auto', 'auto'],
                            transform: [[],[],[],['0.6','0.6']]
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
                    duration: 12745.25,
                    autoPlay: true,
                    data: [
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${publico}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "top",
                            500,
                            0,
                            "linear",
                            "${audio_1}",
                            '335px',
                            '335px'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${audio_1}",
                            '1.1784',
                            '1.1784'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${audio_1}",
                            '1.1784',
                            '1.1784'
                        ],
                        [
                            "eid85",
                            "left",
                            500,
                            0,
                            "linear",
                            "${audio_1}",
                            '854px',
                            '854px'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${llamada}",
                            'none',
                            'none'
                        ]
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
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            rect: ['18px', '3px', '128px', '31px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '161px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "10": 250
                    },
                    data: [
                        [
                            "eid46",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid47",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,0,0,1.00)',
                            'rgba(192,192,192,1)'
                        ],
                        [
                            "eid51",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid52",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
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
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
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
            "ayuda_01": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ayuda_1',
                            rect: ['0px', '0px', '131px', '76px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '76px']
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
            "PICK_1": {
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
                            display: 'block',
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '2px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'texto_2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​a. Paisaje</p>',
                            rect: ['40px', '-3px', '323px', '52px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${texto_2}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid95",
                            "font-size",
                            250,
                            0,
                            "linear",
                            "${texto_2}",
                            '36px',
                            '44px'
                        ],
                        [
                            "eid96",
                            "font-size",
                            500,
                            0,
                            "linear",
                            "${texto_2}",
                            '44px',
                            '36px'
                        ]
                    ]
                }
            },
            "PICK_2": {
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
                            display: 'block',
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '2px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover2',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'texto_4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​b. Masaje</p>',
                            rect: ['40px', '-3px', '323px', '52px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid77",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${texto_4}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid98",
                            "font-size",
                            250,
                            0,
                            "linear",
                            "${texto_4}",
                            '36px',
                            '44px'
                        ],
                        [
                            "eid99",
                            "font-size",
                            500,
                            0,
                            "linear",
                            "${texto_4}",
                            '44px',
                            '36px'
                        ],
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "PICK_3": {
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
                            display: 'block',
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '1px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover3',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'texto_3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​c. Mensaje</p>',
                            rect: ['40px', '-3px', '323px', '52px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${texto_3}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid101",
                            "font-size",
                            250,
                            0,
                            "linear",
                            "${texto_3}",
                            '36px',
                            '44px'
                        ],
                        [
                            "eid102",
                            "font-size",
                            500,
                            0,
                            "linear",
                            "${texto_3}",
                            '44px',
                            '36px'
                        ],
                        [
                            "eid79",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "PICK_4": {
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
                            display: 'block',
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '1px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover4',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'texto_5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​d. Peaje</p>',
                            rect: ['40px', '-3px', '323px', '52px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${texto_5}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid105",
                            "font-size",
                            250,
                            0,
                            "linear",
                            "${texto_5}",
                            '36px',
                            '44px'
                        ],
                        [
                            "eid104",
                            "font-size",
                            500,
                            0,
                            "linear",
                            "${texto_5}",
                            '44px',
                            '36px'
                        ],
                        [
                            "eid81",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover4}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "llamada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'ayuda_llamada_1',
                            type: 'image',
                            rect: ['-50px', '-72px', '499px', '718px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_llamada_1.png', '0px', '0px']
                        },
                        {
                            rect: ['38px', '453px', '315px', '85px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [35, 'px'], 'rgba(79,45,110,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​La palabra correcta contiene la letra <span style=\"font-weight: 700;\">p</span></p>',
                            align: 'center',
                            rect: ['43px', '453px', '314px', '55px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '399px', '574px']
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
            "publico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '399px', '509px', 'auto', 'auto'],
                            id: 'millonario',
                            fill: ['rgba(0,0,0,0)', 'images/millonario.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['83px', '211px', '13px', '197px', 'auto', 'auto'],
                            id: 'Rectangle3Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,253,254,1.00)']
                        },
                        {
                            rect: ['155px', '299px', '13px', '109px', 'auto', 'auto'],
                            id: 'Rectangle3Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,253,254,1.00)']
                        },
                        {
                            rect: ['228px', '242px', '13px', '166px', 'auto', 'auto'],
                            id: 'Rectangle3Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,253,254,1.00)']
                        },
                        {
                            rect: ['304px', '370px', '13px', '38px', 'auto', 'auto'],
                            id: 'Rectangle3Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,253,254,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '399px', '509px']
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
            "btn_audio_2": {
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
                            rect: ['-117px', '0px', '433px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_1',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['199px', '0px', '234px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            type: 'image',
                            id: 'play',
                            opacity: '1',
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_1.mp3'],
                            id: 'audiomp3_1',
                            rect: ['1146', '332', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 12745.25,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid89", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pre4_edgeActions.js");
})("EDGE-17298671");
