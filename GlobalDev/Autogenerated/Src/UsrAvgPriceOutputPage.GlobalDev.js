define("UsrAvgPriceOutputPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Button-f84706e76620412582a1ed5966f5f6c8",
				"values": {
					"itemType": 5,
					"id": "c0175811-c676-4081-8b93-7875b0911abe",
					"style": "green",
					"tag": "Button1",
					"caption": {
						"bindTo": "Resources.Strings.Button1ButtonCaption"
					},
					"click": {
						"bindTo": "onSaveButtonClick"
					},
					"enabled": true
				},
				"parentName": "ProcessActionButtons",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOATc0394d0c-ba95-4bf1-8173-d23b54f5964b",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 8,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrFloat1",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING928f5509-7b6e-45b6-8239-ba92acac818a",
				"values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrString1",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
