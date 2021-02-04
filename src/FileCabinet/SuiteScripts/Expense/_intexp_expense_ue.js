/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["N/record","N/format","N/search", "N/runtime"], function(record, format, search,runtime) {


    function afterSubmit(context) {

        log.debug({title: 'context', details: context});

        const MAPPING_ERROR = 2
        const MAPPING_SUCCESS = 4

        //Getting new record data
        let expenseData = record.load({
            type: 'customrecord_intexp_expense',
            id: context.newRecord.id
        })
        let expenseType = expenseData.getValue({fieldId: 'custrecord_intexp_tipodespesa'})
        let costCenter = expenseData.getValue({fieldId: 'custrecord_intexp_centrodecusto'})
        let cpfusuariolancamentodespesa = expenseData.getValue({fieldId: 'custrecord_intexp_cpfusuariolancamentode'})
        let valorconvetidodespesa = expenseData.getValue({fieldId: 'custrecord_intexp_valorconvetidodespesa'})
        let datalancamentodespesa = expenseData.getValue({fieldId: 'custrecord_intexp_datalancamentodespesa'})
        let datadespesa = expenseData.getValue({fieldId: 'custrecord_intexp_datadespesa'})
        let status
        let logMapping = ""


        // Mapping expense type TODO: Check possible returns from API to include more cases.
        let categoryId;
        switch (expenseType){
            case 'Quilometragem':
                categoryId = 1
                break;
            default:
                categoryId = 0
        }

        if (categoryId === 0){
            status = MAPPING_ERROR
            logMapping = '- Expense Category Not Found - \n'
       } else {
            expenseData.setValue({
                fieldId: "custrecord_intexp_cat_despesa_ns",
                value: categoryId
            })
        }

        //Mapping Cost Center TODO: Check possible returns from API to include more cost centers.
        let costCenterId
        switch (costCenter){
            case 'CC1':
                costCenterId = 1
                break;
            default:
                costCenterId = 0
        }

        if (costCenterId === 0){
            status = MAPPING_ERROR
            logMapping += '- Cost Center Not Found -\n'
        } else {
            expenseData.setValue({
                fieldId: "custrecord_intexp_centrodecusto_ns",
                value: costCenterId
            })
        }

        //Getting script parameters
        let thisScript = runtime.getCurrentScript()

        //Mapping CPF field
        let cpfFieldId = thisScript.getParameter({
            name: 'custscript_intexp_param_id_cpf'
        });

        //Searching employee
        let employeeId
        let employeesearchObj = search.create({
            type: search.Type.EMPLOYEE,
            filters: [{
                name: cpfFieldId,
                operator: search.Operator.STARTSWITH,
                values: cpfusuariolancamentodespesa
            }],
            columns: [
                search.createColumn({
                    name: 'internalid',
                    label: 'Internal ID'
                })]
        })

        //Getting Employee ID
        employeesearchObj.run().each(function (result){
            employeeId = result.id
            return true
        })

        //Mapping Employee Field
        if (!employeeId){
            status = MAPPING_ERROR
            logMapping += '- Employee Not Found -\n'
        } else {
            expenseData.setValue({
                fieldId: "custrecord_intexp_funcionario_ns",
                value: employeeId
            })
        }

        //Mapping Expense Value
        expenseData.setValue({
            fieldId: "custrecord_intexp_valor_ns",
            value: parseFloat(valorconvetidodespesa)
        })

        //Parsing expense record date
        let parsedDataLancamentoDespesa = formatDateToNS(datalancamentodespesa);



        //Mapping expense record date
        expenseData.setValue({
            fieldId: "custrecord_intexp_datalancamento_ns",
            value: parsedDataLancamentoDespesa
        })

        //Parsing expense record date
        let parsedDataDespesa = formatDateToNS(datadespesa);

        //Setting Expense Date
        expenseData.setValue({
            fieldId: 'custrecord_intexp_datadadespesa_ns',
            value: parsedDataDespesa
        })

        //Checking if there are any errors
        if (!status){
            status = MAPPING_SUCCESS
        }

        expenseData.setValue({
            fieldId: 'custrecord_intexp_status',
            value: status
        })

        expenseData.setValue({
            fieldId: 'custrecord_intexp_logdomapeamento',
            value: logMapping
        })

        try {

            expenseData.save({
                enableSourcing: true
            })
        } catch (e) {

            log.error({
                title : 'error',
                details: e
            });

        }
    }

    return {
        afterSubmit: afterSubmit
    }

    function formatDateToNS (initialDateString) {

        return  format.parse( {value: new Date (initialDateString) , type: format.Type.DATE})

    }
});
