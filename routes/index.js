var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/business/getBusinessList', function (req, res, next) {
    let params = req.query
    if (!params.pageSize || !params.limit || !params.pageCurrent || !params.isInvalid){
        res.json({
                "code": "10002",
                "data": {},
                "msg": "查询商机管理列表数据失败",
                "status": "error"
            })
        return
    }
    res.json({
        "code": "10001",
        "data": {
            "rows": [{
                "accountNumber": "1",
                "actualController": "1",
                "agentBrand": "1",
                "annualInspection": "",
                "billingAddress": "1",
                "billingCompany": "1",
                "billingEndMonth": "1",
                "billingPhone": "1",
                "billingRemark": "1",
                "billingWithGoods": "0",
                "businessAttachmentList": [],
                "businessCapacitySituationList": [],
                "businessClassification": "",
                "businessContactsList": [],
                "businessDeliveryInfoList": [],
                "businessDesc": "",
                "businessDeveloper": "1",
                "businessLicenceAddress": "1",
                "businessLicenceCloseDate": 1527648798000,
                "businessLicenceCode": "1",
                "businessModel": "1",
                "businessPropulsionRecordList": [],
                "businessRegNo": "1",
                "businessScope": "777777",
                "businessTerm": "1",
                "businessYear": "",
                "companyArea": "",
                "companyNature": "",
                "companyRegTel": "1",
                "companyType": "1",
                "companyWebsite": "",
                "competitorAccount": "",
                "competitorName": "",
                "competitorQuotation": "",
                "conversionBy": "",
                "cooperativeAgent": "",
                "corporateRepresent": "1",
                "createById": "1",
                "createByName": "系统管理员",
                "creditCode": "1111111",
                "currency": "",
                "customerAndSettlement": "1",
                "customerFocus": "",
                "customerSource": "1",
                "customsCode": "1",
                "customsRegCode": "",
                "employeesNum": "1",
                "environment": "",
                "establishmentDate": 1527648744000,
                "estimatedImportVolume": "",
                "factoryAddress": "1",
                "fax": "1",
                "foreignName": "",
                "guarantee": "",
                "industry": "1010",
                "intentionBt": "1",
                "isInvalid": 0,
                "isProxyCard": 1,
                "lastYearPurchaseAmount": "1",
                "lastYearSalesAmount": "1",
                "lastYearVolume": "",
                "mainProduct": "1",
                "modeOfProduction": "1",
                "name": "XXXXXXXXX",
                "number": "201822094515",
                "officeAddress": "344444",
                "ogtqDate": 1527648774000,
                "openingBank": "1",
                "operatePlat": "1",
                "organizationCode": "",
                "paidInCapital": "",
                "plantArea": "",
                "regAddress": "牛栏前市场10",
                "registeredCapital": "1",
                "salesMarket": "1",
                "serialVersionUID": 1,
                "status": 1,
                "taxRegistrationNumber": "",
                "taxpayerNo": "1",
                "telephone": "1",
                "tradeSecuritySituation": "",
                "updateById": "1",
                "updateByName": "系统管理员",
                "visitingManager": ""
            }],
            "total": 1
        },
        "msg": "查询商机管理列表数据成功",
        "status": "success"
    })
});

module.exports = router;
