define("AldoRequests_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "partiallyColored",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "AldoRequests"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "c85b8e39-7493-4413-9bca-200cd9028599",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_kn25qxg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_kn25qxg_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FlexContainer_uvzansg",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_thr09ie",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": true,
					"entityName": "AldoRequests",
					"visible": true
				},
				"parentName": "FlexContainer_uvzansg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AldoName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AldoName",
					"control": "$AldoName",
					"labelPosition": "auto",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_pr3xedy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_v74c0md",
					"labelPosition": "auto",
					"control": "$LookupAttribute_v74c0md",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_cmv5c4v",
				"values": {
					"for": "TabPanel_d5dk3wl",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_m8zgqn8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_sdnlmzj",
					"labelPosition": "auto",
					"control": "$LookupAttribute_sdnlmzj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_jc5b8r7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_88o5cnx",
					"labelPosition": "auto",
					"control": "$NumberAttribute_88o5cnx",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Approval_9ne7ryg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "AldoRequests",
					"approvalEntityName": "SysApproval",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TabPanel_d5dk3wl",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_qgyvs86",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_qgyvs86_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "default-tab-icon"
				},
				"parentName": "TabPanel_d5dk3wl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_873nvnk",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_qgyvs86",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_0saielv",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_0saielv_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_873nvnk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5pp3y3e",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_qgyvs86",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_tn9kvpn",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_v74c0md"
				},
				"parentName": "FlexContainer_5pp3y3e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_0kpj3ec",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.AldoApplicantEmail",
					"control": "$AldoApplicantEmail",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_0kpj3ec_caption)#",
					"readonly": true
				},
				"parentName": "FlexContainer_5pp3y3e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PhoneInput_158xk34",
				"values": {
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.AldoApplicantMobilePhone",
					"control": "$AldoApplicantMobilePhone",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(PhoneInput_158xk34_caption)#",
					"readonly": true
				},
				"parentName": "FlexContainer_5pp3y3e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_a3sg9r2",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_ryrvdle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_m887f66",
					"labelPosition": "auto",
					"control": "$LookupAttribute_m887f66",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_a3sg9r2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_czgyk94",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_3z4jin9",
					"labelPosition": "auto",
					"control": "$LookupAttribute_3z4jin9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_a3sg9r2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_zi7xnqs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_p8nq52a",
					"labelPosition": "auto",
					"control": "$LookupAttribute_p8nq52a",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_a3sg9r2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_pfk1qo8",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_78fmjnl",
					"labelPosition": "above",
					"control": "$StringAttribute_78fmjnl",
					"visible": true,
					"placeholder": "#ResourceString(RichTextEditor_pfk1qo8_placeholder)#",
					"tooltip": "#ResourceString(RichTextEditor_pfk1qo8_tooltip)#",
					"toolbarDisplayMode": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4d7g3h2",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_5y96nhl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_5y96nhl_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": true
				},
				"parentName": "GridContainer_4d7g3h2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_bpsil7s",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ajclumv",
					"labelPosition": "above",
					"control": "$LookupAttribute_ajclumv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_4d7g3h2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ListAction_r5sfjpb",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_bpsil7s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_aoft811",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_4wvb5id",
					"labelPosition": "above",
					"control": "$StringAttribute_4wvb5id",
					"multiline": false,
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "GridContainer_4d7g3h2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lgq7uzv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "center",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_4d7g3h2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Button_menfhmr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_menfhmr_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "AldoProcess_f97913b",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RequestId"
						}
					},
					"clickMode": "default",
					"icon": "horn-button-icon"
				},
				"parentName": "FlexContainer_lgq7uzv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_9i067y6",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_9i067y6_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_d1p9cku",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9i067y6",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_s8tllch",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_d1p9cku",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_0rmf8z0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_0rmf8z0_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "ApprovalList_45dlhb7DS"
						}
					}
				},
				"parentName": "FlexContainer_s8tllch",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SearchFilter_ffcfmt7",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_ffcfmt7_placeholder)#",
					"targetAttributes": [
						"ApprovalList_45dlhb7"
					]
				},
				"parentName": "FlexContainer_s8tllch",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_l1jo16o",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9i067y6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalList_45dlhb7",
				"values": {
					"type": "crt.ApprovalList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"features": {
						"editable": false
					},
					"entityName": "AldoRequests",
					"approvalEntityName": "SysApproval",
					"items": "$ApprovalList_45dlhb7",
					"primaryColumnName": "ApprovalList_45dlhb7DS_Id",
					"columns": [
						{
							"id": "65a609ee-b15c-46dc-26a8-7edb50c1ae20",
							"code": "ApprovalList_45dlhb7DS_VisaOwner",
							"caption": "#ResourceString(ApprovalList_45dlhb7DS_VisaOwner)#",
							"dataValueType": 10,
							"width": 137
						},
						{
							"id": "698aa41c-0941-eb39-5e36-ec34482388b3",
							"code": "ApprovalList_45dlhb7DS_Objective",
							"caption": "#ResourceString(ApprovalList_45dlhb7DS_Objective)#",
							"dataValueType": 30,
							"width": 175
						},
						{
							"id": "8e247255-0a72-804b-6ad6-40a8ba4dcb9b",
							"code": "ApprovalList_45dlhb7DS_CreatedOn",
							"caption": "#ResourceString(ApprovalList_45dlhb7DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 256
						},
						{
							"id": "5dc6d406-d522-f939-e6f3-5b48a49f3d9a",
							"code": "ApprovalList_45dlhb7DS_SetDate",
							"caption": "#ResourceString(ApprovalList_45dlhb7DS_SetDate)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "737ba6ed-d353-86d9-4484-2967aacf87e2",
							"code": "ApprovalList_45dlhb7DS_SetBy",
							"caption": "#ResourceString(ApprovalList_45dlhb7DS_SetBy)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "7dc81afd-1e10-e987-cfda-8a3e5308ee7c",
							"code": "ApprovalList_45dlhb7DS_Status",
							"caption": "#ResourceString(ApprovalList_45dlhb7DS_Status)#",
							"dataValueType": 10,
							"width": 175
						}
					],
					"visible": true
				},
				"parentName": "GridContainer_l1jo16o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_4jj6ko0",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_4jj6ko0_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lym2ze0",
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
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "TabContainer_4jj6ko0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_9993bq9",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_9993bq9_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "TabContainer_4jj6ko0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_8ccdcq1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9993bq9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wpmm306",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_8ccdcq1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_3bvtnps",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_3bvtnps_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AldoRequestExpenses",
							"defaultValues": [
								{
									"attributeName": "AldoRequest",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_wpmm306",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_077syt7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_077syt7_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_xjkxmxgDS"
						}
					}
				},
				"parentName": "FlexContainer_wpmm306",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_jp26ush",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_jp26ush_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"filters": "$GridDetail_xjkxmxg | crt.ToCollectionFilters : 'GridDetail_xjkxmxg' : $GridDetail_xjkxmxg_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xjkxmxg_SelectionState",
							"dataSourceName": "GridDetail_xjkxmxgDS"
						}
					},
					"clickMode": "default",
					"icon": "delete-button-icon"
				},
				"parentName": "FlexContainer_wpmm306",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_prd71bw",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_prd71bw_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_xjkxmxg"
					]
				},
				"parentName": "FlexContainer_wpmm306",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_1jlswnh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_1jlswnh_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_wpmm306",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_q8xa1um",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_q8xa1um_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_xjkxmxg"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1jlswnh",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_3c9inok",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_3c9inok_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AldoRequestExpenses"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1jlswnh",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ovbprdd",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9993bq9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xjkxmxg",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_xjkxmxg",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_xjkxmxgDS_Id",
					"columns": [
						{
							"id": "d9c28ee7-a47d-d5e9-2da7-b449e8de51c5",
							"code": "GridDetail_xjkxmxgDS_AldoComment",
							"caption": "#ResourceString(GridDetail_xjkxmxgDS_AldoComment)#",
							"dataValueType": 28
						},
						{
							"id": "cca77d31-bc89-8f81-f8d5-700506b692a7",
							"code": "GridDetail_xjkxmxgDS_AldoAmount",
							"path": "AldoAmount",
							"caption": "#ResourceString(GridDetail_xjkxmxgDS_AldoAmount)#",
							"dataValueType": 6
						},
						{
							"id": "9a4c6fb7-da47-a011-1b84-2c88fec64822",
							"code": "GridDetail_xjkxmxgDS_AldoType",
							"path": "AldoType",
							"caption": "#ResourceString(GridDetail_xjkxmxgDS_AldoType)#",
							"dataValueType": 10,
							"referenceSchemaName": "AldoRequestExpenseType"
						},
						{
							"id": "742185d2-88b0-232b-d900-d5d042c73b1d",
							"code": "GridDetail_xjkxmxgDS_AldoImported",
							"path": "AldoImported",
							"caption": "#ResourceString(GridDetail_xjkxmxgDS_AldoImported)#",
							"dataValueType": 12
						}
					],
					"selectionState": "$GridDetail_xjkxmxg_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_xjkxmxg_SelectionState"
					}
				},
				"parentName": "GridContainer_ovbprdd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_5p6s09e",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_5p6s09e_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "gantt-chart-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_fkgu4u7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_5p6s09e",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_t6zrker",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_t6zrker_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_fkgu4u7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddNextStepBtn_rz638mx",
				"values": {
					"type": "crt.Button",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					},
					"layoutConfig": {}
				},
				"parentName": "FlexContainer_fkgu4u7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextSteps_gw5pboa",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"masterSchemaName": "AldoRequests"
				},
				"parentName": "TabContainer_5p6s09e",
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
					"AldoName": {
						"modelConfig": {
							"path": "PDS.AldoName"
						}
					},
					"StringAttribute_dz485n3": {
						"modelConfig": {
							"path": "PDS.AldoDescription"
						}
					},
					"StringAttribute_0df55pr": {
						"modelConfig": {
							"path": "PDS.AldoDescription"
						}
					},
					"LookupAttribute_v74c0md": {
						"modelConfig": {
							"path": "PDS.AldoApplicant"
						}
					},
					"LookupAttribute_sdnlmzj": {
						"modelConfig": {
							"path": "PDS.AldoOwner"
						}
					},
					"LookupAttribute_m887f66": {
						"modelConfig": {
							"path": "PDS.AldoStatus"
						}
					},
					"LookupAttribute_3z4jin9": {
						"modelConfig": {
							"path": "PDS.AldoRequestCategory"
						}
					},
					"LookupAttribute_p8nq52a": {
						"modelConfig": {
							"path": "PDS.AldoSubcategory"
						}
					},
					"NumberAttribute_88o5cnx": {
						"modelConfig": {
							"path": "PDS.AldoExpensesTotal"
						}
					},
					"AldoApplicantEmail": {
						"modelConfig": {
							"path": "PDS.AldoApplicantEmail"
						}
					},
					"AldoApplicantMobilePhone": {
						"modelConfig": {
							"path": "PDS.AldoApplicantMobilePhone"
						}
					},
					"GridDetail_xjkxmxg": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_xjkxmxgDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_xjkxmxgDS_AldoComment": {
									"modelConfig": {
										"path": "GridDetail_xjkxmxgDS.AldoComment"
									}
								},
								"GridDetail_xjkxmxgDS_AldoAmount": {
									"modelConfig": {
										"path": "GridDetail_xjkxmxgDS.AldoAmount"
									}
								},
								"GridDetail_xjkxmxgDS_AldoType": {
									"modelConfig": {
										"path": "GridDetail_xjkxmxgDS.AldoType"
									}
								},
								"GridDetail_xjkxmxgDS_AldoImported": {
									"modelConfig": {
										"path": "GridDetail_xjkxmxgDS.AldoImported"
									}
								},
								"GridDetail_xjkxmxgDS_Id": {
									"modelConfig": {
										"path": "GridDetail_xjkxmxgDS.Id"
									}
								}
							}
						}
					},
					"StringAttribute_78fmjnl": {
						"modelConfig": {
							"path": "PDS.AldoDescription1"
						}
					},
					"ApprovalList_45dlhb7": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_45dlhb7DS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_45dlhb7DS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_45dlhb7DS.VisaOwner"
									}
								},
								"ApprovalList_45dlhb7DS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_45dlhb7DS.Objective"
									}
								},
								"ApprovalList_45dlhb7DS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_45dlhb7DS.CreatedOn"
									}
								},
								"ApprovalList_45dlhb7DS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_45dlhb7DS.SetDate"
									}
								},
								"ApprovalList_45dlhb7DS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_45dlhb7DS.SetBy"
									}
								},
								"ApprovalList_45dlhb7DS_Status": {
									"modelConfig": {
										"path": "ApprovalList_45dlhb7DS.Status"
									}
								},
								"ApprovalList_45dlhb7DS_Id": {
									"modelConfig": {
										"path": "ApprovalList_45dlhb7DS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_ajclumv": {
						"modelConfig": {
							"path": "PDS.AldoFeedbackScore"
						}
					},
					"StringAttribute_4wvb5id": {
						"modelConfig": {
							"path": "PDS.AldoColumn11"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_xjkxmxgDS": [
							{
								"attributePath": "AldoRequest",
								"relationPath": "PDS.Id"
							}
						],
						"ApprovalList_45dlhb7DS": [
							{
								"attributePath": "EntityId",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "AldoRequests",
							"attributes": {
								"AldoApplicantEmail": {
									"path": "AldoApplicant.Email",
									"type": "ForwardReference"
								},
								"AldoApplicantMobilePhone": {
									"path": "AldoApplicant.MobilePhone",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_xjkxmxgDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AldoRequestExpenses",
							"attributes": {
								"AldoComment": {
									"path": "AldoComment"
								},
								"AldoAmount": {
									"path": "AldoAmount"
								},
								"AldoType": {
									"path": "AldoType"
								},
								"AldoImported": {
									"path": "AldoImported"
								}
							}
						}
					},
					"ApprovalList_45dlhb7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval",
							"attributes": {
								"VisaOwner": {
									"path": "VisaOwner"
								},
								"Objective": {
									"path": "Objective"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"SetDate": {
									"path": "SetDate"
								},
								"SetBy": {
									"path": "SetBy"
								},
								"Status": {
									"path": "Status"
								}
							}
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