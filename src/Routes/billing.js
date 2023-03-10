const {Router} = require("express");

const router = Router();

//esta ruta es para mostrar las opciones de factura o boleta
router.get('/', (req, res)=>{
    res.render('routes/billing/billing.hbs');
});

router.get('/electronicBill', (req, res)=>{
    res.render('routes/billing/electronicBill.hbs');
});

router.post('/electronicBill', (req, res)=>{
    const env = {
        operacion: "generar_comprobante",
        tipo_de_comprobante: 1,
        serie: "FFF1",
        numero: 1,
        sunat_transaction: 1,
        cliente_tipo_de_documento: 6,
        cliente_numero_de_documento: "20600695771",
        cliente_denominacion: "NUBEFACT SA",
        cliente_direccion: "CALLE LIBERTAD 116 MIRAFLORES - LIMA - PERU",
        cliente_email: "tucliente@gmail.com",
        cliente_email_1: "",
        cliente_email_2: "",
        fecha_de_emision: "2-01-2023",
        fecha_de_vencimiento: "",
        moneda: 1,
        tipo_de_cambio: "",
        porcentaje_de_igv: 18.00,
        descuento_global: "",
        total_descuento: "",
        total_anticipo: "",
        total_gravada: 600,
        total_inafecta: "",
        total_exonerada: "",
        total_igv: 108,
        total_gratuita: "",
        total_otros_cargos: "",
        total: 708,
        percepcion_tipo: "",
        percepcion_base_imponible: "",
        total_percepcion: "",
        total_incluido_percepcion: "",
        retencion_tipo: "",
        retencion_base_imponible: "",
        total_retencion: "",
        total_impuestos_bolsas: "",
        detraccion: false,
        observaciones: "",
        documento_que_se_modifica_tipo: "",
        documento_que_se_modifica_serie: "",
        documento_que_se_modifica_numero: "",
        tipo_de_nota_de_credito: "",
        tipo_de_nota_de_debito: "",
        enviar_automaticamente_a_la_sunat: true,
        enviar_automaticamente_al_cliente: false,
        condiciones_de_pago: "",
        medio_de_pago: "",
        placa_vehiculo: "",
        orden_compra_servicio: "",  
        formato_de_pdf: "",
        generado_por_contingencia: "",
        bienes_region_selva: "",
        servicios_region_selva: "",
        items: [
              {
                 unidad_de_medida: "NIU",
                 codigo: "001",
                 codigo_producto_sunat: "10000000",
                 descripcion: "DETALLE DEL PRODUCTO",
                 cantidad: 1,
                 valor_unitario: 500,
                 precio_unitario: 590,
                 descuento: "",
                 subtotal: 500,
                 tipo_de_igv: 1,
                 igv: 90,
                 total: 590,
                 anticipo_regularizacion: false,
                 anticipo_documento_serie: "",
                 anticipo_documento_numero: ""
              }, {
                 unidad_de_medida: "ZZ",
                 codigo: "001",
                 codigo_producto_sunat: "20000000",
                 descripcion: "DETALLE DEL SERVICIO",
                 cantidad: 5,
                 valor_unitario: 20,
                 precio_unitario: 23.60,
                 descuento: "",
                 subtotal: 100,
                 tipo_de_igv: 1,
                 igv: 18,
                 total: 118,
                 anticipo_regularizacion: false,
                 anticipo_documento_serie: "",
                 anticipo_documento_numero: ""
              }
        ],
        guias: [
              {
                    guia_tipo: 1,
                    guia_serie_numero: "0001-23"
              }
        ], 
        venta_al_credito: [
              {
                  cuota: 1,
                  fecha_de_pago: "11-03-2021",
                  importe: 600
              },
              {
                  cuota: 2,
                  fecha_de_pago: "11-04-2021",
                  importe: 100
              },
              {
                  cuota: 3,
                  fecha_de_pago: "11-05-2021",
                  importe: 8
              }
          ]
      }
      
      
});

module.exports = router;