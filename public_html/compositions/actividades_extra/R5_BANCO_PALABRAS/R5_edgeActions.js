/***********************
 * Acciones de composición de Adobe Edge Animate
 *
 * Editar este archivo con precaución, teniendo cuidado de conservar 
 * las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
 * capacidad de interactuar con estas acciones en Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

    //Edge symbol: 'stage'
    (function (symbolName) {


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function (sym, e) {
            sym.stop();
            
            pagina_actual("1");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            sym.stop();
            
            pagina_actual("2");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function (sym, e) {
            sym.stop();
            
            pagina_actual("3");
        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function (sym, e) {
            sym.stop();
            pagina_actual("4");

        });
        //Edge binding end

        

        

        

        

        

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // Insertar código para ejecutarse cuando el símbolo se crea aquí
            //inicializarPlantilla(sym);
            //inicializarTimer(sym); //eventos de prueba

        });
        //Edge binding end

        

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${volver}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop(0);
         inicializarTimer(sym);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         do_submit(sym);

      });
      //Edge binding end

      

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'R6_portada'
    (function (symbolName) {

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_inicio}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.getComposition().getStage().play();
         

      });
      //Edge binding end

    })("R6_portada");
   //Edge symbol end:'R6_portada'

    //=========================================================

    //Edge symbol: 'R6_portada_1'
    (function (symbolName) {

    })("R6_1");
   //Edge symbol end:'R6_1'

    //=========================================================

    //Edge symbol: 'R6_2'
    (function (symbolName) {

    })("R6_2");
   //Edge symbol end:'R6_2'

    //=========================================================

    //Edge symbol: 'R6_3'
    (function (symbolName) {

    })("R6_3");
   //Edge symbol end:'R6_3'

    //=========================================================

    //Edge symbol: 'R6_4'
    (function (symbolName) {

    })("R6_4");
   //Edge symbol end:'R6_4'

    //=========================================================

    //Edge symbol: 'R6_5'
    (function (symbolName) {

    })("R6_5");
   //Edge symbol end:'R6_5'

   //=========================================================
   
   //Edge symbol: 'btn_inicio'
   (function(symbolName) {   
   
   })("btn_inicio");
   //Edge symbol end:'btn_inicio'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
   })("volver");
   //Edge symbol end:'volver'

   //=========================================================
   
   //Edge symbol: 'contenedorrespuestas'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 1;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 2;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 3;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 4;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 5;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

   })("contenedorrespuestas");
   //Edge symbol end:'contenedorrespuestas'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Submit");
   //Edge symbol end:'Submit'

   //=========================================================
   
   //Edge symbol: 'R6_6'
   (function(symbolName) {   
   
       })("R6_respuestas");
   //Edge symbol end:'R6_respuestas'

   //=========================================================
   
   //Edge symbol: 'btnInicio'
   (function(symbolName) {   
   
   })("btnInicio");
   //Edge symbol end:'btnInicio'

   //=========================================================
   
   //Edge symbol: 'TIMER_CONTAINER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.play("alerta");

      });
      //Edge binding end

   })("TIMER_CONTAINER");
   //Edge symbol end:'TIMER_CONTAINER'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4821767");