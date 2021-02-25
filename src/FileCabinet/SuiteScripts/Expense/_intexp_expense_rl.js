/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(['N/record'],
    /**
     * @param{record} record
     */
    (record) => {
        /**
         * Defines the function that is executed when a GET request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const get = (requestParams) => {

        }

        /**
         * Defines the function that is executed when a PUT request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body are passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const put = (requestBody) => {

        }

        /**
         * Defines the function that is executed when a POST request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body is passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const post = (requestBody) => {

            const RECEIVED = 1;
            
            let requestbodyArray = requestBody;
            let responseArray = [];

            requestbodyArray.forEach(expense => {

                try {

                    let recIntegracao = record.create({
                        type: 'customrecord_intexp_expense'
                    });
    
                    // log.debug({
                    //     title: "object",
                    //     details: expense
                    // });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_centrodecusto',
                        value: expense.centrodecusto
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_cpf',
                        value: expense.cpf
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_cpfusuariolancamentode',
                        value: expense.cpfusuariolancamentodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_datadespesa',
                        value: expense.datadespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_datadespesaaprovacao',
                        value: expense.datadespesaaprovacao
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_datadespesaaprovacaofo',
                        value: expense.datadespesaaprovacaoformatada
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_datadespesaformatada',
                        value: expense.datadespesaformatada
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_dataenviodespesaaprova',
                        value: expense.dataenviodespesaaprovacao
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_dataenviodespesaaprfor',
                        value: expense.dataenviodespesaaprovacaoformatada
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_datainicialpercursokm',
                        value: expense.datainicialpercursokm
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_datalancamentodespesa',
                        value: expense.datalancamentodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_datalancamentodespesaf',
                        value: expense.datalancamentodespesaformatada
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_descrelatoriodespesa',
                        value: expense.descrelatoriodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_despesapaga',
                        value: expense.despesapaga
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_distanciakm',
                        value: expense.distanciakm
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_iddespesa',
                        value: expense.iddespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_idformapagamento',
                        value: expense.idformapagamento
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_idrelatoriodespesa',
                        value: expense.idrelatoriodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_idstatusaprovacao',
                        value: expense.idstatusaprovacao
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_idstatusaprovacaorelat',
                        value: expense.idstatusaprovacaorelatorio
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_idtiporeembolso',
                        value: expense.idtiporeembolso
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_idusuario',
                        value: expense.idusuario
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_integrado',
                        value: expense.integrado
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_localdestinokm',
                        value: expense.localdestinokm
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_localdestinokmmanual',
                        value: expense.localdestinokmmanual
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_localpartidakm',
                        value: expense.localpartidakm
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_localpartidakmmanual',
                        value: expense.localpartidakmmanual
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_moeda',
                        value: expense.moeda
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_moedapadrao',
                        value: expense.moedapadrao
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_nomecliente',
                        value: expense.nomecliente
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_nomeusuario',
                        value: expense.nomeusuario
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_nomeusuariolancamentod',
                        value: expense.nomeusuariolancamentodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_numeroos',
                        value: expense.numeroos
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_observacao',
                        value: expense.observacao
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_observacaoaprovador',
                        value: expense.observacaoaprovador
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_statusdespesa',
                        value: expense.statusdespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_tipodespesa',
                        value: expense.tipodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_tiporeembolso',
                        value: expense.tiporeembolso
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_urlimagemcomprovante',
                        value: expense.urlimagemcomprovante
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_valoraprovadodespesa',
                        value: expense.valoraprovadodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_valorconvetidodespesa',
                        value: expense.valorconvetidodespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_valordespesa',
                        value: expense.valordespesa
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_status',
                        value: RECEIVED
                    });
    
                    recIntegracao.setValue({
                        fieldId: 'custrecord_intexp_json',
                        value: expense
                    });
    
                    responseArray.push(
                        recIntegracao.save({
                        enableSourcing: true
                    })); 
    
                } catch (e) {
    
                    log.error({
                        title: 'error',
                        details: e
                    });
    
                }
                
                
            });

            // log.debug({
            //     title: "Response Array",
            //     details: responseArray
            // });

            return responseArray
        }

        /**
         * Defines the function that is executed when a DELETE request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters are passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const doDelete = (requestParams) => {

            try{

                var salesOrderRecord = record.delete({
                    type: 'customrecord_intexp_expense',
                    id: requestParams.id,
                 });

            } catch(e){

                log.error({
                    title: 'DELETE error',
                    details: e
                });

            }

            return String(requestParams.id)

        }

        return {
            get,
            put,
            post,
            delete: doDelete
        }

    });