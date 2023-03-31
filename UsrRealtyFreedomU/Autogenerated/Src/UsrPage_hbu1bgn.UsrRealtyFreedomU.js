define("UsrPage_hbu1bgn", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_bbfyf29",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_789ygs2",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_789ygs2"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_r6346cy",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_smdudsu",
					"labelPosition": "auto",
					"control": "$LookupAttribute_smdudsu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_dpqz44b",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dpqz44b_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_r6346cy",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_hz19mw1",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_vpfa9yx",
					"labelPosition": "auto",
					"control": "$LookupAttribute_vpfa9yx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_gitje1i",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gitje1i_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hz19mw1",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_s21o2az",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 10,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_dd1n95u",
					"labelPosition": "auto",
					"control": "$StringAttribute_dd1n95u"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"DateTimeAttribute_789ygs2": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrVisitDateTime"
					}
				},
				"LookupAttribute_smdudsu": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrManager"
					}
				},
				"LookupAttribute_vpfa9yx": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrPotentialCustomer"
					}
				},
				"StringAttribute_dd1n95u": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrComment"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"UsrRealtyVisitFreedomUIDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrRealtyVisitFreedomUI"
					}
				}
			},
			"primaryDataSourceName": "UsrRealtyVisitFreedomUIDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});