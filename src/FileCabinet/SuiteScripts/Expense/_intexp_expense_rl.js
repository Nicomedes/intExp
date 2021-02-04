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

            let recIntegracao = record.create({
                type: 'customrecord_intexp_expense'
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_centrodecusto',
                value: requestBody.centrodecusto
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_cpf',
                value: requestBody.cpf
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_cpfusuariolancamentode',
                value: requestBody.cpfusuariolancamentodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_datadespesa',
                value: requestBody.datadespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_datadespesaaprovacao',
                value: requestBody.datadespesaaprovacao
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_datadespesaaprovacaofo',
                value: requestBody.datadespesaaprovacaoformatada
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_datadespesaformatada',
                value: requestBody.datadespesaformatada
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_dataenviodespesaaprova',
                value: requestBody.dataenviodespesaaprovacao
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_dataenviodespesaaprfor',
                value: requestBody.dataenviodespesaaprovacaoformatada
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_datainicialpercursokm',
                value: requestBody.datainicialpercursokm
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_datalancamentodespesa',
                value: requestBody.datalancamentodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_datalancamentodespesaf',
                value: requestBody.datalancamentodespesaformatada
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_descrelatoriodespesa',
                value: requestBody.descrelatoriodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_despesapaga',
                value: requestBody.despesapaga
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_distanciakm',
                value: requestBody.distanciakm
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_iddespesa',
                value: requestBody.iddespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_idformapagamento',
                value: requestBody.idformapagamento
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_idrelatoriodespesa',
                value: requestBody.idrelatoriodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_idstatusaprovacao',
                value: requestBody.idstatusaprovacao
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_idstatusaprovacaorelat',
                value: requestBody.idstatusaprovacaorelatorio
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_idtiporeembolso',
                value: requestBody.idtiporeembolso
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_idusuario',
                value: requestBody.idusuario
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_integrado',
                value: requestBody.integrado
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_localdestinokm',
                value: requestBody.localdestinokm
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_localdestinokmmanual',
                value: requestBody.localdestinokmmanual
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_localpartidakm',
                value: requestBody.localpartidakm
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_localpartidakmmanual',
                value: requestBody.localpartidakmmanual
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_moeda',
                value: requestBody.moeda
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_moedapadrao',
                value: requestBody.moedapadrao
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_nomecliente',
                value: requestBody.nomecliente
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_nomeusuario',
                value: requestBody.nomeusuario
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_nomeusuariolancamentod',
                value: requestBody.nomeusuariolancamentodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_numeroos',
                value: requestBody.numeroos
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_observacao',
                value: requestBody.observacao
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_observacaoaprovador',
                value: requestBody.observacaoaprovador
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_statusdespesa',
                value: requestBody.statusdespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_tipodespesa',
                value: requestBody.tipodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_tiporeembolso',
                value: requestBody.tiporeembolso
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_urlimagemcomprovante',
                value: requestBody.urlimagemcomprovante
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_valoraprovadodespesa',
                value: requestBody.valoraprovadodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_valorconvetidodespesa',
                value: requestBody.valorconvetidodespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_valordespesa',
                value: requestBody.valordespesa
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_status',
                value: RECEIVED
            });

            recIntegracao.setValue({
                fieldId: 'custrecord_intexp_json',
                value: requestBody
            });

            recIntegracao.save({
                enableSourcing: true
            })

            return recIntegracao
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

        }

        return {
            get,
            put,
            post,
            delete: doDelete
        }

    });