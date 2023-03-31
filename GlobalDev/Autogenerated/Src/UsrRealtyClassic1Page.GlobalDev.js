define("UsrRealtyClassic1Page", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "UsrRealtyClassic",
		attributes: {
			"UsrCommissionUSD": {

				//"dataValueType": Terrasoft.DataValueType.FLOAT,

				//"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,

				//"value": 0,

				dependencies: [

					{

						columns: ["UsrPriceUSD", "UsrOfferType"],

						methodName: "calculateCommission"

					}

				]//,

				//"caption": "Commission, USD"

			},

			"UsrOfferType": {

				lookupListConfig: {

					columns: ["UsrCommissionMutltplier"]

				}

			},
			"UsrManager": { 

				dataValueType: Terrasoft.DataValueType.LOOKUP, 

				lookupListConfig: { 

                    "filters": [ 

                        function() { 

                            var filterGroup = Ext.create("Terrasoft.FilterGroup"); 

							var subFilters = this.Terrasoft.createFilterGroup(); 

							subFilters.addItem(this.Terrasoft.createColumnFilterWithParameter( 

								this.Terrasoft.ComparisonType.EQUAL, "UsrParentRealty", this.get("Id"))); 

  

							var filter = Terrasoft.createExistsFilter("[UsrRealtyVisitClassic:UsrManager:Id].Id", subFilters);  

							filterGroup.add("MainFilter", filter); 

                            return filterGroup; 

                        } 

                    ] 

                } 

	    	} 

		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRealtyClassicFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRealtyClassic"
				}
			},
			"UsrSchemad677bec8Detailb36b8d9a": {
				"schemaName": "UsrRealtyVisitClassicDetailGrid",
				"entitySchemaName": "UsrRealtyVisitClassic",
				"filter": {
					"detailColumn": "UsrParentRealty",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrComment": {
				"1d41d11a-bf44-43c3-a905-0358931b0f94": {
					"uId": "1d41d11a-bf44-43c3-a905-0358931b0f94",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPriceUSD"
							},
							"rightExpression": {
								"type": 0,
								"value": 999.99,
								"dataValueType": 5
							}
						}
					]
				}
			},
			"UsrManager": {
				"a92d18d7-c9a2-4c20-a362-7b4ab9e369bd": {
					"uId": "a92d18d7-c9a2-4c20-a362-7b4ab9e369bd",
					"enabled": false,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			positiveValueValidator: function(value, column) { 
				var msg = ""; 
				if (value < 0) { 
					msg = this.get("Resources.Strings.ValueMustBeGreaterThanZero"); 
				} 
				return { 
					invalidMessage: msg 
				}; 
			}, 
			setValidationConfig: function() { 
				this.callParent(arguments); 
				this.addColumnValidator("UsrPriceUSD", this.positiveValueValidator); 
				this.addColumnValidator("UsrArea", this.positiveValueValidator); 
			}, 
			calculateCommission: function() {

				var price = this.get("UsrPriceUSD");

				if (!price) {

					price = 0;

				}

				var offerTypeObject = this.get("UsrOfferType");

				var coeff = 0;

				if (offerTypeObject) {

					coeff = offerTypeObject.UsrCommissionMutltplier;

				}

				var commission = price * coeff;

				this.set("UsrCommissionUSD", commission);

			},

			onEntityInitialized: function() {

				this.callParent(arguments);

				this.calculateCommission();

			},

			onMyButtonClick: function() {
				this.console.log("My button works!");
				this.showInformationDialog("My button works nice!");
			},
			getMyButtonEnabled: function() {
				var result = true;
			    var name = this.get("UsrName");
				if (!name) {
					result=false;
				}
				return result;
			},
			onRunWebServiceButtonClick: function() {
				var typeObject = this.get("UsrType");
				if (!typeObject) {
					return;
				}
				var typeId = typeObject.value;
				var offerTypeObject = this.get("UsrOfferType");
				if (!offerTypeObject) {
					return;
				}
				var offerTypeId = offerTypeObject.value;
				var params = {
					realtyTypeId: typeId,
					realtyOfferTypeId: offerTypeId,
					entityName: "UsrRealtyClassic"
				};				
				this.console.log("1");
				ServiceHelper.callService("RealtyService", "GetTotalAmountByTypeId", this.getWebServiceResult, params, this);
				this.console.log("2");
			},
			getWebServiceResult: function(response, success) {
				this.console.log("3");
				this.Terrasoft.showInformation("Total amount by typeId: " + response.GetTotalAmountByTypeIdResult);
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNamea9a4c79d-9226-4fcb-b9fb-622a05677b55",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT799fdaa4-21db-4e57-bbcd-40e46b0d04a1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPriceUSD",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT25c0c414-e19b-4cc0-b860-364b19a8689f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD3b9e02ee-9924-4c94-9a16-d1bd9d79a790",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCommissionUSD"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonCaption"
					},
					"click": {
						"bindTo": "onMyButtonClick"
					},
					"enabled": {
						"bindTo": "getMyButtonEnabled"
					},
					"style": "blue"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RunServiceButton",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.RunWebServiceButtonCaption"
					},
					"click": {
						"bindTo": "onRunWebServiceButtonClick"
					},
					"style": "red"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP871797c9-fd4d-47f5-a864-95c9f65050dd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPa2bb4a63-216b-4678-848d-9bde089daedb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOfferType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGee5c2f47-1c42-4bf7-bd7c-46200bf61e64",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPbf9c520f-d8eb-45b7-a097-ba29020a174e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrManager",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab2c2465e8TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab2c2465e8TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchemad677bec8Detailb36b8d9a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab2c2465e8TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
