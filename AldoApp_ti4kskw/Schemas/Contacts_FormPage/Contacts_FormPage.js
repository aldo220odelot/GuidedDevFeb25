define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AddressList",
				"properties": [
					"_filterOptions"
				]
			},
			{
				"operation": "remove",
				"name": "CareerList",
				"properties": [
					"_filterOptions"
				]
			},
			{
				"operation": "insert",
				"name": "TabContainer_nlw0i5o",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_nlw0i5o_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_b7l3vbv",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_nlw0i5o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_zgm7klt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 11
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_zgm7klt",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_zgm7kltDS_Id",
					"columns": [
						{
							"id": "c54a9ea4-2f51-8ec1-089b-2109fee64e75",
							"code": "DataGrid_zgm7kltDS_AldoName",
							"caption": "#ResourceString(DataGrid_zgm7kltDS_AldoName)#",
							"dataValueType": 28
						},
						{
							"id": "2cce35a2-7141-bee3-529e-33d246e550cd",
							"code": "DataGrid_zgm7kltDS_AldoStatus",
							"path": "AldoStatus",
							"caption": "#ResourceString(DataGrid_zgm7kltDS_AldoStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "AldoRequestStatus"
						},
						{
							"id": "cc40f275-a338-f496-da6b-a430762b5eeb",
							"code": "DataGrid_zgm7kltDS_AldoRequestCategory",
							"path": "AldoRequestCategory",
							"caption": "#ResourceString(DataGrid_zgm7kltDS_AldoRequestCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "AldoRequestCategory"
						},
						{
							"id": "5bdaa389-8ef5-3f4c-1eb6-282ffd8c6b2b",
							"code": "DataGrid_zgm7kltDS_AldoSubcategory",
							"path": "AldoSubcategory",
							"caption": "#ResourceString(DataGrid_zgm7kltDS_AldoSubcategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "AldoRequestSubcategory"
						},
						{
							"id": "c9dfed2c-b650-b807-3fef-1500d3f555cd",
							"code": "DataGrid_zgm7kltDS_AldoOwner",
							"path": "AldoOwner",
							"caption": "#ResourceString(DataGrid_zgm7kltDS_AldoOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					]
				},
				"parentName": "GridContainer_b7l3vbv",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_zgm7klt": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_zgm7kltDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_zgm7kltDS_AldoName": {
									"modelConfig": {
										"path": "DataGrid_zgm7kltDS.AldoName"
									}
								},
								"DataGrid_zgm7kltDS_AldoStatus": {
									"modelConfig": {
										"path": "DataGrid_zgm7kltDS.AldoStatus"
									}
								},
								"DataGrid_zgm7kltDS_AldoRequestCategory": {
									"modelConfig": {
										"path": "DataGrid_zgm7kltDS.AldoRequestCategory"
									}
								},
								"DataGrid_zgm7kltDS_AldoSubcategory": {
									"modelConfig": {
										"path": "DataGrid_zgm7kltDS.AldoSubcategory"
									}
								},
								"DataGrid_zgm7kltDS_AldoOwner": {
									"modelConfig": {
										"path": "DataGrid_zgm7kltDS.AldoOwner"
									}
								},
								"DataGrid_zgm7kltDS_Id": {
									"modelConfig": {
										"path": "DataGrid_zgm7kltDS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_zgm7kltDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AldoRequests",
							"attributes": {
								"AldoName": {
									"path": "AldoName"
								},
								"AldoStatus": {
									"path": "AldoStatus"
								},
								"AldoRequestCategory": {
									"path": "AldoRequestCategory"
								},
								"AldoSubcategory": {
									"path": "AldoSubcategory"
								},
								"AldoOwner": {
									"path": "AldoOwner"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_zgm7kltDS": [
						{
							"attributePath": "AldoApplicant",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});