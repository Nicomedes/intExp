/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(['N/record', 'N/runtime', 'N/search', 'N/format'],
    /**
 * @param{record} record
 * @param{runtime} runtime
 * @param{search} search
 * @param{format} format
 */
    (record, runtime, search,format) => {

        function getInputData (context) {

            return search.create({
                type: "customrecord_intexp_expense",
                filters:
                    [
                        ["custrecord_intexp_status","anyof","4"]
                    ],
                columns:
                    [
                        "custrecord_intexp_idrelatoriodespesa"
                    ]
            });

        }

        function map (context) {

            let keyPairObj;

            try {

                let searchResult = JSON.parse(context.value);

                let idDespesa = searchResult.values["custrecord_intexp_idrelatoriodespesa"];
                let rec_id = searchResult.id;

                keyPairObj =  {
                    key: idDespesa,
                    value: rec_id
                };

            } catch (e) {

                log.debug({title: 'e',  details: e});

            }

            context.write(keyPairObj);

        }

        function reduce (context) {
            //parsing Ids to integer
            let integratedExpensesIds = context.values.map(x => parseInt(x));


               // Searching all related integration records
                let objSearch = search.create({
                    type: "customrecord_intexp_expense",
                    filters: [{
                        name: 'internalid',
                        operator: search.Operator.ANYOF,
                        values: integratedExpensesIds
                    }],
                    columns:
                        [
                            "internalid",
                            "custrecord_intexp_cat_despesa_ns",
                            "custrecord_intexp_centrodecusto_ns",
                            "custrecord_intexp_datadadespesa_ns",
                            "custrecord_intexp_datalancamento_ns",
                            "custrecord_intexp_funcionario_ns",
                            "custrecord_intexp_valor_ns",
                            'custrecord_intexp_idrelatoriodespesa',
                            'custrecord_intexp_observacao',
                            'custrecord_intexp_iddespesa'
                        ]
                });

               // let searchResultCount = objSearch.runPaged().count;

                let body = true;
                let line = 0;

                let recExpenseObj = record.create({
                    type: record.Type.EXPENSE_REPORT
                });

                objSearch.run().each(function (result){

                    try {

                        if (body) {


                            //log.debug({title: 'Check Date', details : result.getValue('custrecord_intexp_datalancamento_ns')})


                            recExpenseObj.setValue ('trandate', formatDateToNS(result.getValue('custrecord_intexp_datadadespesa_ns')));
                            //recExpenseObj.setValue ('trandate', result.getValue('custrecord_intexp_datadadespesa_ns'));
                            recExpenseObj.setValue('entity', result.getValue('custrecord_intexp_funcionario_ns'));
                            recExpenseObj.setValue('custbody_intexp_idexpensemobi', result.getValue('custrecord_intexp_idrelatoriodespesa'));
                            recExpenseObj.setValue('memo', result.getValue('custrecord_intexp_observacao'));
                            recExpenseObj.setValue('complete', true);
                            recExpenseObj.setValue('supervisorapproval', true);
                            recExpenseObj.setValue('accountingapproval', true);
                            recExpenseObj.setValue ('externalid',result.getValue('custrecord_intexp_iddespesa'));
                            body = false;
                        }

                        recExpenseObj.insertLine({
                            sublistId: 'expense',
                            line: line
                        });

                        // expense:Object
                        // amount:"2.86"
                        // billableenabled:"F"
                        // category:"1"
                        // category_display:"Tipo de Despesa 1"
                        // classinactive:"F"
                        // corporatecreditcard:"F"
                        // currency:"5"
                        // departmentinactive:"F"
                        // exchangerate:"1.00"
                        // expenseaccount:"58"
                        // expensedate:"21/01/2021"
                        // foreignamount:"2.86"
                        // isbillable:"F"
                        // ismemomissing:"F"
                        // isnonreimbursable:"F"
                        // isreceiptmissing:"F"
                        // isviolatingpolicy:"F"
                        // line:"1"
                        // linked:"F"
                        // locationinactive:"F"
                        // numrules:"0"
                        // personalexpense:"F"
                        // raterequired:"F"
                        // receipt:"F"
                        // refnumber:"1"

                        recExpenseObj.setSublistValue({
                            sublistId: 'expense',
                            fieldId: 'amount',
                            line: line,
                            value: result.getValue('custrecord_intexp_valor_ns')
                        });

                        //TODO: Check Currency Mapping
                        recExpenseObj.setSublistValue({
                            sublistId: 'expense',
                            fieldId: 'currency',
                            line: line,
                            value: 5
                        });


                        recExpenseObj.setSublistValue({
                            sublistId: 'expense',
                            fieldId: 'category',
                            line: line,
                            value: result.getValue('custrecord_intexp_cat_despesa_ns')
                        });

                        recExpenseObj.setSublistValue({
                            sublistId: 'expense',
                            fieldId: 'expensedate',
                            line: line,
                            value: formatDateToNS(result.getValue('custrecord_intexp_datadadespesa_ns'))
                        });

                        recExpenseObj.setSublistValue({
                            sublistId: 'expense',
                            fieldId: 'class',
                            line: line,
                            value: result.getValue('custrecord_intexp_centrodecusto_ns')
                        });

                        line += 1;

                    } catch (e) {

                        log.error({title:'Reduce - Error', details:e });

                    }

                    return true

                });// End Each

            log.debug({title: 'linhas', details: line });

            try {

                recExpenseObj.save({enableSourcing: true, ignoreMandatoryFields:true });

            } catch (e) {
                log.debug({title: 'e',  details: e });

            }

        }


        function  summarize (context) {
            // log.debug({title:'Summarize'});
            //
            //
            // log.debug({title:'Summary Time', details: 'Total Seconds: '+ context.seconds});
            // log.debug({title:'Summary Usage', details: 'Total Usage: '+ context.usage});
            // log.debug({title:'Summary Yields', details: 'Total Yields: '+ context.yields});
            //
            // log.debug({title:'Input Summary: ', details: context.inputSummary});
            // log.debug({title:'Map Summary: ' , details: context.mapSummary});
            // log.debug({title:'Reduce Summary: ' , details: context.reduceSummary});
            //
            // //Grab Map errors
            // context.mapSummary.errors.iterator().each(function(key, value) {
            //     log.error({title: 'Map Errors', details: key + 'ERROR String: ' + value});
            //
            //
            //     return true;
            // });


        }

        return {
            getInputData: getInputData,
            map: map,
            reduce: reduce,
            summarize: summarize
        };

        function formatDateToNS (initialDateString) {

            return  format.parse( {value: initialDateString , type: format.Type.DATE})

        }

    });
