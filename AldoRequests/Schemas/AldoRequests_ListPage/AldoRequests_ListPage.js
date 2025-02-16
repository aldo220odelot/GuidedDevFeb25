define("AldoRequests_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"visible": true,
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_AldoName",
							"caption": "#ResourceString(PDS_AldoName)#",
							"dataValueType": 1,
							"width": 160
						},
						{
							"id": "548ad5e4-c1bd-13de-efbe-5dd95af68897",
							"code": "PDS_AldoStatus",
							"path": "AldoStatus",
							"caption": "#ResourceString(PDS_AldoStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "AldoRequestStatus",
							"width": 184
						},
						{
							"id": "b4f5f4b7-2ee7-eebd-55d3-a7f043f56152",
							"code": "PDS_AldoRequestCategory",
							"path": "AldoRequestCategory",
							"caption": "#ResourceString(PDS_AldoRequestCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "AldoRequestCategory"
						},
						{
							"id": "33dd03c3-0de4-a967-119f-443acf58c146",
							"code": "PDS_AldoSubcategory",
							"path": "AldoSubcategory",
							"caption": "#ResourceString(PDS_AldoSubcategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "AldoRequestSubcategory"
						},
						{
							"id": "85a326cf-40e7-8d70-51f1-04a960c1ffec",
							"code": "PDS_AldoOwner",
							"path": "AldoOwner",
							"caption": "#ResourceString(PDS_AldoOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "b9ad437b-4cdc-a1b3-082b-8f7b23377463",
							"code": "PDS_AldoApplicant",
							"path": "AldoApplicant",
							"caption": "#ResourceString(PDS_AldoApplicant)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 187
						},
						{
							"id": "fb15db14-5a72-a7b9-e639-d45c2fe6d99b",
							"code": "PDS_AldoApplicantType",
							"path": "AldoApplicant.Type",
							"caption": "#ResourceString(PDS_AldoApplicantType)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContactType",
							"width": 149
						},
						{
							"id": "bb81f07e-85e6-1354-48e5-3109849847ec",
							"code": "PDS_AldoRequestExpensesAldoRequestIdCount9a739980",
							"path": "[AldoRequestExpenses:AldoRequest].Id",
							"caption": "#ResourceString(PDS_AldoRequestExpensesAldoRequestIdCount9a739980)#",
							"dataValueType": 4,
							"referenceSchemaName": "AldoRequestExpenses",
							"width": 209
						},
						{
							"id": "7fa45f92-2027-614c-af49-803a117bdcab",
							"code": "PDS_AldoRequestExpensesAldoRequestAldoAmountSumac12938c",
							"path": "[AldoRequestExpenses:AldoRequest].AldoAmount",
							"caption": "#ResourceString(PDS_AldoRequestExpensesAldoRequestAldoAmountSumac12938c)#",
							"dataValueType": 6,
							"referenceSchemaName": "AldoRequestExpenses",
							"width": 160
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
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
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"selectionState",
					"_selectionOptions"
				]
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LookupQuickFilterByTag",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema"
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Tag_Virtual_Column"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_neb8fwm",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_neb8fwm_config_caption)#",
						"hint": "",
						"icon": "filter-funnel-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_neb8fwm_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "AldoApplicant"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_neb8fwm_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_p691mh5",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_p691mh5_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"defaultValue": null
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_p691mh5_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_p691mh5_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_o31rerg",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_o31rerg_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "filter-column-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_o31rerg_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"ddb1af18-d4a4-4aaa-971a-549f057e44bb": {
																"filterType": 4,
																"comparisonType": 4,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "AldoStatus"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "AldoRequestStatus",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Canceled",
																				"Id": "69ab22f5-ae58-403d-87c9-12d7f412b67c",
																				"value": "69ab22f5-ae58-403d-87c9-12d7f412b67c",
																				"displayValue": "Canceled"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Completed",
																				"Id": "a45f7d18-61f3-4995-914f-bab53d3eccf6",
																				"value": "a45f7d18-61f3-4995-914f-bab53d3eccf6",
																				"displayValue": "Completed"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "AldoRequests"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_o31rerg_config_caption)#",
													"hint": "",
													"defaultValue": false,
													"approachState": true,
													"icon": "filter-column-icon",
													"iconPosition": "left-icon"
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_o31rerg_Value"
						]
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "AldoRequests",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": []
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					}
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wxs9xtw",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "large",
						"right": "small",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_40hemln",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_40hemln_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_40hemln_Data",
								"schemaName": "AldoRequests",
								"filters": {
									"filter": {
										"items": {
											"c128a532-40f7-47a2-9652-03d75bcec8d7": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "AldoStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "AldoRequestStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Approval",
																"Id": "5c34041c-abbf-4fbd-8149-d49f9adf368a",
																"value": "5c34041c-abbf-4fbd-8149-d49f9adf368a",
																"displayValue": "Approval"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "In progress",
																"Id": "8ae01e73-4634-4965-b2e4-b1f1673283a4",
																"value": "8ae01e73-4634-4965-b2e4-b1f1673283a4",
																"displayValue": "In progress"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "New",
																"Id": "9f28d705-021a-45fe-9918-6fcf27f9b5eb",
																"value": "9f28d705-021a-45fe-9918-6fcf27f9b5eb",
																"displayValue": "New"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AldoRequests"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
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
								},
								"AldoApplicant": {
									"path": "AldoApplicant"
								},
								"AldoApplicantType": {
									"type": "ForwardReference",
									"path": "AldoApplicant.Type"
								},
								"AldoRequestExpensesAldoRequestIdCount9a739980": {
									"type": "Aggregation",
									"path": "[AldoRequestExpenses:AldoRequest].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count",
										"filter": null
									}
								},
								"AldoRequestExpensesAldoRequestAldoAmountSumac12938c": {
									"type": "Aggregation",
									"path": "[AldoRequestExpenses:AldoRequest].AldoAmount",
									"aggregationConfig": {
										"aggregationFunction": "Sum",
										"filter": null
									}
								}
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_40hemln_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "full-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "FlexContainer_wxs9xtw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GaugeWidget_pl1yvbi",
				"values": {
					"type": "crt.GaugeWidget",
					"config": {
						"title": "#ResourceString(GaugeWidget_pl1yvbi_title)#",
						"data": {
							"providing": {
								"attribute": "GaugeWidget_pl1yvbi_Data",
								"schemaName": "AldoRequests",
								"filters": {
									"filter": {
										"items": {
											"20280e50-19d9-4b81-8f39-53fe5be1b941": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "AldoStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "AldoRequestStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Completed",
																"Id": "a45f7d18-61f3-4995-914f-bab53d3eccf6",
																"value": "a45f7d18-61f3-4995-914f-bab53d3eccf6",
																"displayValue": "Completed"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AldoRequests"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
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
								},
								"AldoApplicant": {
									"path": "AldoApplicant"
								},
								"AldoApplicantType": {
									"type": "ForwardReference",
									"path": "AldoApplicant.Type"
								},
								"AldoRequestExpensesAldoRequestIdCount9a739980": {
									"type": "Aggregation",
									"path": "[AldoRequestExpenses:AldoRequest].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count",
										"filter": null
									}
								},
								"AldoRequestExpensesAldoRequestAldoAmountSumac12938c": {
									"type": "Aggregation",
									"path": "[AldoRequestExpenses:AldoRequest].AldoAmount",
									"aggregationConfig": {
										"aggregationFunction": "Sum",
										"filter": null
									}
								}
							}
						},
						"text": {
							"template": "#ResourceString(GaugeWidget_pl1yvbi_template)#",
							"metricMacros": "{0}"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "full-fill",
						"thresholds": {
							"0": {
								"color": "#ff3e13"
							},
							"4": {
								"color": "#0058ef"
							},
							"7": {
								"color": "#23ac14"
							},
							"10": {
								"color": "#23ac14"
							}
						},
						"min": 0,
						"max": 10,
						"orderDirection": 2
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "FlexContainer_wxs9xtw",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					},
					"FolderTree_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_items_DS.FilterData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "FolderTree"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
					"FolderTree_active_folder_filter": {
						"value": {}
					},
					"FolderTree_items_DS_filter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "EntitySchemaName"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "AldoRequests"
										}
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "asc",
									"columnName": "AldoSubcategory"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "LookupQuickFilterByTag_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_neb8fwm_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_p691mh5_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_o31rerg_Items",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_AldoName": {
						"modelConfig": {
							"path": "PDS.AldoName"
						}
					},
					"PDS_AldoStatus": {
						"modelConfig": {
							"path": "PDS.AldoStatus"
						}
					},
					"PDS_AldoRequestCategory": {
						"modelConfig": {
							"path": "PDS.AldoRequestCategory"
						}
					},
					"PDS_AldoSubcategory": {
						"modelConfig": {
							"path": "PDS.AldoSubcategory"
						}
					},
					"PDS_AldoOwner": {
						"modelConfig": {
							"path": "PDS.AldoOwner"
						}
					},
					"PDS_AldoApplicant": {
						"modelConfig": {
							"path": "PDS.AldoApplicant"
						}
					},
					"PDS_AldoApplicantType": {
						"modelConfig": {
							"path": "PDS.AldoApplicantType"
						}
					},
					"PDS_AldoRequestExpensesAldoRequestIdCount9a739980": {
						"modelConfig": {
							"path": "PDS.AldoRequestExpensesAldoRequestIdCount9a739980"
						}
					},
					"PDS_AldoRequestExpensesAldoRequestAldoAmountSumac12938c": {
						"modelConfig": {
							"path": "PDS.AldoRequestExpensesAldoRequestAldoAmountSumac12938c"
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
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
									},
									"AldoApplicant": {
										"path": "AldoApplicant"
									},
									"AldoApplicantType": {
										"type": "ForwardReference",
										"path": "AldoApplicant.Type"
									},
									"AldoRequestExpensesAldoRequestIdCount9a739980": {
										"type": "Aggregation",
										"path": "[AldoRequestExpenses:AldoRequest].Id",
										"aggregationConfig": {
											"aggregationFunction": "Count",
											"filter": null
										}
									},
									"AldoRequestExpensesAldoRequestAldoAmountSumac12938c": {
										"type": "Aggregation",
										"path": "[AldoRequestExpenses:AldoRequest].AldoAmount",
										"aggregationConfig": {
											"aggregationFunction": "Sum",
											"filter": null
										}
									}
								}
							},
							"scope": "viewElement"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});